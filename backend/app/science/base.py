"""Science target evaluation and discovery module.

Defines IScienceEvaluator and GeologicalTargetEvaluator.
Scores candidate targets (craters, exposed bedrock, sedimentation basins)
balancing geological interest and terrain accessibility.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, asdict
from typing import List, Dict, Any, Tuple, Optional
import numpy as np
import cv2


@dataclass
class ScienceTarget:
    id: str
    name: str
    target_type: str  # e.g., "crater_depression", "bedrock_outcrop", "sediment_basin"
    coords_pixel: Tuple[int, int]  # (row, col)
    geological_score: float  # [0, 100]
    accessibility_score: float  # [0, 100]
    overall_priority: float  # [0, 100]
    description: str


class IScienceEvaluator(ABC):
    """Abstract interface for Martian science target ranking."""

    @abstractmethod
    def evaluate_targets(
        self,
        dem: np.ndarray,
        slope: np.ndarray,
        imagery: Optional[np.ndarray] = None
    ) -> List[ScienceTarget]:
        """Discover and rank candidate scientific targets."""
        pass


class GeologicalTargetEvaluator(IScienceEvaluator):
    """Discovers craters and high-value outcrops from elevation depressions and slopes."""

    def evaluate_targets(
        self,
        dem: np.ndarray,
        slope: np.ndarray,
        imagery: Optional[np.ndarray] = None
    ) -> List[ScienceTarget]:
        H, W = dem.shape
        targets: List[ScienceTarget] = []

        # Find local depressions / craters: areas where elevation is significantly below local average
        dem_clean = np.nan_to_num(dem, nan=0.0).astype(np.float32)
        local_avg = cv2.blur(dem_clean, (21, 21))
        depression_depth = local_avg - dem_clean

        # Detect candidate crater centers
        min_dep = float(np.percentile(depression_depth, 97))
        if min_dep > 2.0:
            crater_candidates = depression_depth > min_dep
            contours, _ = cv2.findContours(crater_candidates.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

            idx = 1
            for cnt in contours[:4]:  # Top candidates
                M = cv2.moments(cnt)
                if M["m00"] > 15:
                    cX = int(M["m10"] / M["m00"])
                    cY = int(M["m01"] / M["m00"])

                    local_slope = float(slope[cY, cX]) if (0 <= cY < H and 0 <= cX < W) else 15.0
                    access = max(0.0, 100.0 - (local_slope * 2.5))
                    geo_score = min(100.0, 60.0 + float(depression_depth[cY, cX]) * 4.0)
                    priority = round(0.6 * geo_score + 0.4 * access, 1)

                    targets.append(ScienceTarget(
                        id=f"SCI-CRATER-{idx}",
                        name=f"Crater Stratigraphy Alpha-{idx}",
                        target_type="crater_depression",
                        coords_pixel=(cY, cX),
                        geological_score=round(geo_score, 1),
                        accessibility_score=round(access, 1),
                        overall_priority=priority,
                        description="Exposed layered sedimentary strata at crater floor."
                    ))
                    idx += 1

        # Also search for bedrock outcrop / ridge
        ridge_candidates = (dem_clean - local_avg) > float(np.percentile(dem_clean - local_avg, 98))
        if np.any(ridge_candidates):
            contours_r, _ = cv2.findContours(ridge_candidates.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            for cnt in contours_r[:2]:
                M = cv2.moments(cnt)
                if M["m00"] > 15:
                    cX = int(M["m10"] / M["m00"])
                    cY = int(M["m01"] / M["m00"])

                    targets.append(ScienceTarget(
                        id=f"SCI-OUTCROP-1",
                        name="Promontory Outcrop Ridge",
                        target_type="bedrock_outcrop",
                        coords_pixel=(cY, cX),
                        geological_score=85.0,
                        accessibility_score=68.0,
                        overall_priority=78.2,
                        description="High-standing bedrock promontory with possible ancient volcanic basalt."
                    ))
                    break

        # Fallback if no prominent features in flat terrain
        if not targets:
            targets.append(ScienceTarget(
                id="SCI-BASELINE-1",
                name="Regolith Composition Site",
                target_type="sediment_basin",
                coords_pixel=(H // 2, W // 2),
                geological_score=70.0,
                accessibility_score=95.0,
                overall_priority=80.0,
                description="Flat regolith basin ideal for in-situ soil spectrometer analysis."
            ))

        return targets
