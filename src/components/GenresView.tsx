import React, { useState, useMemo } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { FilmCard } from './FilmCard';
import { Heart } from 'lucide-react';

interface GenresViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  getGenreStats: (genre: string) => { total: number; watched: number; liked: number; percentage: number };
}

export const GenresView: React.FC<GenresViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateGenres,
  getGenreStats
}) => {
  const allGenres = useMemo(() => {
    const genreSet = new Set<string>();
    films.forEach((f) => {
      f.genres.forEach((g) => genreSet.add(g));
    });
    return Array.from(genreSet).sort();
  }, [films]);

  const [selectedGenre, setSelectedGenre] = useState<string>(() => allGenres[0] || 'Film Noir');
  const [filterMode, setFilterMode] = useState<'all' | 'watched' | 'unwatched'>('all');

  // Fallback if selectedGenre was edited and no longer exists
  const activeGenre = allGenres.includes(selectedGenre) ? selectedGenre : (allGenres[0] || selectedGenre);

  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const genreFilms = useMemo(() => {
    return films.filter((f) => f.genres.includes(activeGenre));
  }, [films, activeGenre]);

  const displayedFilms = useMemo(() => {
    return genreFilms.filter((film) => {
      const isWatched = userStates[film.id]?.isWatched;
      if (filterMode === 'watched') return isWatched;
      if (filterMode === 'unwatched') return !isWatched;
      return true;
    });
  }, [genreFilms, filterMode, userStates]);

  const currentStats = getGenreStats(activeGenre);

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="border-b border-[#2d3b38] pb-8">
        <div className="text-xs uppercase tracking-widest text-[#7f9183] font-mono mb-2">
          Taxonomy of Form & Theme
        </div>
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#ddd5d0] font-medium">
          Film Genres & Traditions
        </h1>

        {/* Genre Selector Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {allGenres.map((genre) => {
            const stats = getGenreStats(genre);
            const isSelected = activeGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => handleSelectGenre(genre)}
                className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ddd5d0] font-semibold border border-[#7f9183]'
                    : 'bg-[#18201f] text-[#cfc0bd] hover:text-[#ddd5d0] border border-[#2d3b38]'
                }`}
              >
                <span>{genre}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#ddd5d0]' : 'text-[#b8b8aa]'}`}>
                  {stats.watched}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Genre Detail Strip */}
      <div className="border border-[#2d3b38] bg-[#141b1a] rounded-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#2d3b38]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#7f9183] mb-1">
              Active Category
            </div>
            <h2 className="font-serif-cinematic text-3xl text-[#ddd5d0]">
              {activeGenre}
            </h2>
            <div className="text-xs text-[#cfc0bd] font-mono mt-2">
              Catalog contains {genreFilms.length} studied films in this genre
            </div>
          </div>

          {/* Watched Statistics Box */}
          <div className="shrink-0 bg-[#18201f] border border-[#2d3b38] rounded p-4 w-full sm:w-64">
            <div className="text-[11px] uppercase tracking-widest font-mono text-[#cfc0bd] mb-1 flex items-center justify-between">
              <span>Watched in Genre</span>
              <span className="text-[#b8b8aa] font-semibold">{currentStats.percentage}%</span>
            </div>
            
            <div className="text-2xl font-serif-cinematic text-[#ddd5d0] mb-2">
              {currentStats.watched} <span className="text-[#7f9183] text-sm font-sans font-normal">/ {currentStats.total} films</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-[#101514] rounded-full overflow-hidden mb-2 border border-[#2d3b38]">
              <div
                className="h-full bg-[#7f9183] rounded-full transition-all duration-300"
                style={{ width: `${currentStats.percentage}%` }}
              />
            </div>

            <div className="text-[11px] font-mono text-[#cfc0bd] flex items-center gap-1.5 border-t border-[#2d3b38] pt-2">
              <Heart className="w-3 h-3 text-[#d97d7f] fill-[#d97d7f]/80" />
              <span>Hearted: {currentStats.liked}</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#cfc0bd]">
            <span className="text-[#7f9183] uppercase">Filter:</span>
            <div className="flex items-center gap-1 bg-[#101514] p-1 rounded border border-[#2d3b38]">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'all' ? 'bg-[#202b29] text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
                }`}
              >
                All ({genreFilms.length})
              </button>
              <button
                onClick={() => setFilterMode('watched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'watched' ? 'bg-[#586f6b]/40 text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
                }`}
              >
                Watched ({currentStats.watched})
              </button>
              <button
                onClick={() => setFilterMode('unwatched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterMode === 'unwatched' ? 'bg-[#202b29] text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
                }`}
              >
                Unwatched ({currentStats.total - currentStats.watched})
              </button>
            </div>
          </div>

          <span className="text-xs text-[#b8b8aa] font-mono hidden sm:inline">
            Showing {displayedFilms.length} films
          </span>
        </div>

        {/* Films Grid */}
        {displayedFilms.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-[#2d3b38] rounded text-[#7f9183] text-xs font-mono">
            No films match the "{filterMode}" status in {activeGenre}.
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
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
