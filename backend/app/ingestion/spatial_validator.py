"""Spatial compatibility validation module for Mars planetary datasets.

Validates geospatial alignment, coordinate reference systems, bounding box overlap,
and resolution ratios between imagery rasters and Digital Elevation Models (DEMs).
NEVER assumes two rasters are pre-aligned.
"""

from dataclasses import dataclass, asdict
from typing import Optional, Dict, Any, List
import rasterio
from rasterio.warp import transform_bounds
from backend.app.ingestion.metadata import RasterMetadata


@dataclass
class OverlapMetrics:
    intersection_bounds: Optional[Dict[str, float]]
    imagery_coverage_pct: float
    dem_coverage_pct: float
    is_overlapping: bool


@dataclass
class SpatialCompatibilityReport:
    is_compatible: bool
    crs_match: bool
    imagery_crs: str
    dem_crs: str
    has_overlap: bool
    overlap_metrics: Dict[str, Any]
    resolution_ratio: float  # dem_res / imagery_res
    pixel_grid_aligned: bool
    warnings: List[str]
    errors: List[str]
    recommendations: List[str]

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def calculate_bounding_box_overlap(
    bounds_a: Dict[str, float],
    bounds_b: Dict[str, float]
) -> OverlapMetrics:
    """Calculate the geometric intersection and overlap percentages of two bounding boxes in the same CRS."""
    left = max(bounds_a["left"], bounds_b["left"])
    bottom = max(bounds_a["bottom"], bounds_b["bottom"])
    right = min(bounds_a["right"], bounds_b["right"])
    top = min(bounds_a["top"], bounds_b["top"])

    if left >= right or bottom >= top:
        return OverlapMetrics(
            intersection_bounds=None,
            imagery_coverage_pct=0.0,
            dem_coverage_pct=0.0,
            is_overlapping=False,
        )

    intersection_area = (right - left) * (top - bottom)
    area_a = max(1e-9, (bounds_a["right"] - bounds_a["left"]) * (bounds_a["top"] - bounds_a["bottom"]))
    area_b = max(1e-9, (bounds_b["right"] - bounds_b["left"]) * (bounds_b["top"] - bounds_b["bottom"]))

    pct_a = min(100.0, max(0.0, (intersection_area / area_a) * 100.0))
    pct_b = min(100.0, max(0.0, (intersection_area / area_b) * 100.0))

    return OverlapMetrics(
        intersection_bounds={
            "left": round(left, 6),
            "bottom": round(bottom, 6),
            "right": round(right, 6),
            "top": round(top, 6),
        },
        imagery_coverage_pct=round(pct_a, 2),
        dem_coverage_pct=round(pct_b, 2),
        is_overlapping=True,
    )


def validate_spatial_compatibility(
    imagery_meta: RasterMetadata,
    dem_meta: RasterMetadata
) -> SpatialCompatibilityReport:
    """Validate spatial compatibility between imagery and DEM rasters.
    
    Checks:
    - Coordinate Reference System congruence or reprojectability.
    - Geometric intersection and coverage percentage.
    - Resolution scale difference.
    - Sub-pixel alignment / origin phase.
    
    Args:
        imagery_meta: Metadata of the optical imagery.
        dem_meta: Metadata of the elevation raster.
        
    Returns:
        Comprehensive SpatialCompatibilityReport.
    """
    errors: List[str] = []
    warnings: List[str] = []
    recommendations: List[str] = []

    # 1. CRS Validation
    crs_match = False
    if imagery_meta.crs_wkt and dem_meta.crs_wkt:
        crs_match = (imagery_meta.crs_wkt == dem_meta.crs_wkt) or (
            imagery_meta.crs_epsg and imagery_meta.crs_epsg == dem_meta.crs_epsg
        )
    elif not imagery_meta.crs_wkt and not dem_meta.crs_wkt:
        # Both unprojected local coordinates
        crs_match = True
        warnings.append("Both rasters lack formal CRS headers; evaluating bounds in local coordinate space.")
    else:
        errors.append("One raster defines a spatial CRS while the other does not.")

    # 2. Overlap Computation (with reprojection if necessary)
    img_bounds = imagery_meta.bounds
    dem_bounds = dem_meta.bounds

    if not crs_match and imagery_meta.crs_wkt and dem_meta.crs_wkt:
        warnings.append(f"CRS mismatch detected: Imagery is '{imagery_meta.crs_name}' while DEM is '{dem_meta.crs_name}'. Reprojection is required before fusion.")
        try:
            # Transform DEM bounds into imagery CRS for geometric intersection
            with rasterio.open(imagery_meta.filepath) as img_src, rasterio.open(dem_meta.filepath) as dem_src:
                reprojected_dem_bounds = transform_bounds(
                    dem_src.crs, img_src.crs,
                    dem_bounds["left"], dem_bounds["bottom"], dem_bounds["right"], dem_bounds["top"]
                )
                dem_bounds = {
                    "left": reprojected_dem_bounds[0],
                    "bottom": reprojected_dem_bounds[1],
                    "right": reprojected_dem_bounds[2],
                    "top": reprojected_dem_bounds[3],
                }
        except Exception as e:
            errors.append(f"Unable to reproject bounds across distinct CRS: {str(e)}")

    overlap = calculate_bounding_box_overlap(img_bounds, dem_bounds)

    if not overlap.is_overlapping:
        errors.append("Rasters do not overlap spatially. No traversability or hazard fusion possible.")
        recommendations.append("Ensure both imagery and DEM correspond to the same target quadrant on Mars.")
    elif overlap.imagery_coverage_pct < 20.0 or overlap.dem_coverage_pct < 20.0:
        warnings.append(
            f"Marginal spatial overlap detected (Imagery coverage: {overlap.imagery_coverage_pct}%, "
            f"DEM coverage: {overlap.dem_coverage_pct}%). Path planning will be restricted to the intersection area."
        )

    # 3. Resolution Analysis
    avg_img_res = (abs(imagery_meta.resolution_x) + abs(imagery_meta.resolution_y)) / 2.0
    avg_dem_res = (abs(dem_meta.resolution_x) + abs(dem_meta.resolution_y)) / 2.0
    res_ratio = avg_dem_res / max(1e-9, avg_img_res)

    if res_ratio > 30.0:
        warnings.append(
            f"High resolution disparity: DEM is {res_ratio:.1f}x coarser than imagery. "
            "Fine-scale obstacle detection (e.g., small boulders) must rely on optical imagery or elevation interpolation."
        )
        recommendations.append("Apply bicubic interpolation or super-resolution on DEM during cost-grid generation.")
    elif res_ratio < 0.1:
        warnings.append(f"Imagery is significantly coarser than DEM ({1.0/res_ratio:.1f}x).")

    # 4. Pixel Grid Alignment Check (affine phase alignment)
    # Check if bounds left/top modulo resolution match
    grid_aligned = False
    if crs_match and overlap.is_overlapping:
        dx = abs(imagery_meta.bounds["left"] - dem_meta.bounds["left"])
        dy = abs(imagery_meta.bounds["top"] - dem_meta.bounds["top"])
        x_phase = dx % avg_img_res
        y_phase = dy % avg_img_res
        if (x_phase < 1e-4 or abs(x_phase - avg_img_res) < 1e-4) and (y_phase < 1e-4 or abs(y_phase - avg_img_res) < 1e-4):
            grid_aligned = True
        else:
            warnings.append("Pixel grids are not co-registered (different pixel origin phase). Resampling to a unified grid is required during fusion.")
            recommendations.append("Co-register rasters to a common grid using bilinear/cubic warp.")

    is_compatible = len(errors) == 0 and overlap.is_overlapping

    return SpatialCompatibilityReport(
        is_compatible=is_compatible,
        crs_match=crs_match,
        imagery_crs=imagery_meta.crs_name,
        dem_crs=dem_meta.crs_name,
        has_overlap=overlap.is_overlapping,
        overlap_metrics=asdict(overlap),
        resolution_ratio=round(res_ratio, 2),
        pixel_grid_aligned=grid_aligned,
        warnings=warnings,
        errors=errors,
        recommendations=recommendations,
    )
