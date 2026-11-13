import React, { useState } from 'react';
import { Upload, Layers, MapPin, CheckCircle2, AlertTriangle, FileCode2, RefreshCw } from 'lucide-react';
import { DatasetRecord, uploadRasterFile } from '../services/api';

interface DataIngestionPanelProps {
  imageryRecord: DatasetRecord | null;
  demRecord: DatasetRecord | null;
  demOffsetRecord: DatasetRecord | null;
  onSelectImagery: (rec: DatasetRecord) => void;
  onSelectDem: (rec: DatasetRecord) => void;
  onLoadSamples: () => void;
  isLoading: boolean;
}

export const DataIngestionPanel: React.FC<DataIngestionPanelProps> = ({
  imageryRecord,
  demRecord,
  demOffsetRecord,
  onSelectImagery,
  onSelectDem,
  onLoadSamples,
  isLoading,
}) => {
  const [uploadingType, setUploadingType] = useState<'imagery' | 'dem' | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

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
          <span>Reload Jezero Samples</span>
        </button>
      </div>

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
            {demOffsetRecord && (
              <button
                onClick={() => onSelectDem(demOffsetRecord)}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700/70 hover:bg-mars-600 text-amber-300 border border-amber-800/40"
                title="Select shifted DEM to test spatial incompatibility warning"
              >
                Test Offset DEM
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
