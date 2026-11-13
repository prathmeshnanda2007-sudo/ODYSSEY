"""Sample Mars GeoTIFF generator.

Generates georeferenced Martian GeoTIFF datasets conforming to IAU Mars 2015 CRS,
incorporating real texture patterns from Kaggle Mars terrain chips and elevation
profiles simulating Jezero Crater / Gale Crater topography.
"""

import os
from typing import Tuple
import numpy as np
import rasterio
from rasterio.transform import from_origin
from rasterio.crs import CRS
from PIL import Image


MARS_IAU_PROJ4 = "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R=3396190 +units=m +no_defs"


def generate_sample_mars_datasets(
    output_dir: str = "datasets/sample",
    size: int = 512
) -> Tuple[str, str, str]:
    """Create sample Mars GeoTIFFs:
    1. mars_imagery_sample.tif: Optical orthomosaic of Jezero Crater quadrant
    2. mars_dem_sample.tif: Matching DEM in meters relative to datum
    3. mars_dem_offset.tif: Partially overlapping DEM to test spatial incompatibility warning
    """
    os.makedirs(output_dir, exist_ok=True)

    img_path = os.path.join(output_dir, "mars_imagery_sample.tif")
    dem_path = os.path.join(output_dir, "mars_dem_sample.tif")
    dem_offset_path = os.path.join(output_dir, "mars_dem_offset.tif")

    # Jezero Crater approximate coordinates: 18.38° N, 77.58° E
    # In equirectangular meters: x = R * lon_rad, y = R * lat_rad
    R = 3396190.0
    lon_rad = np.radians(77.58)
    lat_rad = np.radians(18.38)
    origin_x = R * lon_rad
    origin_y = R * lat_rad

    res = 5.0  # 5.0 meters per pixel
    crs = CRS.from_proj4(MARS_IAU_PROJ4)

    # 1. Synthesize realistic Martian topography (elevation in meters)
    # Base crater depression + central uplift + rim + rough regolith noise
    y_idx, x_idx = np.mgrid[0:size, 0:size]
    center_y, center_x = size // 2, size // 2
    r = np.sqrt((x_idx - center_x) ** 2 + (y_idx - center_y) ** 2)

    # Crater rim at radius = 140, floor at radius < 120
    crater_radius = 140.0
    rim = 250.0 * np.exp(-((r - crater_radius) / 25.0) ** 2)
    floor_depth = -350.0 / (1.0 + np.exp((r - 120.0) / 15.0))
    central_peak = 120.0 * np.exp(-(r / 20.0) ** 2)
    
    # Perlin-like pseudo roughness
    np.random.seed(42)
    noise = np.sin(x_idx / 12.0) * np.cos(y_idx / 12.0) * 15.0 + np.random.normal(0, 3.0, (size, size))
    slope_gradient = (y_idx - x_idx) * 0.15  # Regional slope

    # Datum baseline elevation for Jezero crater is approx -2500 meters
    elevation = (-2500.0 + floor_depth + rim + central_peak + noise + slope_gradient).astype(np.float32)

    # Transform for primary imagery and DEM
    transform = from_origin(origin_x, origin_y, res, res)

    # Write DEM GeoTIFF
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

    # 2. Synthesize Optical Imagery (3 bands RGB/False color)
    # Combine hillshade shading with Martian iron-oxide regolith reddish-orange reflectance
    dz_dx, dz_dy = np.gradient(elevation, res)
    sun_azimuth = np.radians(315.0)  # NW sun
    sun_altitude = np.radians(45.0)
    
    shaded = np.sin(sun_altitude) - (dz_dx * np.cos(sun_azimuth) + dz_dy * np.sin(sun_azimuth))
    shaded = (shaded - np.min(shaded)) / (np.max(shaded) - np.min(shaded) + 1e-5)

    # Check if we can blend real Kaggle Mars texture chip
    kaggle_dir = r"C:\Users\priya\.cache\kagglehub\datasets\aumthaker\mars-terrain-images\versions\1"
    texture_tile = None
    if os.path.exists(kaggle_dir):
        # Look for a jpg file
        for root, _, files in os.walk(kaggle_dir):
            for f in files:
                if f.endswith(".jpg"):
                    try:
                        chip = Image.open(os.path.join(root, f)).convert("RGB").resize((size, size))
                        texture_tile = np.array(chip, dtype=np.float32) / 255.0
                        break
                    except Exception:
                        pass
            if texture_tile is not None:
                break

    if texture_tile is not None:
        # Blend Mars crater texture with realistic lighting
        red_band = np.clip((texture_tile[:, :, 0] * 0.7 + shaded * 0.5) * 255.0, 0, 255).astype(np.uint8)
        green_band = np.clip((texture_tile[:, :, 1] * 0.5 + shaded * 0.35) * 255.0, 0, 255).astype(np.uint8)
        blue_band = np.clip((texture_tile[:, :, 2] * 0.3 + shaded * 0.2) * 255.0, 0, 255).astype(np.uint8)
    else:
        # Realistic Mars Palette (Hue ~ 15-20°, Red-Orange ochre)
        red_band = np.clip(shaded * 220.0 + 30.0, 0, 255).astype(np.uint8)
        green_band = np.clip(shaded * 130.0 + 15.0, 0, 255).astype(np.uint8)
        blue_band = np.clip(shaded * 80.0 + 10.0, 0, 255).astype(np.uint8)

    # Write Imagery GeoTIFF
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
        dst.write(red_band, 1)
        dst.write(green_band, 2)
        dst.write(blue_band, 3)

    # 3. Create offset DEM (shifted by 1.8km to demonstrate spatial misalignment detection)
    offset_x = origin_x + (size * res * 0.7)  # 70% shift
    offset_y = origin_y - (size * res * 0.7)
    offset_transform = from_origin(offset_x, offset_y, res * 2.0, res * 2.0)  # Also 2x resolution difference

    with rasterio.open(
        dem_offset_path,
        "w",
        driver="GTiff",
        height=size // 2,
        width=size // 2,
        count=1,
        dtype="float32",
        crs=crs,
        transform=offset_transform,
        nodata=-9999.0,
    ) as dst:
        dst.write(elevation[::2, ::2], 1)

    return img_path, dem_path, dem_offset_path


if __name__ == "__main__":
    generate_sample_mars_datasets()
    print("Generated Mars sample GeoTIFF datasets.")
