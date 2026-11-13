import React, { useState } from 'react';
import {
  Map,
  Box,
  Brain,
  Columns,
  Eye,
  Gauge,
  Layers,
  Navigation,
  Target,
  Crosshair,
  Sparkles,
} from 'lucide-react';
import { ScienceTarget } from '../services/api';

interface ViewportHubProps {
  // Layer URLs
  imageryUrl?: string;
  demColormapUrl?: string;
  slopeUrl?: string;
  segmentationUrl?: string;
  uncertaintyUrl?: string;
  // Path and targets
  pathCoords: [number, number][];
  scienceTargets: ScienceTarget[];
  startCoords: [number, number];
  goalCoords: [number, number];
  onSetStart: (coords: [number, number]) => void;
  onSetGoal: (coords: [number, number]) => void;
  // 3D viewer component (passed as render prop to avoid re-importing THREE here)
  ThreeDViewer: React.ReactNode;
}

type LayerKey = 'imagery' | 'dem' | 'slope' | 'segmentation' | 'uncertainty';

export const ViewportHub: React.FC<ViewportHubProps> = ({
  imageryUrl,
  demColormapUrl,
  slopeUrl,
  segmentationUrl,
  uncertaintyUrl,
  pathCoords,
  scienceTargets,
  startCoords,
  goalCoords,
  onSetStart,
  onSetGoal,
  ThreeDViewer,
}) => {
  const [viewMode, setViewMode] = useState<'split' | '2d' | '3d'>('split');
  const [activeLayer, setActiveLayer] = useState<LayerKey>('imagery');
  const [pointerMode, setPointerMode] = useState<'start' | 'goal'>('goal');
  const [hoverCoords, setHoverCoords] = useState<{ x: number; y: number } | null>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);

  const layers: { key: LayerKey; label: string; url?: string; color: string }[] = [
    { key: 'imagery', label: 'Optical', url: imageryUrl, color: 'text-cyan-300' },
    { key: 'dem', label: 'DEM', url: demColormapUrl, color: 'text-amber-300' },
    { key: 'slope', label: 'Slope', url: slopeUrl, color: 'text-rose-300' },
    { key: 'segmentation', label: 'AI Seg', url: segmentationUrl, color: 'text-violet-300' },
    { key: 'uncertainty', label: 'Uncertainty σ²', url: uncertaintyUrl, color: 'text-cyan-300' },
  ];

  const currentUrl = layers.find(l => l.key === activeLayer)?.url;

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const col = Math.round(((e.clientX - rect.left) / rect.width) * 512);
    const row = Math.round(((e.clientY - rect.top) / rect.height) * 512);
    const clamped: [number, number] = [
      Math.max(0, Math.min(511, row)),
      Math.max(0, Math.min(511, col)),
    ];
    if (pointerMode === 'start') onSetStart(clamped);
    else onSetGoal(clamped);
  };

  const toPct = (coords: [number, number]) => ({
    x: (coords[1] / 512) * 100,
    y: (coords[0] / 512) * 100,
  });

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Toolbar Row */}
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Layer Switcher */}
        <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono overflow-x-auto">
          {layers.map(l => (
            <button
              key={l.key}
              onClick={() => l.url && setActiveLayer(l.key)}
              disabled={!l.url}
              title={!l.url ? 'Layer not yet generated' : ''}
              className={`px-2.5 py-1 rounded whitespace-nowrap transition ${
                activeLayer === l.key && l.url
                  ? `bg-mars-700 ${l.color} font-bold`
                  : l.url
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-700 cursor-not-allowed'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Waypoint Mode */}
        <div className="flex items-center space-x-2 text-[11px] font-mono">
          <span className="text-slate-500">Click to set:</span>
          <button
            onClick={() => setPointerMode('start')}
            className={`px-2.5 py-1 rounded border flex items-center space-x-1 transition ${
              pointerMode === 'start'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-700 font-bold ring-1 ring-emerald-500'
                : 'bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500'
            }`}
          >
            <Navigation className="w-3 h-3" />
            <span>Rover Start</span>
          </button>
          <button
            onClick={() => setPointerMode('goal')}
            className={`px-2.5 py-1 rounded border flex items-center space-x-1 transition ${
              pointerMode === 'goal'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-700 font-bold ring-1 ring-cyan-500'
                : 'bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500'
            }`}
          >
            <Target className="w-3 h-3" />
            <span>Mission Goal</span>
          </button>
        </div>

        {/* View Mode */}
        <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono">
          {(['split', '2d', '3d'] as const).map(m => (
            <button
              key={m}
              onClick={() => setViewMode(m)}
              className={`px-2.5 py-1 rounded flex items-center space-x-1 transition ${
                viewMode === m ? 'bg-mars-700 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {m === 'split' ? <Columns className="w-3 h-3" /> : m === '2d' ? <Map className="w-3 h-3" /> : <Box className="w-3 h-3" />}
              <span>{m === 'split' ? 'Split' : m.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Viewport Area */}
      <div className={`grid gap-3 flex-1 ${viewMode === 'split' ? 'grid-cols-2' : 'grid-cols-1'}`}>

        {/* 2D Panel */}
        {(viewMode === 'split' || viewMode === '2d') && (
          <div className="bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden flex flex-col min-h-[480px]">
            {/* Map Canvas */}
            <div
              ref={mapRef}
              onClick={handleMapClick}
              onMouseMove={e => {
                if (!mapRef.current) return;
                const r = mapRef.current.getBoundingClientRect();
                setHoverCoords({
                  x: Math.round(((e.clientX - r.left) / r.width) * 512),
                  y: Math.round(((e.clientY - r.top) / r.height) * 512),
                });
              }}
              onMouseLeave={() => setHoverCoords(null)}
              className="relative flex-1 bg-black cursor-crosshair select-none flex items-center justify-center overflow-hidden"
            >
              {currentUrl ? (
                <div className="relative w-full h-full max-w-[600px] max-h-[600px] aspect-square mx-auto">
                  <img
                    src={currentUrl}
                    alt="Martian terrain layer"
                    className="w-full h-full object-contain pointer-events-none"
                    key={currentUrl}
                  />

                  {/* SVG Path & Waypoint Overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* A* Path */}
                    {pathCoords.length > 1 && (
                      <polyline
                        points={pathCoords.map(pt => `${toPct(pt).x},${toPct(pt).y}`).join(' ')}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}

                    {/* Start */}
                    {startCoords && (() => {
                      const p = toPct(startCoords);
                      return (
                        <g transform={`translate(${p.x},${p.y})`}>
                          <circle r="2" fill="#10b981" stroke="#fff" strokeWidth="0.5" />
                          <circle r="4" fill="none" stroke="#10b981" strokeWidth="0.4" strokeDasharray="1 1" />
                          <text y="-3" fontSize="2.4" fill="#10b981" textAnchor="middle" fontWeight="bold">ROVER</text>
                        </g>
                      );
                    })()}

                    {/* Goal */}
                    {goalCoords && (() => {
                      const p = toPct(goalCoords);
                      return (
                        <g transform={`translate(${p.x},${p.y})`}>
                          <circle r="2" fill="#00d2ff" stroke="#fff" strokeWidth="0.5" />
                          <circle r="4" fill="none" stroke="#00d2ff" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                          <text y="-3.5" fontSize="2.4" fill="#00d2ff" textAnchor="middle" fontWeight="bold">GOAL</text>
                        </g>
                      );
                    })()}

                    {/* Science Targets */}
                    {scienceTargets.map(st => {
                      const p = toPct(st.coords_pixel);
                      return (
                        <g key={st.id} transform={`translate(${p.x},${p.y})`}>
                          <polygon points="0,-2.8 2.8,1.8 -2.8,1.8" fill="#f59e0b" stroke="#fff" strokeWidth="0.3" />
                          <text y="4.5" fontSize="1.9" fill="#f59e0b" textAnchor="middle">{st.id.split('-').pop()}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2 text-slate-600">
                  <Eye className="w-10 h-10" />
                  <span className="text-xs font-mono">No layer available</span>
                </div>
              )}

              {/* HUD */}
              <div className="absolute bottom-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none">
                <span className="flex items-center space-x-1">
                  <Crosshair className="w-3 h-3 text-mars-400" />
                  <span>X:{hoverCoords?.x ?? '--'} Y:{hoverCoords?.y ?? '--'}</span>
                </span>
                <span className="text-emerald-400">S:[{startCoords[0]},{startCoords[1]}]</span>
                <span className="text-cyan-400">G:[{goalCoords[0]},{goalCoords[1]}]</span>
              </div>

              {/* Active layer badge */}
              <div className="absolute top-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2 py-0.5 text-[10px] font-mono text-slate-300 pointer-events-none">
                {layers.find(l => l.key === activeLayer)?.label ?? activeLayer}
              </div>
            </div>
          </div>
        )}

        {/* 3D Panel */}
        {(viewMode === 'split' || viewMode === '3d') && (
          <div className="min-h-[480px]">
            {ThreeDViewer}
          </div>
        )}
      </div>
    </div>
  );
};
