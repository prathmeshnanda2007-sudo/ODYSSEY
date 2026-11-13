// Extended API types and service calls for Phase 2 AI Perception & Segmentation
export interface SegmentationResult {
  success: boolean;
  segmentation_url: string;
  uncertainty_url: string;
  class_distributions: ClassDistribution[];
  inference_latency_ms: number;
  mc_samples: number;
  parameter_count: number;
}

export interface ClassDistribution {
  class_id: number;
  class_name: string;
  pixel_count: number;
  coverage_pct: number;
  color_rgb: [number, number, number];
}

export interface ModelInfo {
  model_architecture: string;
  input_channels: number;
  input_modalities: string[];
  classes: ModelClass[];
  uncertainty_method: string;
  parameter_count: number;
}

export interface ModelClass {
  id: number;
  name: string;
  hazard_level: string;
  color: string;
}

export async function runSegmentation(
  imageryId: string,
  demId: string,
  mcSamples: number = 5
): Promise<SegmentationResult> {
  const form = new FormData();
  form.append('imagery_id', imageryId);
  form.append('dem_id', demId);
  form.append('mc_samples', mcSamples.toString());

  const res = await fetch('/api/segment', { method: 'POST', body: form });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Segmentation failed' }));
    throw new Error(err.detail || 'Segmentation failed');
  }
  return res.json();
}

export async function getModelInfo(): Promise<ModelInfo> {
  const res = await fetch('/api/model-info');
  if (!res.ok) throw new Error('Failed to load model info');
  return res.json();
}
