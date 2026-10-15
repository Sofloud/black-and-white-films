import React from 'react';
import { CategoryWatchStats } from '../types/film';
import { Star } from 'lucide-react';

interface StudyStatsRibbonProps { overallStats: CategoryWatchStats; onExploreCatalog: () => void; }

export const StudyStatsRibbon: React.FC<StudyStatsRibbonProps> = ({ overallStats, onExploreCatalog }) => (
  <div className="bg-[#ffffff] border-b border-[#cfc0bd] px-4 sm:px-6 lg:px-8 py-3">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#586f6b]">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="text-[#222d2b] font-bold">{overallStats.watched} films watched</span>
        <span className="text-[#cfc0bd] hidden sm:inline">|</span>
        <div className="flex items-center gap-1.5 text-[#222d2b]" title={`${overallStats.liked} films favourited`}>
          <Star className="w-3.5 h-3.5" fill={overallStats.liked > 0 ? 'currentColor' : 'none'} />
          <strong className="font-semibold">{overallStats.liked}</strong>
        </div>
      </div>
      <button onClick={onExploreCatalog} className="text-[#586f6b] hover:text-[#222d2b] underline transition-colors text-[11px] font-mono cursor-pointer font-medium">
        Explore all {overallStats.total} films →
      </button>
    </div>
  </div>
);
