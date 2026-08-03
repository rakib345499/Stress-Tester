import React from 'react';
import { Activity, ShieldAlert, Cpu, Terminal, ExternalLink } from 'lucide-react';

interface HeaderProps {
  isRunning: boolean;
  onOpenDisclaimer: () => void;
}

export function Header({ isRunning, onOpenDisclaimer }: HeaderProps) {
  return (
    <header className="border-b-2 border-[#0A0A0A] bg-[#FDFDFD] sticky top-0 z-40">
      <div className="bg-amber-300 border-b-2 border-[#0A0A0A] px-4 sm:px-8 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono font-bold gap-2">
        <span className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#0A0A0A]" />
          <span>AUTHORIZED USE ONLY • RUNS REAL PYTHON STRESS BENCHMARK ENGINE</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/taissuuu?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline uppercase tracking-wider hover:opacity-75 font-black text-amber-950"
          >
            <span>Facebook Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onOpenDisclaimer}
            className="underline uppercase tracking-wider hover:opacity-75 cursor-pointer font-black"
          >
            View Disclaimer
          </button>
        </div>
      </div>
      <div className="px-4 sm:px-8 py-4 sm:py-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Pipeline Instance v8.0</p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black leading-none tracking-tighter text-[#0A0A0A]">XIO_STRESS_TESTER</h1>
        </div>
      </div>
    </header>
  );
}
