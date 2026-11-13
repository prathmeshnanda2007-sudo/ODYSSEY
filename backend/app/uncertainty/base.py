"""Uncertainty estimation module for Mars terrain intelligence.

Defines IUncertaintyEstimator and GeospatialUncertaintyEstimator.
Quantifies aleatoric and epistemic confidence based on sensor shadows,
DEM interpolation variance, and proximity to nodata boundaries.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, asdict
from typing import Dict, Any, Optional
import numpy as np
import cv2


@dataclass
class UncertaintySummary:
    mean_uncertainty: float
    high_uncertainty_pct: float
    confidence_score: float  # [0.0, 1.0]
    dominant_sources: list[str]


class IUncertaintyEstimator(ABC):
    """Abstract interface for Martian terrain uncertainty estimation."""

    @abstractmethod
    def estimate_uncertainty(
        self,
        dem: np.ndarray,
        slope: np.ndarray,
        imagery: Optional[np.ndarray] = None,
        valid_mask: Optional[np.ndarray] = None
    ) -> Dict[str, Any]:
        """Produce an uncertainty map in range [0.0, 1.0] and summary metrics."""
        pass


class GeospatialUncertaintyEstimator(IUncertaintyEstimator):
    """Calculates spatial uncertainty combining:
    1. Shadow / Low-Illumination Occlusion (imagery intensity < 10)
    2. High-gradient elevation variance (DEM noise / sharp step transitions)
    3. Boundary proximity / NoData voids
    """

    def estimate_uncertainty(
        self,
        dem: np.ndarray,
        slope: np.ndarray,
        imagery: Optional[np.ndarray] = None,
        valid_mask: Optional[np.ndarray] = None
    ) -> Dict[str, Any]:
        H, W = slope.shape
        uncertainty_map = np.zeros((H, W), dtype=np.float32)
        sources = []

        # 1. Slope variance uncertainty (areas with abrupt slope fluctuations)
        slope_clean = np.nan_to_num(slope, nan=0.0).astype(np.float32)
        kernel = np.ones((5, 5), dtype=np.float32) / 25.0
        local_mean = cv2.filter2D(slope_clean, -1, kernel)
        local_var = np.abs(slope_clean - local_mean)
        norm_var = np.clip(local_var / 15.0, 0.0, 1.0)
        uncertainty_map += norm_var * 0.4
        sources.append("Slope Discontinuity / Roughness Gradient")

        # 2. Optical Shadow / Sensor Occlusion
        if imagery is not None:
            if imagery.ndim == 3:
                gray = np.mean(imagery, axis=0)
            else:
                gray = imagery
            # Deep shadows have near-zero values
            shadow_uncertainty = np.where(gray < 15.0, 0.8, 0.0).astype(np.float32)
            uncertainty_map = np.maximum(uncertainty_map, shadow_uncertainty)
            if np.any(shadow_uncertainty > 0):
                sources.append("Optical Deep Shadow Occlusion")

        # 3. Invalid / Edge boundary uncertainty
        if valid_mask is not None:
            invalid = ~valid_mask
            uncertainty_map[invalid] = 1.0
            sources.append("NoData / Data Boundary Mask")

        uncertainty_map = np.clip(uncertainty_map, 0.0, 1.0)

        mean_unc = float(np.mean(uncertainty_map))
        high_unc_pct = float(np.mean(uncertainty_map > 0.5) * 100.0)
        confidence = float(max(0.0, min(1.0, 1.0 - mean_unc)))

        summary = UncertaintySummary(
            mean_uncertainty=round(mean_unc, 3),
            high_uncertainty_pct=round(high_unc_pct, 2),
            confidence_score=round(confidence, 3),
            dominant_sources=sources,
        )

        return {
            "uncertainty_map": uncertainty_map,
            "summary": asdict(summary),
        }
