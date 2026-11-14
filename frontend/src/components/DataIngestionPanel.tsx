import React, { useState } from 'react';
import { Upload, Layers, MapPin, CheckCircle2, AlertTriangle, FileCode2, RefreshCw } from 'lucide-react';
import { DatasetRecord, uploadRasterFile } from '../services/api';

interface DataIngestionPanelProps {
  imageryRecord: DatasetRecord | null;
  demRecord: DatasetRecord | null;
  demPrimaryRecord?: DatasetRecord | null;
  demOffsetRecord: DatasetRecord | null;
  onSelectImagery: (rec: DatasetRecord) => void;
  onSelectDem: (rec: DatasetRecord) => void;
  onLoadSamples: () => void;
  isLoading: boolean;
  activeTerrainId?: string;
  onSelectTerrain?: (terrainId: string) => void;
}

export const DataIngestionPanel: React.FC<DataIngestionPanelProps> = ({
  imageryRecord,
  demRecord,
  demPrimaryRecord,
  demOffsetRecord,
  onSelectImagery,
  onSelectDem,
  onLoadSamples,
  isLoading,
  activeTerrainId = 'jezero',
  onSelectTerrain,
}) => {
  const [uploadingType, setUploadingType] = useState<'imagery' | 'dem' | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const terrainPresets = [
    { id: 'jezero', name: 'Jezero Crater', icon: '🔴', tag: 'Perseverance' },
    { id: 'olympus', name: 'Olympus Mons', icon: '🌋', tag: 'Caldera' },
    { id: 'valles', name: 'Valles Marineris', icon: '🏜️', tag: 'Rift Chasma' },
    { id: 'gale', name: 'Gale / Mt Sharp', icon: '⛰️', tag: 'Curiosity' },
    { id: 'dunes', name: 'Noctis Dunes', icon: '〰️', tag: 'Mesas' },
  ];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'imagery' | 'dem') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingType(type);
    setUploadError(null);
    try {
      const record = await uploadRasterFile(file, type);
      if (type === 'imagery') {
        onSelectImagery(record);
      } else {
        onSelectDem(record);
      }
    } catch (err: any) {
      setUploadError(err.message || 'Failed to upload raster.');
    } finally {
      setUploadingType(null);
    }
  };

  return (
    <div className="bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex flex-col space-y-4">
      <div className="flex items-center justify-between border-b border-mars-700/50 pb-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-mars-400" />
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase font-mono">
            Planetary Data Ingestion
          </h2>
        </div>
        <button
          onClick={onLoadSamples}
          disabled={isLoading}
          className="flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-slate-200 border border-mars-600 transition"
        >
          <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Reset Samples</span>
        </button>
      </div>

      {/* Planetary Morphology Presets */}
      {onSelectTerrain && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>MARTIAN TERRAIN PRESETS:</span>
            <span className="text-cyan-400 font-semibold">{terrainPresets.find(t => t.id === activeTerrainId)?.name}</span>
          </div>
          <div className="grid grid-cols-5 gap-1 font-mono text-[10px]">
            {terrainPresets.map((t) => {
              const isActive = activeTerrainId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTerrain(t.id)}
                  disabled={isLoading}
                  className={`flex flex-col items-center justify-center p-1.5 rounded-lg border transition text-center ${
                    isActive
                      ? 'bg-mars-600/90 text-white border-cyan-400 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                      : 'bg-mars-900/80 text-slate-400 border-mars-700/60 hover:bg-mars-800 hover:text-slate-200'
                  }`}
                  title={`${t.name} (${t.tag})`}
                >
                  <span className="text-sm leading-none mb-0.5">{t.icon}</span>
                  <span className="truncate w-full font-bold text-[9px] leading-tight">{t.name.split(' ')[0]}</span>
                  <span className="text-[8px] text-slate-500 leading-none">{t.tag}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {uploadError && (
        <div className="bg-red-950/60 border border-red-800/80 rounded-lg p-3 text-xs text-red-300 flex items-start space-x-2">
          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <span>{uploadError}</span>
        </div>
      )}

      {/* Optical Imagery Slot */}
      <div className="bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-mono font-medium text-slate-200">OPTICAL IMAGERY (HiRISE/CTX)</span>
          </div>
          <label className="cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-cyan-300 border border-cyan-800/50 flex items-center space-x-1 transition">
            <Upload className="w-3 h-3" />
            <span>{uploadingType === 'imagery' ? 'Ingesting...' : 'Upload GeoTIFF'}</span>
            <input
              type="file"
              accept=".tif,.tiff,.geotiff"
              className="hidden"
              onChange={(e) => handleFileUpload(e, 'imagery')}
              disabled={uploadingType !== null}
            />
          </label>
        </div>

        {imageryRecord ? (
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30">
            <div>
              <span className="text-slate-400">File: </span>
              <span className="text-white truncate block">{imageryRecord.filename}</span>
            </div>
            <div>
              <span className="text-slate-400">Dims: </span>
              <span className="text-cyan-300">{imageryRecord.metadata.width} × {imageryRecord.metadata.height} px ({imageryRecord.metadata.bands}b)</span>
            </div>
            <div className="col-span-2">
              <span className="text-slate-400">CRS: </span>
              <span className="text-amber-300 truncate block">{imageryRecord.metadata.crs_name}</span>
            </div>
            <div>
              <span className="text-slate-400">Resolution: </span>
              <span className="text-slate-200">{imageryRecord.metadata.resolution_x.toFixed(2)} m/px</span>
            </div>
            <div>
              <span className="text-slate-400">NoData: </span>
              <span className="text-slate-200">{imageryRecord.metadata.nodata ?? 'None'}</span>
            </div>
          </div>
        ) : (
          <div className="text-xs text-slate-500 italic py-2 text-center">
            No optical imagery loaded
          </div>
        )}
      </div>

      {/* DEM Elevation Slot */}
      <div className="bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-xs font-mono font-medium text-slate-200">DIGITAL ELEVATION MODEL (DEM)</span>
          </div>
          <div className="flex items-center space-x-2">
            {demOffsetRecord && demPrimaryRecord && (
              <button
                onClick={() => onSelectDem(demRecord?.id === demOffsetRecord.id ? demPrimaryRecord : demOffsetRecord)}
                className={`text-[10px] font-mono px-2 py-0.5 rounded border transition ${
                  demRecord?.id === demOffsetRecord.id
                    ? 'bg-amber-950 text-amber-300 border-amber-600 font-bold'
                    : 'bg-mars-700/70 hover:bg-mars-600 text-amber-300 border-amber-800/40'
                }`}
                title={demRecord?.id === demOffsetRecord.id ? "Click to restore aligned Primary Jezero DEM" : "Click to test Offset DEM and observe incompatibility warning"}
              >
                {demRecord?.id === demOffsetRecord.id ? '← Primary DEM' : 'Test Offset DEM'}
              </button>
            )}
            <label className="cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-amber-300 border border-amber-800/50 flex items-center space-x-1 transition">
              <Upload className="w-3 h-3" />
              <span>{uploadingType === 'dem' ? 'Ingesting...' : 'Upload GeoTIFF'}</span>
              <input
                type="file"
                accept=".tif,.tiff,.geotiff"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'dem')}
                disabled={uploadingType !== null}
              />
            </label>
          </div>
        </div>

        {demRecord ? (
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30">
            <div>
              <span className="text-slate-400">File: </span>
              <span className="text-white truncate block">{demRecord.filename}</span>
            </div>
            <div>
              <span className="text-slate-400">Dims: </span>
              <span className="text-amber-300">{demRecord.metadata.width} × {demRecord.metadata.height} px</span>
            </div>
            <div className="col-span-2">
              <span className="text-slate-400">CRS: </span>
              <span className="text-amber-300 truncate block">{demRecord.metadata.crs_name}</span>
            </div>
            <div>
              <span className="text-slate-400">Resolution: </span>
              <span className="text-slate-200">{demRecord.metadata.resolution_x.toFixed(2)} m/px</span>
            </div>
            <div>
              <span className="text-slate-400">Elevation: </span>
              <span className="text-emerald-400">
                {demRecord.metadata.min_val?.toFixed(0)}m to {demRecord.metadata.max_val?.toFixed(0)}m
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xs text-slate-500 italic py-2 text-center">
            No elevation DEM loaded
          </div>
        )}
      </div>
    </div>
  );
};
