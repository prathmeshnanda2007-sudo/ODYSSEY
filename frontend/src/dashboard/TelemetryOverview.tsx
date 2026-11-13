import React from 'react';
import {
  Compass,
  AlertOctagon,
  Flame,
  ShieldCheck,
  Sparkles,
  Play,
  CheckCircle,
  HelpCircle,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import {
  TerrainAnalysisResponse,
  PathPlanResponse,
  ScienceTarget,
} from '../services/api';

interface TelemetryOverviewProps {
  analysis: TerrainAnalysisResponse | null;
  pathPlan: PathPlanResponse | null;
  startCoords: [number, number];
  goalCoords: [number, number];
  onRunPlanner: () => void;
  onSelectTargetGoal: (coords: [number, number]) => void;
  isPlanning: boolean;
  isAnalyzing: boolean;
}

export const TelemetryOverview: React.FC<TelemetryOverviewProps> = ({
  analysis,
  pathPlan,
  startCoords,
  goalCoords,
  onRunPlanner,
  onSelectTargetGoal,
  isPlanning,
  isAnalyzing,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* 1. Terrain Morphometry Card */}
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-mars-700/50 pb-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Terrain Morphometry (Horn's Method)
            </h3>
          </div>
          {isAnalyzing && (
            <span className="text-[10px] font-mono text-amber-400 animate-pulse">Computing...</span>
          )}
        </div>

        {analysis ? (
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="bg-black/40 rounded p-2 border border-mars-700/30">
              <span className="text-slate-400 block text-[10px]">MAX SLOPE</span>
              <span className="text-rose-400 font-bold text-sm">
                {analysis.terrain_summary.max_slope_deg.toFixed(1)}°
              </span>
            </div>
            <div className="bg-black/40 rounded p-2 border border-mars-700/30">
              <span className="text-slate-400 block text-[10px]">MEAN SLOPE</span>
              <span className="text-slate-200 font-bold text-sm">
                {analysis.terrain_summary.mean_slope_deg.toFixed(1)}°
              </span>
            </div>
            <div className="bg-black/40 rounded p-2 border border-mars-700/30">
              <span className="text-slate-400 block text-[10px]">CAUTION SLOPES (&gt;20°)</span>
              <span className="text-amber-400 font-bold">
                {analysis.terrain_summary.pct_slope_gt_20deg.toFixed(1)}% area
              </span>
            </div>
            <div className="bg-black/40 rounded p-2 border border-mars-700/30">
              <span className="text-slate-400 block text-[10px]">LETHAL CLIFFS (&gt;30°)</span>
              <span className="text-red-400 font-bold">
                {analysis.terrain_summary.pct_slope_gt_30deg.toFixed(1)}% area
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-500 italic py-2 text-center">
            Run terrain analysis to compute slope & ruggedness metrics
          </div>
        )}
      </div>

      {/* 2. Physical Hazards & Uncertainty */}
      {analysis && (
        <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-mars-700/50 pb-2">
            <div className="flex items-center space-x-2">
              <AlertOctagon className="w-4 h-4 text-rose-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Hazard & Uncertainty Engine
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700 text-slate-300">
              Confidence: {(analysis.uncertainty_summary.confidence_score * 100).toFixed(0)}%
            </span>
          </div>

          <div className="space-y-2 text-[11px] font-mono">
            <div className="flex justify-between items-center bg-black/40 p-2 rounded border border-mars-700/30">
              <span className="text-slate-400">Mobility Clearance:</span>
              <span className="text-emerald-400 font-bold">
                {((analysis.hazard_summary.safe_cells / analysis.hazard_summary.total_cells) * 100).toFixed(1)}% Traversable
              </span>
            </div>

            <div className="text-[10px] text-slate-400">
              <span className="block mb-1">Detected Hazard Signatures:</span>
              <div className="flex flex-wrap gap-1">
                {analysis.hazard_summary.hazard_types_detected.map((h, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/70"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-400">
              <span className="block mb-1">Uncertainty Drivers:</span>
              <div className="flex flex-wrap gap-1">
                {analysis.uncertainty_summary.dominant_sources.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Science Targets Ranking */}
      {analysis && analysis.science_targets.length > 0 && (
        <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3">
          <div className="flex items-center space-x-2 border-b border-mars-700/50 pb-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Scientific Target Discovery
            </h3>
          </div>

          <div className="space-y-2">
            {analysis.science_targets.map((tgt) => (
              <div
                key={tgt.id}
                onClick={() => onSelectTargetGoal(tgt.coords_pixel)}
                className="bg-black/50 hover:bg-mars-700/40 cursor-pointer p-2.5 rounded-lg border border-mars-700/40 hover:border-amber-500/60 transition group space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-300 group-hover:text-amber-200">
                    {tgt.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    Priority: {tgt.overall_priority}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">{tgt.description}</p>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-mars-700/30">
                  <span>Geo: {tgt.geological_score} | Access: {tgt.accessibility_score}</span>
                  <span className="text-cyan-400 group-hover:underline">Click to Target Goal &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. A* Path Planner Control Card */}
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3">
        <div className="flex items-center space-x-2 border-b border-mars-700/50 pb-2">
          <Compass className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
            Autonomous A* Path Planner
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="bg-black/40 p-2 rounded border border-mars-700/30">
            <span className="text-slate-400 block text-[10px]">START (ROVER)</span>
            <span className="text-emerald-400 font-bold">[{startCoords[0]}, {startCoords[1]}]</span>
          </div>
          <div className="bg-black/40 p-2 rounded border border-mars-700/30">
            <span className="text-slate-400 block text-[10px]">GOAL (TARGET)</span>
            <span className="text-cyan-400 font-bold">[{goalCoords[0]}, {goalCoords[1]}]</span>
          </div>
        </div>

        <button
          onClick={onRunPlanner}
          disabled={isPlanning}
          className="w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 border border-emerald-500/50 flex items-center justify-center space-x-2 transition disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 fill-current ${isPlanning ? 'animate-spin' : ''}`} />
          <span>{isPlanning ? 'Planning Optimal Path...' : 'Compute Safe A* Path'}</span>
        </button>

        {pathPlan && (
          <div className={`p-2.5 rounded-lg text-xs font-mono border ${
            pathPlan.success
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              : 'bg-red-950/60 border-red-800 text-red-200'
          }`}>
            <div className="flex items-center space-x-1.5 font-bold mb-1">
              {pathPlan.success ? (
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertOctagon className="w-4 h-4 text-red-400" />
              )}
              <span>{pathPlan.plan.message}</span>
            </div>
            {pathPlan.success && (
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-emerald-800/50 text-[11px]">
                <div>
                  <span className="text-slate-400">Path Length: </span>
                  <span className="text-white font-bold">{pathPlan.plan.path_length_steps} steps</span>
                </div>
                <div>
                  <span className="text-slate-400">Accumulated Cost: </span>
                  <span className="text-emerald-300 font-bold">{pathPlan.plan.total_cost}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
