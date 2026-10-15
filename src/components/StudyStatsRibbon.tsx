import React from 'react';
import { CategoryWatchStats } from '../types/film';

interface StudyStatsRibbonProps {
  overallStats: CategoryWatchStats;
  onExploreCatalog: () => void;
}

export const StudyStatsRibbon: React.FC<StudyStatsRibbonProps> = ({
  overallStats,
  onExploreCatalog
}) => {
  return (
    <div className="bg-[#ffffff] border-b border-[#cfc0bd] px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#586f6b]">
        
        {/* Progress Metrics Strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7f9183]" />
            <span className="text-[#7f9183] uppercase tracking-wider text-[11px] font-semibold">Academic Progress:</span>
            <span className="text-[#222d2b] font-bold">
              {overallStats.watched} / {overallStats.total} watched
            </span>
            <span className="text-[#586f6b] font-medium">({overallStats.percentage}%)</span>
          </div>

          <span className="text-[#cfc0bd] hidden sm:inline">|</span>

          {/* Just emoji, no "Hearted" text */}
          <div className="flex items-center gap-1.5 text-[#222d2b]" title={`${overallStats.liked} films hearted`}>
            <span>❤️</span>
            <strong className="text-[#222d2b] font-semibold">{overallStats.liked}</strong>
          </div>

        </div>

        {/* Quick jump action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExploreCatalog}
            className="text-[#586f6b] hover:text-[#222d2b] underline transition-colors text-[11px] font-mono cursor-pointer font-medium"
          >
            Explore all {overallStats.total} films →
          </button>
        </div>

      </div>
    </div>
  );
};
