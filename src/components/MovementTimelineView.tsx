import React, { useState } from 'react';
import { Film, UserFilmState, ReactionType, MovementInfo } from '../types/film';
import { MOVEMENTS_DATA } from '../data/movements';
import { FilmCard } from './FilmCard';
import { Pencil, Check, X, RotateCcw, Star } from 'lucide-react';

interface MovementTimelineViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateFilmInfo?: (filmId: string, updates: Partial<Film>) => void;
  onResetFilmInfo?: (filmId: string) => void;
  isFilmEdited?: (filmId: string) => boolean;
  onUpdateMovementInfo?: (movementId: string, updates: Partial<MovementInfo>) => void;
  onResetMovementInfo?: (movementId: string) => void;
  isMovementEdited?: (movementId: string) => boolean;
  onDeleteFilm?: (filmId: string) => void;
  getMovementStats: (movementId: any) => { total: number; watched: number; liked: number; percentage: number };
  movements?: MovementInfo[];
  onOpenEditArchive?: (target?: { type: 'film' | 'director' | 'movement'; id: string }) => void;
  displayMode?: 'detailed' | 'posters';
  onSetDisplayMode?: (mode: 'detailed' | 'posters') => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isFilmGenreEdited?: (filmId: string) => boolean;
}

export const MovementTimelineView: React.FC<MovementTimelineViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateFilmInfo,
  onResetFilmInfo,
  isFilmEdited,
  onUpdateMovementInfo,
  onResetMovementInfo,
  isMovementEdited,
  onDeleteFilm,
  getMovementStats,
  movements,
  onOpenEditArchive,
  displayMode: propDisplayMode,
  onSetDisplayMode
}) => {
  const [selectedMovementId, setSelectedMovementId] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'watched' | 'unwatched'>('all');

  const [internalDisplayMode, setInternalDisplayMode] = useState<'detailed' | 'posters'>(() => {
    try {
      const stored = localStorage.getItem('cinema_display_mode');
      if (stored === 'posters' || stored === 'detailed') return stored;
    } catch {
      // ignore
    }
    return 'detailed';
  });

  const displayMode = propDisplayMode ?? internalDisplayMode;

  const handleSetDisplayMode = (mode: 'detailed' | 'posters') => {
    setInternalDisplayMode(mode);
    try {
      localStorage.setItem('cinema_display_mode', mode);
    } catch {
      // ignore
    }
    if (onSetDisplayMode) {
      onSetDisplayMode(mode);
    }
  };

  // Inline on-the-spot editing state for Movement
  const [editingMovementId, setEditingMovementId] = useState<string | null>(null);
  const [mvName, setMvName] = useState('');
  const [mvEra, setMvEra] = useState('');
  const [mvOrigin, setMvOrigin] = useState('');
  const [mvHistoricalContext, setMvHistoricalContext] = useState('');

  const movementList = movements && movements.length > 0 ? movements : MOVEMENTS_DATA;

  const handleSelectMovement = (id: string) => {
    setSelectedMovementId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const visibleMovements = selectedMovementId === 'all'
    ? movementList
    : movementList.filter((m) => m.id === selectedMovementId);

  const startEditMovement = (m: MovementInfo) => {
    setEditingMovementId(m.id);
    setMvName(m.name);
    setMvEra(m.era);
    setMvOrigin(m.originCountry);
    setMvHistoricalContext(m.historicalContext || '');
  };

  const handleSaveMovement = (movementId: string) => {
    if (onUpdateMovementInfo) {
      onUpdateMovementInfo(movementId, {
        name: mvName.trim() || undefined,
        era: mvEra.trim() || undefined,
        originCountry: mvOrigin.trim() || undefined,
        historicalContext: mvHistoricalContext.trim() || undefined
      });
    }
    setEditingMovementId(null);
  };

  const handleResetMovement = (movementId: string) => {
    if (onResetMovementInfo) {
      onResetMovementInfo(movementId);
    }
    setEditingMovementId(null);
  };

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
            All {movementList.length} Movements
          </button>

          {movementList.map((movement) => {
            const stats = getMovementStats(movement.id);
            const isSelected = selectedMovementId === movement.id;
            return (
              <button
                key={movement.id}
                onClick={() => handleSelectMovement(movement.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ffffff] font-semibold shadow-xs'
                    : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span>{movement.name.split(' (')[0]}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-white/20 text-[#ffffff]' : 'bg-[#f7f5f3] text-[#7f9183]'
                }`}>
                  {stats.watched}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Watch Filter & View Mode Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#7f9183] font-mono text-xs uppercase font-semibold">Filter:</span>
            <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded border border-[#cfc0bd] text-xs font-mono">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterMode('watched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'watched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Watched
              </button>
              <button
                onClick={() => setFilterMode('unwatched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'unwatched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Unwatched
              </button>
            </div>
          </div>

          {/* Sign-Only Filter: Posters and Information VS Just Posters (Signs only, no words) */}
          <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded-lg border border-[#cfc0bd] shadow-xs">
            <button
              type="button"
              onClick={() => handleSetDisplayMode('detailed')}
              title="Posters and information"
              aria-label="Posters and information"
              className={`p-1.5 rounded transition-all cursor-pointer ${
                displayMode === 'detailed'
                  ? 'bg-[#586f6b] text-[#ffffff] shadow-xs'
                  : 'text-[#586f6b] hover:text-[#222d2b] hover:bg-[#f7f5f3]'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="3" width="5.5" height="14" rx="1" />
                <line x1="11" y1="6" x2="17.5" y2="6" />
                <line x1="11" y1="10" x2="17.5" y2="10" />
                <line x1="11" y1="14" x2="15" y2="14" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleSetDisplayMode('posters')}
              title="Just posters"
              aria-label="Just posters"
              className={`p-1.5 rounded transition-all cursor-pointer ${
                displayMode === 'posters'
                  ? 'bg-[#586f6b] text-[#ffffff] shadow-xs'
                  : 'text-[#586f6b] hover:text-[#222d2b] hover:bg-[#f7f5f3]'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="3" width="6.5" height="9.5" rx="1" />
                <rect x="11" y="3" width="6.5" height="9.5" rx="1" />
                <rect x="2.5" y="14" width="6.5" height="3" rx="0.5" />
                <rect x="11" y="14" width="6.5" height="3" rx="0.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Movements Sections */}
      <div className="space-y-16">
        {visibleMovements.map((movement, index) => {
          const stats = getMovementStats(movement.id);
          const isCurrentlyEditing = editingMovementId === movement.id;
          const movementEdited = isMovementEdited ? isMovementEdited(movement.id) : false;

          // Filter films for this movement
          const movementFilms = films.filter((f) => f.movementId === movement.id);
          const displayedFilms = movementFilms.filter((f) => {
            const userState = userStates[f.id] || { isWatched: false, reaction: 'none' };
            if (filterMode === 'watched') return userState.isWatched;
            if (filterMode === 'unwatched') return !userState.isWatched;
            return true;
          });

          return (
            <section
              key={movement.id}
              id={`movement-${movement.id}`}
              className="bg-[#ffffff] border border-[#cfc0bd] rounded-xl p-6 sm:p-8 shadow-xs"
            >
              {/* Dossier Banner */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#e3deda]">
                
                {isCurrentlyEditing ? (
                  /* INLINE EDIT MODE RIGHT ON THE SPOT (Manifesto, Core Aesthetics, Visual Motifs deleted; Historical Context optional) */
                  <div className="flex-1 w-full space-y-3 bg-[#f7f5f3] p-4 rounded-lg border border-[#586f6b]">
                    <div className="flex items-center justify-between border-b border-[#cfc0bd] pb-2">
                      <div className="flex items-center gap-2">
                        <Pencil className="w-3.5 h-3.5 text-[#586f6b]" />
                        <span className="font-mono text-xs font-semibold text-[#222d2b] uppercase tracking-wider">
                          Editing Movement Info
                        </span>
                        {movementEdited && (
                          <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded font-mono">
                            Edited
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setEditingMovementId(null)}
                        className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                        Movement Name
                      </label>
                      <input
                        type="text"
                        value={mvName}
                        onChange={(e) => setMvName(e.target.value)}
                        className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-serif-cinematic font-semibold focus:border-[#586f6b] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Era / Active Years
                        </label>
                        <input
                          type="text"
                          value={mvEra}
                          onChange={(e) => setMvEra(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Geographic Origin
                        </label>
                        <input
                          type="text"
                          value={mvOrigin}
                          onChange={(e) => setMvOrigin(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Historical Context & Significance Description (Optional) */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                        Historical Context & Significance Description (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={mvHistoricalContext}
                        onChange={(e) => setMvHistoricalContext(e.target.value)}
                        placeholder="Historical backdrop, key filmmakers, cultural impact (optional)..."
                        className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1.5 text-xs text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#cfc0bd] font-mono text-xs">
                      {movementEdited && onResetMovementInfo ? (
                        <button
                          type="button"
                          onClick={() => handleResetMovement(movement.id)}
                          className="flex items-center gap-1 text-[11px] text-amber-800 hover:text-amber-900 underline cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Revert</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingMovementId(null)}
                          className="px-3 py-1 rounded bg-[#ffffff] hover:bg-[#e3deda] text-[#586f6b] border border-[#cfc0bd] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSaveMovement(movement.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-[#586f6b] hover:bg-[#485c58] text-[#ffffff] font-semibold rounded cursor-pointer shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* NORMAL DOSSIER VIEW WITH PEN SIGN ONLY (no words) */
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#586f6b] mb-1">
                      <span className="text-[#7f9183] uppercase tracking-widest font-semibold">{movement.era}</span>
                      <span className="text-[#cfc0bd]">·</span>
                      <span>{movement.originCountry}</span>
                      {movementEdited && (
                        <>
                          <span className="text-[#cfc0bd]">·</span>
                          <span className="text-amber-800 font-sans text-[10px]">edited</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <h2 className="font-serif-cinematic text-3xl sm:text-4xl text-[#222d2b] font-semibold">
                        {movement.name}
                      </h2>
                      
                      {/* Pen sign only like in film editing */}
                      <button
                        type="button"
                        onClick={() => startEditMovement(movement)}
                        className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] hover:bg-[#f7f5f3] border border-transparent hover:border-[#cfc0bd] transition-colors cursor-pointer"
                        title={`Edit ${movement.name}'s info on the spot`}
                        aria-label={`Edit ${movement.name}'s info on the spot`}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Historical Context */}
                    {movement.historicalContext && (
                      <p className="text-xs sm:text-sm text-[#455854] leading-relaxed mb-3">
                        {movement.historicalContext}
                      </p>
                    )}
                  </div>
                )}

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
                    <Star className="w-3.5 h-3.5" fill={stats.liked > 0 ? "currentColor" : "none"} />
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
                  <div
                    className={
                      displayMode === 'detailed'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5'
                    }
                  >
                    {displayedFilms.map((film) => (
                      <FilmCard
                        key={film.id}
                        film={film}
                        userState={userStates[film.id] || { isWatched: false, reaction: 'none' }}
                        onToggleWatched={onToggleWatched}
                        onSetReaction={onSetReaction}
                        onUpdateFilmInfo={onUpdateFilmInfo}
                        onResetFilmInfo={onResetFilmInfo}
                        isFilmEdited={isFilmEdited ? isFilmEdited(film.id) : false}
                        onDeleteFilm={onDeleteFilm}
                        onOpenEditArchive={onOpenEditArchive}
                        displayMode={displayMode}
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
