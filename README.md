# ODYSSEY: Autonomous Mars Rover Navigation & Planetary Terrain Intelligence System

ODYSSEY is an autonomous onboard/ground decision support and navigation platform for Mars exploration rovers (MARS-09). It ingests planetary orbital rasters (HiRISE, CTX, MOLA), verifies geospatial spatial compatibility, computes physical surface morphometry (Horn's slope, aspect, TRI), estimates terrain uncertainty, discovers high-value science targets, and computes safe traversability-optimized paths.

---

## System Architecture

```
ODYSSEY/
│
├── frontend/                     # React 18 + TypeScript + Tailwind CSS + Three.js
│   ├── src/
│   │   ├── components/           # Header, Ingestion Panel, Compatibility Inspector
│   │   ├── dashboard/            # Telemetry Overview, Hazards, Science Targets
│   │   ├── maps/                 # 2D Multi-layer Canvas & 3D Three.js Planetary Mesh Viewer
│   │   ├── pages/                # MissionDashboard layout
│   │   └── services/             # API client & TypeScript interfaces
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                      # Python + FastAPI + Rasterio + GDAL/NumPy/OpenCV
│   ├── app/
│   │   ├── api/                  # Ingestion, validation, terrain, path planning routes
│   │   ├── ingestion/            # Metadata extraction, spatial compatibility validator
│   │   ├── preprocessing/        # Radiometric percentile normalization, heightmaps
│   │   ├── terrain/              # Horn's slope, aspect azimuth, and TRI ruggedness
│   │   ├── perception/           # Geometric hazard detection (NO fake ML)
│   │   ├── costmap/              # Traversability cost synthesis & hazard inflation
│   │   ├── planning/             # 8-connected grid A* path planner
│   │   ├── uncertainty/          # Sensor shadow, slope variance, and void estimation
│   │   └── science/              # Automated crater & bedrock outcrop discovery
│   └── main.py                   # FastAPI server entry point
│
├── datasets/
│   ├── raw/                      # User-uploaded GeoTIFF rasters
│   ├── processed/                # Normalized tiles and outputs
│   └── sample/                   # Pre-calibrated Mars IAU 2015 GeoTIFF test pairs
│
├── tests/
│   └── test_ingestion.py         # Pytest suite for ingestion and pipeline modules
│
├── models/                       # Model weight registry for future ML milestone
├── outputs/                      # Generated visualization previews and heightmaps
├── docs/                         # Specifications and architectural documentation
└── README.md
```

---

## Milestone 1 Core Features

### 1. Planetary GeoTIFF Ingestion & Metadata Extraction
- Ingests single-band and multi-band GeoTIFFs (optical imagery and Digital Elevation Models).
- Extracts Coordinate Reference System (CRS) including planetary IAU spheroids (`IAU_2015:49900` / Equirectangular Mars projection).
- Extracts dimensions, pixel resolution ($m/pixel$), 6-parameter affine geotransform, spatial bounding boxes, nodata sentinels, and physical elevation ranges.

### 2. Spatial Compatibility Verification
- **Never assumes two rasters are aligned.**
- Evaluates CRS congruence and flags reprojection requirements.
- Computes exact geometric bounding box intersection and coverage percentage relative to both imagery and DEM footprints.
- Evaluates resolution mismatch scale (e.g. 0.25m imagery vs 20m DEM).
- Inspects sub-pixel affine origin phase alignment and emits actionable warnings.

### 3. Preprocessing & Normalization
- Masks out NoData sentinels (e.g., `-9999.0`, `NaN`, `0`).
- Applies radiometric percentile stretching ($2\%$ to $98\%$) to mitigate Mars atmospheric dust haze and specular sensor glints.
- Generates 8-bit visual previews (RGB and Grayscale) and normalized $[0.0, 1.0]$ displacement heightmaps for Three.js shaders.

### 4. Interactive 2D & 3D Visualization
- **2D Geospatial Viewport:**
  - Multi-layer canvas switcher: Optical Imagery, DEM Turbo Colormap, Slope Heatmap.
  - Interactive click-to-pick Start (Rover) and Goal (Target) coordinates.
  - Live coordinate crosshair HUD ($X, Y$) and SVG path/waypoint overlay.
- **3D Three.js Planetary Surface Mesh Viewer:**
  - Dynamic 3D elevation displacement driven by authentic DEM heightmaps.
  - Realistic Mars Northwest solar illumination and ambient fill light.
  - Interactive OrbitControls (Left Drag: Rotate, Right Drag: Pan, Wheel: Zoom).
  - Dynamic elevation exaggeration slider ($0.5\times$ to $4.0\times$) and wireframe toggle.
  - 3D navigational path ribbon floating above the terrain.

### 5. Modular Interfaces & Pure Physical Calculations
- **Terrain Morphometry:** Horn's slope formula, aspect azimuth, and Riley et al. Terrain Ruggedness Index (TRI).
- **Geometric Hazard Engine:** Explicitly avoids fake ML predictions. Evaluates mobility limits (caution slope $>20^\circ$, lethal cliff $>30^\circ$, boulder roughness).
- **Traversability Costmap:** Quadratic slope penalty with Euclidean Distance Transform safety inflation around lethal hazards.
- **A\* Path Planning:** 8-connected grid navigation with admissible Euclidean heuristic avoiding lethal obstacles.
- **Uncertainty Quantification:** Captures deep shadow occlusion, slope discontinuity variance, and border proximity.
- **Science Target Ranking:** Autonomous crater depression and outcrop ridge scoring balancing geological return vs terrain accessibility.

---

## Running the Application

### Prerequisites
- Python 3.10+ (Tested on Python 3.13)
- Node.js 18+ (Tested on Node 24)

### 1. Backend Server Setup
```bash
# Navigate to project root
cd c:\ODYSSEY

# Install Python requirements
pip install fastapi uvicorn rasterio pillow numpy scipy opencv-python shapely networkx pytest

# Start FastAPI server (runs on port 8000)
uvicorn backend.main:app --host 127.0.0.1 --port 8000
```
Backend API documentation is available at `http://127.0.0.1:8000/docs`.

### 2. Frontend Web Dashboard
```bash
# In a new terminal, navigate to frontend
cd c:\ODYSSEY\frontend

# Install dependencies
npm install

# Start Vite dev server (runs on port 5173)
npm run dev
```
Open `http://127.0.0.1:5173` in your browser.

### 3. Automated Test Suite
```bash
# Run pytest verification suite
python -m pytest tests/test_ingestion.py -v
```

---

## Real Planetary Dataset Ingestion
To download real Mars HiRISE terrain chips directly into the workspace:
```python
import kagglehub
path = kagglehub.dataset_download("aumthaker/mars-terrain-images")
print("Path to dataset files:", path)
```
The application comes pre-packaged with sample Jezero Crater quadrant GeoTIFF pairs in `datasets/sample/` that immediately load upon launch.
