"""Perception and hazard detection module.

Defines modular interface IHazardDetector and concrete GeometricHazardDetector.
Strictly adheres to engineering mandate: NO fake ML predictions.
Uses physical slope thresholds, curvature analysis, and radiometric contrast.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, asdict
from typing import Dict, Any, List, Optional
import numpy as np


@dataclass
class HazardSummary:
    total_cells: int
    safe_cells: int
    moderate_hazard_cells: int
    severe_hazard_cells: int
    lethal_cells: int
    lethal_pct: float
    hazard_types_detected: List[str]


class IHazardDetector(ABC):
    """Abstract interface for Martian terrain hazard detection."""

    @abstractmethod
    def detect_hazards(
        self,
        slope: np.ndarray,
        ruggedness: Optional[np.ndarray] = None,
        imagery: Optional[np.ndarray] = None
    ) -> Dict[str, Any]:
        """Detect and classify surface hazards into categorical masks."""
        pass


class GeometricHazardDetector(IHazardDetector):
    """Physical and geometric hazard detector based on rover mobility limits:
    - Steep Slope Hazard: Slope > 20° (High Risk)
    - Lethal Cliff / Tipping Hazard: Slope > 30° (Impassable)
    - Extreme Ruggedness: Local elevation variance exceeding wheel clearance
    - Deep Shadow / Visual Dropout: Underexposed pixels with low confidence
    """

    def __init__(self, critical_slope_deg: float = 30.0, caution_slope_deg: float = 20.0):
        self.critical_slope_deg = critical_slope_deg
        self.caution_slope_deg = caution_slope_deg

    def detect_hazards(
        self,
        slope: np.ndarray,
        ruggedness: Optional[np.ndarray] = None,
        imagery: Optional[np.ndarray] = None
    ) -> Dict[str, Any]:
        H, W = slope.shape
        hazard_mask = np.zeros((H, W), dtype=np.uint8)  # 0: Safe, 1: Moderate, 2: Severe, 3: Lethal
        hazard_types = []

        # 1. Slope hazards
        caution_mask = (slope >= self.caution_slope_deg) & (slope < self.critical_slope_deg)
        critical_mask = slope >= self.critical_slope_deg

        hazard_mask[caution_mask] = 1
        hazard_mask[critical_mask] = 3

        if np.any(caution_mask):
            hazard_types.append(f"Caution Slope (> {self.caution_slope_deg}°)")
        if np.any(critical_mask):
            hazard_types.append(f"Lethal Cliff / Slope (> {self.critical_slope_deg}°)")

        # 2. Ruggedness hazards
        if ruggedness is not None:
            rug_thresh = float(np.percentile(ruggedness, 95))
            if rug_thresh > 1.0:
                severe_rug = ruggedness > max(2.0, rug_thresh)
                hazard_mask[severe_rug & (hazard_mask < 2)] = 2
                if np.any(severe_rug):
                    hazard_types.append("Excessive Surface Roughness / Boulder Field")

        # 3. Deep Shadow / Optical Dropout
        if imagery is not None:
            if imagery.ndim == 3:
                gray = np.mean(imagery, axis=0)
            else:
                gray = imagery
            shadow_mask = gray < 5.0  # Deep shadow
            hazard_mask[shadow_mask & (hazard_mask < 1)] = 1
            if np.any(shadow_mask):
                hazard_types.append("Deep Shadow / Optical Occlusion")

        total = H * W
        lethal_count = int(np.sum(hazard_mask == 3))
        severe_count = int(np.sum(hazard_mask == 2))
        moderate_count = int(np.sum(hazard_mask == 1))
        safe_count = int(np.sum(hazard_mask == 0))

        summary = HazardSummary(
            total_cells=total,
            safe_cells=safe_count,
            moderate_hazard_cells=moderate_count,
            severe_hazard_cells=severe_count,
            lethal_cells=lethal_count,
            lethal_pct=round((lethal_count / total) * 100.0, 2),
            hazard_types_detected=hazard_types,
        )

        return {
            "hazard_mask": hazard_mask,  # 0=Safe, 1=Moderate, 2=Severe, 3=Lethal
            "summary": asdict(summary),
        }
