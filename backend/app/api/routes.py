"""API endpoints for planetary data ingestion, metadata extraction,
spatial compatibility validation, raster preprocessing, and terrain analysis.
"""

from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Query
from fastapi.responses import JSONResponse
import os
import shutil
import uuid
from typing import Optional, Dict, Any, List
from dataclasses import asdict
import numpy as np
import rasterio
import cv2
from PIL import Image

from backend.app.ingestion.metadata import extract_raster_metadata, RasterMetadata
from backend.app.ingestion.spatial_validator import validate_spatial_compatibility, SpatialCompatibilityReport
from backend.app.preprocessing.normalizer import export_visualization_preview
from backend.app.terrain.base import TerrainAnalyzer
from backend.app.perception.base import GeometricHazardDetector
from backend.app.costmap.base import TraversabilityCostmapGenerator
from backend.app.planning.base import AStarPlanner
from backend.app.uncertainty.base import GeospatialUncertaintyEstimator
from backend.app.science.base import GeologicalTargetEvaluator
from backend.app.ingestion.sample_generator import generate_sample_mars_datasets
from backend.app.perception.segmentation_engine import TerrainSegmentationEngine

router = APIRouter()

# In-memory session registry for ingested rasters
DATASET_REGISTRY: Dict[str, Dict[str, Any]] = {}
STATIC_OUTPUT_DIR = os.path.abspath("outputs")
os.makedirs(STATIC_OUTPUT_DIR, exist_ok=True)
SEGMENTATION_ENGINE = TerrainSegmentationEngine()


def register_raster_file(filepath: str, file_type: str, custom_id: Optional[str] = None) -> Dict[str, Any]:
    """Helper to extract metadata, generate previews, and register in session."""
    file_id = custom_id or f"ds_{uuid.uuid4().hex[:8]}"
    meta = extract_raster_metadata(filepath, file_type)

    preview_filename = f"{file_id}_{file_type}_preview.png"
    preview_output_path = os.path.join(STATIC_OUTPUT_DIR, preview_filename)
    
    preview_info = export_visualization_preview(
        raster_path=filepath,
        output_png_path=preview_output_path,
        file_type=file_type,
        max_dimension=1024
    )

    record = {
        "id": file_id,
        "filename": os.path.basename(filepath),
        "filepath": filepath,
        "file_type": file_type,
        "metadata": meta.to_dict(),
        "preview": preview_info,
        "preview_url": f"/outputs/{preview_filename}",
        "heightmap_url": f"/outputs/{preview_info.get('heightmap_url')}" if "heightmap_url" in preview_info else None,
    }
    DATASET_REGISTRY[file_id] = record
    return record


@router.get("/status")
def get_system_status() -> Dict[str, Any]:
    """Return system readiness and registered dataset counts."""
    return {
        "status": "ONLINE",
        "rover_callsign": "MARS-09 (ODYSSEY)",
        "backend": "FastAPI",
        "registered_datasets_count": len(DATASET_REGISTRY),
        "datasets": [
            {
                "id": k,
                "filename": v["filename"],
                "file_type": v["file_type"],
                "dimensions": f"{v['metadata']['width']}x{v['metadata']['height']}",
                "crs": v["metadata"]["crs_name"],
            }
            for k, v in DATASET_REGISTRY.items()
        ]
    }


@router.get("/samples")
def get_sample_datasets() -> Dict[str, Any]:
    """Load or retrieve default Mars sample datasets (Jezero crater quadrant)."""
    sample_dir = os.path.abspath("datasets/sample")
    img_sample = os.path.join(sample_dir, "mars_imagery_sample.tif")
    dem_sample = os.path.join(sample_dir, "mars_dem_sample.tif")
    dem_offset = os.path.join(sample_dir, "mars_dem_offset.tif")

    if not os.path.exists(img_sample) or not os.path.exists(dem_sample):
        generate_sample_mars_datasets(sample_dir)

    # Register samples if not already in registry
    if "sample_imagery" not in DATASET_REGISTRY:
        register_raster_file(img_sample, "imagery", "sample_imagery")
    if "sample_dem" not in DATASET_REGISTRY:
        register_raster_file(dem_sample, "dem", "sample_dem")
    if "sample_dem_offset" not in DATASET_REGISTRY:
        register_raster_file(dem_offset, "dem", "sample_dem_offset")

    return {
        "imagery": DATASET_REGISTRY["sample_imagery"],
        "dem": DATASET_REGISTRY["sample_dem"],
        "dem_offset": DATASET_REGISTRY["sample_dem_offset"],
    }


@router.post("/upload")
async def upload_raster(
    file: UploadFile = File(...),
    file_type: str = Form("imagery")  # "imagery" or "dem"
) -> Dict[str, Any]:
    """Ingest and validate an uploaded planetary GeoTIFF raster file."""
    if not file.filename.lower().endswith((".tif", ".tiff", ".geotiff")):
        raise HTTPException(status_code=400, detail="Only GeoTIFF files (.tif, .tiff) are supported.")

    upload_dir = os.path.abspath("datasets/raw")
    os.makedirs(upload_dir, exist_ok=True)

    dest_filename = f"{uuid.uuid4().hex[:6]}_{file.filename}"
    dest_path = os.path.join(upload_dir, dest_filename)

    with open(dest_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        record = register_raster_file(dest_path, file_type)
        return {
            "success": True,
            "message": f"Successfully ingested {file_type} raster: {file.filename}",
            "data": record
        }
    except Exception as e:
        if os.path.exists(dest_path):
            os.remove(dest_path)
        raise HTTPException(status_code=500, detail=f"Raster parsing error: {str(e)}")


@router.get("/metadata/{dataset_id}")
def get_metadata(dataset_id: str) -> Dict[str, Any]:
    """Retrieve full geospatial metadata for a registered dataset."""
    if dataset_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Dataset {dataset_id} not found in registry.")
    return DATASET_REGISTRY[dataset_id]


@router.post("/validate-compatibility")
def validate_compatibility(
    imagery_id: str = Form(...),
    dem_id: str = Form(...)
) -> Dict[str, Any]:
    """Validate spatial compatibility between imagery and DEM datasets."""
    if imagery_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Imagery dataset '{imagery_id}' not found.")
    if dem_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"DEM dataset '{dem_id}' not found.")

    img_meta_dict = DATASET_REGISTRY[imagery_id]["metadata"]
    dem_meta_dict = DATASET_REGISTRY[dem_id]["metadata"]

    img_meta = RasterMetadata(**img_meta_dict)
    dem_meta = RasterMetadata(**dem_meta_dict)

    report = validate_spatial_compatibility(img_meta, dem_meta)
    return {
        "success": True,
        "imagery_id": imagery_id,
        "dem_id": dem_id,
        "report": report.to_dict()
    }


@router.post("/analyze-terrain")
def analyze_terrain_endpoint(dem_id: str = Form(...)) -> Dict[str, Any]:
    """Run physical terrain morphometry (slope, aspect, TRI) on a loaded DEM."""
    if dem_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"DEM dataset '{dem_id}' not found.")

    dem_record = DATASET_REGISTRY[dem_id]
    with rasterio.open(dem_record["filepath"]) as src:
        dem_data = src.read(1)
        res_x, res_y = src.res

    analyzer = TerrainAnalyzer()
    res = analyzer.analyze_terrain(dem_data, res_x, res_y)

    # Generate slope preview image for UI layer toggle
    slope = res["slope"]
    norm_slope = np.clip(slope / 45.0 * 255.0, 0, 255).astype(np.uint8)
    slope_color = cv2.applyColorMap(norm_slope, cv2.COLORMAP_MAGMA)
    slope_rgb = cv2.cvtColor(slope_color, cv2.COLOR_BGR2RGB)
    
    slope_preview_name = f"{dem_id}_slope_preview.png"
    slope_preview_path = os.path.join(STATIC_OUTPUT_DIR, slope_preview_name)
    Image.fromarray(slope_rgb).save(slope_preview_path)

    # Detect hazards
    hazard_detector = GeometricHazardDetector()
    hazard_res = hazard_detector.detect_hazards(slope=slope, ruggedness=res["ruggedness"])

    # Generate traversability costmap & preview image
    cost_gen = TraversabilityCostmapGenerator()
    costmap = cost_gen.generate_costmap(slope=slope, hazard_mask=hazard_res["hazard_mask"], ruggedness=res["ruggedness"])
    norm_cost = np.clip((costmap - 1.0) / 10.0 * 255.0, 0, 255).astype(np.uint8)
    cost_color = cv2.applyColorMap(norm_cost, cv2.COLORMAP_TURBO)
    cost_color[costmap >= 1e5] = [20, 20, 100]
    cost_rgb = cv2.cvtColor(cost_color, cv2.COLOR_BGR2RGB)

    costmap_preview_name = f"{dem_id}_costmap_preview.png"
    costmap_preview_path = os.path.join(STATIC_OUTPUT_DIR, costmap_preview_name)
    Image.fromarray(cost_rgb).save(costmap_preview_path)

    # Uncertainty
    unc_estimator = GeospatialUncertaintyEstimator()
    unc_res = unc_estimator.estimate_uncertainty(dem=dem_data, slope=slope)

    # Science targets
    sci_evaluator = GeologicalTargetEvaluator()
    sci_targets = sci_evaluator.evaluate_targets(dem=dem_data, slope=slope)

    return {
        "dem_id": dem_id,
        "slope_preview_url": f"/outputs/{slope_preview_name}",
        "costmap_preview_url": f"/outputs/{costmap_preview_name}",
        "terrain_summary": res["summary"],
        "hazard_summary": hazard_res["summary"],
        "uncertainty_summary": unc_res["summary"],
        "science_targets": [asdict(t) for t in sci_targets],
    }


@router.post("/plan-path")
def plan_path_endpoint(
    dem_id: str = Form(...),
    start_r: int = Form(...),
    start_c: int = Form(...),
    goal_r: int = Form(...),
    goal_c: int = Form(...)
) -> Dict[str, Any]:
    """Run A* path planner on traversability cost grid derived from DEM."""
    if dem_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"DEM dataset '{dem_id}' not found.")

    dem_record = DATASET_REGISTRY[dem_id]
    with rasterio.open(dem_record["filepath"]) as src:
        dem_data = src.read(1)
        res_x, res_y = src.res

    analyzer = TerrainAnalyzer()
    slope = analyzer.compute_slope(dem_data, res_x, res_y)
    ruggedness = analyzer.compute_ruggedness(dem_data)

    detector = GeometricHazardDetector()
    hazards = detector.detect_hazards(slope=slope, ruggedness=ruggedness)

    cost_gen = TraversabilityCostmapGenerator()
    costmap = cost_gen.generate_costmap(slope=slope, hazard_mask=hazards["hazard_mask"], ruggedness=ruggedness)

    planner = AStarPlanner()
    plan_result = planner.plan(costmap, (start_r, start_c), (goal_r, goal_c))

    return {
        "success": bool(plan_result.success),
        "plan": plan_result.to_dict(),
        "start": [int(start_r), int(start_c)],
        "goal": [int(goal_r), int(goal_c)],
    }


@router.post("/segment")
def run_segmentation_endpoint(
    imagery_id: str = Form(...),
    dem_id: str = Form(...),
    mc_samples: int = Form(5)
) -> Dict[str, Any]:
    """Execute U-Net terrain segmentation with Monte Carlo Dropout uncertainty."""
    if imagery_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Imagery dataset '{imagery_id}' not found.")
    if dem_id not in DATASET_REGISTRY:
        raise HTTPException(status_code=404, detail=f"DEM dataset '{dem_id}' not found.")

    img_record = DATASET_REGISTRY[imagery_id]
    dem_record = DATASET_REGISTRY[dem_id]

    # Read imagery
    with rasterio.open(img_record["filepath"]) as src_img:
        count = min(3, src_img.count)
        imagery_data = src_img.read(list(range(1, count + 1)))

    # Read DEM
    with rasterio.open(dem_record["filepath"]) as src_dem:
        dem_data = src_dem.read(1)
        res_x, res_y = src_dem.res
        nodata = src_dem.nodata

    # Compute elevation morphometry
    from backend.app.preprocessing.normalizer import normalize_dem_for_mesh
    norm_dem, _ = normalize_dem_for_mesh(dem_data, nodata)

    analyzer = TerrainAnalyzer()
    slope = analyzer.compute_slope(dem_data, res_x, res_y)
    ruggedness = analyzer.compute_ruggedness(dem_data)

    # Run inference engine with Monte Carlo Dropout
    seg_result = SEGMENTATION_ENGINE.segment_with_uncertainty(
        imagery_rgb=imagery_data,
        dem_norm=norm_dem,
        slope_deg=slope,
        ruggedness_tri=ruggedness,
        num_mc_samples=max(1, min(20, mc_samples)),
    )

    prefix = f"{imagery_id}_{dem_id}"
    seg_file, unc_file = SEGMENTATION_ENGINE.export_segmentation_visuals(
        class_mask=seg_result["class_mask"],
        uncertainty_map=seg_result["uncertainty_map"],
        output_dir=STATIC_OUTPUT_DIR,
        prefix=prefix,
    )

    return {
        "success": True,
        "segmentation_url": f"/outputs/{seg_file}",
        "uncertainty_url": f"/outputs/{unc_file}",
        "class_distributions": seg_result["class_distributions"],
        "inference_latency_ms": seg_result["inference_latency_ms"],
        "mc_samples": seg_result["mc_samples"],
        "parameter_count": seg_result["parameter_count"],
    }


@router.get("/model-info")
def get_model_info() -> Dict[str, Any]:
    """Retrieve deep learning perception model specifications."""
    return {
        "model_architecture": "Multi-Modal Mars U-Net with Spatial & Feature Skip Connections",
        "input_channels": 6,
        "input_modalities": [
            "Band 1: Red Optical Reflectance",
            "Band 2: Green Optical Reflectance",
            "Band 3: Blue Optical Reflectance",
            "Band 4: Normalized DEM Elevation",
            "Band 5: Surface Slope Gradient",
            "Band 6: Terrain Ruggedness Index (TRI)",
        ],
        "classes": [
            {"id": 0, "name": "Safe Bedrock", "hazard_level": "Minimal", "color": "#10b981"},
            {"id": 1, "name": "Loose Sand / Dune", "hazard_level": "Moderate (Wheel Sinkage)", "color": "#f59e0b"},
            {"id": 2, "name": "Rocky Field / Boulders", "hazard_level": "Elevated (Trip Hazard)", "color": "#8b5cf6"},
            {"id": 3, "name": "Steep Hazard / Cliff", "hazard_level": "Lethal (Tipping Risk)", "color": "#ef4444"},
            {"id": 4, "name": "Shadow / Optical Dropout", "hazard_level": "Unknown / High Risk", "color": "#4b5563"},
        ],
        "uncertainty_method": "Monte Carlo Dropout (Stochastic Variational Approximation)",
        "parameter_count": sum(p.numel() for p in SEGMENTATION_ENGINE.model.parameters()),
    }

