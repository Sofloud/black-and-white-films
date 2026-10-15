import React, { useState, useMemo } from 'react';
import { Film, UserFilmState, ReactionType, DirectorInfo } from '../types/film';
import { DIRECTORS_DATA } from '../data/directors';
import { FilmCard } from './FilmCard';

interface DirectorsViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isFilmGenreEdited?: (filmId: string) => boolean;
  onDeleteFilm?: (filmId: string) => void;
  getDirectorStats: (directorIdOrName: string) => { total: number; watched: number; liked: number; percentage: number };
}

// Known supplementary director profiles for masterworks in catalog
const KNOWN_EXTRA_PROFILES: Record<string, Partial<DirectorInfo>> = {
  'Sergei Eisenstein': {
    nationality: 'Soviet Union',
    lifespan: '1898 – 1948',
    nativeName: 'Сергей Эйзенштейн',
    signatureStyle: 'Dialectical montage, intellectual cutting, geometric crowd choreography, and graphic collision of frames.',
    thematicFixations: ['Class struggle', 'Collective heroism', 'Revolutionary consciousness', 'Historical dialectics'],
    quote: 'Montage is an idea that arises from the collision of independent shots.'
  },
  'Dziga Vertov': {
    nationality: 'Soviet Union',
    lifespan: '1896 – 1954',
    nativeName: 'Дзига Вертов',
    signatureStyle: 'The Kino-Eye: rapid tempo editing, split screens, Dutch angles, extreme close-ups, and self-reflexive camera mechanics.',
    thematicFixations: ['Urban dynamism', 'Mechanized labor', 'Truth through the lens', 'Pure visual poetry'],
    quote: 'I am an eye. A mechanical eye. I, the machine, show you a world the way only I can see it.'
  },
  'Billy Wilder': {
    nationality: 'Austria / USA',
    lifespan: '1906 – 2002',
    signatureStyle: 'Razor-sharp cynical wit, claustrophobic high-contrast lighting, moral ambiguity, and relentless narrative velocity.',
    thematicFixations: ['Greed & betrayal', 'Corrupted desire', 'Suburban deception', 'The fatal trap of guilt'],
    quote: 'If you have a problem with the third act, the real problem is in the first act.'
  },
  'Jacques Tourneur': {
    nationality: 'France / USA',
    lifespan: '1904 – 1977',
    signatureStyle: 'Chiaroscuro shadow psychology, poetic fatalism, and terror suggested through sound and darkness rather than visual spectacle.',
    thematicFixations: ['Inevitability of the past', 'The seductive femme fatale', 'Nighttime isolation', 'Doom and redemption'],
    quote: 'The invisible is always more powerful than the visible.'
  },
  'Joseph H. Lewis': {
    nationality: 'USA',
    lifespan: '1907 – 2000',
    signatureStyle: 'Extreme low-budget stylistic bravura, deep silhouette compositions, and iconic single-take heist choreography.',
    thematicFixations: ['Obsessive criminal love', 'Auditory violence', 'Nighttime fog', 'Existential entrapment'],
    quote: 'Make every dollar count twice through the composition of shadows.'
  },
  'Vittorio De Sica': {
    nationality: 'Italy',
    lifespan: '1901 – 1974',
    signatureStyle: 'Lyrical post-war neorealism, non-professional casting, natural daylight, and compassionate observation of social hardship.',
    thematicFixations: ['Paternal bonds', 'Unemployment and dignity', 'Childhood innocence lost', 'Urban post-war survival'],
    quote: 'Cinema should never judge its subjects, only accompany them in their suffering and grace.'
  },
  'Roberto Rossellini': {
    nationality: 'Italy',
    lifespan: '1906 – 1977',
    signatureStyle: 'Urgent on-location documentary realism, episodic dramatic rhythm, raw 35mm newsreel grain, and unflinching emotional directness.',
    thematicFixations: ['Moral solidarity', 'Post-war devastation', 'Spiritual endurance', 'Human fragility'],
    quote: 'Realism is simply the artistic form of truth.'
  }
};

export const DirectorsView: React.FC<DirectorsViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateGenres,
  onResetGenres,
  isFilmGenreEdited,
  onDeleteFilm,
  getDirectorStats
}) => {
  const [selectedDirectorName, setSelectedDirectorName] = useState<string>('all');
  const [filterWatchedMode, setFilterWatchedMode] = useState<'all' | 'watched' | 'unwatched'>('all');

  const handleSelectDirector = (nameOrId: string) => {
    setSelectedDirectorName(nameOrId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Dynamically derive ALL unique directors from all films
  const allDirectors = useMemo(() => {
    const directorNames = new Set<string>();
    films.forEach((f) => {
      if (f.director) {
        directorNames.add(f.director.trim());
      }
    });

    const list: DirectorInfo[] = [];

    Array.from(directorNames).sort().forEach((name) => {
      // Check if known in DIRECTORS_DATA
      const existing = DIRECTORS_DATA.find(
        (d) => d.name.toLowerCase() === name.toLowerCase() || (d.id && fMatchesId(d.id, name))
      );

      if (existing) {
        list.push(existing);
      } else {
        const extra = KNOWN_EXTRA_PROFILES[name] || {};
        list.push({
          id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          name,
          lifespan: extra.lifespan || 'Classic Cinema Era',
          nationality: extra.nationality || 'International',
          nativeName: extra.nativeName,
          signatureStyle: extra.signatureStyle || 'Formal composition, thematic coherence, and auteur vision.',
          thematicFixations: extra.thematicFixations || ['Formal aesthetics', 'Human psychology', 'Dramatic tension'],
          quote: extra.quote || 'Cinema is the recording of human truth through light and movement.'
        });
      }
    });

    return list;
  }, [films]);

  function fMatchesId(id: string, name: string) {
    return name.toLowerCase().includes(id.toLowerCase());
  }

  const visibleDirectors = selectedDirectorName === 'all'
    ? allDirectors
    : allDirectors.filter((d) => d.name === selectedDirectorName || d.id === selectedDirectorName);

  return (
    <div className="space-y-10">
      
      {/* Header: Title is Directors, no "Auteur Theory & Formal Maestros" */}
      <div className="border-b border-[#cfc0bd] pb-6">
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">
          Directors
        </h1>

        {/* All Directors Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleSelectDirector('all')}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedDirectorName === 'all'
                ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
            }`}
          >
            All {allDirectors.length} Directors
          </button>

          {allDirectors.map((director) => {
            const stats = getDirectorStats(director.name);
            const isSelected = selectedDirectorName === director.name || selectedDirectorName === director.id;
            return (
              <button
                key={director.id}
                onClick={() => handleSelectDirector(director.name)}
                className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                    : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span>{director.name}</span>
                <span className={`font-mono text-[11px] ${isSelected ? 'text-[#ffffff]' : 'text-[#7f9183]'}`}>
                  {stats.watched}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Global Filter Within Director (Watched / Unwatched) */}
        <div className="flex items-center gap-3 mt-4 text-xs font-mono text-[#586f6b]">
          <span className="text-[#7f9183] uppercase tracking-wider text-[11px] font-semibold">Filter films:</span>
          <div className="flex items-center gap-1 bg-[#ffffff] p-1 rounded border border-[#cfc0bd]">
            <button
              onClick={() => setFilterWatchedMode('all')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterWatchedMode === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterWatchedMode('watched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterWatchedMode === 'watched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              Watched Only
            </button>
            <button
              onClick={() => setFilterWatchedMode('unwatched')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                filterWatchedMode === 'unwatched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
              }`}
            >
              Unwatched Only
            </button>
          </div>
        </div>
      </div>

      {/* Directors Showcase Sections */}
      <div className="space-y-12">
        {visibleDirectors.map((director) => {
          const stats = getDirectorStats(director.name);
          
          const directorFilms = films.filter((f) =>
            f.director.toLowerCase().includes(director.name.toLowerCase()) ||
            (f.directorId && director.id && f.directorId === director.id)
          );

          const displayedFilms = directorFilms.filter((film) => {
            const isWatched = userStates[film.id]?.isWatched;
            if (filterWatchedMode === 'watched') return isWatched;
            if (filterWatchedMode === 'unwatched') return !isWatched;
            return true;
          });

          return (
            <section
              key={director.id}
              className="border border-[#cfc0bd] bg-[#ffffff] rounded-lg p-6 sm:p-8 shadow-sm"
            >
              {/* Director Dossier Top Banner */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#e3deda]">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#586f6b] mb-1">
                    <span className="text-[#7f9183] uppercase tracking-widest font-semibold">{director.nationality}</span>
                    <span className="text-[#cfc0bd]">·</span>
                    <span>{director.lifespan}</span>
                    {director.nativeName && (
                      <>
                        <span className="text-[#cfc0bd]">·</span>
                        <span className="text-[#222d2b] font-medium">{director.nativeName}</span>
                      </>
                    )}
                  </div>

                  <h2 className="font-serif-cinematic text-3xl sm:text-4xl text-[#222d2b] font-semibold mb-2">
                    {director.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#455854] leading-relaxed mb-3">
                    <strong className="text-[#222d2b] font-semibold">Signature Style: </strong>
                    {director.signatureStyle}
                  </p>

                  {/* Thematic fixations (unboxed text) */}
                  <div className="text-xs text-[#586f6b] flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                    <span className="text-[#7f9183] font-mono text-[10px] uppercase tracking-wider font-semibold">Themes:</span>
                    {director.thematicFixations.map((t, idx) => (
                      <span key={t}>
                        {idx > 0 && <span className="text-[#cfc0bd] mr-2">·</span>}
                        <span className="text-[#222d2b] font-medium">{t}</span>
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  {director.quote && (
                    <p className="text-xs text-[#586f6b] italic font-serif-cinematic">
                      "{director.quote}"
                    </p>
                  )}
                </div>

                {/* Director Watched Counter Box */}
                <div className="shrink-0 bg-[#f7f5f3] border border-[#cfc0bd] rounded-lg p-4 w-full md:w-64">
                  <div className="text-[11px] uppercase tracking-widest font-mono text-[#586f6b] mb-1 flex items-center justify-between font-semibold">
                    <span>Watched in Archive</span>
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

              {/* Director Filmography Grid */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-cinematic text-lg text-[#222d2b] font-semibold">
                    Filmography in Archive ({displayedFilms.length})
                  </h3>
                </div>

                {displayedFilms.length === 0 ? (
                  <div className="text-center py-8 border border-dashed border-[#cfc0bd] rounded text-[#7f9183] text-xs font-mono">
                    No films match the "{filterWatchedMode}" status for {director.name}.
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
