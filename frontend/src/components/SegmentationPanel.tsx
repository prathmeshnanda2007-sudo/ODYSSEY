import React, { useState } from 'react';
import {
  Brain,
  Play,
  Layers,
  AlertTriangle,
  Cpu,
  Gauge,
} from 'lucide-react';
import { SegmentationResult } from '../services/perception';

interface SegmentationPanelProps {
  segmentationResult: SegmentationResult | null;
  isSegmenting: boolean;
  error: string | null;
  mcSamples: number;
  onMcSamplesChange: (n: number) => void;
  onRunSegmentation: () => void;
  canRun: boolean;
  activeLayer?: string;
  onSelectLayer?: (layer: 'segmentation' | 'uncertainty') => void;
}

const CLASS_METADATA = [
  { icon: '🟩', hazard: 'Minimal', label: 'Safe Bedrock' },
  { icon: '🟨', hazard: 'Moderate', label: 'Loose Sand / Dune' },
  { icon: '🟪', hazard: 'Elevated', label: 'Rocky Field / Boulders' },
  { icon: '🟥', hazard: 'Lethal', label: 'Steep Hazard / Cliff' },
  { icon: '⬛', hazard: 'Unknown', label: 'Shadow / Dropout' },
];

export const SegmentationPanel: React.FC<SegmentationPanelProps> = ({
  segmentationResult,
  isSegmenting,
  error,
  mcSamples,
  onMcSamplesChange,
  onRunSegmentation,
  canRun,
  activeLayer,
  onSelectLayer,
}) => {
  const classDistributions = segmentationResult?.class_distributions ?? [];
  const inferenceLatency = segmentationResult?.inference_latency_ms ?? null;
  const parameterCount = segmentationResult?.parameter_count ?? null;

  const totalHazardPct = classDistributions
    .filter(d => d.class_id >= 3)
    .reduce((s, d) => s + d.coverage_pct, 0);

  const safeBedrockPct = classDistributions.find(d => d.class_id === 0)?.coverage_pct ?? 0;

  return (
    <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-mars-700/50 pb-3">
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-violet-400" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
            AI Terrain Segmentation
          </h2>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 font-mono">
            MC-DROPOUT
          </span>
        </div>
        {parameterCount && (
          <span className="text-[10px] font-mono text-slate-400 flex items-center space-x-1">
            <Cpu className="w-3 h-3" />
            <span>{(parameterCount / 1000).toFixed(0)}K params</span>
          </span>
        )}
      </div>

      {/* Model Architecture Info */}
      <div className="bg-black/40 rounded-lg p-2.5 border border-mars-700/30 text-[10px] font-mono space-y-1">
        <div className="text-slate-400 font-semibold uppercase tracking-wide mb-1.5">
          Multi-Modal U-Net Architecture
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-slate-300">
          <span>Inputs: <strong className="text-cyan-400">6 channels</strong></span>
          <span>Classes: <strong className="text-violet-400">5 semantic</strong></span>
          <span className="col-span-2 text-slate-400">R, G, B + DEM height + Slope + TRI</span>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">MC Dropout Passes:</span>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min={3}
              max={15}
              step={1}
              value={mcSamples}
              onChange={e => onMcSamplesChange(Number(e.target.value))}
              className="w-20 accent-violet-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"
            />
            <span className="text-violet-300 w-5">{mcSamples}</span>
          </div>
        </div>

        <button
          onClick={onRunSegmentation}
          disabled={!canRun}
          className={`w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition border ${
            canRun
              ? 'bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 text-white border-violet-500/50 shadow-lg shadow-violet-950'
              : 'bg-mars-800 text-slate-500 border-mars-700 cursor-not-allowed'
          }`}
        >
          {isSegmenting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-violet-300 border-t-transparent rounded-full animate-spin" />
              <span>Running MC Dropout Inference...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Terrain Segmentation</span>
            </>
          )}
        </button>

        {/* Error display */}
        {error && (
          <div className="text-[10px] font-mono text-red-400 flex items-start space-x-1.5 bg-red-950/40 p-2 rounded border border-red-800/40">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {!canRun && !isSegmenting && !error && (
          <div className="text-[10px] font-mono text-amber-400 flex items-center space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-800/40">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Load both Imagery and DEM datasets to enable segmentation</span>
          </div>
        )}
      </div>

      {/* Latency + Interactive Layer Switching (shows after segmentation) */}
      {segmentationResult && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/40 rounded px-2 py-1 border border-mars-700/30">
            <span className="flex items-center space-x-1">
              <Gauge className="w-3 h-3" />
              <span>Inference Latency</span>
            </span>
            <span className={`font-bold ${
              inferenceLatency! < 500 ? 'text-emerald-400' :
              inferenceLatency! < 1500 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {inferenceLatency!.toFixed(0)} ms
            </span>
          </div>

          {/* Interactive Layer Buttons */}
          {onSelectLayer && (
            <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/40 text-xs font-mono">
              <button
                onClick={() => onSelectLayer('segmentation')}
                className={`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${
                  activeLayer === 'segmentation'
                    ? 'bg-violet-800 text-white font-bold ring-1 ring-violet-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3 h-3 text-violet-400" />
                <span>AI Seg Map</span>
              </button>
              <button
                onClick={() => onSelectLayer('uncertainty')}
                className={`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${
                  activeLayer === 'uncertainty'
                    ? 'bg-cyan-900 text-white font-bold ring-1 ring-cyan-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Gauge className="w-3 h-3 text-cyan-400" />
                <span>Epistemic σ²</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Class Coverage Distribution */}
      {classDistributions.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-mars-700/40">
            <span className="font-semibold uppercase tracking-wide">Terrain Class Coverage</span>
            <span className={`${totalHazardPct > 30 ? 'text-red-400' : totalHazardPct > 15 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {totalHazardPct.toFixed(1)}% hazardous
            </span>
          </div>

          {classDistributions.map((dist) => {
            const meta = CLASS_METADATA[dist.class_id] ?? { hazard: 'Unknown', label: dist.class_name };
            const colorStr = `rgb(${dist.color_rgb[0]}, ${dist.color_rgb[1]}, ${dist.color_rgb[2]})`;
            return (
              <div key={dist.class_id} className="space-y-0.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: colorStr }} />
                    <span className="text-slate-300">{dist.class_name}</span>
                    <span className={`px-1.5 py-0 rounded text-[9px] ${
                      meta.hazard === 'Lethal' ? 'bg-red-950 text-red-400' :
                      meta.hazard === 'Unknown' ? 'bg-slate-800 text-slate-400' :
                      meta.hazard === 'Elevated' ? 'bg-orange-950 text-orange-400' :
                      meta.hazard === 'Moderate' ? 'bg-amber-950 text-amber-400' :
                      'bg-emerald-950 text-emerald-400'
                    } border border-opacity-30`}>
                      {meta.hazard}
                    </span>
                  </div>
                  <span className="text-white font-bold">{dist.coverage_pct.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-mars-950 rounded-full h-1 overflow-hidden border border-mars-700/30">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min(100, dist.coverage_pct)}%`,
                      backgroundColor: colorStr,
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Safe Traversal Score */}
          <div className="mt-2 bg-black/40 rounded-lg p-2.5 border border-mars-700/30">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-slate-400">Safe Traversability Index</span>
              <span className={`text-xl font-bold ${
                safeBedrockPct > 60 ? 'text-emerald-400' :
                safeBedrockPct > 35 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {safeBedrockPct.toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-mars-950 rounded-full h-2 overflow-hidden mt-1.5 border border-mars-700/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400 transition-all duration-700"
                style={{ width: `${safeBedrockPct}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
