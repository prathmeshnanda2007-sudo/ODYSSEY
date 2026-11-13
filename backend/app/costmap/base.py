"""Traversability costmap generation module.

Defines ICostmapGenerator and TraversabilityCostmapGenerator.
Fuses physical slope penalties, surface roughness, hazard proximity inflation,
and impassable constraints into an actionable 2D cost grid.
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, Optional
import numpy as np
from scipy.ndimage import distance_transform_edt


class ICostmapGenerator(ABC):
    """Abstract interface for Martian traversability cost grid generation."""

    @abstractmethod
    def generate_costmap(
        self,
        slope: np.ndarray,
        hazard_mask: np.ndarray,
        ruggedness: Optional[np.ndarray] = None,
        inflation_radius_px: int = 3
    ) -> np.ndarray:
        """Generate a float32 traversability cost grid."""
        pass


class TraversabilityCostmapGenerator(ICostmapGenerator):
    """Generates cost map combining:
    - Base ground cost = 1.0
    - Quadratic slope penalty: (slope / 30.0)^2
    - Lethal obstacle threshold: slope >= 30.0 or hazard_mask == 3 -> cost = 1e6 (impassable)
    - Proximity safety inflation around lethal hazards using Euclidean Distance Transform
    """

    def __init__(self, lethal_cost: float = 1e6, base_cost: float = 1.0):
        self.lethal_cost = lethal_cost
        self.base_cost = base_cost

    def generate_costmap(
        self,
        slope: np.ndarray,
        hazard_mask: np.ndarray,
        ruggedness: Optional[np.ndarray] = None,
        inflation_radius_px: int = 3
    ) -> np.ndarray:
        H, W = slope.shape
        costmap = np.full((H, W), self.base_cost, dtype=np.float32)

        # 1. Slope penalty
        # Normalized slope penalty up to 30 degrees
        clipped_slope = np.clip(slope, 0.0, 30.0)
        slope_penalty = 4.0 * (clipped_slope / 30.0) ** 2
        costmap += slope_penalty

        # 2. Ruggedness penalty
        if ruggedness is not None:
            rug_norm = np.clip(ruggedness / max(1e-4, np.percentile(ruggedness, 95)), 0.0, 3.0)
            costmap += rug_norm * 2.0

        # 3. Hazard inflation (Safety buffer around lethal obstacles)
        lethal_mask = (slope >= 30.0) | (hazard_mask == 3)
        if np.any(lethal_mask):
            # Compute distance to closest lethal cell
            dist_to_lethal = distance_transform_edt(~lethal_mask)
            # Within inflation radius, apply decaying penalty
            inflated_region = (dist_to_lethal < inflation_radius_px) & (~lethal_mask)
            proximity_penalty = 5.0 * (1.0 - (dist_to_lethal[inflated_region] / float(inflation_radius_px)))
            costmap[inflated_region] += proximity_penalty

            # Set lethal cells
            costmap[lethal_mask] = self.lethal_cost

        return costmap
