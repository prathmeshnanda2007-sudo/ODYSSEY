import React from 'react';
import { Compass, Satellite, ShieldAlert, Cpu, Activity } from 'lucide-react';

interface HeaderProps {
  status: string;
  roverCallsign: string;
  datasetCount: number;
}

export const Header: React.FC<HeaderProps> = ({ status, roverCallsign, datasetCount }) => {
  return (
    <header className="bg-mars-800/80 backdrop-blur-md border-b border-mars-700/60 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-mars-500 to-amber-600 shadow-lg shadow-mars-500/20">
          <Compass className="w-6 h-6 text-white animate-spin-slow" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-mars-900 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-2.5">
            <h1 className="text-lg font-bold tracking-wider text-white uppercase font-mono">
              ODYSSEY
            </h1>
            <span className="text-[11px] px-2 py-0.5 rounded font-mono bg-mars-700 text-mars-300 border border-mars-600">
              MARS-09 TACTICAL
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              <span>{status}</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-xs font-mono">
        <div className="flex items-center space-x-2 text-slate-300">
          <Satellite className="w-4 h-4 text-mars-400" />
          <span>DATUM: <strong className="text-white">IAU 2015 SPHEROID</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-300">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>ROVER: <strong className="text-white">{roverCallsign}</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-300">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>INGESTED: <strong className="text-white">{datasetCount} LAYERS</strong></span>
        </div>
      </div>
    </header>
  );
};
