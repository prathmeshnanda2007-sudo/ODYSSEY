"""Terrain analysis interface and implementations for Mars elevation models.

Computes physical surface metrics:
- Slope (degrees) via Horn's method or finite differences.
- Aspect (azimuth direction of steepest slope).
- Terrain Ruggedness Index (TRI).
- Surface Curvature.
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, Tuple
import numpy as np
import cv2


class ITerrainAnalyzer(ABC):
    """Abstract interface for Martian terrain morphometry calculation."""

    @abstractmethod
    def compute_slope(self, dem: np.ndarray, res_x: float, res_y: float) -> np.ndarray:
        """Compute slope in degrees [0, 90]."""
        pass

    @abstractmethod
    def compute_aspect(self, dem: np.ndarray, res_x: float, res_y: float) -> np.ndarray:
        """Compute aspect azimuth in degrees [0, 360]."""
        pass

    @abstractmethod
    def compute_ruggedness(self, dem: np.ndarray, window_size: int = 3) -> np.ndarray:
        """Compute Terrain Ruggedness Index (TRI)."""
        pass

    @abstractmethod
    def analyze_terrain(self, dem: np.ndarray, res_x: float, res_y: float) -> Dict[str, Any]:
        """Perform full terrain morphometry analysis."""
        pass


class TerrainAnalyzer(ITerrainAnalyzer):
    """Standard geospatial terrain analyzer using Horn's algorithm and Riley et al. TRI."""

    def compute_slope(self, dem: np.ndarray, res_x: float, res_y: float) -> np.ndarray:
        """Calculate terrain slope in degrees using 3x3 Sobel/Horn kernels.
        
        Horn's method weights diagonals by 1 and cardinal directions by 2:
        dz/dx = ((c + 2f + i) - (a + 2d + g)) / (8 * res_x)
        dz/dy = ((g + 2h + i) - (a + 2b + c)) / (8 * res_y)
        slope = arctan(sqrt((dz/dx)^2 + (dz/dy)^2))
        """
        dem_clean = np.nan_to_num(dem, nan=0.0).astype(np.float32)

        # OpenCV Sobel with ksize=3 corresponds to Horn's 3x3 weighted kernel
        # Divide by 8 to normalize kernel weights
        grad_x = cv2.Sobel(dem_clean, cv2.CV_32F, 1, 0, ksize=3) / (8.0 * max(1e-4, abs(res_x)))
        grad_y = cv2.Sobel(dem_clean, cv2.CV_32F, 0, 1, ksize=3) / (8.0 * max(1e-4, abs(res_y)))

        rise_run = np.sqrt(grad_x**2 + grad_y**2)
        slope_rad = np.arctan(rise_run)
        slope_deg = np.degrees(slope_rad)
        return np.clip(slope_deg, 0.0, 90.0)

    def compute_aspect(self, dem: np.ndarray, res_x: float, res_y: float) -> np.ndarray:
        """Compute aspect azimuth angle in degrees [0, 360] clockwise from North."""
        dem_clean = np.nan_to_num(dem, nan=0.0).astype(np.float32)
        grad_x = cv2.Sobel(dem_clean, cv2.CV_32F, 1, 0, ksize=3) / (8.0 * max(1e-4, abs(res_x)))
        grad_y = cv2.Sobel(dem_clean, cv2.CV_32F, 0, 1, ksize=3) / (8.0 * max(1e-4, abs(res_y)))

        # Aspect is measured clockwise from North (0° = North, 90° = East, 180° = South, 270° = West)
        aspect_rad = np.arctan2(grad_x, -grad_y)
        aspect_deg = np.degrees(aspect_rad)
        aspect_deg = np.where(aspect_deg < 0, aspect_deg + 360.0, aspect_deg)
        return aspect_deg

    def compute_ruggedness(self, dem: np.ndarray, window_size: int = 3) -> np.ndarray:
        """Compute Terrain Ruggedness Index (TRI): mean elevation difference between a cell and its 8 neighbors."""
        dem_clean = np.nan_to_num(dem, nan=0.0).astype(np.float32)
        kernel = np.ones((window_size, window_size), dtype=np.float32) / (window_size**2)
        local_mean = cv2.filter2D(dem_clean, -1, kernel)
        tri = np.abs(dem_clean - local_mean)
        return tri

    def analyze_terrain(self, dem: np.ndarray, res_x: float, res_y: float) -> Dict[str, Any]:
        """Compute slope, aspect, and roughness maps, returning statistical summaries."""
        slope = self.compute_slope(dem, res_x, res_y)
        aspect = self.compute_aspect(dem, res_x, res_y)
        tri = self.compute_ruggedness(dem)

        return {
            "slope": slope,
            "aspect": aspect,
            "ruggedness": tri,
            "summary": {
                "max_slope_deg": round(float(np.max(slope)), 2),
                "mean_slope_deg": round(float(np.mean(slope)), 2),
                "pct_slope_gt_20deg": round(float(np.mean(slope > 20.0) * 100.0), 2),
                "pct_slope_gt_30deg": round(float(np.mean(slope > 30.0) * 100.0), 2),
                "max_ruggedness_m": round(float(np.max(tri)), 2),
                "mean_ruggedness_m": round(float(np.mean(tri)), 2),
            }
        }
