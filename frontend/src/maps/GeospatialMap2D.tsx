import React, { useState, useRef } from 'react';
import { Eye, Navigation, Target, Crosshair, Sparkles } from 'lucide-react';
import { ScienceTarget } from '../services/api';

interface GeospatialMap2DProps {
  imageryUrl?: string;
  demColormapUrl?: string;
  slopeUrl?: string;
  pathCoords: [number, number][];
  scienceTargets: ScienceTarget[];
  startCoords: [number, number];
  goalCoords: [number, number];
  onSetStart: (coords: [number, number]) => void;
  onSetGoal: (coords: [number, number]) => void;
}

export const GeospatialMap2D: React.FC<GeospatialMap2DProps> = ({
  imageryUrl,
  demColormapUrl,
  slopeUrl,
  pathCoords,
  scienceTargets,
  startCoords,
  goalCoords,
  onSetStart,
  onSetGoal,
}) => {
  const [activeLayer, setActiveLayer] = useState<'imagery' | 'dem' | 'slope'>('imagery');
  const [pointerMode, setPointerMode] = useState<'start' | 'goal'>('goal');
  const [hoverCoords, setHoverCoords] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentDisplayUrl =
    activeLayer === 'slope' && slopeUrl
      ? slopeUrl
      : activeLayer === 'dem' && demColormapUrl
      ? demColormapUrl
      : imageryUrl || demColormapUrl;

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    // Convert to 512x512 pixel coordinate space
    const col = Math.max(0, Math.min(511, Math.round(xPct * 512)));
    const row = Math.max(0, Math.min(511, Math.round(yPct * 512)));

    if (pointerMode === 'start') {
      onSetStart([row, col]);
    } else {
      onSetGoal([row, col]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    setHoverCoords({
      x: Math.round(xPct * 512),
      y: Math.round(yPct * 512),
    });
  };

  // Convert row, col in 512x512 space to percentage for SVG rendering
  const toPct = (coords: [number, number]) => ({
    x: (coords[1] / 512.0) * 100,
    y: (coords[0] / 512.0) * 100,
  });

  return (
    <div className="flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden">
      {/* Viewport Toolbar */}
      <div className="bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between">
        <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/40 text-xs font-mono">
          <button
            onClick={() => setActiveLayer('imagery')}
            disabled={!imageryUrl}
            className={`px-3 py-1 rounded transition ${
              activeLayer === 'imagery'
                ? 'bg-mars-700 text-cyan-300 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Optical Imagery
          </button>
          <button
            onClick={() => setActiveLayer('dem')}
            disabled={!demColormapUrl}
            className={`px-3 py-1 rounded transition ${
              activeLayer === 'dem'
                ? 'bg-mars-700 text-amber-300 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            DEM Colormap
          </button>
          <button
            onClick={() => setActiveLayer('slope')}
            disabled={!slopeUrl}
            className={`px-3 py-1 rounded transition ${
              activeLayer === 'slope'
                ? 'bg-mars-700 text-rose-300 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Slope Heatmap
          </button>
        </div>

        {/* Waypoint Placing Mode */}
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="text-slate-400 text-[11px]">Click Map to Set:</span>
          <button
            onClick={() => setPointerMode('start')}
            className={`px-2.5 py-0.5 rounded border transition flex items-center space-x-1 ${
              pointerMode === 'start'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-600 font-bold ring-1 ring-emerald-500'
                : 'bg-mars-900 text-slate-400 border-mars-700'
            }`}
          >
            <Navigation className="w-3 h-3 text-emerald-400" />
            <span>Start</span>
          </button>
          <button
            onClick={() => setPointerMode('goal')}
            className={`px-2.5 py-0.5 rounded border transition flex items-center space-x-1 ${
              pointerMode === 'goal'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-600 font-bold ring-1 ring-cyan-500'
                : 'bg-mars-900 text-slate-400 border-mars-700'
            }`}
          >
            <Target className="w-3 h-3 text-cyan-400" />
            <span>Goal</span>
          </button>
        </div>
      </div>

      {/* Map Viewport Canvas */}
      <div
        ref={containerRef}
        onClick={handleMapClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverCoords(null)}
        className="relative flex-1 bg-black flex items-center justify-center overflow-hidden cursor-crosshair select-none min-h-[440px]"
      >
        {currentDisplayUrl ? (
          <div className="relative w-full h-full max-w-[620px] max-h-[620px] aspect-square mx-auto">
            <img
              src={currentDisplayUrl}
              alt="Martian Terrain Layer"
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* SVG Overlay for Waypoints, Paths & Targets */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Computed A* Path Line */}
              {pathCoords.length > 1 && (
                <polyline
                  points={pathCoords
                    .map((pt) => {
                      const p = toPct(pt);
                      return `${p.x},${p.y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_4px_#10b981]"
                />
              )}

              {/* Start Point Marker */}
              {startCoords && (
                <g transform={`translate(${toPct(startCoords).x}, ${toPct(startCoords).y})`}>
                  <circle r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="0.5" className="animate-pulse" />
                  <circle r="3.5" fill="none" stroke="#10b981" strokeWidth="0.4" strokeDasharray="1 1" />
                  <text y="-3" fontSize="2.5" fill="#10b981" textAnchor="middle" fontWeight="bold">ROVER</text>
                </g>
              )}

              {/* Goal Point Marker */}
              {goalCoords && (
                <g transform={`translate(${toPct(goalCoords).x}, ${toPct(goalCoords).y})`}>
                  <circle r="2.2" fill="#00d2ff" stroke="#ffffff" strokeWidth="0.5" />
                  <circle r="4.0" fill="none" stroke="#00d2ff" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <text y="-3.5" fontSize="2.5" fill="#00d2ff" textAnchor="middle" fontWeight="bold">GOAL</text>
                </g>
              )}

              {/* Science Targets Markers */}
              {scienceTargets.map((st) => {
                const pt = toPct(st.coords_pixel);
                return (
                  <g key={st.id} transform={`translate(${pt.x}, ${pt.y})`}>
                    <polygon
                      points="0,-2.5 2.5,1.5 -2.5,1.5"
                      fill="#f59e0b"
                      stroke="#ffffff"
                      strokeWidth="0.3"
                    />
                    <text y="4" fontSize="2.0" fill="#f59e0b" textAnchor="middle">
                      {st.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        ) : (
          <div className="text-slate-500 font-mono text-xs flex flex-col items-center space-y-2">
            <Eye className="w-8 h-8 text-slate-600 animate-pulse" />
            <span>No raster layers available for 2D visualization</span>
          </div>
        )}

        {/* Coordinate HUD Overlay */}
        <div className="absolute bottom-2 left-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[11px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none">
          <div className="flex items-center space-x-1">
            <Crosshair className="w-3.5 h-3.5 text-mars-400" />
            <span>X: {hoverCoords?.x ?? '—'}</span>
            <span>Y: {hoverCoords?.y ?? '—'}</span>
          </div>
          <div className="text-emerald-400">
            START: [{startCoords[0]}, {startCoords[1]}]
          </div>
          <div className="text-cyan-400">
            GOAL: [{goalCoords[0]}, {goalCoords[1]}]
          </div>
        </div>
      </div>
    </div>
  );
};
