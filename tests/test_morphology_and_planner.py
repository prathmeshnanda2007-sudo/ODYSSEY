import os
import pytest
import numpy as np
from backend.app.ingestion.sample_generator import generate_all_mars_presets
from backend.app.api.routes import get_sample_datasets, load_terrain_preset, plan_path_endpoint, run_segmentation_endpoint

def test_terrain_presets_and_astar_graph():
    sample_dir = os.path.abspath("datasets/sample")
    presets = generate_all_mars_presets(sample_dir)
    all_8_presets = ["jezero", "olympus", "valles", "gale", "dunes", "chaos", "korolev", "rille"]
    for pid in all_8_presets:
        assert pid in presets, f"Preset {pid} missing from generated presets"

    # Prime samples
    get_sample_datasets()

    for pid in all_8_presets:
        rec = load_terrain_preset(pid)
        assert rec["success"] is True
        dem_id = rec["dem"]["id"]

        # Run path planner
        plan = plan_path_endpoint(dem_id, 80, 80, 200, 220)
        assert plan["success"] is True
        assert len(plan["plan"]["path_coords"]) > 0
        assert len(plan["plan"]["elevation_profile"]) > 0
        assert len(plan["plan"]["slope_profile"]) > 0
        assert len(plan["plan"]["cost_profile"]) > 0
        assert len(plan["plan"]["explored_nodes"]) > 0
        assert plan["plan"]["total_cost"] > 0.0

def test_segmentation_resampling_guarantee():
    get_sample_datasets()
    # Test offset DEM (256x256) vs Optical (512x512)
    res = run_segmentation_endpoint("sample_imagery", "sample_dem_offset", 3)
    assert res["success"] is True
    assert "segmentation_url" in res
    assert "uncertainty_url" in res
