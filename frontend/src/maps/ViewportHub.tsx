import React, { useState, useRef } from 'react';
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
  Shield,
  Activity,
} from 'lucide-react';
import { ScienceTarget } from '../services/api';

export type LayerKey = 'imagery' | 'dem' | 'slope' | 'costmap' | 'segmentation' | 'uncertainty';

interface ViewportHubProps {
  // Layer URLs
  imageryUrl?: string;
  demColormapUrl?: string;
  slopeUrl?: string;
  costmapUrl?: string;
  segmentationUrl?: string;
  uncertaintyUrl?: string;
  // Active layer control
  activeLayer?: LayerKey;
  onSelectLayer?: (layer: LayerKey) => void;
  // Path and targets
  pathCoords: [number, number][];
  scienceTargets: ScienceTarget[];
  startCoords: [number, number];
  goalCoords: [number, number];
  onSetStart: (coords: [number, number]) => void;
  onSetGoal: (coords: [number, number]) => void;
  // 3D viewer component
  ThreeDViewer: React.ReactNode;
}

export const ViewportHub: React.FC<ViewportHubProps> = ({
  imageryUrl,
  demColormapUrl,
  slopeUrl,
  costmapUrl,
  segmentationUrl,
  uncertaintyUrl,
  activeLayer: externalActiveLayer,
  onSelectLayer: externalOnSelectLayer,
  pathCoords,
  scienceTargets,
  startCoords,
  goalCoords,
  onSetStart,
  onSetGoal,
  ThreeDViewer,
}) => {
  const [internalActiveLayer, setInternalActiveLayer] = useState<LayerKey>('imagery');
  const activeLayer = externalActiveLayer ?? internalActiveLayer;
  const setActiveLayer = externalOnSelectLayer ?? setInternalActiveLayer;

  const [viewMode, setViewMode] = useState<'split' | '2d' | '3d'>('split');
  const [pointerMode, setPointerMode] = useState<'start' | 'goal'>('goal');
  const [hoverCoords, setHoverCoords] = useState<{ x: number; y: number } | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const layers: { key: LayerKey; label: string; url?: string; color: string }[] = [
    { key: 'imagery', label: 'Optical', url: imageryUrl, color: 'text-cyan-300' },
    { key: 'dem', label: 'DEM', url: demColormapUrl, color: 'text-amber-300' },
    { key: 'slope', label: 'Slope', url: slopeUrl, color: 'text-rose-300' },
    { key: 'costmap', label: 'Costmap', url: costmapUrl, color: 'text-emerald-300' },
    { key: 'segmentation', label: 'AI Seg', url: segmentationUrl, color: 'text-violet-300' },
    { key: 'uncertainty', label: 'Uncertainty σ²', url: uncertaintyUrl, color: 'text-cyan-300' },
  ];

  const currentUrl = layers.find(l => l.key === activeLayer)?.url || imageryUrl || demColormapUrl;

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const col = Math.round(((e.clientX - rect.left) / rect.width) * 512);
    const row = Math.round(((e.clientY - rect.top) / rect.height) * 512);
    const clamped: [number, number] = [
      Math.max(0, Math.min(511, row)),
      Math.max(0, Math.min(511, col)),
    ];
    if (pointerMode === 'start') onSetStart(clamped);
    else onSetGoal(clamped);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const col = Math.round(((e.clientX - rect.left) / rect.width) * 512);
    const row = Math.round(((e.clientY - rect.top) / rect.height) * 512);
    setHoverCoords({
      x: Math.max(0, Math.min(511, col)),
      y: Math.max(0, Math.min(511, row)),
    });
  };

  const toPct = (coords: [number, number]) => ({
    x: (coords[1] / 512.0) * 100,
    y: (coords[0] / 512.0) * 100,
  });

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Toolbar Row */}
      <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl px-3 py-2 flex items-center justify-between gap-2 flex-wrap">
        {/* Layer Switcher */}
        <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono">
          {layers.map(l => (
            <button
              key={l.key}
              onClick={() => l.url && setActiveLayer(l.key)}
              disabled={!l.url}
              title={!l.url ? 'Layer not yet generated' : `Switch to ${l.label} layer`}
              className={`px-2 py-0.5 rounded whitespace-nowrap transition ${
                activeLayer === l.key && l.url
                  ? `bg-mars-700 ${l.color} font-bold ring-1 ring-mars-500`
                  : l.url
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-mars-800/50'
                  : 'text-slate-600 cursor-not-allowed opacity-40'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Waypoint Click Mode */}
        <div className="flex items-center space-x-1.5 text-[11px] font-mono">
          <span className="text-slate-500 text-[10px] hidden sm:inline">Click to set:</span>
          <button
            onClick={() => setPointerMode('start')}
            className={`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${
              pointerMode === 'start'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-700 font-bold ring-1 ring-emerald-500'
                : 'bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500'
            }`}
          >
            <Navigation className="w-3 h-3 text-emerald-400" />
            <span>Start</span>
          </button>
          <button
            onClick={() => setPointerMode('goal')}
            className={`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${
              pointerMode === 'goal'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-700 font-bold ring-1 ring-cyan-500'
                : 'bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500'
            }`}
          >
            <Target className="w-3 h-3 text-cyan-400" />
            <span>Goal</span>
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono">
          {(['split', '2d', '3d'] as const).map(m => (
            <button
              key={m}
              onClick={() => setViewMode(m)}
              className={`px-2 py-0.5 rounded flex items-center space-x-1 transition ${
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
      <div className={`grid gap-3 flex-1 ${viewMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>

        {/* 2D Panel */}
        {(viewMode === 'split' || viewMode === '2d') && (
          <div className="bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden flex flex-col min-h-[480px]">
            {/* Header info */}
            <div className="bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-2 text-slate-300">
                <Map className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white">2D TACTICAL ORBITAL MAP</span>
                <span className="text-[10px] text-cyan-400 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/60 uppercase">
                  {activeLayer}
                </span>
              </div>
              <span className="text-[10px] text-slate-400">
                Mode: <strong className={pointerMode === 'start' ? 'text-emerald-400' : 'text-cyan-400'}>{pointerMode.toUpperCase()}</strong>
              </span>
            </div>

            {/* Map Canvas */}
            <div className="relative flex-1 bg-black select-none flex items-center justify-center overflow-hidden p-2">
              {currentUrl ? (
                <div
                  ref={imageContainerRef}
                  onClick={handleImageClick}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoverCoords(null)}
                  className="relative w-full h-full max-w-[550px] max-h-[550px] aspect-square mx-auto cursor-crosshair border border-mars-800"
                >
                  <img
                    src={currentUrl}
                    alt="Martian terrain layer"
                    className="w-full h-full object-contain pointer-events-none select-none"
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
                        strokeWidth="1.0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="filter drop-shadow-[0_0_3px_#10b981]"
                      />
                    )}

                    {/* Start (Rover) */}
                    {startCoords && (() => {
                      const p = toPct(startCoords);
                      return (
                        <g transform={`translate(${p.x},${p.y})`}>
                          <circle r="2.4" fill="#10b981" stroke="#fff" strokeWidth="0.6" />
                          <circle r="4.5" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                          <text y="-3.5" fontSize="2.8" fill="#10b981" textAnchor="middle" fontWeight="bold">ROVER</text>
                        </g>
                      );
                    })()}

                    {/* Goal (Target) */}
                    {goalCoords && (() => {
                      const p = toPct(goalCoords);
                      return (
                        <g transform={`translate(${p.x},${p.y})`}>
                          <circle r="2.4" fill="#00d2ff" stroke="#fff" strokeWidth="0.6" />
                          <circle r="4.5" fill="none" stroke="#00d2ff" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                          <text y="-3.5" fontSize="2.8" fill="#00d2ff" textAnchor="middle" fontWeight="bold">GOAL</text>
                        </g>
                      );
                    })()}

                    {/* Science Targets (Clickable directly on the map!) */}
                    {scienceTargets.map(st => {
                      const p = toPct(st.coords_pixel);
                      return (
                        <g
                          key={st.id}
                          transform={`translate(${p.x},${p.y})`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSetGoal(st.coords_pixel);
                          }}
                          className="cursor-pointer pointer-events-auto hover:opacity-80"
                        >
                          <polygon points="0,-3.2 3.2,2.2 -3.2,2.2" fill="#f59e0b" stroke="#fff" strokeWidth="0.4" />
                          <text y="5.0" fontSize="2.2" fill="#f59e0b" textAnchor="middle" fontWeight="bold">
                            {st.id.split('-').pop()}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2 text-slate-600">
                  <Eye className="w-10 h-10" />
                  <span className="text-xs font-mono">No terrain raster loaded</span>
                </div>
              )}

              {/* HUD Coordinates */}
              <div className="absolute bottom-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none">
                <span className="flex items-center space-x-1">
                  <Crosshair className="w-3 h-3 text-mars-400" />
                  <span>X:{hoverCoords?.x ?? '--'} Y:{hoverCoords?.y ?? '--'}</span>
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400">R:[{startCoords[0]},{startCoords[1]}]</span>
                <span className="text-cyan-400">G:[{goalCoords[0]},{goalCoords[1]}]</span>
              </div>
            </div>
          </div>
        )}

        {/* 3D Panel */}
        {(viewMode === 'split' || viewMode === '3d') && (
          <div className="min-h-[480px] flex flex-col">
            {ThreeDViewer}
          </div>
        )}
      </div>
    </div>
  );
};
