import React, { useState, useMemo } from 'react';
import { Film, UserFilmState, ReactionType, DirectorInfo } from '../types/film';
import { DIRECTORS_DATA } from '../data/directors';
import { FilmCard } from './FilmCard';
import { Pencil, Check, X, RotateCcw } from 'lucide-react';

interface DirectorsViewProps {
  films: Film[];
  userStates: Record<string, UserFilmState>;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateFilmInfo?: (filmId: string, updates: Partial<Film>) => void;
  onResetFilmInfo?: (filmId: string) => void;
  isFilmEdited?: (filmId: string) => boolean;
  onUpdateDirectorInfo?: (directorId: string, updates: Partial<DirectorInfo>) => void;
  onResetDirectorInfo?: (directorId: string) => void;
  isDirectorEdited?: (directorId: string) => boolean;
  onDeleteFilm?: (filmId: string) => void;
  getDirectorStats: (directorIdOrName: string) => { total: number; watched: number; liked: number; percentage: number };
  directors?: DirectorInfo[];
  onOpenEditArchive?: (target?: { type: 'film' | 'director' | 'movement'; id: string }) => void;
  displayMode?: 'detailed' | 'posters';
  onSetDisplayMode?: (mode: 'detailed' | 'posters') => void;
  onUpdateGenres?: (filmId: string, genres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isFilmGenreEdited?: (filmId: string) => boolean;
}

// 6 Selected Directors requested: Hitchcock, Cocteau, Wenders, Bergman, Kurosawa, Lynch
const SELECTED_DIRECTOR_IDS = [
  'hitchcock',
  'cocteau',
  'wenders',
  'bergman',
  'kurosawa',
  'lynch'
] as const;

export const SELECTED_DIRECTORS: DirectorInfo[] = SELECTED_DIRECTOR_IDS.map((id) => {
  const found = DIRECTORS_DATA.find((d) => d.id === id);
  if (!found) {
    throw new Error(`Director not found in DIRECTORS_DATA: ${id}`);
  }
  return found;
});

export const DirectorsView: React.FC<DirectorsViewProps> = ({
  films,
  userStates,
  onToggleWatched,
  onSetReaction,
  onUpdateFilmInfo,
  onResetFilmInfo,
  isFilmEdited,
  onUpdateDirectorInfo,
  onResetDirectorInfo,
  isDirectorEdited,
  onDeleteFilm,
  getDirectorStats,
  directors,
  onOpenEditArchive,
  displayMode: propDisplayMode,
  onSetDisplayMode
}) => {
  const [selectedDirectorName, setSelectedDirectorName] = useState<string>('all');
  const [filterWatchedMode, setFilterWatchedMode] = useState<'all' | 'watched' | 'unwatched'>('all');

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

  // Inline editing state for director
  const [editingDirectorId, setEditingDirectorId] = useState<string | null>(null);
  const [dirName, setDirName] = useState('');
  const [dirNativeName, setDirNativeName] = useState('');
  const [dirNationality, setDirNationality] = useState('');
  const [dirLifespan, setDirLifespan] = useState('');
  const [dirStyle, setDirStyle] = useState('');
  const [dirThemesText, setDirThemesText] = useState('');
  const [dirQuote, setDirQuote] = useState('');
  const [dirAttachmentsText, setDirAttachmentsText] = useState('');

  const handleSelectDirector = (nameOrId: string) => {
    setSelectedDirectorName(nameOrId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const selectedDirectors = useMemo(() => {
    const source = directors && directors.length > 0 ? directors : DIRECTORS_DATA;
    return SELECTED_DIRECTOR_IDS.map((id) => {
      const found = source.find((d) => d.id === id);
      return found || DIRECTORS_DATA.find((d) => d.id === id)!;
    });
  }, [directors]);

  const visibleDirectors = selectedDirectorName === 'all'
    ? selectedDirectors
    : selectedDirectors.filter((d) => d.name === selectedDirectorName || d.id === selectedDirectorName);

  const startEditDirector = (d: DirectorInfo) => {
    setEditingDirectorId(d.id);
    setDirName(d.name);
    setDirNativeName(d.nativeName || '');
    setDirNationality(d.nationality);
    setDirLifespan(d.lifespan);
    setDirStyle(d.signatureStyle);
    setDirThemesText(d.thematicFixations.join(', '));
    setDirQuote(d.quote || '');
    setDirAttachmentsText((d.attachments || []).join('\n'));
  };

  const handleSaveDirector = (directorId: string) => {
    if (onUpdateDirectorInfo) {
      const parsedThemes = dirThemesText
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      onUpdateDirectorInfo(directorId, {
        name: dirName.trim() || undefined,
        nativeName: dirNativeName.trim() || undefined,
        nationality: dirNationality.trim() || undefined,
        lifespan: dirLifespan.trim() || undefined,
        signatureStyle: dirStyle.trim() || undefined,
        thematicFixations: parsedThemes.length > 0 ? parsedThemes : undefined,
        quote: dirQuote.trim() || undefined,
        attachments: dirAttachmentsText.split('\n').map((url) => url.trim()).filter(Boolean)
      });
    }
    setEditingDirectorId(null);
  };

  const handleResetDirector = (directorId: string) => {
    if (onResetDirectorInfo) {
      onResetDirectorInfo(directorId);
    }
    setEditingDirectorId(null);
  };

  return (
    <div className="space-y-10">
      
      {/* Header: Title is Selected Directors */}
      <div className="border-b border-[#cfc0bd] pb-6">
        <h1 className="font-serif-cinematic text-3xl sm:text-5xl text-[#222d2b] font-semibold">
          Selected Directors
        </h1>

        {/* Selected Directors Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleSelectDirector('all')}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedDirectorName === 'all'
                ? 'bg-[#586f6b] text-[#ffffff] font-semibold'
                : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
            }`}
          >
            All {selectedDirectors.length} Directors
          </button>

          {selectedDirectors.map((director) => {
            const stats = getDirectorStats(director.name);
            const isSelected = selectedDirectorName === director.name || selectedDirectorName === director.id;
            return (
              <button
                key={director.id}
                onClick={() => handleSelectDirector(director.name)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#586f6b] text-[#ffffff] font-semibold shadow-xs'
                    : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span>{director.name}</span>
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
                onClick={() => setFilterWatchedMode('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterWatchedMode === 'all' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterWatchedMode('watched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterWatchedMode === 'watched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
                }`}
              >
                Watched
              </button>
              <button
                onClick={() => setFilterWatchedMode('unwatched')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterWatchedMode === 'unwatched' ? 'bg-[#586f6b] text-[#ffffff] font-medium' : 'text-[#586f6b] hover:text-[#222d2b]'
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

      {/* Directors Dossiers */}
      <div className="space-y-16">
        {visibleDirectors.map((director) => {
          const stats = getDirectorStats(director.name);
          const isCurrentlyEditing = editingDirectorId === director.id;
          const directorEdited = isDirectorEdited ? isDirectorEdited(director.id) : false;

          // Filter director's films
          const directorFilms = films.filter((f) => {
            const matchesDir = f.director.toLowerCase().includes(director.name.toLowerCase()) || f.directorId === director.id;
            return matchesDir;
          });

          const displayedFilms = directorFilms.filter((f) => {
            const userState = userStates[f.id] || { isWatched: false, reaction: 'none' };
            if (filterWatchedMode === 'watched') return userState.isWatched;
            if (filterWatchedMode === 'unwatched') return !userState.isWatched;
            return true;
          });

          return (
            <section
              key={director.id}
              id={`director-${director.id}`}
              className="bg-[#ffffff] border border-[#cfc0bd] rounded-xl p-6 sm:p-8 shadow-xs"
            >
              {/* Director Dossier Top Banner */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#e3deda]">
                
                {isCurrentlyEditing ? (
                  /* INLINE EDIT MODE RIGHT ON THE SPOT */
                  <div className="flex-1 w-full space-y-3 bg-[#f7f5f3] p-4 rounded-lg border border-[#586f6b]">
                    <div className="flex items-center justify-between border-b border-[#cfc0bd] pb-2">
                      <div className="flex items-center gap-2">
                        <Pencil className="w-3.5 h-3.5 text-[#586f6b]" />
                        <span className="font-mono text-xs font-semibold text-[#222d2b] uppercase tracking-wider">
                          Editing Director Info
                        </span>
                        {directorEdited && (
                          <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded font-mono">
                            Edited
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setEditingDirectorId(null)}
                        className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Name
                        </label>
                        <input
                          type="text"
                          value={dirName}
                          onChange={(e) => setDirName(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-serif-cinematic font-semibold focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Native Name (optional)
                        </label>
                        <input
                          type="text"
                          value={dirNativeName}
                          onChange={(e) => setDirNativeName(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Nationality / Origin
                        </label>
                        <input
                          type="text"
                          value={dirNationality}
                          onChange={(e) => setDirNationality(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                          Lifespan / Active Years
                        </label>
                        <input
                          type="text"
                          value={dirLifespan}
                          onChange={(e) => setDirLifespan(e.target.value)}
                          className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                        Signature Style
                      </label>
                      <textarea
                        rows={2}
                        value={dirStyle}
                        onChange={(e) => setDirStyle(e.target.value)}
                        className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                        Thematic Fixations (comma separated)
                      </label>
                      <input
                        type="text"
                        value={dirThemesText}
                        onChange={(e) => setDirThemesText(e.target.value)}
                        className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#7f9183] mb-0.5 font-semibold">
                        Quote / Philosophy
                      </label>
                      <textarea
                        rows={2}
                        value={dirQuote}
                        onChange={(e) => setDirQuote(e.target.value)}
                        className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] italic font-serif-cinematic focus:border-[#586f6b] focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#cfc0bd] font-mono text-xs">
                      {directorEdited && onResetDirectorInfo ? (
                        <button
                          type="button"
                          onClick={() => handleResetDirector(director.id)}
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
                          onClick={() => setEditingDirectorId(null)}
                          className="px-3 py-1 rounded bg-[#ffffff] hover:bg-[#e3deda] text-[#586f6b] border border-[#cfc0bd] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSaveDirector(director.id)}
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
                      <span className="text-[#7f9183] uppercase tracking-widest font-semibold">{director.nationality}</span>
                      <span className="text-[#cfc0bd]">·</span>
                      <span>{director.lifespan}</span>
                      {director.nativeName && (
                        <>
                          <span className="text-[#cfc0bd]">·</span>
                          <span className="text-[#222d2b] font-medium">{director.nativeName}</span>
                        </>
                      )}
                      {directorEdited && (
                        <>
                          <span className="text-[#cfc0bd]">·</span>
                          <span className="text-amber-800 font-sans text-[10px]">edited</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h2 className="font-serif-cinematic text-3xl sm:text-4xl text-[#222d2b] font-semibold">
                        {director.name}
                      </h2>
                      
                      {/* Pen sign only like in film editing */}
                      <button
                        type="button"
                        onClick={() => startEditDirector(director)}
                        className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] hover:bg-[#f7f5f3] border border-transparent hover:border-[#cfc0bd] transition-colors cursor-pointer"
                        title={`Edit ${director.name}'s info on the spot`}
                        aria-label={`Edit ${director.name}'s info on the spot`}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </div>

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

                    {director.attachments && director.attachments.length > 0 && (
                      <div className="mt-3">
                        <div className="text-[10px] uppercase tracking-widest font-mono text-[#7f9183] mb-1">Attachments</div>
                        <div className="flex flex-wrap gap-2">
                          {director.attachments.map((url, index) => <a key={url + index} href={url} target="_blank" rel="noreferrer" className="text-xs text-[#586f6b] underline underline-offset-2 hover:text-[#222d2b]">Attachment {index + 1}</a>)}
                        </div>
                      </div>
                    )}
                  </div>
                )}

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
