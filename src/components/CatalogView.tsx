import React, { useState, useMemo } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { FilmCard } from './FilmCard';
import { Search, X } from 'lucide-react';
import { MOVEMENTS_DATA } from '../data/movements';
import { DIRECTORS_DATA } from '../data/directors';

interface CatalogViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateFilmInfo?: (filmId: string, updates: Partial<Film>) => void;
  onResetFilmInfo?: (filmId: string) => void;
  isFilmEdited?: (filmId: string) => boolean;
  onDeleteFilm?: (filmId: string) => void;
  onOpenEditArchive?: (target?: { type: 'film' | 'director' | 'movement'; id: string }) => void;
  displayMode?: 'detailed' | 'posters';
  onSetDisplayMode?: (mode: 'detailed' | 'posters') => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isFilmGenreEdited?: (filmId: string) => boolean;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateFilmInfo,
  onResetFilmInfo,
  isFilmEdited,
  onDeleteFilm,
  onOpenEditArchive,
  displayMode: propDisplayMode,
  onSetDisplayMode,
  onUpdateGenres,
  onResetGenres,
  isFilmGenreEdited
}) => {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [watchFilter, setWatchFilter] = useState<'all' | 'watched' | 'unwatched'>('all');
  const [heartFilter, setHeartFilter] = useState<'all' | 'hearted'>('all');
  const [selectedMovement, setSelectedMovement] = useState<string>('all');
  const [selectedDirector, setSelectedDirector] = useState<string>('all');
  const [sortOption, setSortOption] = useState<'year-asc' | 'year-desc' | 'title-asc' | 'runtime-desc'>('year-asc');

  // Dynamic unique directors list
  const uniqueDirectors = useMemo(() => {
    const set = new Set<string>();
    films.forEach((f) => {
      if (f.director) set.add(f.director.trim());
    });
    return Array.from(set).sort();
  }, [films]);

  // Filter & Search Logic
  const filteredFilms = useMemo(() => {
    return films.filter((film) => {
      const state = userStates[film.id] || { isWatched: false, reaction: 'none' };

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = film.title.toLowerCase().includes(query) || (film.originalTitle && film.originalTitle.toLowerCase().includes(query));
        const matchesDirector = film.director.toLowerCase().includes(query);
        const matchesWriter = film.writer.toLowerCase().includes(query);
        const matchesCinematographer = film.cinematographer.toLowerCase().includes(query);
        const matchesYear = film.releaseYear.toString().includes(query);
        const matchesGenre = film.genres.some((g) => g.toLowerCase().includes(query));
        const matchesMovement = film.movementName && film.movementName.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDirector && !matchesWriter && !matchesCinematographer && !matchesYear && !matchesGenre && !matchesMovement) {
          return false;
        }
      }

      // Watch filter
      if (watchFilter === 'watched' && !state.isWatched) return false;
      if (watchFilter === 'unwatched' && state.isWatched) return false;

      // Heart filter
      if (heartFilter === 'hearted' && state.reaction !== 'like') return false;

      // Movement filter
      if (selectedMovement !== 'all' && film.movementId !== selectedMovement) return false;

      // Director filter
      if (selectedDirector !== 'all') {
        const matchesDir = film.director.toLowerCase().includes(selectedDirector.toLowerCase()) || film.directorId === selectedDirector;
        if (!matchesDir) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'year-asc') return a.releaseYear - b.releaseYear;
      if (sortOption === 'year-desc') return b.releaseYear - a.releaseYear;
      if (sortOption === 'title-asc') return a.title.localeCompare(b.title);
      if (sortOption === 'runtime-desc') return b.runtimeMinutes - a.runtimeMinutes;
      return 0;
    });
  }, [
    films,
    userStates,
    searchQuery,
    watchFilter,
    heartFilter,
    selectedMovement,
    selectedDirector,
    sortOption
  ]);

  const watchedInFilter = filteredFilms.filter((f) => userStates[f.id]?.isWatched).length;

  const resetFilters = () => {
    setSearchQuery('');
    setWatchFilter('all');
    setHeartFilter('all');
    setSelectedMovement('all');
    setSelectedDirector('all');
    setSortOption('year-asc');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    watchFilter !== 'all' ||
    heartFilter !== 'all' ||
    selectedMovement !== 'all' ||
    selectedDirector !== 'all';

  return (
    <div className="space-y-8">
      
      {/* Title & Stats */}
      <div className="border-b border-[#cfc0bd] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">
            All Films
          </h1>
        </div>

        {/* Aggregate Status for current selection */}
        <div className="flex items-center gap-4 text-xs font-mono bg-[#ffffff] border border-[#cfc0bd] px-4 py-2.5 rounded-lg shrink-0 shadow-xs">
          <span className="text-[#586f6b]">Current view:</span>
          <span className="text-[#222d2b] font-bold">{watchedInFilter} / {filteredFilms.length} watched</span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[#7f9183] hover:text-[#222d2b] underline ml-2 cursor-pointer font-medium"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Filter & Search Bar Toolbar */}
      <div className="bg-[#ffffff] border border-[#cfc0bd] rounded-lg p-5 space-y-4 shadow-sm">
        
        {/* Search input + Sort row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-[#7f9183] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, director, writer, cinematographer, year, or genre..."
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded pl-10 pr-10 py-2.5 text-[#222d2b] text-xs sm:text-sm focus:border-[#586f6b] focus:outline-none placeholder:text-[#7f9183] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7f9183] hover:text-[#222d2b] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="md:col-span-4 flex items-center gap-2">
            <span className="text-xs text-[#7f9183] font-mono shrink-0 font-medium">Sort:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-2 text-[#222d2b] text-xs focus:border-[#586f6b] focus:outline-none cursor-pointer"
            >
              <option value="year-asc">Chronological: Earliest First</option>
              <option value="year-desc">Chronological: Latest First</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="runtime-desc">Runtime: Longest First</option>
            </select>
          </div>
        </div>

        {/* Dropdowns Row: Movements, Directors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#e3deda] text-xs">
          <div>
            <label className="block text-[11px] font-mono text-[#7f9183] uppercase tracking-wider mb-1 font-semibold">
              Movement:
            </label>
            <select
              value={selectedMovement}
              onChange={(e) => setSelectedMovement(e.target.value)}
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-2 text-[#222d2b] focus:border-[#586f6b] focus:outline-none cursor-pointer"
            >
              <option value="all">All Movements</option>
              {MOVEMENTS_DATA.map((m) => (
                <option key={m.id} value={m.id}>{m.name.split(' (')[0]} ({m.era})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-[#7f9183] uppercase tracking-wider mb-1 font-semibold">
              Director:
            </label>
            <select
              value={selectedDirector}
              onChange={(e) => setSelectedDirector(e.target.value)}
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-2 text-[#222d2b] focus:border-[#586f6b] focus:outline-none cursor-pointer"
            >
              <option value="all">All Directors</option>
              {uniqueDirectors.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Fast Action Filter: Watched and Hearted */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#e3deda] text-xs">
          {/* Watched State Segmented Control */}
          <div className="flex items-center gap-2">
            <span className="text-[#7f9183] font-mono text-[11px] uppercase font-semibold">Watch Status:</span>
            <div className="flex items-center gap-1 bg-[#f7f5f3] p-1 rounded border border-[#cfc0bd]">
              <button
                onClick={() => setWatchFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  watchFilter === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setWatchFilter('watched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  watchFilter === 'watched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Watched
              </button>
              <button
                onClick={() => setWatchFilter('unwatched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  watchFilter === 'unwatched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Unwatched
              </button>
            </div>
          </div>

          {/* Heart Filter Segmented Control (Emoji only, no word "Heart" or "Hearted") */}
          <div className="flex items-center gap-2">
            <span className="text-[#7f9183] font-mono text-[11px] uppercase font-semibold">Filter:</span>
            <div className="flex items-center gap-1 bg-[#f7f5f3] p-1 rounded border border-[#cfc0bd]">
              <button
                onClick={() => setHeartFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  heartFilter === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setHeartFilter('hearted')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  heartFilter === 'hearted' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
                title="Only show films you gave a heart to"
              >
                <span>❤️</span>
                <span>Only</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Results Count & Grid with Sign-Only Layout Filter */}
      <div>
        <div className="flex items-center justify-between mb-6 text-xs text-[#586f6b] font-mono gap-3">
          <span>Displaying {filteredFilms.length} matching films</span>

          {/* Sign-Only Filter: Posters and Information VS Just Posters (Signs only, no words) */}
          <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded-lg border border-[#cfc0bd] shadow-xs">
            {/* Sign for Posters & Information */}
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

            {/* Sign for Just Posters */}
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

        {filteredFilms.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#cfc0bd] rounded-lg p-8 bg-[#ffffff]">
            <p className="font-serif-cinematic text-2xl text-[#222d2b] font-semibold mb-2">
              No films match your search or filter criteria.
            </p>
            <p className="text-xs text-[#586f6b] max-w-md mx-auto mb-4">
              Try adjusting your query or resetting the filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#586f6b] hover:bg-[#485c58] text-[#ffffff] text-xs font-semibold rounded transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              displayMode === 'detailed'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5'
            }
          >
            {filteredFilms.map((film) => (
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

    </div>
  );
};
