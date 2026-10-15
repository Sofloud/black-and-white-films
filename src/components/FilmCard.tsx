import React, { useState, useEffect } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { Check, Camera as CameraIcon, Film as FilmSlateIcon, Pencil, RotateCcw, Trash2, X } from 'lucide-react';

export interface FilmCardProps {
  film: Film;
  userState: UserFilmState;
  onToggleWatched: (filmId: string) => void;
  onSetReaction: (filmId: string, reaction: ReactionType) => void;
  onUpdateFilmInfo?: (filmId: string, updates: Partial<Film>) => void;
  onResetFilmInfo?: (filmId: string) => void;
  isFilmEdited?: boolean;
  onDeleteFilm?: (filmId: string) => void;
  onOpenEditArchive?: (target?: { type: 'film' | 'director' | 'movement'; id: string }) => void;
  displayMode?: 'detailed' | 'posters';
  onUpdateGenres?: (filmId: string, newGenres: string[]) => void;
  onResetGenres?: (filmId: string) => void;
  isGenreEdited?: boolean;
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
  onUpdateFilmInfo,
  onResetFilmInfo,
  isFilmEdited = false,
  onDeleteFilm,
  onOpenEditArchive,
  displayMode = 'detailed'
}) => {
  const isWatched = userState.isWatched;
  const isLiked = userState.reaction === 'like';
  const [imgError, setImgError] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  // In-place on-the-spot editing state
  const [isInlineEditing, setIsInlineEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(film.title);
  const [editOriginalTitle, setEditOriginalTitle] = useState(film.originalTitle || '');
  const [editReleaseYear, setEditReleaseYear] = useState(film.releaseYear);
  const [editRuntimeMinutes, setEditRuntimeMinutes] = useState(film.runtimeMinutes);
  const [editDirector, setEditDirector] = useState(film.director);
  const [editWriter, setEditWriter] = useState(film.writer);
  const [editCinematographer, setEditCinematographer] = useState(film.cinematographer);
  const [editMovementName, setEditMovementName] = useState(film.movementName || '');
  const [editGenresText, setEditGenresText] = useState(film.genres.join(', '));
  const [editSynopsis, setEditSynopsis] = useState(film.synopsis);

  // Sync state if film prop changes
  useEffect(() => {
    setEditTitle(film.title);
    setEditOriginalTitle(film.originalTitle || '');
    setEditReleaseYear(film.releaseYear);
    setEditRuntimeMinutes(film.runtimeMinutes);
    setEditDirector(film.director);
    setEditWriter(film.writer);
    setEditCinematographer(film.cinematographer);
    setEditMovementName(film.movementName || '');
    setEditGenresText(film.genres.join(', '));
    setEditSynopsis(film.synopsis);
  }, [film]);

  const handleStartInlineEdit = () => {
    setEditTitle(film.title);
    setEditOriginalTitle(film.originalTitle || '');
    setEditReleaseYear(film.releaseYear);
    setEditRuntimeMinutes(film.runtimeMinutes);
    setEditDirector(film.director);
    setEditWriter(film.writer);
    setEditCinematographer(film.cinematographer);
    setEditMovementName(film.movementName || '');
    setEditGenresText(film.genres.join(', '));
    setEditSynopsis(film.synopsis);
    setIsInlineEditing(true);
  };

  const handleSaveInlineEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedGenres = editGenresText
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);

    const updates: Partial<Film> = {
      title: editTitle.trim() || film.title,
      originalTitle: editOriginalTitle.trim() || undefined,
      releaseYear: Number(editReleaseYear) || film.releaseYear,
      runtimeMinutes: Number(editRuntimeMinutes) || film.runtimeMinutes,
      director: editDirector.trim() || film.director,
      writer: editWriter.trim() || film.writer,
      cinematographer: editCinematographer.trim() || film.cinematographer,
      movementName: editMovementName.trim() || undefined,
      genres: parsedGenres.length > 0 ? parsedGenres : film.genres,
      synopsis: editSynopsis.trim() || film.synopsis
    };

    if (onUpdateFilmInfo) {
      onUpdateFilmInfo(film.id, updates);
    }
    setIsInlineEditing(false);
  };

  const handleCancelInlineEdit = () => {
    setEditTitle(film.title);
    setEditOriginalTitle(film.originalTitle || '');
    setEditReleaseYear(film.releaseYear);
    setEditRuntimeMinutes(film.runtimeMinutes);
    setEditDirector(film.director);
    setEditWriter(film.writer);
    setEditCinematographer(film.cinematographer);
    setEditMovementName(film.movementName || '');
    setEditGenresText(film.genres.join(', '));
    setEditSynopsis(film.synopsis);
    setIsInlineEditing(false);
  };

  const handleRevertInlineEdit = () => {
    if (onResetFilmInfo) {
      onResetFilmInfo(film.id);
    }
    setIsInlineEditing(false);
  };

  const handleAddGenreSuggestion = (genre: string) => {
    const current = editGenresText
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);
    if (!current.includes(genre)) {
      setEditGenresText([...current, genre].join(', '));
    }
  };

  const handleToggleHeart = () => {
    onSetReaction(film.id, isLiked ? 'none' : 'like');
  };

  const posterUrl = film.posterUrl;

  // Shared Delete Confirmation Dialog Modal
  const deleteConfirmationModal = isConfirmingDelete && (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`delete-dialog-title-${film.id}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={() => setIsConfirmingDelete(false)}
    >
      <div
        className="relative bg-[#ffffff] border border-[#cfc0bd] rounded-xl max-w-md w-full shadow-2xl p-6 text-[#222d2b] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsConfirmingDelete(false)}
          className="absolute top-4 right-4 text-[#7f9183] hover:text-[#222d2b] p-1.5 rounded-md hover:bg-[#f7f5f3] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-red-600">
            <Trash2 className="w-5 h-5" />
          </div>
          <div className="pr-6">
            <h3
              id={`delete-dialog-title-${film.id}`}
              className="font-serif-cinematic text-lg font-bold text-[#222d2b] leading-snug"
            >
              Are you sure you want to delete this film?
            </h3>
            <p className="text-xs text-[#586f6b] mt-1">
              &ldquo;<span className="font-semibold text-[#222d2b]">{film.title}</span>&rdquo; ({film.releaseYear}) directed by {film.director}
            </p>
          </div>
        </div>

        <div className="bg-[#f7f5f3] border border-[#cfc0bd] rounded-lg p-3.5 mb-5 text-xs text-[#586f6b] leading-relaxed">
          This film will be removed from your catalog, watched lists, and timeline statistics.
        </div>

        <div className="flex items-center justify-end gap-3 font-mono text-xs">
          <button
            type="button"
            onClick={() => setIsConfirmingDelete(false)}
            className="px-4 py-2 rounded-lg bg-[#ffffff] hover:bg-[#f7f5f3] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] transition-colors cursor-pointer font-medium"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (onDeleteFilm) onDeleteFilm(film.id);
              setIsConfirmingDelete(false);
            }}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-[#ffffff] font-semibold transition-colors cursor-pointer shadow-xs"
          >
            Delete Film
          </button>
        </div>
      </div>
    </div>
  );

  // -------------------------------------------------------------
  // INLINE EDITING VIEW (Used on the spot for both detailed & poster view)
  // -------------------------------------------------------------
  if (isInlineEditing) {
    return (
      <div className="relative bg-[#ffffff] border-2 border-[#586f6b] rounded-lg p-4 sm:p-5 shadow-md flex flex-col justify-between">
        {deleteConfirmationModal}

        <form onSubmit={handleSaveInlineEdit} className="space-y-3">
          <div className="flex items-center justify-between border-b border-[#e3deda] pb-2">
            <div className="flex items-center gap-2">
              <Pencil className="w-3.5 h-3.5 text-[#586f6b]" />
              <span className="font-mono text-xs font-semibold text-[#222d2b] uppercase tracking-wider">
                Editing Film
              </span>
              {isFilmEdited && (
                <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.2 rounded font-mono">
                  Custom Edits
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleCancelInlineEdit}
              className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] hover:bg-[#f7f5f3] cursor-pointer"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Original Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Title
              </label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-serif-cinematic font-semibold focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Original Title
              </label>
              <input
                type="text"
                value={editOriginalTitle}
                onChange={(e) => setEditOriginalTitle(e.target.value)}
                placeholder="Optional"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] italic focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
          </div>

          {/* Release Year & Runtime (Aspect Ratio & Color Process REMOVED as requested) */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Release Year
              </label>
              <input
                type="number"
                value={editReleaseYear}
                onChange={(e) => setEditReleaseYear(Number(e.target.value))}
                min="1890"
                max="2035"
                required
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Runtime (min)
              </label>
              <input
                type="number"
                value={editRuntimeMinutes}
                onChange={(e) => setEditRuntimeMinutes(Number(e.target.value))}
                min="1"
                max="999"
                required
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
          </div>

          {/* Director, Writer, Cinematographer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Director
              </label>
              <input
                type="text"
                value={editDirector}
                onChange={(e) => setEditDirector(e.target.value)}
                required
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Writer
              </label>
              <input
                type="text"
                value={editWriter}
                onChange={(e) => setEditWriter(e.target.value)}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
                Cinematographer
              </label>
              <input
                type="text"
                value={editCinematographer}
                onChange={(e) => setEditCinematographer(e.target.value)}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
              />
            </div>
          </div>

          {/* Movement */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
              Movement
            </label>
            <input
              type="text"
              value={editMovementName}
              onChange={(e) => setEditMovementName(e.target.value)}
              placeholder="e.g. French New Wave, Italian Neorealism"
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
            />
          </div>

          {/* Genres (with quick click tags) */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
              Genres (comma separated)
            </label>
            <input
              type="text"
              value={editGenresText}
              onChange={(e) => setEditGenresText(e.target.value)}
              placeholder="Drama, Film Noir, Surrealism"
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1 text-xs text-[#222d2b] font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
            />
            <div className="flex flex-wrap gap-1 mt-1 text-[10px]">
              {COMMON_GENRE_SUGGESTIONS.slice(0, 6).map((sg) => (
                <button
                  key={sg}
                  type="button"
                  onClick={() => handleAddGenreSuggestion(sg)}
                  className="px-1.5 py-0.5 rounded bg-[#f7f5f3] hover:bg-[#ddd5d0] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] cursor-pointer"
                >
                  + {sg}
                </button>
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7f9183] mb-0.5 font-semibold">
              Synopsis
            </label>
            <textarea
              rows={3}
              value={editSynopsis}
              onChange={(e) => setEditSynopsis(e.target.value)}
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-2.5 py-1.5 text-xs text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
            />
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-[#e3deda] font-mono text-xs">
            {isFilmEdited && onResetFilmInfo ? (
              <button
                type="button"
                onClick={handleRevertInlineEdit}
                className="flex items-center gap-1 text-[11px] text-amber-800 hover:text-amber-900 underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Revert original</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCancelInlineEdit}
                className="px-3 py-1 rounded bg-[#f7f5f3] hover:bg-[#ddd5d0] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1 px-3 py-1 bg-[#586f6b] hover:bg-[#485c58] text-[#ffffff] font-semibold rounded cursor-pointer shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // -------------------------------------------------------------
  // POSTERS ONLY VIEW ("just posters")
  // -------------------------------------------------------------
  if (displayMode === 'posters') {
    return (
      <div className="group relative bg-[#ffffff] border border-[#cfc0bd] hover:border-[#7f9183] rounded-lg overflow-hidden transition-all duration-200 shadow-xs hover:shadow-md flex flex-col">
        {deleteConfirmationModal}

        {/* 2:3 Vertical Poster Aspect Ratio */}
        <div className="relative aspect-[2/3] w-full bg-[#f7f5f3] overflow-hidden">
          {posterUrl && !imgError ? (
            <img
              src={posterUrl}
              alt={`${film.title} theatrical poster`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full p-3 flex flex-col justify-between bg-gradient-to-b from-[#f7f5f3] to-[#ddd5d0] border border-[#cfc0bd] text-center font-mono">
              <div className="flex justify-between text-[#7f9183] text-[9px]">
                <span>35MM</span>
                <span>{film.releaseYear}</span>
              </div>
              <div className="my-auto">
                <FilmSlateIcon className="w-6 h-6 mx-auto text-[#586f6b] mb-1 opacity-70" />
                <span className="font-serif-cinematic text-[#222d2b] text-sm font-semibold line-clamp-3 leading-tight block">
                  {film.title}
                </span>
              </div>
              <div className="text-[10px] text-[#586f6b] truncate font-medium">
                {film.director.split(' ').pop()}
              </div>
            </div>
          )}

          {/* Floating Top Badges: Watched (left) and Heart (right) */}
          <div className="absolute top-2 left-2 z-10">
            <button
              type="button"
              onClick={() => onToggleWatched(film.id)}
              title={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
              className={`p-1.5 rounded-full transition-all cursor-pointer backdrop-blur-xs shadow-xs ${
                isWatched
                  ? 'bg-[#586f6b] text-[#ffffff] border border-[#586f6b]'
                  : 'bg-white/85 hover:bg-white text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd]'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${isWatched ? 'text-[#ffffff]' : 'text-[#7f9183]'}`} />
            </button>
          </div>

          <div className="absolute top-2 right-2 z-10">
            <button
              type="button"
              onClick={handleToggleHeart}
              title={isLiked ? 'Remove heart' : 'Add heart'}
              className={`inline-flex items-center justify-center w-7 h-7 rounded-full border transition-transform active:scale-90 cursor-pointer backdrop-blur-xs shadow-xs ${
                isLiked
                  ? 'bg-white/95 border-[#b8b8aa]'
                  : 'bg-white/85 hover:bg-white border-[#cfc0bd]'
              }`}
            >
              <span className="text-sm select-none leading-none" role="img" aria-label={isLiked ? 'Hearted' : 'Unhearted'}>
                {isLiked ? '❤️' : '🤍'}
              </span>
            </button>
          </div>

          {/* Bottom Overlay with Title, Year, and Edit Pen Sign */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8 text-white flex flex-col justify-end transition-opacity duration-200">
            <div className="flex items-start justify-between gap-1.5">
              <div className="min-w-0 pr-1">
                <h4 className="font-serif-cinematic text-sm font-semibold leading-tight line-clamp-1 text-white" title={film.title}>
                  {film.title}
                </h4>
                <p className="text-[10px] text-white/80 font-mono mt-0.5 truncate">
                  {film.releaseYear} · {film.director.split(' ').pop()}
                </p>
              </div>

              {/* Action Buttons: Just Pen sign for editing on the spot, and Trash */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleStartInlineEdit}
                  title="Edit film info on the spot"
                  aria-label="Edit film info on the spot"
                  className="p-1 rounded bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 transition-colors cursor-pointer"
                >
                  <Pencil className="w-3 h-3" />
                </button>

                {onDeleteFilm && (
                  <button
                    type="button"
                    onClick={() => setIsConfirmingDelete(true)}
                    title="Delete this film"
                    className="p-1 rounded bg-black/40 hover:bg-red-900/80 text-white/80 hover:text-red-200 border border-white/20 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // POSTERS AND INFORMATION VIEW (Detailed Default View)
  // -------------------------------------------------------------
  return (
    <div className="group relative bg-[#ffffff] border border-[#cfc0bd] hover:border-[#7f9183] rounded-lg p-4 sm:p-5 transition-all duration-150 flex flex-col justify-between shadow-sm hover:shadow-md">
      {deleteConfirmationModal}

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
              /* Archival Fallback Poster in Coolors Palette */
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

          {/* Right Column: Title, Year, Watched Toggle, Emoji Heart, Edit Pen, Delete */}
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

                  {/* Edit Film Info Button - Edit right on the spot */}
                  <button
                    type="button"
                    onClick={handleStartInlineEdit}
                    title="Edit this film on the spot"
                    aria-label="Edit this film on the spot"
                    className="p-1 rounded text-[#7f9183] hover:text-[#222d2b] hover:bg-[#f7f5f3] border border-transparent hover:border-[#cfc0bd] transition-colors cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" />
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

              {/* Unboxed Metadata: Release Year & Runtime (Aspect Ratio & Color Process REMOVED) */}
              <div className="text-[11px] text-[#586f6b] mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono">
                <span className="text-[#222d2b] font-semibold">{film.releaseYear}</span>
                <span aria-hidden="true" className="text-[#cfc0bd]">·</span>
                <span>{film.runtimeMinutes}m</span>
                {isFilmEdited && (
                  <>
                    <span aria-hidden="true" className="text-[#cfc0bd]">·</span>
                    <span className="text-amber-800 font-sans text-[10px]">edited</span>
                  </>
                )}
              </div>
            </div>

            {/* Quick Heart Action Button */}
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

          {/* Genre Row: Clean display with NO separate edit button (editing handled in film edit) */}
          <div className="pt-1 border-t border-[#e3deda]">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[#7f9183] shrink-0 uppercase tracking-wider text-[10px] font-semibold">
                Genre
              </span>
              <span className="text-[#222d2b] text-right font-medium truncate" title={film.genres.join(' · ')}>
                {film.genres.join(' · ')}
              </span>
            </div>
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
