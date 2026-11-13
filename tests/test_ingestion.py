"""Unit tests for raster ingestion, metadata extraction, and spatial validation."""

import os
import pytest
from backend.app.ingestion.metadata import extract_raster_metadata
from backend.app.ingestion.spatial_validator import validate_spatial_compatibility
from backend.app.preprocessing.normalizer import export_visualization_preview
from backend.app.terrain.base import TerrainAnalyzer
from backend.app.perception.base import GeometricHazardDetector
from backend.app.costmap.base import TraversabilityCostmapGenerator
from backend.app.planning.base import AStarPlanner
from backend.app.uncertainty.base import GeospatialUncertaintyEstimator
from backend.app.science.base import GeologicalTargetEvaluator
import rasterio


def test_metadata_extraction():
    img_path = "datasets/sample/mars_imagery_sample.tif"
    dem_path = "datasets/sample/mars_dem_sample.tif"

    assert os.path.exists(img_path)
    assert os.path.exists(dem_path)

    img_meta = extract_raster_metadata(img_path, "imagery")
    dem_meta = extract_raster_metadata(dem_path, "dem")

    assert img_meta.width == 512
    assert img_meta.height == 512
    assert img_meta.bands == 3
    assert img_meta.is_mars_crs is True
    assert img_meta.resolution_x == 5.0

    assert dem_meta.width == 512
    assert dem_meta.height == 512
    assert dem_meta.bands == 1
    assert dem_meta.nodata == -9999.0
    assert dem_meta.is_mars_crs is True


def test_spatial_compatibility_matched():
    img_meta = extract_raster_metadata("datasets/sample/mars_imagery_sample.tif", "imagery")
    dem_meta = extract_raster_metadata("datasets/sample/mars_dem_sample.tif", "dem")

    report = validate_spatial_compatibility(img_meta, dem_meta)
    assert report.is_compatible is True
    assert report.has_overlap is True
    assert report.overlap_metrics["imagery_coverage_pct"] == 100.0
    assert report.overlap_metrics["dem_coverage_pct"] == 100.0
    assert report.resolution_ratio == 1.0


def test_spatial_compatibility_misaligned():
    img_meta = extract_raster_metadata("datasets/sample/mars_imagery_sample.tif", "imagery")
    dem_offset = extract_raster_metadata("datasets/sample/mars_dem_offset.tif", "dem")

    report = validate_spatial_compatibility(img_meta, dem_offset)
    # The offset dataset has partial overlap (~9%) and 2x resolution difference
    assert report.has_overlap is True
    assert report.overlap_metrics["imagery_coverage_pct"] < 20.0
    assert len(report.warnings) > 0


def test_preview_generation():
    img_preview = export_visualization_preview(
        "datasets/sample/mars_imagery_sample.tif",
        "outputs/preview_img.png",
        "imagery"
    )
    assert os.path.exists("outputs/preview_img.png")
    assert img_preview["preview_width"] > 0

    dem_preview = export_visualization_preview(
        "datasets/sample/mars_dem_sample.tif",
        "outputs/preview_dem.png",
        "dem"
    )
    assert os.path.exists("outputs/preview_dem.png")
    assert os.path.exists("outputs/preview_dem_heightmap.png")
    assert "stats" in dem_preview


def test_pipeline_modules():
    with rasterio.open("datasets/sample/mars_dem_sample.tif") as src:
        dem = src.read(1)
        res_x, res_y = src.res

    # 1. Terrain analysis
    analyzer = TerrainAnalyzer()
    terrain_res = analyzer.analyze_terrain(dem, res_x, res_y)
    slope = terrain_res["slope"]
    tri = terrain_res["ruggedness"]
    assert slope.shape == dem.shape

    # 2. Hazard detection (strictly geometric, no fake ML)
    detector = GeometricHazardDetector()
    hazard_res = detector.detect_hazards(slope=slope, ruggedness=tri)
    assert "hazard_mask" in hazard_res

    # 3. Costmap generation
    cost_gen = TraversabilityCostmapGenerator()
    costmap = cost_gen.generate_costmap(slope=slope, hazard_mask=hazard_res["hazard_mask"], ruggedness=tri)
    assert costmap.shape == dem.shape

    # 4. A* Path planning
    planner = AStarPlanner()
    start = (100, 100)
    goal = (400, 400)
    plan_res = planner.plan(costmap, start, goal)
    assert plan_res.success is True
    assert len(plan_res.path_coords) > 0

    # 5. Uncertainty
    estimator = GeospatialUncertaintyEstimator()
    unc_res = estimator.estimate_uncertainty(dem=dem, slope=slope)
    assert "uncertainty_map" in unc_res

    # 6. Science target evaluation
    evaluator = GeologicalTargetEvaluator()
    targets = evaluator.evaluate_targets(dem=dem, slope=slope)
    assert len(targets) > 0
