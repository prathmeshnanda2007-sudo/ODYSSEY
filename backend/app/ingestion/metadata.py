"""Geospatial metadata extraction module for Mars planetary rasters.

Extracts dimensions, Coordinate Reference System (CRS), geotransform affine matrix,
pixel resolution, bounding boxes, nodata values, and statistical distributions.
"""

from dataclasses import dataclass, asdict
from typing import Optional, Dict, Any
import os
import numpy as np
import rasterio
from rasterio.crs import CRS


@dataclass
class RasterBounds:
    left: float
    bottom: float
    right: float
    top: float

    @property
    def width(self) -> float:
        return abs(self.right - self.left)

    @property
    def height(self) -> float:
        return abs(self.top - self.bottom)

    @property
    def area(self) -> float:
        return self.width * self.height


@dataclass
class RasterMetadata:
    filename: str
    filepath: str
    file_type: str  # "imagery" or "dem"
    width: int
    height: int
    bands: int
    dtype: str
    crs_wkt: Optional[str]
    crs_proj4: Optional[str]
    crs_epsg: Optional[int]
    crs_name: str
    bounds: Dict[str, float]
    resolution_x: float
    resolution_y: float
    transform: list[float]  # 6 affine transform values [a, b, c, d, e, f]
    nodata: Optional[float]
    min_val: Optional[float]
    max_val: Optional[float]
    mean_val: Optional[float]
    std_val: Optional[float]
    is_mars_crs: bool

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def extract_raster_metadata(filepath: str, file_type: str = "imagery") -> RasterMetadata:
    """Read a raster file and extract comprehensive geospatial and radiometric metadata.
    
    Args:
        filepath: Absolute or relative path to the GeoTIFF raster.
        file_type: Categorization of the raster ('imagery' or 'dem').
        
    Returns:
        RasterMetadata object containing extracted specifications.
    """
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"Raster file not found: {filepath}")

    with rasterio.open(filepath) as src:
        width = src.width
        height = src.height
        bands = src.count
        dtype = str(src.dtypes[0])
        bounds = src.bounds
        res_x, res_y = src.res
        transform = list(src.transform)[:6]
        nodata = src.nodata

        # Extract CRS attributes
        crs = src.crs
        crs_wkt = crs.to_wkt() if crs else None
        crs_proj4 = crs.to_proj4() if crs else None
        crs_epsg = crs.to_epsg() if crs else None
        
        # Identify Mars CRS or arbitrary planetary CRS
        is_mars_crs = False
        crs_name = "Undefined"
        if crs:
            crs_str = (crs_wkt or "") + (crs_proj4 or "")
            if any(k in crs_str.lower() for k in ["mars", "49900", "49901", "49902", "iau_2015:499", "3396190"]):
                is_mars_crs = True
                crs_name = "Mars Planetary CRS (IAU 2000/2015)"
            elif crs_epsg:
                crs_name = f"EPSG:{crs_epsg}"
            else:
                crs_name = crs.to_string() if hasattr(crs, "to_string") else "Projected/Geographic CRS"

        # Calculate lightweight sample statistics (downsampled for massive rasters)
        step = max(1, int(np.sqrt((width * height) / (512 * 512))))
        try:
            # Read first band downsampled for fast statistical extraction
            data_sample = src.read(1, out_shape=(1, max(1, height // step), max(1, width // step)))
            
            # Mask out nodata
            if nodata is not None and not np.isnan(nodata):
                valid_mask = data_sample != nodata
            else:
                valid_mask = ~np.isnan(data_sample)

            if np.any(valid_mask):
                valid_data = data_sample[valid_mask].astype(np.float64)
                min_val = float(np.min(valid_data))
                max_val = float(np.max(valid_data))
                mean_val = float(np.mean(valid_data))
                std_val = float(np.std(valid_data))
            else:
                min_val, max_val, mean_val, std_val = None, None, None, None
        except Exception:
            min_val, max_val, mean_val, std_val = None, None, None, None

        return RasterMetadata(
            filename=os.path.basename(filepath),
            filepath=os.path.abspath(filepath),
            file_type=file_type,
            width=width,
            height=height,
            bands=bands,
            dtype=dtype,
            crs_wkt=crs_wkt,
            crs_proj4=crs_proj4,
            crs_epsg=crs_epsg,
            crs_name=crs_name,
            bounds={
                "left": float(bounds.left),
                "bottom": float(bounds.bottom),
                "right": float(bounds.right),
                "top": float(bounds.top),
            },
            resolution_x=float(res_x),
            resolution_y=float(res_y),
            transform=transform,
            nodata=float(nodata) if nodata is not None else None,
            min_val=min_val,
            max_val=max_val,
            mean_val=mean_val,
            std_val=std_val,
            is_mars_crs=is_mars_crs,
        )
