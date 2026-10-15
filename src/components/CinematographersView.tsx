import React, { useState } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { CINEMATOGRAPHERS_DATA } from '../data/cinematographers';
import { FilmCard } from './FilmCard';
import { Camera, Heart } from 'lucide-react';

interface CinematographersViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  getCinematographerStats: (idOrName: string) => { total: number; watched: number; liked: number; percentage: number };
}

export const CinematographersView: React.FC<CinematographersViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateGenres,
  getCinematographerStats
}) => {
  const [selectedCinematographerId, setSelectedCinematographerId] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<'all' | 'watched' | 'unwatched'>('all');

  const handleSelectCinematographer = (id: string) => {
    setSelectedCinematographerId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const relevantCinematographers = CINEMATOGRAPHERS_DATA.filter((c) => {
    const stats = getCinematographerStats(c.id);
    if (selectedCinematographerId !== 'all') {
      return c.id === selectedCinematographerId;
    }
    return stats.total > 0;
  });

  return (
    <div className="space-y-12">
      
      {/* Header & Cinematography Discipline Context */}
      <div className="border-b border-[#2d3b38] pb-8">
        <div className="text-xs uppercase tracking-widest text-[#7f9183] font-mono mb-2">
          The Architecture of Light & Motion
        </div>
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#ddd5d0] font-medium">
          Directors of Photography
        </h1>

        {/* Quick Selection Ribbon */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleSelectCinematographer('all')}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedCinematographerId === 'all'
                ? 'bg-[#586f6b] text-[#ddd5d0] font-semibold border border-[#7f9183]'
                : 'bg-[#18201f] text-[#cfc0bd] hover:text-[#ddd5d0] border border-[#2d3b38]'
            }`}
          >
            All Masters
          </button>

          {CINEMATOGRAPHERS_DATA.filter((c) => getCinematographerStats(c.id).total > 0).map((dop) => {
            const stats = getCinematographerStats(dop.id);
            const isSelected = selectedCinematographerId === dop.id;
            return (
              <button
                key={dop.id}
                onClick={() => handleSelectCinematographer(dop.id)}
                className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ddd5d0] font-semibold border border-[#7f9183]'
                    : 'bg-[#18201f] text-[#cfc0bd] hover:text-[#ddd5d0] border border-[#2d3b38]'
                }`}
              >
                <span>{dop.name}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#ddd5d0]' : 'text-[#b8b8aa]'}`}>
                  {stats.watched}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Global Filter within Cinematographers */}
        <div className="flex items-center gap-3 mt-4 text-xs font-mono text-[#cfc0bd]">
          <span className="text-[#7f9183] uppercase tracking-wider text-[11px]">Filter films:</span>
          <div className="flex items-center gap-1 bg-[#141b1a] p-1 rounded border border-[#2d3b38]">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-[#202b29] text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('watched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'watched' ? 'bg-[#586f6b]/40 text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
              }`}
            >
              Watched Only
            </button>
            <button
              onClick={() => setFilterMode('unwatched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterMode === 'unwatched' ? 'bg-[#202b29] text-[#ddd5d0] font-medium' : 'text-[#cfc0bd] hover:text-[#ddd5d0]'
              }`}
            >
              Unwatched Only
            </button>
          </div>
        </div>
      </div>

      {/* Cinematographer Cards Feed */}
      <div className="space-y-16">
        {relevantCinematographers.map((dop) => {
          const stats = getCinematographerStats(dop.id);
          
          const dopFilms = films.filter(
            (f) =>
              f.cinematographerId === dop.id ||
              f.cinematographer.toLowerCase().includes(dop.name.toLowerCase())
          );

          const displayedFilms = dopFilms.filter((film) => {
            const isWatched = userStates[film.id]?.isWatched;
            if (filterMode === 'watched') return isWatched;
            if (filterMode === 'unwatched') return !isWatched;
            return true;
          });

          return (
            <section
              key={dop.id}
              className="border border-[#2d3b38] bg-[#141b1a] rounded-lg p-6 sm:p-8"
            >
              {/* Dossier Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#2d3b38]">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#b8b8aa] mb-1">
                    <span className="text-[#7f9183] uppercase tracking-widest">{dop.nationality}</span>
                    <span className="text-[#3d4f4b]">·</span>
                    <span>{dop.lifespan}</span>
                    <span className="text-[#3d4f4b]">·</span>
                    <span className="text-[#cfc0bd]">Director of Photography</span>
                  </div>

                  <h2 className="font-serif-cinematic text-3xl sm:text-4xl text-[#ddd5d0] mb-2 flex items-center gap-3">
                    <Camera className="w-6 h-6 text-[#7f9183] shrink-0" />
                    <span>{dop.name}</span>
                  </h2>

                  <div className="space-y-2 text-xs sm:text-sm text-[#cfc0bd] mt-3">
                    <p className="leading-relaxed">
                      <strong className="text-[#ddd5d0] font-medium">Lighting Philosophy: </strong>
                      {dop.lightingStyle}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-[#ddd5d0] font-medium">Camera Movement: </strong>
                      {dop.cameraPhilosophy}
                    </p>
                    <p className="text-xs text-[#b8b8aa] font-mono">
                      Signature Technique: {dop.keyTechnique}
                    </p>
                  </div>

                  {/* Frequent Collaborations */}
                  <div className="text-xs text-[#cfc0bd] flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
                    <span className="text-[#7f9183] font-mono text-[10px] uppercase tracking-wider">Collaborations:</span>
                    {dop.notableCollaborators.map((dir, idx) => (
                      <span key={dir}>
                        {idx > 0 && <span className="text-[#3d4f4b] mr-2">·</span>}
                        <span className="text-[#ddd5d0]">{dir}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Watched Statistics Box */}
                <div className="shrink-0 bg-[#18201f] border border-[#2d3b38] rounded p-4 w-full md:w-64">
                  <div className="text-[11px] uppercase tracking-widest font-mono text-[#cfc0bd] mb-1 flex items-center justify-between">
                    <span>Watched in Archive</span>
                    <span className="text-[#b8b8aa] font-semibold">{stats.percentage}%</span>
                  </div>
                  
                  <div className="text-2xl font-serif-cinematic text-[#ddd5d0] mb-2">
                    {stats.watched} <span className="text-[#7f9183] text-sm font-sans font-normal">/ {stats.total} films</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-[#101514] rounded-full overflow-hidden mb-3 border border-[#2d3b38]">
                    <div
                      className="h-full bg-[#7f9183] rounded-full transition-all duration-300"
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>

                  <div className="text-[11px] font-mono text-[#cfc0bd] flex items-center gap-1.5 border-t border-[#2d3b38] pt-2">
                    <Heart className="w-3 h-3 text-[#d97d7f] fill-[#d97d7f]/80" />
                    <span>Hearted: {stats.liked}</span>
                  </div>
                </div>
              </div>

              {/* Films by this Cinematographer */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-cinematic text-lg text-[#ddd5d0]">
                    Works in Archive ({displayedFilms.length})
                  </h3>
                </div>

                {displayedFilms.length === 0 ? (
                  <div className="text-center py-8 border border-dashed border-[#2d3b38] rounded text-[#7f9183] text-xs font-mono">
                    No films match the "{filterMode}" status for {dop.name}.
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

            </section>
          );
        })}
      </div>

    </div>
  );
};
