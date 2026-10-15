import React, { useState } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { Check, Camera as CameraIcon, Film as FilmSlateIcon, Pencil, RotateCcw, Trash2 } from 'lucide-react';

interface FilmCardProps {
  film: Film;
  userState: UserFilmState;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateGenres?: (filmId: string, newGenres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isGenreEdited?: boolean;
  onDeleteFilm?: (filmId: string) => void;
}

const COMMON_GENRE_SUGGESTIONS = [
  'Film Noir',
  'Neo-Noir',
  'Psychological Thriller',
  'Drama',
  'Historical Drama',
  'Italian Neorealism',
  'French New Wave',
  'Surrealism',
  'Mystery',
  'Crime Drama',
  'Humanist',
  'Existential',
  'Avant-Garde'
];

export const FilmCard: React.FC<FilmCardProps> = ({
  film,
  userState,
  onToggleWatched,
  onSetReaction,
  onUpdateGenres,
  onResetGenres,
  isGenreEdited,
  onDeleteFilm
}) => {
  const isWatched = userState.isWatched;
  const isLiked = userState.reaction === 'like';
  const [imgError, setImgError] = useState(false);

  // Genre editing mode
  const [isEditingGenres, setIsEditingGenres] = useState(false);
  const [genreInput, setGenreInput] = useState(film.genres.join(', '));
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const posterUrl = film.posterUrl;

  const handleToggleHeart = () => {
    onSetReaction(film.id, isLiked ? 'none' : 'like');
  };

  const handleSaveGenres = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onUpdateGenres) return;
    const parsed = genreInput
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);
    if (parsed.length > 0) {
      onUpdateGenres(film.id, parsed);
    }
    setIsEditingGenres(false);
  };

  const handleUndoGenres = () => {
    if (onResetGenres) {
      onResetGenres(film.id);
      setIsEditingGenres(false);
    }
  };

  const handleAddSuggestion = (genre: string) => {
    const current = genreInput
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);
    if (!current.includes(genre)) {
      const next = [...current, genre].join(', ');
      setGenreInput(next);
    }
  };

  return (
    <div className="group relative bg-[#ffffff] border border-[#cfc0bd] hover:border-[#7f9183] rounded-lg p-4 sm:p-5 transition-all duration-150 flex flex-col justify-between shadow-sm hover:shadow-md">
      
      <div>
        {/* Top: Poster Thumbnail + Primary Meta Split */}
        <div className="flex gap-4 mb-3">
          
          {/* Vertical Movie Poster Frame (2:3 Aspect Ratio) */}
          <div className="w-24 sm:w-28 shrink-0 aspect-[2/3] rounded bg-[#f7f5f3] border border-[#cfc0bd] relative overflow-hidden shadow-sm">
            {posterUrl && !imgError ? (
              <img
                src={posterUrl}
                alt={`${film.title} original theatrical poster`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              /* High-fidelity Light Archival Fallback Poster in Coolors Palette */
              <div className="w-full h-full p-2.5 flex flex-col justify-between bg-gradient-to-b from-[#f7f5f3] to-[#ddd5d0] border border-[#cfc0bd] text-center font-mono">
                <div className="flex justify-between text-[#7f9183] text-[9px]">
                  <span>35MM</span>
                  <span>{film.releaseYear}</span>
                </div>
                <div className="my-auto">
                  <FilmSlateIcon className="w-5 h-5 mx-auto text-[#586f6b] mb-1 opacity-70" />
                  <span className="font-serif-cinematic text-[#222d2b] text-xs font-semibold line-clamp-3 leading-tight block">
                    {film.title}
                  </span>
                </div>
                <div className="text-[9px] text-[#586f6b] truncate font-medium">
                  {film.director.split(' ').pop()}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Title, Year, Watched Toggle, Emoji Heart, Delete */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-serif-cinematic text-xl text-[#222d2b] group-hover:text-[#586f6b] transition-colors leading-snug font-semibold truncate">
                    {film.title}
                  </h3>
                  {film.originalTitle && (
                    <p className="text-xs text-[#586f6b] italic truncate mt-0.5">
                      {film.originalTitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Watched Action Button */}
                  <button
                    type="button"
                    onClick={() => onToggleWatched(film.id)}
                    title={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
                      isWatched
                        ? 'bg-[#7f9183]/20 text-[#222d2b] border border-[#7f9183] font-semibold'
                        : 'bg-[#f7f5f3] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] hover:bg-[#ddd5d0]/50'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${isWatched ? 'opacity-100 text-[#586f6b]' : 'opacity-40'}`} />
                    <span className="whitespace-nowrap font-mono text-[10px]">
                      {isWatched ? 'Watched' : 'Unwatched'}
                    </span>
                  </button>

                  {/* Delete Film Button */}
                  {onDeleteFilm && (
                    <button
                      type="button"
                      onClick={() => setIsConfirmingDelete(true)}
                      title="Delete this film"
                      className="p-1 rounded text-[#7f9183] hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Unboxed Metadata (Zero-Pill Rule) */}
              <div className="text-[11px] text-[#586f6b] mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono">
                <span className="text-[#222d2b] font-semibold">{film.releaseYear}</span>
                <span aria-hidden="true" className="text-[#cfc0bd]">·</span>
                <span>{film.runtimeMinutes}m</span>
                <span aria-hidden="true" className="text-[#cfc0bd]">·</span>
                <span>{film.aspectRatio}</span>
                <span aria-hidden="true" className="text-[#cfc0bd]">·</span>
                <span>{film.colorProcess}</span>
              </div>
            </div>

            {/* Quick Heart Action Button - Just emoji, no text, supports unhearting */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleToggleHeart}
                title={isLiked ? 'Remove heart' : 'Add heart'}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-transform active:scale-90 cursor-pointer ${
                  isLiked
                    ? 'bg-[#ddd5d0]/60 border-[#b8b8aa] shadow-xs'
                    : 'bg-[#f7f5f3] border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span className="text-base select-none leading-none" role="img" aria-label={isLiked ? 'Hearted' : 'Unhearted'}>
                  {isLiked ? '❤️' : '🤍'}
                </span>
              </button>
            </div>

          </div>

        </div>

        {/* Delete Confirmation Alert Banner */}
        {isConfirmingDelete && (
          <div className="mb-3 p-2.5 rounded bg-red-50 border border-red-200 text-xs font-mono text-red-800 flex items-center justify-between gap-2 animate-fade-in">
            <span>Delete &ldquo;{film.title}&rdquo;?</span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsConfirmingDelete(false)}
                className="px-2 py-0.5 rounded bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onDeleteFilm) onDeleteFilm(film.id);
                  setIsConfirmingDelete(false);
                }}
                className="px-2 py-0.5 rounded bg-red-600 text-white font-semibold hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Film Credits Definition List */}
        <div className="space-y-1.5 text-xs border-t border-[#e3deda] pt-3 pb-3 mb-2 font-mono">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] font-semibold">
              Director
            </span>
            <span className="text-[#222d2b] font-semibold text-right truncate">
              {film.director}
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] font-semibold">
              Writer
            </span>
            <span className="text-[#586f6b] text-right truncate" title={film.writer}>
              {film.writer}
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] flex items-center gap-1 font-semibold">
              <CameraIcon className="w-2.5 h-2.5 text-[#586f6b]" />
              Cinematographer
            </span>
            <span className="text-[#586f6b] font-medium text-right truncate" title={film.cinematographer}>
              {film.cinematographer}
            </span>
          </div>

          {/* Genre Row with Inline Edit and Undo Edit affordance */}
          <div className="pt-1 border-t border-[#e3deda]">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] font-semibold">
                Genre
              </span>

              <div className="flex items-center gap-2">
                {/* Undo Edit Genre button if genres have been edited */}
                {isGenreEdited && onResetGenres && !isEditingGenres && (
                  <button
                    type="button"
                    onClick={handleUndoGenres}
                    title="Undo genre edits and restore original genres"
                    className="flex items-center gap-1 text-[10px] text-[#7f9183] hover:text-[#222d2b] underline cursor-pointer font-medium"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Undo edit</span>
                  </button>
                )}

                {onUpdateGenres && !isEditingGenres && (
                  <button
                    type="button"
                    onClick={() => {
                      setGenreInput(film.genres.join(', '));
                      setIsEditingGenres(true);
                    }}
                    title="Edit genres for this film"
                    className="flex items-center gap-1 text-[10px] text-[#586f6b] hover:text-[#222d2b] underline cursor-pointer font-medium"
                  >
                    <Pencil className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </button>
                )}
              </div>
            </div>

            {/* If NOT editing: clean unboxed genres */}
            {!isEditingGenres ? (
              <div className="text-[#222d2b] text-right mt-0.5 break-words font-medium">
                {film.genres.join(' · ')}
              </div>
            ) : (
              /* Inline Genre Editor */
              <form onSubmit={handleSaveGenres} className="mt-2 p-2 bg-[#f7f5f3] rounded border border-[#7f9183] space-y-2">
                <input
                  type="text"
                  value={genreInput}
                  onChange={(e) => setGenreInput(e.target.value)}
                  placeholder="Enter genres separated by comma..."
                  className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded px-2 py-1 text-xs text-[#222d2b] focus:border-[#586f6b] focus:outline-none font-mono"
                  autoFocus
                />

                {/* Quick Suggestion Tags */}
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {COMMON_GENRE_SUGGESTIONS.slice(0, 6).map((sg) => (
                    <button
                      key={sg}
                      type="button"
                      onClick={() => handleAddSuggestion(sg)}
                      className="px-1.5 py-0.5 rounded bg-[#ffffff] hover:bg-[#ddd5d0] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] cursor-pointer"
                    >
                      + {sg}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-1.5 pt-1">
                  {isGenreEdited && onResetGenres && (
                    <button
                      type="button"
                      onClick={handleUndoGenres}
                      className="px-2 py-0.5 text-[11px] text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      Revert
                    </button>
                  )}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <button
                      type="button"
                      onClick={() => setIsEditingGenres(false)}
                      className="px-2 py-0.5 text-[11px] text-[#586f6b] hover:text-[#222d2b] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-2.5 py-0.5 text-[11px] bg-[#586f6b] hover:bg-[#485c58] text-[#ffffff] font-semibold rounded cursor-pointer"
                    >
                      Save Genres
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {film.movementName && (
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] font-semibold">
                Movement
              </span>
              <span className="text-[#586f6b] text-right truncate font-medium">
                {film.movementName}
              </span>
            </div>
          )}
        </div>

        {/* Synopsis excerpt */}
        <p className="text-xs text-[#455854] line-clamp-2 leading-relaxed">
          {film.synopsis}
        </p>
      </div>

      {/* Card Footer: Watched Date if recorded */}
      {userState.watchedAt && isWatched && (
        <div className="border-t border-[#e3deda] pt-2 text-[10px] text-[#7f9183] font-mono mt-3">
          Watched on: {userState.watchedAt}
        </div>
      )}

    </div>
  );
};
