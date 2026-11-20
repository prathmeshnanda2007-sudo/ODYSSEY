---
title: ODYSSEY Mars Rover Tactical Intelligence
emoji: 🪐
colorFrom: red
colorTo: orange
sdk: docker
app_port: 7860
pinned: false
---

# ODYSSEY: Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine

![ODYSSEY Banner](https://img.shields.io/badge/MISSION-MARS--09%20TACTICAL-red?style=for-the-badge&logo=nasa)
![Status](https://img.shields.io/badge/STATUS-OPERATIONAL-emerald?style=for-the-badge)
![IAU CRS](https://img.shields.io/badge/DATUM-IAU%202015%20MARS-blue?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/BACKEND-FastAPI%20%7C%20PyTorch-009688?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/FRONTEND-React%20%7C%20Three.js-61DAFB?style=for-the-badge&logo=react)

**ODYSSEY** is an autonomous tactical decision-support and terrain intelligence platform designed for Mars planetary rovers (MARS-09 class). It ingests planetary orbital rasters (HiRISE, CTX, HRSC, MOLA), verifies geospatial spatial compatibility under official planetary datums, computes physical terrain morphometry, runs a multi-modal Bayesian deep learning perception engine with Monte Carlo Dropout uncertainty estimation, autonomously identifies high-value geological science targets, and executes traversability-optimized A* path planning with real-time 2D and 3D terrain visualization.

---

## Table of Contents
1. [Mission Challenge & Motivation](#1-mission-challenge--motivation)
2. [Core Approach](#2-core-approach)
3. [System Architecture](#3-system-architecture)
4. [Key Subsystems & Methodologies](#4-key-subsystems--methodologies)
5. [Planetary Terrain Presets Catalog](#5-planetary-terrain-presets-catalog)
6. [Assumptions](#6-assumptions)
7. [Known Limitations & Future Work](#7-known-limitations--future-work)
8. [Installation & Execution Guide](#8-installation--execution-guide)
9. [Verification & Testing](#9-verification--testing)

---

## 1. Mission Challenge & Motivation

Operating robotic exploration rovers on Mars presents extreme tactical constraints:
- **Radio Latency:** Signal travel time between Earth and Mars ranges from 4 to 22 minutes one-way (8 to 44 minutes round-trip), rendering joystick teleoperation impossible.
- **Extreme Terrain Hazards:** Loose dune fields (wheel sinkage/entrapment), jagged basaltic boulder fields (chassis puncture/high-centering), and sheer crater rim cliffs (irreversible rollover).
- **Multi-Sensor Disparities:** Planetary imagery and Digital Elevation Models (DEMs) arrive from distinct orbital sensors with differing resolutions, bounding footprints, Coordinate Reference Systems (CRS), and sub-pixel phase offsets.
- **Scientific Value Optimization:** A successful mission must not only avoid hazards but also autonomously prioritize sites of high astrobiological and geological interest (e.g. sedimentary river delta fans, exposed crater rim stratigraphy).

ODYSSEY bridges this gap by providing an onboard/ground tactical platform that unifies multi-sensor data, extracts physical terrain metrics, estimates model uncertainty, and computes optimal trajectories.

---

## 2. Core Approach

ODYSSEY is engineered around four core tenets:

1. **Rigorous Geospatial Integrity:**
   - Adheres strictly to the IAU 2015 Mars Spheroid (`R = 3,396,190.0 m`) and Mars Equirectangular projection (`+proj=eqc ...`).
   - Enforces a pre-flight spatial compatibility inspector that tests CRS congruence, bounding box intersection percentages, resolution scale ratios, and sub-pixel affine origin phase alignment.
   - **Never assumes two planetary rasters are pre-aligned.** Resampling and spatial harmonizations are applied dynamically.

2. **Ground-Truth Physical Morphometry (No Pseudo-ML):**
   - Slope gradients are calculated using **Horn's 8-neighbor second-order finite difference method**, matching USGS planetary GIS standards.
   - Surface roughness is derived using the **Riley et al. Terrain Ruggedness Index (TRI)**.
   - Traversability costmaps synthesize non-linear slope penalties, roughness drag, and Euclidean Distance Transform (EDT) safety inflation buffers around lethal cliffs.

3. **Multi-Modal Deep Learning with Epistemic Uncertainty:**
   - A specialized **6-Channel U-Net** fuses optical reflectance ($R, G, B$) with physical priors (Normalized Elevation, Slope Gradient, TRI).
   - Utilizes **Monte Carlo Dropout (Bayesian Variational Approximation)** over stochastic forward passes to compute predictive class distributions alongside epistemic variance maps ($\sigma^2$), actively flagging unmodeled terrain hazards and deep sensor shadow voids.

4. **Guaranteed Traversability & Adaptive Planning:**
   - 8-connected grid A* path planner equipped with obstacle snapping within a 25-pixel search window.
   - Implements a two-phase search: primary pass with strict lethal avoidance ($<30^\circ$ cutoff), followed by an automatic minimum-risk corridor fallback if a continuous ridge separates coordinates, preventing planning lockups.
   - Computes elevation profiles ($\Delta z$), slope transitions, and exploration frontier graph nodes.

---

## 3. System Architecture

```
                                 PLANETARY DATASETS
                       [HiRISE / CTX Imagery]   [HRSC / MOLA DEM]
                                   │                   │
                                   ▼                   ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        BACKEND PIPELINE (FastAPI / Python)                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. INGESTION & VALIDATION ENGINE                                                       │
│    ├── Metadata Extractor (IAU 2015 Mars Datum, GSD, Affine Matrix, Bounding Box)     │
│    └── Spatial Compatibility Validator (CRS Match, Overlap %, Phase Alignment)         │
│                                                                                        │
│ 2. PHYSICAL TERRAIN ANALYSIS                                                           │
│    ├── Horn's Slope & Aspect Azimuth Calculations (Second-order finite difference)     │
│    └── Terrain Ruggedness Index (TRI) Calculation                                      │
│                                                                                        │
│ 3. PERCEPTION & UNCERTAINTY QUANTIFICATION                                             │
│    ├── Multi-Modal 6-Channel U-Net (R, G, B, DEM, Slope, TRI)                         │
│    ├── Monte Carlo Dropout Inference (Epistemic Variance σ² Estimation)                │
│    └── Geometric Hazard Engine (Mobility Clearance, Lethal Cliff Detection)            │
│                                                                                        │
│ 4. TRAVERSABILITY & PATH PLANNING                                                      │
│    ├── Costmap Generator (Quadratic Slope Penalty + EDT Safety Buffer Inflation)       │
│    └── A* Path Planner (8-Connected, Euclidean Heuristic, Snap Radius, Profile Graph) │
│                                                                                        │
│ 5. SCIENTIFIC TARGET DISCOVERY                                                         │
│    └── Crater Depression & Ridge Detection (Geological Return vs Accessibility Score)  │
└───────────────────────────────────────────────────┬────────────────────────────────────┘
                                                    │ REST API / Static Previews
                                                    ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        FRONTEND DASHBOARD (React 18 / Three.js)                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ • 2D Geospatial Viewport: Multi-layer overlay (Optical, DEM Turbo, Slope, Costmap,     │
│   AI Segmentation, Uncertainty σ²), interactive click-to-pick Start/Goal, Waypoints    │
│ • 3D Surface Model: Three.js height displacement shaders, solar lighting, orbit controls│
│ • Mission Telemetry: Real-time Horn's metrics, hazard clearance %, science target HUD  │
│ • A* Profile Graph: Interactive SVG cross-section elevation, slope, and cost chart     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Key Subsystems & Methodologies

### 4.1 Geospatial Compatibility Engine
The validator prevents spatial misalignment before running heavy fusion tasks. It calculates:
- **CRS Congruence:** Compares Proj4/WKT projection strings against the IAU 2015 Mars spheroid.
- **Bounding Box Intersection:** Computes the polygon intersection of both rasters in projected coordinates:
  $$\text{Coverage}_{\text{img}} = \frac{\text{Area}(B_{\text{img}} \cap B_{\text{dem}})}{\text{Area}(B_{\text{img}})} \times 100\%$$
- **Resolution Scale Factor:** Ratios the ground sampling distance ($GSD_{\text{DEM}} / GSD_{\text{img}}$).
- **Phase Alignment:** Measures sub-pixel offsets between pixel origins to detect whether bilinear or cubic resampling is required.

### 4.2 Physical Terrain Morphometry (Horn's Method)
Surface normal vectors and slope angles are derived using an $3 \times 3$ elevation moving kernel:
$$\frac{\partial z}{\partial x} = \frac{(e_2 + 2e_5 + e_8) - (e_0 + 2e_3 + e_6)}{8 \cdot \Delta x}$$
$$\frac{\partial z}{\partial y} = \frac{(e_6 + 2e_7 + e_8) - (e_0 + 2e_1 + e_2)}{8 \cdot \Delta y}$$
$$\text{Slope} = \arctan\left(\sqrt{\left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2}\right)$$

### 4.3 Multi-Modal Perception & Epistemic Uncertainty
The perception engine deploys a custom U-Net architecture accepting a 6-dimensional input tensor:
$$\mathbf{X} \in \mathbb{R}^{B \times 6 \times H \times W} = [R, G, B, \widetilde{\text{DEM}}, \widetilde{\text{Slope}}, \widetilde{\text{TRI}}]$$

During inference, Dropout layers ($p=0.25$) remain enabled over $N$ forward passes (Monte Carlo Dropout):
- **Predictive Mean Probability:**
  $$\mu_c(x, y) = \frac{1}{N} \sum_{i=1}^N P_i(c \mid \mathbf{X}_{x, y})$$
- **Epistemic Uncertainty ($\sigma^2$):**
  $$\sigma^2(x, y) = \frac{1}{C} \sum_{c=1}^C \frac{1}{N} \sum_{i=1}^N \left( P_i(c \mid \mathbf{X}_{x, y}) - \mu_c(x, y) \right)^2$$

Physical boundary rules are fused directly into the posterior to prevent physically impossible classifications (e.g., slopes $\ge 28^\circ$ enforce steep hazard class guarantees; optical reflectance $<6$ flags deep shadow dropout).

### 4.4 Traversability Costmap & A* Path Planning
Cost values $C(x, y)$ are constructed from:
1. Base traverse cost = $1.0$
2. Slope penalty: $4.0 \cdot \left(\frac{\min(\text{slope}, 30^\circ)}{30^\circ}\right)^2$
3. Roughness penalty: $2.0 \cdot \widetilde{\text{TRI}}$
4. Euclidean Distance Transform (EDT) safety inflation buffer ($r = 3$ px) decaying linearly toward lethal boundaries.
5. Lethal cells ($\text{slope} \ge 30^\circ$ or classified hazards) assigned $C = 10^6$.

The 8-connected grid A* algorithm guarantees admissible exploration toward the goal, generating waypoint coordinates, elevation profiles ($\Delta z$), and frontier graph nodes for telemetry display.

---

## 5. Planetary Terrain Presets Catalog

ODYSSEY incorporates a suite of 5 distinct, geologically verified Martian terrain morphologies:

| Preset Name | Region & Coordinates | Elevation Range | Geological Features |
|:---|:---|:---|:---|
| **🔴 Jezero Crater Rim & Delta** | Syrtis Major ($18.38^\circ\text{ N}, 77.58^\circ\text{ E}$) | $-2500\text{m}$ to $-2150\text{m}$ | Impact crater rim, central uplift peak, ancient river delta alluvial fan (Perseverance site). |
| **🌋 Olympus Mons Caldera** | Tharsis Montes ($18.65^\circ\text{ N}, 226.2^\circ\text{ E}$) | $+21,200\text{m}$ to $+22,800\text{m}$ | Multi-tiered collapse scarps, stepped lava terraces, cinder cones (Summit of solar system's tallest volcano). |
| **🏜️ Valles Marineris Chasma** | Coprates Chasma ($14.00^\circ\text{ S}, 295.0^\circ\text{ E}$) | $-4500\text{m}$ to $-1200\text{m}$ | Colossal rift canyon, $3.3\text{km}$ sheer vertical cliffs, landslide slump aprons, wind-sculpted canyon floor. |
| **⛰️ Gale Crater & Mount Sharp** | Aeolis Quadrangle ($5.40^\circ\text{ S}, 137.8^\circ\text{ E}$) | $-4400\text{m}$ to $-1200\text{m}$ | Central $5\text{km}$ layered sedimentary mound (Aeolis Mons), northern alluvial moat corridor (Curiosity site). |
| **〰️ Noctis Labyrinthus Dunes** | Syria Planum ($7.00^\circ\text{ S}, 260.0^\circ\text{ E}$) | $+1800\text{m}$ to $+2500\text{m}$ | Complex intersecting graben canyon networks, flat-topped plateau mesas, undulating barchan dune fields. |

---

## 6. Assumptions

1. **Geodetic Model:** All planetary rasters are assumed to reference the IAU 2015 Mars datum or provide a valid Proj4/WKT projection with a known planetary radius ($R \approx 3,396,190\text{ m}$). Non-planetary projections (e.g. WGS84 Earth) are flagged as severe errors.
2. **Kinematic Clearance (MARS-09 Specs):**
   - Rover maximum allowable static pitch/roll tilt: $30^\circ$ (exceeding this constitutes a lethal tip-over hazard).
   - Operational caution slope threshold: $20^\circ$.
   - Ground obstacle clearance: $0.45\text{ m}$ (represented via TRI thresholds and safety buffer inflation).
3. **Orbital Lighting Conditions:** Optical orthomosaics are assumed to be radiometrically calibrated (HiRISE/CTX standards) with Northwest sun illumination ($\text{azimuth} = 315^\circ$, $\text{altitude} = 45^\circ$) for hillshade alignment.
4. **Raster Co-registration:** Imagery and DEM pairs covering identical areas may have differing pixel sizes and extents; the system assumes linear or nearest-neighbor interpolation is sufficient for spatial harmonization during tensor creation.

---

## 7. Known Limitations & Future Work

1. **Sub-Surface Soil Mechanics (Regolith Bearing Capacity):**
   - *Limitation:* Orbital optical and elevation data observe only surface geometry. They cannot directly measure soil cohesion, internal friction angle, or soft dust sinkage depth without ground-penetrating radar (e.g., RIMFAX) or real-time wheel-slip torque telemetry.
   - *Mitigation:* ODYSSEY flags loose dune formations and low-reflectance areas as moderate hazards with high cost multipliers.
2. **Deep Optical Shadow Dropout:**
   - *Limitation:* Steep crater walls cast deep, high-contrast shadows during low sun angles, obscuring boulders or fractures.
   - *Mitigation:* The system detects optical dropout ($R, G, B \approx 0$) and classifies it as unknown/shadow risk, backed by high epistemic uncertainty ($\sigma^2$) output.
3. **Orbital Resolution vs Micro-Obstacles:**
   - *Limitation:* $5\text{m/px}$ to $20\text{m/px}$ orbital grids cannot resolve sub-meter ventifacts or small wheel-damaging rocks.
   - *Mitigation:* A 3-pixel safety inflation buffer is enforced around all rough surface textures. Future phases will integrate onboard rover stereo mast-cam disparity maps.
4. **Large-Scale Tile Memory:**
   - *Limitation:* Ingesting multi-gigabyte monolithic regional mosaics in-memory can exceed RAM limits.
   - *Future Work:* Integration of Cloud-Optimized GeoTIFFs (COG) with GDAL windowed reads and quadtree tile streaming.

---

## 8. Installation & Execution Guide

### Prerequisites
- Python 3.10+ (Tested on Python 3.13)
- Node.js 18+ (Tested on Node 24)
- Modern WebGL2-compatible browser (Chrome, Edge, Firefox)

### 1. Clone the Repository
```bash
git clone https://github.com/prathmeshnanda2007-sudo/ODYSSEY.git
cd ODYSSEY
```

### 2. Backend Setup
```bash
# Install Python dependencies
pip install fastapi uvicorn rasterio pillow numpy scipy opencv-python shapely networkx pytest torch

# Launch backend (Runs on http://127.0.0.1:8000)
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```
Interactive OpenAPI documentation is live at `http://127.0.0.1:8000/docs`.

### 3. Frontend Setup
```bash
# In a new terminal, navigate to the frontend directory
cd frontend

# Install Node dependencies
npm install

# Start Vite dev server (Runs on http://127.0.0.1:5173)
npm run dev
```

### 4. Unified Supervisor Server (Recommended)
Alternatively, start both frontend and backend concurrently with automated process recovery:
```bash
python dev_server.py
```

---

## 9. Verification & Testing

ODYSSEY contains an automated pytest verification suite validating planetary GeoTIFF generation, spatial compatibility checks, A* graph planning, and multi-modal tensor resampling:

```bash
# Run complete test suite
python -m pytest tests/ -v
```

### Test Coverage Highlights:
- `tests/test_ingestion.py`: Verifies IAU 2015 CRS parsing, spatial compatibility detection, and DEM offset handling.
- `tests/test_morphology_and_planner.py`: Validates all 5 planetary terrain presets, cross-scale resampling guarantees (e.g., 256×256 DEM vs 512×512 Optical), and A* traversal profile generation.

---

## License
Developed for autonomous planetary robotics research and mission planning. Conforms to NASA PDS and USGS planetary data standards.
