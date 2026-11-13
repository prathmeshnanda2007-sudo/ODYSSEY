"""Raster preprocessing and normalization module for Mars planetary data.

Handles nodata masking, radiometric percentile normalization, contrast optimization,
DEM height normalization for Three.js 3D displacement, and scientific colormapping.
Preserves geospatial integrity and authentic physical values throughout.
"""

import os
from typing import Tuple, Optional, Dict, Any
import numpy as np
import rasterio
from PIL import Image
import cv2


def normalize_imagery_array(
    arr: np.ndarray,
    nodata: Optional[float] = None,
    p_low: float = 2.0,
    p_high: float = 98.0
) -> Tuple[np.ndarray, np.ndarray]:
    """Normalize a multi-band or single-band imagery array to [0, 255] uint8 using robust percentile stretching.
    
    Args:
        arr: Input array of shape (bands, H, W) or (H, W).
        nodata: Value denoting missing or invalid sensor readings.
        p_low: Lower percentile cutoff (default 2%).
        p_high: Upper percentile cutoff (default 98%).
        
    Returns:
        Tuple of (normalized_uint8_array, valid_mask).
    """
    if arr.ndim == 2:
        arr = arr[np.newaxis, ...]  # (1, H, W)

    bands, height, width = arr.shape
    output = np.zeros((bands, height, width), dtype=np.uint8)

    # Compute valid mask
    if nodata is not None and not np.isnan(nodata):
        valid_mask = (arr != nodata) & ~np.isnan(arr) & ~np.isinf(arr)
    else:
        valid_mask = ~np.isnan(arr) & ~np.isinf(arr)

    for b in range(bands):
        band_data = arr[b].astype(np.float32)
        band_mask = valid_mask[b] if valid_mask.ndim == 3 else valid_mask[0]

        if np.any(band_mask):
            valid_pixels = band_data[band_mask]
            vmin = float(np.percentile(valid_pixels, p_low))
            vmax = float(np.percentile(valid_pixels, p_high))

            if vmax > vmin:
                clipped = np.clip(band_data, vmin, vmax)
                norm = ((clipped - vmin) / (vmax - vmin) * 255.0).astype(np.uint8)
            else:
                norm = np.zeros((height, width), dtype=np.uint8)

            norm[~band_mask] = 0
            output[b] = norm
        else:
            output[b] = np.zeros((height, width), dtype=np.uint8)

    return output, valid_mask


def normalize_dem_for_mesh(
    dem_arr: np.ndarray,
    nodata: Optional[float] = None
) -> Tuple[np.ndarray, Dict[str, float]]:
    """Normalize elevation values to [0.0, 1.0] float32 for Three.js height displacement shaders,
    preserving exact physical elevation statistics.
    
    Args:
        dem_arr: 2D array of elevation values in meters.
        nodata: Elevation nodata sentinel.
        
    Returns:
        Tuple of (normalized_float_array, elevation_statistics_dict).
    """
    if dem_arr.ndim == 3:
        dem_arr = dem_arr[0]

    dem_float = dem_arr.astype(np.float32)

    if nodata is not None and not np.isnan(nodata):
        valid = (dem_float != nodata) & ~np.isnan(dem_float) & ~np.isinf(dem_float)
    else:
        valid = ~np.isnan(dem_float) & ~np.isinf(dem_float)

    if not np.any(valid):
        return np.zeros_like(dem_float, dtype=np.float32), {
            "min_elevation_m": 0.0,
            "max_elevation_m": 0.0,
            "elevation_range_m": 0.0,
            "mean_elevation_m": 0.0,
        }

    valid_vals = dem_float[valid]
    min_elev = float(np.min(valid_vals))
    max_elev = float(np.max(valid_vals))
    mean_elev = float(np.mean(valid_vals))
    elev_range = max_elev - min_elev

    # Interpolate or fill invalid pixels with minimum elevation for smooth surface
    clean_dem = dem_float.copy()
    clean_dem[~valid] = min_elev

    if elev_range > 1e-4:
        norm_dem = ((clean_dem - min_elev) / elev_range).astype(np.float32)
    else:
        norm_dem = np.zeros_like(clean_dem, dtype=np.float32)

    stats = {
        "min_elevation_m": round(min_elev, 2),
        "max_elevation_m": round(max_elev, 2),
        "elevation_range_m": round(elev_range, 2),
        "mean_elevation_m": round(mean_elev, 2),
    }

    return norm_dem, stats


def export_visualization_preview(
    raster_path: str,
    output_png_path: str,
    file_type: str = "imagery",
    max_dimension: int = 1024
) -> Dict[str, Any]:
    """Generate an optimized web preview PNG from a GeoTIFF raster.
    
    - For imagery: Generates normalized RGB or Grayscale visual.
    - For DEM: Generates both a scientific colormap preview and elevation displacement map.
    """
    os.makedirs(os.path.dirname(output_png_path), exist_ok=True)

    with rasterio.open(raster_path) as src:
        width = src.width
        height = src.height
        nodata = src.nodata

        # Determine downsample factor to prevent memory bloat on giant Mars orbital rasters
        scale = max(1, max(width, height) // max_dimension)
        out_w = max(1, width // scale)
        out_h = max(1, height // scale)

        if file_type == "dem":
            raw_data = src.read(1, out_shape=(1, out_h, out_w))
            norm_dem, stats = normalize_dem_for_mesh(raw_data, nodata=nodata)

            # Generate scientific elevation colormap using OpenCV COLORMAP_TURBO or COLORMAP_INFERNO
            uint8_view = (norm_dem * 255.0).astype(np.uint8)
            colorized = cv2.applyColorMap(uint8_view, cv2.COLORMAP_TURBO)
            # OpenCV generates BGR, convert to RGB
            colorized_rgb = cv2.cvtColor(colorized, cv2.COLOR_BGR2RGB)
            
            img = Image.fromarray(colorized_rgb)
            img.save(output_png_path, "PNG", optimize=True)

            # Also generate a grayscale displacement heightmap PNG
            displacement_path = output_png_path.replace(".png", "_heightmap.png")
            heightmap_img = Image.fromarray(uint8_view, mode="L")
            heightmap_img.save(displacement_path, "PNG", optimize=True)

            return {
                "preview_url": os.path.basename(output_png_path),
                "heightmap_url": os.path.basename(displacement_path),
                "preview_width": out_w,
                "preview_height": out_h,
                "scale_factor": scale,
                "stats": stats,
            }

        else:
            # Optical Imagery
            bands = min(3, src.count)
            raw_data = src.read(
                indexes=list(range(1, bands + 1)),
                out_shape=(bands, out_h, out_w)
            )

            norm_data, _ = normalize_imagery_array(raw_data, nodata=nodata)

            if norm_data.shape[0] == 1:
                img = Image.fromarray(norm_data[0], mode="L")
            elif norm_data.shape[0] == 3:
                # Transpose from (3, H, W) to (H, W, 3)
                rgb = np.transpose(norm_data, (1, 2, 0))
                img = Image.fromarray(rgb, mode="RGB")
            else:
                img = Image.fromarray(norm_data[0], mode="L")

            img.save(output_png_path, "PNG", optimize=True)

            return {
                "preview_url": os.path.basename(output_png_path),
                "preview_width": out_w,
                "preview_height": out_h,
                "scale_factor": scale,
                "bands": norm_data.shape[0],
            }
