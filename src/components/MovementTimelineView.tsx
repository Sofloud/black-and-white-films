import React, { useState } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { MOVEMENTS_DATA } from '../data/movements';
import { FilmCard } from './FilmCard';

interface MovementTimelineViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isFilmGenreEdited?: (filmId: string) => boolean;
  onDeleteFilm?: (filmId: string) => void;
  getMovementStats: (movementId: any) => { total: number; watched: number; liked: number; percentage: number };
}

export const MovementTimelineView: React.FC<MovementTimelineViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateGenres,
  onResetGenres,
  isFilmGenreEdited,
  onDeleteFilm,
  getMovementStats
}) => {
  const [selectedMovementId, setSelectedMovementId] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'watched' | 'unwatched'>('all');

  const handleSelectMovement = (id: string) => {
    setSelectedMovementId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const visibleMovements = selectedMovementId === 'all'
    ? MOVEMENTS_DATA
    : MOVEMENTS_DATA.filter((m) => m.id === selectedMovementId);

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#cfc0bd] pb-6">
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">
          Film Movements
        </h1>

        {/* Movement Selector Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleSelectMovement('all')}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedMovementId === 'all'
                ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
            }`}
          >
            All 4 Movements
          </button>

          {MOVEMENTS_DATA.map((movement, idx) => {
            const stats = getMovementStats(movement.id);
            const isSelected = selectedMovementId === movement.id;
            return (
              <button
                key={movement.id}
                onClick={() => handleSelectMovement(movement.id)}
                className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                    : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span className={`font-mono ${isSelected ? 'text-[#ddd5d0]' : 'text-[#7f9183]'}`}>{idx + 1}.</span>
                <span>{movement.name.split(' (')[0]}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#ffffff]' : 'text-[#7f9183]'}`}>
                  {stats.watched}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter bar for Watched / Unwatched */}
        <div className="flex items-center gap-3 mt-4 text-xs font-mono text-[#586f6b]">
          <span className="text-[#7f9183] uppercase tracking-wider text-[11px] font-semibold">Filter films:</span>
          <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded border border-[#cfc0bd]">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('watched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'watched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              Watched Only
            </button>
            <button
              onClick={() => setFilterMode('unwatched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'unwatched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              Unwatched Only
            </button>
          </div>
        </div>
      </div>

      {/* Movements Content Sections */}
      <div className="space-y-12">
        {visibleMovements.map((movement, index) => {
          const stats = getMovementStats(movement.id);

          const movementFilms = films.filter((f) => f.movementId === movement.id);
          const displayedFilms = movementFilms.filter((film) => {
            const isWatched = userStates[film.id]?.isWatched;
            if (filterMode === 'watched') return isWatched;
            if (filterMode === 'unwatched') return !isWatched;
            return true;
          });

          return (
            <section
              key={movement.id}
              className="border border-[#cfc0bd] bg-[#ffffff] rounded-lg p-6 sm:p-8 shadow-sm"
            >
              {/* Movement Detail Strip */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-[#e3deda]">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#586f6b] mb-1">
                    <span className="text-[#7f9183] uppercase tracking-widest font-semibold">{movement.era}</span>
                    <span className="text-[#cfc0bd]">·</span>
                    <span>{movement.originCountry}</span>
                    <span className="text-[#cfc0bd]">·</span>
                    <span className="text-[#586f6b]">Timeline #{index + 1}</span>
                  </div>

                  <h2 className="font-serif-cinematic text-3xl sm:text-4xl text-[#222d2b] font-semibold mb-3">
                    {movement.name}
                  </h2>

                  {/* Manifesto */}
                  <div className="bg-[#f7f5f3] border-l-2 border-[#586f6b] p-3 mb-3 text-xs italic text-[#455854] font-serif-cinematic">
                    "{movement.manifesto}"
                  </div>

                  {/* Historical Context */}
                  <p className="text-xs sm:text-sm text-[#455854] leading-relaxed mb-3">
                    {movement.historicalContext}
                  </p>

                  {/* Aesthetics */}
                  <div className="text-xs text-[#586f6b] flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[#7f9183] font-mono text-[10px] uppercase tracking-wider font-semibold">Aesthetics:</span>
                    {movement.coreAesthetics.map((t, idx) => (
                      <span key={t}>
                        {idx > 0 && <span className="text-[#cfc0bd] mr-2">·</span>}
                        <span className="text-[#222d2b] font-medium">{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Watched Statistics Box */}
                <div className="shrink-0 bg-[#f7f5f3] border border-[#cfc0bd] rounded-lg p-4 w-full sm:w-64">
                  <div className="text-[11px] uppercase tracking-widest font-mono text-[#586f6b] mb-1 flex items-center justify-between font-semibold">
                    <span>Watched in Movement</span>
                    <span className="text-[#222d2b] font-bold">{stats.percentage}%</span>
                  </div>
                  
                  <div className="text-2xl font-serif-cinematic text-[#222d2b] font-bold mb-2">
                    {stats.watched} <span className="text-[#7f9183] text-sm font-sans font-normal">/ {stats.total} films</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-[#e3deda] rounded-full overflow-hidden mb-3 border border-[#cfc0bd]">
                    <div
                      className="h-full bg-[#586f6b] rounded-full transition-all duration-300"
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>

                  {/* Just emoji, no "Hearted" text */}
                  <div className="text-[11px] font-mono text-[#222d2b] flex items-center gap-1.5 border-t border-[#e3deda] pt-2" title={`${stats.liked} films hearted`}>
                    <span>❤️</span>
                    <span className="font-semibold">{stats.liked}</span>
                  </div>
                </div>
              </div>

              {/* Films Grid */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-cinematic text-lg text-[#222d2b] font-semibold">
                    Films in Movement ({displayedFilms.length})
                  </h3>
                </div>

                {displayedFilms.length === 0 ? (
                  <div className="text-center py-8 border border-dashed border-[#cfc0bd] rounded text-[#7f9183] text-xs font-mono">
                    No films match the "{filterMode}" status in {movement.name.split(' (')[0]}.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedFilms.map((film) => (
                      <FilmCard
                        key={film.id}
                        film={film}
                        userState={userStates[film.id] || { isWatched: false, reaction: 'none' }}
                        onToggleWatched={onToggleWatched}
                        onSetReaction={onSetReaction}
                        onUpdateGenres={onUpdateGenres}
                        onResetGenres={onResetGenres}
                        isGenreEdited={isFilmGenreEdited ? isFilmGenreEdited(film.id) : false}
                        onDeleteFilm={onDeleteFilm}
                      />
                    ))}
                  </div>
                )}
              </div>

            </section>
          );
        })}
      </div>

    </div>
  );
};
