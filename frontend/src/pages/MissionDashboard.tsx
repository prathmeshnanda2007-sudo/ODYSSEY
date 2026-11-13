import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { DataIngestionPanel } from '../components/DataIngestionPanel';
import { CompatibilityInspector } from '../components/CompatibilityInspector';
import { GeospatialMap2D } from '../maps/GeospatialMap2D';
import { PlanetaryMeshViewer3D } from '../maps/PlanetaryMeshViewer3D';
import { TelemetryOverview } from '../dashboard/TelemetryOverview';
import {
  getSystemStatus,
  getSampleDatasets,
  validateCompatibility,
  analyzeTerrain,
  planPath,
  DatasetRecord,
  SpatialCompatibilityReport,
  TerrainAnalysisResponse,
  PathPlanResponse,
} from '../services/api';
import { Map, Box, Columns, Layers } from 'lucide-react';

export const MissionDashboard: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<string>('CONNECTING');
  const [roverCallsign, setRoverCallsign] = useState<string>('MARS-09');
  const [datasetCount, setDatasetCount] = useState<number>(0);

  // Ingestion state
  const [imageryRecord, setImageryRecord] = useState<DatasetRecord | null>(null);
  const [demRecord, setDemRecord] = useState<DatasetRecord | null>(null);
  const [demOffsetRecord, setDemOffsetRecord] = useState<DatasetRecord | null>(null);

  // Validation & Processing
  const [compatibilityReport, setCompatibilityReport] = useState<SpatialCompatibilityReport | null>(null);
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [terrainAnalysis, setTerrainAnalysis] = useState<TerrainAnalysisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Navigation & Path Planning
  const [startCoords, setStartCoords] = useState<[number, number]>([90, 90]);
  const [goalCoords, setGoalCoords] = useState<[number, number]>([380, 390]);
  const [pathPlan, setPathPlan] = useState<PathPlanResponse | null>(null);
  const [isPlanning, setIsPlanning] = useState<boolean>(false);

  // Viewport mode
  const [viewportMode, setViewportMode] = useState<'split' | '2d' | '3d'>('split');
  const [isLoadingSamples, setIsLoadingSamples] = useState<boolean>(false);

  // Initial load
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setIsLoadingSamples(true);
    try {
      const statusRes = await getSystemStatus();
      setSystemStatus(statusRes.status);
      setRoverCallsign(statusRes.rover_callsign);
      setDatasetCount(statusRes.registered_datasets_count);

      const samples = await getSampleDatasets();
      setImageryRecord(samples.imagery);
      setDemRecord(samples.dem);
      setDemOffsetRecord(samples.dem_offset);

      // Automatically validate compatibility for initial Jezero sample pair
      await runValidation(samples.imagery.id, samples.dem.id);
      // Run terrain analysis
      await runTerrainAnalysis(samples.dem.id);
    } catch (err) {
      console.error('Initialization error:', err);
      setSystemStatus('OFFLINE');
    } finally {
      setIsLoadingSamples(false);
    }
  };

  const runValidation = async (imgId: string, demId: string) => {
    setIsValidating(true);
    try {
      const rep = await validateCompatibility(imgId, demId);
      setCompatibilityReport(rep);
    } catch (err) {
      console.error('Validation error:', err);
    } finally {
      setIsValidating(false);
    }
  };

  const runTerrainAnalysis = async (demId: string) => {
    setIsAnalyzing(true);
    try {
      const analysis = await analyzeTerrain(demId);
      setTerrainAnalysis(analysis);
    } catch (err) {
      console.error('Terrain analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSelectImagery = (rec: DatasetRecord) => {
    setImageryRecord(rec);
    if (demRecord) {
      runValidation(rec.id, demRecord.id);
    }
  };

  const handleSelectDem = (rec: DatasetRecord) => {
    setDemRecord(rec);
    if (imageryRecord) {
      runValidation(imageryRecord.id, rec.id);
    }
    runTerrainAnalysis(rec.id);
    // Reset path when changing DEM
    setPathPlan(null);
  };

  const handleRunPlanner = async () => {
    if (!demRecord) return;
    setIsPlanning(true);
    try {
      const res = await planPath(
        demRecord.id,
        startCoords[0],
        startCoords[1],
        goalCoords[0],
        goalCoords[1]
      );
      setPathPlan(res);
    } catch (err) {
      console.error('Planning error:', err);
    } finally {
      setIsPlanning(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-mars-900 text-slate-100">
      <Header
        status={systemStatus}
        roverCallsign={roverCallsign}
        datasetCount={datasetCount}
      />

      <main className="flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full">
        {/* Left Column: Data Ingestion & Compatibility (3 cols) */}
        <section className="col-span-12 lg:col-span-3 space-y-4">
          <DataIngestionPanel
            imageryRecord={imageryRecord}
            demRecord={demRecord}
            demOffsetRecord={demOffsetRecord}
            onSelectImagery={handleSelectImagery}
            onSelectDem={handleSelectDem}
            onLoadSamples={loadInitialData}
            isLoading={isLoadingSamples}
          />

          <CompatibilityInspector
            report={compatibilityReport}
            isValidating={isValidating}
          />
        </section>

        {/* Center Column: Geospatial 2D and Three.js 3D Viewports (6 cols) */}
        <section className="col-span-12 lg:col-span-6 flex flex-col space-y-3">
          {/* Viewport Layout Mode Switcher */}
          <div className="flex items-center justify-between bg-mars-800/60 border border-mars-700/60 rounded-xl px-4 py-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
              <Layers className="w-4 h-4 text-mars-400" />
              <span className="font-bold text-white">TERRAIN VISUALIZATION CONSOLE</span>
            </div>

            <div className="flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-xs font-mono">
              <button
                onClick={() => setViewportMode('split')}
                className={`px-3 py-1 rounded flex items-center space-x-1.5 transition ${
                  viewportMode === 'split'
                    ? 'bg-mars-700 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Split 2D / 3D</span>
              </button>
              <button
                onClick={() => setViewportMode('2d')}
                className={`px-3 py-1 rounded flex items-center space-x-1.5 transition ${
                  viewportMode === '2d'
                    ? 'bg-mars-700 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>2D Map</span>
              </button>
              <button
                onClick={() => setViewportMode('3d')}
                className={`px-3 py-1 rounded flex items-center space-x-1.5 transition ${
                  viewportMode === '3d'
                    ? 'bg-mars-700 text-amber-300 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Mesh</span>
              </button>
            </div>
          </div>

          {/* Viewport Display Area */}
          <div className={`grid gap-4 flex-1 ${
            viewportMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          }`}>
            {(viewportMode === 'split' || viewportMode === '2d') && (
              <div className="h-[520px]">
                <GeospatialMap2D
                  imageryUrl={imageryRecord?.preview_url}
                  demColormapUrl={demRecord?.preview_url}
                  slopeUrl={terrainAnalysis?.slope_preview_url}
                  pathCoords={pathPlan?.plan.path_coords || []}
                  scienceTargets={terrainAnalysis?.science_targets || []}
                  startCoords={startCoords}
                  goalCoords={goalCoords}
                  onSetStart={setStartCoords}
                  onSetGoal={setGoalCoords}
                />
              </div>
            )}

            {(viewportMode === 'split' || viewportMode === '3d') && (
              <div className="h-[520px]">
                <PlanetaryMeshViewer3D
                  heightmapUrl={demRecord?.heightmap_url}
                  textureUrl={imageryRecord?.preview_url || demRecord?.preview_url}
                  pathCoords={pathPlan?.plan.path_coords || []}
                  elevationRange={
                    demRecord?.preview?.stats
                      ? {
                          min: demRecord.preview.stats.min_elevation_m,
                          max: demRecord.preview.stats.max_elevation_m,
                        }
                      : undefined
                  }
                />
              </div>
            )}
          </div>
        </section>

        {/* Right Column: Telemetry, Hazards, Science & A* Planner (3 cols) */}
        <section className="col-span-12 lg:col-span-3 space-y-4">
          <TelemetryOverview
            analysis={terrainAnalysis}
            pathPlan={pathPlan}
            startCoords={startCoords}
            goalCoords={goalCoords}
            onRunPlanner={handleRunPlanner}
            onSelectTargetGoal={(coords) => setGoalCoords(coords)}
            isPlanning={isPlanning}
            isAnalyzing={isAnalyzing}
          />
        </section>
      </main>
    </div>
  );
};
