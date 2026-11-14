"""Comprehensive Martian GeoTIFF sample generator.

Generates georeferenced Martian GeoTIFF datasets conforming to IAU Mars 2015 CRS,
incorporating real texture patterns from Kaggle Mars terrain chips and elevation
topographies across multiple distinct planetary landforms:
1. Jezero Crater & River Delta (Perseverance Landing Site)
2. Olympus Mons Volcanic Caldera (Shield Volcano Summit & Collapse Scarps)
3. Valles Marineris Chasma (Grand Rift Canyon & Sheer Cliffs)
4. Gale Crater & Aeolis Mons / Mount Sharp (Curiosity Rover Exploration Site)
5. Noctis Labyrinthus Dunes & Mesas (Intersecting Graben Valleys & Dune Fields)
"""

import os
import math
import shutil
from typing import Tuple, Dict, Any, List, Optional
import numpy as np
import rasterio
from rasterio.transform import from_origin
from rasterio.crs import CRS
from PIL import Image

MARS_IAU_PROJ4 = "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs"
R_MARS = 3396190.0

KAGGLE_DIR = r"C:\Users\priya\.cache\kagglehub\datasets\aumthaker\mars-terrain-images\versions\1\Auburn_1"


def _load_texture_chip(category: str, size: int) -> Optional[np.ndarray]:
    """Helper to fetch a real texture chip from the Kaggle dataset if available."""
    cat_dir = os.path.join(KAGGLE_DIR, category)
    if os.path.exists(cat_dir):
        for f in os.listdir(cat_dir):
            if f.lower().endswith((".jpg", ".png", ".jpeg")):
                try:
                    p = os.path.join(cat_dir, f)
                    img = Image.open(p).convert("RGB").resize((size, size))
                    return np.array(img, dtype=np.float32) / 255.0
                except Exception:
                    pass
    return None


def _compute_hillshade(elevation: np.ndarray, res: float) -> np.ndarray:
    """Compute normalized hillshade lighting for natural planetary surface relief."""
    dz_dx, dz_dy = np.gradient(elevation, res)
    sun_azimuth = np.radians(315.0)  # NW illumination
    sun_altitude = np.radians(45.0)
    shaded = np.sin(sun_altitude) - (dz_dx * np.cos(sun_azimuth) + dz_dy * np.sin(sun_azimuth))
    s_min, s_max = float(np.min(shaded)), float(np.max(shaded))
    if s_max > s_min:
        return (shaded - s_min) / (s_max - s_min)
    return np.full_like(shaded, 0.5)


def _blend_imagery(
    shaded: np.ndarray,
    texture: Optional[np.ndarray] = None,
    tint: Tuple[float, float, float] = (210.0, 120.0, 70.0)
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Blend lighting hillshade with surface texture chip and authentic Mars ochre palette."""
    if texture is not None:
        r = np.clip((texture[:, :, 0] * 0.65 + shaded * 0.55) * 255.0, 0, 255).astype(np.uint8)
        g = np.clip((texture[:, :, 1] * 0.50 + shaded * 0.40) * 255.0, 0, 255).astype(np.uint8)
        b = np.clip((texture[:, :, 2] * 0.35 + shaded * 0.25) * 255.0, 0, 255).astype(np.uint8)
    else:
        r = np.clip(shaded * tint[0] + 30.0, 0, 255).astype(np.uint8)
        g = np.clip(shaded * tint[1] + 15.0, 0, 255).astype(np.uint8)
        b = np.clip(shaded * tint[2] + 10.0, 0, 255).astype(np.uint8)
    return r, g, b


def generate_terrain_pair(
    terrain_id: str,
    output_dir: str,
    size: int = 512
) -> Tuple[str, str]:
    """Generate georeferenced DEM and Optical GeoTIFF pair for a specific planetary morphology."""
    os.makedirs(output_dir, exist_ok=True)
    crs = CRS.from_proj4(MARS_IAU_PROJ4)
    y_idx, x_idx = np.mgrid[0:size, 0:size]
    center_y, center_x = size // 2, size // 2
    r_center = np.sqrt((x_idx - center_x) ** 2 + (y_idx - center_y) ** 2)
    np.random.seed(abs(hash(terrain_id)) % (2**31))

    if terrain_id == "jezero":
        # 1. Jezero Crater Rim & Sedimentary Delta (Perseverance Site)
        # Lat: 18.38° N, Lon: 77.58° E, Res: 5m/px, Base elevation: -2500m
        lat, lon, res = 18.38, 77.58, 5.0
        rim = 260.0 * np.exp(-((r_center - 145.0) / 28.0) ** 2)
        floor = -360.0 / (1.0 + np.exp((r_center - 120.0) / 16.0))
        peak = 130.0 * np.exp(-(r_center / 22.0) ** 2)
        # River inlet delta fan on western rim
        delta_dist = np.sqrt((x_idx - 130) ** 2 + (y_idx - 256) ** 2)
        delta_fan = 90.0 * np.exp(-(delta_dist / 40.0) ** 2) * (x_idx >= 120)
        noise = np.sin(x_idx / 11.0) * np.cos(y_idx / 11.0) * 14.0 + np.random.normal(0, 2.5, (size, size))
        elevation = (-2500.0 + floor + rim + peak + delta_fan + noise).astype(np.float32)
        texture = _load_texture_chip("crater", size)
        tint = (215.0, 125.0, 75.0)

    elif terrain_id == "olympus":
        # 2. Olympus Mons Volcanic Caldera (Shield Volcano Summit)
        # Lat: 18.65° N, Lon: 226.2° E, Res: 10m/px, Base elevation: +21,200m
        lat, lon, res = 18.65, 226.2, 10.0
        # Multi-ring nested collapse calderas
        outer_scarp = -750.0 / (1.0 + np.exp(-(r_center - 190.0) / 12.0))
        inner_scarp = -600.0 / (1.0 + np.exp(-(r_center - 100.0) / 8.0))
        # Volcanic lava terraces & subtle domes
        lava_terraces = 60.0 * np.cos(r_center / 18.0) * (r_center < 180)
        cinder_cone = 110.0 * np.exp(-((x_idx - 320) ** 2 + (y_idx - 210) ** 2) / (25.0 ** 2))
        noise = np.sin(x_idx / 16.0) * np.sin(y_idx / 16.0) * 18.0 + np.random.normal(0, 3.0, (size, size))
        elevation = (22000.0 + outer_scarp + inner_scarp + lava_terraces + cinder_cone + noise).astype(np.float32)
        texture = _load_texture_chip("impact ejecta", size)
        tint = (195.0, 110.0, 65.0)

    elif terrain_id == "valles":
        # 3. Valles Marineris Rift Canyon & Chasma
        # Lat: -14.0° S, Lon: 295.0° E, Res: 8m/px, Base elevation: -1200m plateau
        lat, lon, res = -14.0, 295.0, 8.0
        # East-west trending giant rift chasma
        # Y center is canyon floor, North and South are high plateaus
        canyon_profile = 2200.0 / (1.0 + np.exp(-(np.abs(y_idx - center_y) - 100.0) / 18.0))
        # Landslide debris aprons along northern cliff
        slump_debris = 350.0 * np.exp(-((y_idx - 160) ** 2 + (x_idx - 260) ** 2) / (45.0 ** 2))
        # Canyon floor dunes & ridges
        floor_ridges = 45.0 * np.sin(x_idx / 14.0) * (np.abs(y_idx - center_y) < 90)
        noise = np.random.normal(0, 4.0, (size, size))
        elevation = (-3500.0 + canyon_profile + slump_debris + floor_ridges + noise).astype(np.float32)
        texture = _load_texture_chip("slope streak", size)
        tint = (225.0, 115.0, 60.0)

    elif terrain_id == "gale":
        # 4. Gale Crater & Mount Sharp (Aeolis Mons)
        # Lat: -5.4° S, Lon: 137.8° E, Res: 6m/px, Base elevation: -4500m
        lat, lon, res = -5.4, 137.8, 6.0
        # Southern central layered mountain rising 3.5km above crater floor
        mount_sharp = 3200.0 * np.exp(-(((x_idx - 256) / 130.0) ** 2 + ((y_idx - 320) / 100.0) ** 2))
        dist_sharp = np.sqrt((x_idx - 256.0)**2 + (y_idx - 320.0)**2)
        strata = 80.0 * np.cos(dist_sharp / 12.0)
        # Northern crater floor moat (Peace Vallis alluvial corridor)
        moat_depth = -300.0 * np.exp(-(((x_idx - 256) / 180.0) ** 2 + ((y_idx - 130) / 60.0) ** 2))
        noise = np.sin(x_idx / 10.0) * 12.0 + np.random.normal(0, 3.0, (size, size))
        elevation = (-4400.0 + mount_sharp + strata + moat_depth + noise).astype(np.float32)
        texture = _load_texture_chip("other", size)
        tint = (210.0, 130.0, 80.0)

    else:  # "dunes" or default
        # 5. Noctis Labyrinthus Linear Dunes & Graben Mesas
        # Lat: -7.0° S, Lon: 260.0° E, Res: 5m/px, Base elevation: +1800m
        lat, lon, res = -7.0, 260.0, 5.0
        # Intersecting graben troughs forming elevated plateau mesas
        trough_x = 350.0 * (np.sin(x_idx / 45.0) ** 2)
        trough_y = 350.0 * (np.cos(y_idx / 55.0) ** 2)
        # Transverse barchan dune ripples inside the depressions
        dune_field = 35.0 * np.sin((x_idx * 1.5 + y_idx) / 8.0) * ((trough_x + trough_y) < 250)
        noise = np.random.normal(0, 3.5, (size, size))
        elevation = (1800.0 + trough_x + trough_y + dune_field + noise).astype(np.float32)
        texture = _load_texture_chip("bright dune", size)
        if texture is None:
            texture = _load_texture_chip("dark dune", size)
        tint = (230.0, 140.0, 85.0)

    # Calculate origin in IAU 2015 equirectangular projection
    origin_x = R_MARS * np.radians(lon)
    origin_y = R_MARS * np.radians(lat)
    transform = from_origin(origin_x, origin_y, res, res)

    # 1. Write DEM GeoTIFF
    dem_filename = f"mars_{terrain_id}_dem.tif"
    dem_path = os.path.join(output_dir, dem_filename)
    with rasterio.open(
        dem_path,
        "w",
        driver="GTiff",
        height=size,
        width=size,
        count=1,
        dtype="float32",
        crs=crs,
        transform=transform,
        nodata=-9999.0,
    ) as dst:
        dst.write(elevation, 1)

    # 2. Write Optical Imagery GeoTIFF
    img_filename = f"mars_{terrain_id}_img.tif"
    img_path = os.path.join(output_dir, img_filename)
    shaded = _compute_hillshade(elevation, res)
    r_band, g_band, b_band = _blend_imagery(shaded, texture, tint)

    with rasterio.open(
        img_path,
        "w",
        driver="GTiff",
        height=size,
        width=size,
        count=3,
        dtype="uint8",
        crs=crs,
        transform=transform,
        nodata=0,
    ) as dst:
        dst.write(r_band, 1)
        dst.write(g_band, 2)
        dst.write(b_band, 3)

    return img_path, dem_path


def generate_all_mars_presets(output_dir: str = "datasets/sample") -> Dict[str, Dict[str, str]]:
    """Generate all 5 planetary terrain presets and return their file paths."""
    presets = ["jezero", "olympus", "valles", "gale", "dunes"]
    results = {}
    for pid in presets:
        img_path, dem_path = generate_terrain_pair(pid, output_dir)
        results[pid] = {
            "imagery": img_path,
            "dem": dem_path,
        }

    # Generate standard sample aliases for backward compatibility
    jezero_img = results["jezero"]["imagery"]
    jezero_dem = results["jezero"]["dem"]

    std_img = os.path.join(output_dir, "mars_imagery_sample.tif")
    std_dem = os.path.join(output_dir, "mars_dem_sample.tif")
    dem_offset = os.path.join(output_dir, "mars_dem_offset.tif")

    if not os.path.exists(std_img):
        shutil.copyfile(jezero_img, std_img)
    if not os.path.exists(std_dem):
        shutil.copyfile(jezero_dem, std_dem)

    # Create offset DEM if missing
    if not os.path.exists(dem_offset):
        with rasterio.open(std_dem) as src:
            dem_data = src.read(1)
            crs = src.crs
            res = src.res[0]
            bounds = src.bounds

        offset_transform = from_origin(
            bounds.left + 512 * res * 0.7,
            bounds.top - 512 * res * 0.7,
            res * 2.0,
            res * 2.0
        )
        with rasterio.open(
            dem_offset,
            "w",
            driver="GTiff",
            height=256,
            width=256,
            count=1,
            dtype="float32",
            crs=crs,
            transform=offset_transform,
            nodata=-9999.0,
        ) as dst:
            dst.write(dem_data[::2, ::2], 1)

    return results


def generate_sample_mars_datasets(
    output_dir: str = "datasets/sample",
    size: int = 512
) -> Tuple[str, str, str]:
    """Backward-compatible function called by server startup."""
    presets = generate_all_mars_presets(output_dir)
    return (
        os.path.join(output_dir, "mars_imagery_sample.tif"),
        os.path.join(output_dir, "mars_dem_sample.tif"),
        os.path.join(output_dir, "mars_dem_offset.tif")
    )


if __name__ == "__main__":
    generate_all_mars_presets()
    print("Successfully generated all Martian terrain presets!")
