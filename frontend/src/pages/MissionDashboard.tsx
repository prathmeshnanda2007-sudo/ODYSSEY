import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { DataIngestionPanel } from '../components/DataIngestionPanel';
import { CompatibilityInspector } from '../components/CompatibilityInspector';
import { SegmentationPanel } from '../components/SegmentationPanel';
import { ViewportHub, LayerKey } from '../maps/ViewportHub';
import { PlanetaryMeshViewer3D } from '../maps/PlanetaryMeshViewer3D';
import { TelemetryOverview } from '../dashboard/TelemetryOverview';
import {
  getSystemStatus,
  getSampleDatasets,
  validateCompatibility,
  analyzeTerrain,
  planPath,
  loadTerrainPreset,
  DatasetRecord,
  SpatialCompatibilityReport,
  TerrainAnalysisResponse,
  PathPlanResponse,
} from '../services/api';
import { runSegmentation, SegmentationResult } from '../services/perception';

export const MissionDashboard: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<string>('CONNECTING');
  const [roverCallsign, setRoverCallsign] = useState<string>('MARS-09');
  const [datasetCount, setDatasetCount] = useState<number>(0);

  // Ingestion state
  const [imageryRecord, setImageryRecord] = useState<DatasetRecord | null>(null);
  const [demRecord, setDemRecord] = useState<DatasetRecord | null>(null);
  const [demPrimaryRecord, setDemPrimaryRecord] = useState<DatasetRecord | null>(null);
  const [demOffsetRecord, setDemOffsetRecord] = useState<DatasetRecord | null>(null);

  // Validation & Processing
  const [compatibilityReport, setCompatibilityReport] = useState<SpatialCompatibilityReport | null>(null);
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [terrainAnalysis, setTerrainAnalysis] = useState<TerrainAnalysisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Terrain Morphology Presets
  const [activeTerrainId, setActiveTerrainId] = useState<string>('jezero');

  // Navigation & Path Planning
  const [startCoords, setStartCoords] = useState<[number, number]>([90, 90]);
  const [goalCoords, setGoalCoords] = useState<[number, number]>([380, 390]);
  const [pathPlan, setPathPlan] = useState<PathPlanResponse | null>(null);
  const [isPlanning, setIsPlanning] = useState<boolean>(false);

  // Phase 2: AI Segmentation state & active visualization layer
  const [segmentationResult, setSegmentationResult] = useState<SegmentationResult | null>(null);
  const [isSegmenting, setIsSegmenting] = useState<boolean>(false);
  const [segmentationError, setSegmentationError] = useState<string | null>(null);
  const [mcSamples, setMcSamples] = useState<number>(5);
  const [activeLayer, setActiveLayer] = useState<LayerKey>('imagery');

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
      setDemPrimaryRecord(samples.dem);
      setDemOffsetRecord(samples.dem_offset);

      // Automatically validate compatibility for initial Jezero sample pair
      await runValidation(samples.imagery.id, samples.dem.id);
      // Run terrain analysis
      await runTerrainAnalysis(samples.dem.id);
      // Automatically compute initial path so user immediately sees A* graph and route
      try {
        const initPlan = await planPath(samples.dem.id, startCoords[0], startCoords[1], goalCoords[0], goalCoords[1]);
        setPathPlan(initPlan);
      } catch (planErr) {
        console.warn('Initial path plan skipped:', planErr);
      }
    } catch (err) {
      console.error('Initialization error:', err);
      setSystemStatus('OFFLINE');
    } finally {
      setIsLoadingSamples(false);
    }
  };

  const handleSelectTerrainPreset = async (terrainId: string) => {
    setActiveTerrainId(terrainId);
    setIsLoadingSamples(true);
    setSegmentationResult(null);
    try {
      const res = await loadTerrainPreset(terrainId);
      setImageryRecord(res.imagery);
      setDemRecord(res.dem);
      setDemPrimaryRecord(res.dem);
      await runValidation(res.imagery.id, res.dem.id);
      await runTerrainAnalysis(res.dem.id);
      // Immediately calculate safe A* trajectory across the new morphology
      try {
        const plan = await planPath(res.dem.id, startCoords[0], startCoords[1], goalCoords[0], goalCoords[1]);
        setPathPlan(plan);
      } catch (e) {
        console.warn('Terrain plan calculation note:', e);
      }
    } catch (err) {
      console.error('Failed to load terrain preset:', err);
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
    setSegmentationResult(null);
    if (demRecord) {
      runValidation(rec.id, demRecord.id);
    }
  };

  const handleSelectDem = (rec: DatasetRecord) => {
    setDemRecord(rec);
    setSegmentationResult(null);
    if (imageryRecord) {
      runValidation(imageryRecord.id, rec.id);
    }
    runTerrainAnalysis(rec.id);
    setPathPlan(null);
  };

  const handleRunPlanner = async (startOverride?: [number, number], goalOverride?: [number, number]) => {
    if (!demRecord) return;
    const start = startOverride ?? startCoords;
    const goal = goalOverride ?? goalCoords;
    setIsPlanning(true);
    try {
      const res = await planPath(
        demRecord.id,
        start[0],
        start[1],
        goal[0],
        goal[1]
      );
      setPathPlan(res);
    } catch (err) {
      console.error('Planning error:', err);
    } finally {
      setIsPlanning(false);
    }
  };

  const handleSetStart = (coords: [number, number]) => {
    setStartCoords(coords);
    handleRunPlanner(coords, goalCoords);
  };

  const handleSetGoal = (coords: [number, number]) => {
    setGoalCoords(coords);
    handleRunPlanner(startCoords, coords);
  };

  const handleSwapStartGoal = () => {
    const s = startCoords;
    const g = goalCoords;
    setStartCoords(g);
    setGoalCoords(s);
    handleRunPlanner(g, s);
  };

  const handleClearPath = () => {
    setPathPlan(null);
  };

  const handleRunSegmentation = async (samples: number) => {
    if (!imageryRecord || !demRecord) return;
    setIsSegmenting(true);
    setSegmentationError(null);
    try {
      const result = await runSegmentation(imageryRecord.id, demRecord.id, samples);
      setSegmentationResult(result);
      // Seamlessly switch to AI segmentation layer immediately upon completion
      setActiveLayer('segmentation');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setSegmentationError(msg);
      console.error('Segmentation error:', err);
    } finally {
      setIsSegmenting(false);
    }
  };

  // Determine active texture for the 3D surface model based on active layer
  const getActiveTextureUrl = () => {
    switch (activeLayer) {
      case 'slope':
        return terrainAnalysis?.slope_preview_url || demRecord?.preview_url;
      case 'costmap':
        return terrainAnalysis?.costmap_preview_url || demRecord?.preview_url;
      case 'segmentation':
        return segmentationResult?.segmentation_url || imageryRecord?.preview_url;
      case 'uncertainty':
        return segmentationResult?.uncertainty_url || imageryRecord?.preview_url;
      case 'dem':
        return demRecord?.preview_url;
      case 'imagery':
      default:
        return imageryRecord?.preview_url || demRecord?.preview_url;
    }
  };

  // 3D viewer with active texture and 3D waypoints
  const threeDViewer = (
    <PlanetaryMeshViewer3D
      heightmapUrl={demRecord?.heightmap_url}
      textureUrl={getActiveTextureUrl()}
      pathCoords={pathPlan?.plan.path_coords || []}
      startCoords={startCoords}
      goalCoords={goalCoords}
      elevationRange={
        demRecord?.preview?.stats
          ? {
              min: demRecord.preview.stats.min_elevation_m,
              max: demRecord.preview.stats.max_elevation_m,
            }
          : undefined
      }
    />
  );

  return (
    <div className="flex flex-col min-h-screen bg-mars-900 text-slate-100">
      <Header
        status={systemStatus}
        roverCallsign={roverCallsign}
        datasetCount={datasetCount}
      />

      <main className="flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full">
        {/* Left Column: Data Ingestion, Compatibility & AI Segmentation (3 cols) */}
        <section className="col-span-12 lg:col-span-3 space-y-4">
          <DataIngestionPanel
            imageryRecord={imageryRecord}
            demRecord={demRecord}
            demPrimaryRecord={demPrimaryRecord}
            demOffsetRecord={demOffsetRecord}
            onSelectImagery={handleSelectImagery}
            onSelectDem={handleSelectDem}
            onLoadSamples={loadInitialData}
            isLoading={isLoadingSamples}
            activeTerrainId={activeTerrainId}
            onSelectTerrain={handleSelectTerrainPreset}
          />

          <CompatibilityInspector
            report={compatibilityReport}
            isValidating={isValidating}
          />

          {/* Phase 2: AI Terrain Segmentation Panel */}
          <SegmentationPanel
            segmentationResult={segmentationResult}
            isSegmenting={isSegmenting}
            error={segmentationError}
            mcSamples={mcSamples}
            onMcSamplesChange={setMcSamples}
            onRunSegmentation={() => handleRunSegmentation(mcSamples)}
            canRun={!!(imageryRecord && demRecord) && !isSegmenting}
            activeLayer={activeLayer}
            onSelectLayer={(l) => setActiveLayer(l)}
          />
        </section>

        {/* Center Column: Unified Viewport Hub (6 cols) */}
        <section className="col-span-12 lg:col-span-6 flex flex-col">
          <ViewportHub
            imageryUrl={imageryRecord?.preview_url}
            demColormapUrl={demRecord?.preview_url}
            slopeUrl={terrainAnalysis?.slope_preview_url}
            costmapUrl={terrainAnalysis?.costmap_preview_url}
            segmentationUrl={segmentationResult?.segmentation_url}
            uncertaintyUrl={segmentationResult?.uncertainty_url}
            activeLayer={activeLayer}
            onSelectLayer={setActiveLayer}
            pathCoords={pathPlan?.plan.path_coords || []}
            exploredNodes={pathPlan?.plan.explored_nodes || []}
            scienceTargets={terrainAnalysis?.science_targets || []}
            startCoords={startCoords}
            goalCoords={goalCoords}
            onSetStart={handleSetStart}
            onSetGoal={handleSetGoal}
            ThreeDViewer={threeDViewer}
          />
        </section>

        {/* Right Column: Telemetry, Hazards, Science & A* Planner (3 cols) */}
        <section className="col-span-12 lg:col-span-3 space-y-4">
          <TelemetryOverview
            analysis={terrainAnalysis}
            pathPlan={pathPlan}
            startCoords={startCoords}
            goalCoords={goalCoords}
            onRunPlanner={() => handleRunPlanner()}
            onSelectTargetGoal={(coords) => {
              setGoalCoords(coords);
              handleRunPlanner(startCoords, coords);
            }}
            onSwapStartGoal={handleSwapStartGoal}
            onClearPath={handleClearPath}
            isPlanning={isPlanning}
            isAnalyzing={isAnalyzing}
          />
        </section>
      </main>
    </div>
  );
};
