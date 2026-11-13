/**
 * ODYSSEY Planetary Intelligence API Client
 */

export interface RasterMetadata {
  filename: string;
  filepath: string;
  file_type: 'imagery' | 'dem';
  width: number;
  height: number;
  bands: number;
  dtype: string;
  crs_wkt: string | null;
  crs_proj4: string | null;
  crs_epsg: number | null;
  crs_name: string;
  bounds: {
    left: number;
    bottom: number;
    right: number;
    top: number;
  };
  resolution_x: number;
  resolution_y: number;
  transform: number[];
  nodata: number | null;
  min_val: number | null;
  max_val: number | null;
  mean_val: number | null;
  std_val: number | null;
  is_mars_crs: boolean;
}

export interface DatasetRecord {
  id: string;
  filename: string;
  filepath: string;
  file_type: 'imagery' | 'dem';
  metadata: RasterMetadata;
  preview: Record<string, any>;
  preview_url: string;
  heightmap_url?: string;
}

export interface SpatialCompatibilityReport {
  is_compatible: boolean;
  crs_match: boolean;
  imagery_crs: string;
  dem_crs: string;
  has_overlap: boolean;
  overlap_metrics: {
    intersection_bounds: {
      left: number;
      bottom: number;
      right: number;
      top: number;
    } | null;
    imagery_coverage_pct: number;
    dem_coverage_pct: number;
    is_overlapping: boolean;
  };
  resolution_ratio: number;
  pixel_grid_aligned: boolean;
  warnings: string[];
  errors: string[];
  recommendations: string[];
}

export interface TerrainSummary {
  max_slope_deg: number;
  mean_slope_deg: number;
  pct_slope_gt_20deg: number;
  pct_slope_gt_30deg: number;
  max_ruggedness_m: number;
  mean_ruggedness_m: number;
}

export interface HazardSummary {
  total_cells: number;
  safe_cells: number;
  moderate_hazard_cells: number;
  severe_hazard_cells: number;
  lethal_cells: number;
  lethal_pct: number;
  hazard_types_detected: string[];
}

export interface UncertaintySummary {
  mean_uncertainty: number;
  high_uncertainty_pct: number;
  confidence_score: number;
  dominant_sources: string[];
}

export interface ScienceTarget {
  id: string;
  name: string;
  target_type: string;
  coords_pixel: [number, number];
  geological_score: number;
  accessibility_score: number;
  overall_priority: number;
  description: string;
}

export interface TerrainAnalysisResponse {
  dem_id: string;
  slope_preview_url: string;
  costmap_preview_url?: string;
  terrain_summary: TerrainSummary;
  hazard_summary: HazardSummary;
  uncertainty_summary: UncertaintySummary;
  science_targets: ScienceTarget[];
}

export interface PathPlanResponse {
  success: boolean;
  plan: {
    success: boolean;
    path_coords: [number, number][];
    path_length_steps: number;
    total_cost: number;
    message: string;
  };
  start: [number, number];
  goal: [number, number];
}

const API_BASE = '/api';

export async function getSystemStatus(): Promise<any> {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error('Failed to fetch system status');
  return res.json();
}

export async function getSampleDatasets(): Promise<{
  imagery: DatasetRecord;
  dem: DatasetRecord;
  dem_offset: DatasetRecord;
}> {
  const res = await fetch(`${API_BASE}/samples`);
  if (!res.ok) throw new Error('Failed to fetch sample datasets');
  return res.json();
}

export async function uploadRasterFile(file: File, fileType: 'imagery' | 'dem'): Promise<DatasetRecord> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('file_type', fileType);

  const res = await fetch(`${API_BASE}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Upload failed' }));
    throw new Error(err.detail || 'Upload failed');
  }

  const json = await res.json();
  return json.data;
}

export async function validateCompatibility(imageryId: string, demId: string): Promise<SpatialCompatibilityReport> {
  const formData = new FormData();
  formData.append('imagery_id', imageryId);
  formData.append('dem_id', demId);

  const res = await fetch(`${API_BASE}/validate-compatibility`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Validation failed' }));
    throw new Error(err.detail || 'Validation failed');
  }

  const json = await res.json();
  return json.report;
}

export async function analyzeTerrain(demId: string): Promise<TerrainAnalysisResponse> {
  const formData = new FormData();
  formData.append('dem_id', demId);

  const res = await fetch(`${API_BASE}/analyze-terrain`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Terrain analysis failed' }));
    throw new Error(err.detail || 'Terrain analysis failed');
  }

  return res.json();
}

export async function planPath(
  demId: string,
  startR: number,
  startC: number,
  goalR: number,
  goalC: number
): Promise<PathPlanResponse> {
  const formData = new FormData();
  formData.append('dem_id', demId);
  formData.append('start_r', startR.toString());
  formData.append('start_c', startC.toString());
  formData.append('goal_r', goalR.toString());
  formData.append('goal_c', goalC.toString());

  const res = await fetch(`${API_BASE}/plan-path`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Path planning failed' }));
    throw new Error(err.detail || 'Path planning failed');
  }

  return res.json();
}
