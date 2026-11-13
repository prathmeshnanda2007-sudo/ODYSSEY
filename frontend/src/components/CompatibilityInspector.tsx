import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, ArrowRightLeft, Info, Check, X } from 'lucide-react';
import { SpatialCompatibilityReport } from '../services/api';

interface CompatibilityInspectorProps {
  report: SpatialCompatibilityReport | null;
  isValidating: boolean;
}

export const CompatibilityInspector: React.FC<CompatibilityInspectorProps> = ({ report, isValidating }) => {
  if (isValidating) {
    return (
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex items-center justify-center space-x-3 text-slate-400 text-xs font-mono">
        <span className="w-4 h-4 border-2 border-mars-500 border-t-transparent rounded-full animate-spin" />
        <span>Evaluating planetary spatial compatibility & CRS alignment...</span>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 text-center text-xs font-mono text-slate-500">
        Load both Imagery and DEM rasters to run spatial compatibility inspection.
      </div>
    );
  }

  const { is_compatible, crs_match, overlap_metrics, resolution_ratio, warnings, errors, recommendations } = report;

  return (
    <div className={`border rounded-xl p-4 space-y-3.5 transition ${
      is_compatible
        ? 'bg-mars-800/60 border-emerald-800/60'
        : 'bg-red-950/40 border-red-800/70'
    }`}>
      <div className="flex items-center justify-between border-b border-mars-700/50 pb-2.5">
        <div className="flex items-center space-x-2">
          {is_compatible ? (
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          ) : (
            <ShieldAlert className="w-5 h-5 text-red-400" />
          )}
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
            Spatial Compatibility Verification
          </h3>
        </div>
        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded font-bold ${
          is_compatible
            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            : 'bg-red-950 text-red-300 border border-red-800'
        }`}>
          {is_compatible ? 'VALIDATED COMPATIBLE' : 'INCOMPATIBILITY DETECTED'}
        </span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
        <div className="bg-black/40 rounded p-2 border border-mars-700/30">
          <span className="text-slate-400 block text-[10px]">CRS ALIGNMENT</span>
          <div className="flex items-center space-x-1.5 mt-0.5">
            {crs_match ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <X className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span className={crs_match ? 'text-emerald-300' : 'text-amber-300'}>
              {crs_match ? 'Matched' : 'Reprojection Req.'}
            </span>
          </div>
        </div>

        <div className="bg-black/40 rounded p-2 border border-mars-700/30">
          <span className="text-slate-400 block text-[10px]">SPATIAL OVERLAP</span>
          <span className="text-cyan-300 font-bold block mt-0.5">
            {overlap_metrics.imagery_coverage_pct}% / {overlap_metrics.dem_coverage_pct}%
          </span>
        </div>

        <div className="bg-black/40 rounded p-2 border border-mars-700/30">
          <span className="text-slate-400 block text-[10px]">RESOLUTION RATIO</span>
          <span className="text-slate-200 block mt-0.5">
            {resolution_ratio.toFixed(2)}x (DEM/Img)
          </span>
        </div>
      </div>

      {/* Overlap Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>Imagery Spatial Footprint Covered by DEM:</span>
          <span className="text-cyan-400">{overlap_metrics.imagery_coverage_pct}%</span>
        </div>
        <div className="w-full bg-mars-950 rounded-full h-1.5 overflow-hidden border border-mars-700/40">
          <div
            className={`h-full transition-all duration-500 ${
              overlap_metrics.imagery_coverage_pct > 80
                ? 'bg-emerald-500'
                : overlap_metrics.imagery_coverage_pct > 20
                ? 'bg-amber-500'
                : 'bg-red-500'
            }`}
            style={{ width: `${Math.min(100, overlap_metrics.imagery_coverage_pct)}%` }}
          />
        </div>
      </div>

      {/* Warnings & Errors */}
      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((err, i) => (
            <div key={i} className="text-[11px] font-mono text-red-300 flex items-start space-x-1.5 bg-red-950/60 p-2 rounded border border-red-900/60">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{err}</span>
            </div>
          ))}
        </div>
      )}

      {warnings.length > 0 && (
        <div className="space-y-1">
          {warnings.map((warn, i) => (
            <div key={i} className="text-[11px] font-mono text-amber-300 flex items-start space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-900/40">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{warn}</span>
            </div>
          ))}
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="space-y-1">
          {recommendations.map((rec, i) => (
            <div key={i} className="text-[11px] font-mono text-cyan-300 flex items-start space-x-1.5 bg-cyan-950/30 p-2 rounded border border-cyan-900/40">
              <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Rec: {rec}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
