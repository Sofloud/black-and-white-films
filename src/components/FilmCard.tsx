import React, { useEffect, useState } from 'react';
import { Film, UserFilmState, ReactionType } from '../types/film';
import { Check, ExternalLink, Pencil, Star, Trash2, X } from 'lucide-react';

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

export const FilmCard: React.FC<FilmCardProps> = ({ film, userState, onToggleWatched, onSetReaction, onUpdateFilmInfo, onResetFilmInfo, isFilmEdited = false, onDeleteFilm, displayMode = 'detailed' }) => {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [title, setTitle] = useState(film.title);
  const [year, setYear] = useState(film.releaseYear);
  const [runtime, setRuntime] = useState(film.runtimeMinutes);
  const [director, setDirector] = useState(film.director);
  const [writer, setWriter] = useState(film.writer);
  const [cinematographer, setCinematographer] = useState(film.cinematographer);
  const [movement, setMovement] = useState(film.movementName || '');
  const [genres, setGenres] = useState(film.genres.join(', '));
  const [synopsis, setSynopsis] = useState(film.synopsis);
  const [link, setLink] = useState(film.link || '');
  const isWatched = userState.isWatched;
  const isLiked = userState.reaction === 'like';

  useEffect(() => {
    setTitle(film.title); setYear(film.releaseYear); setRuntime(film.runtimeMinutes); setDirector(film.director);
    setWriter(film.writer); setCinematographer(film.cinematographer); setMovement(film.movementName || '');
    setGenres(film.genres.join(', ')); setSynopsis(film.synopsis); setLink(film.link || '');
  }, [film]);

  const startEdit = () => { setExpanded(true); setEditing(true); };
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateFilmInfo?.(film.id, {
      title: title.trim() || film.title, releaseYear: Number(year) || film.releaseYear, runtimeMinutes: Number(runtime) || film.runtimeMinutes,
      director: director.trim() || film.director, writer: writer.trim() || film.writer, cinematographer: cinematographer.trim() || film.cinematographer,
      movementName: movement.trim() || undefined, genres: genres.split(',').map(g => g.trim()).filter(Boolean), synopsis: synopsis.trim() || film.synopsis,
      link: link.trim() || undefined
    });
    setEditing(false);
  };
  const reset = () => { onResetFilmInfo?.(film.id); setEditing(false); };

  if (editing) return (
    <div className="relative bg-white border-2 border-[#586f6b] rounded-lg p-5 shadow-md">
      <form onSubmit={save} className="space-y-3">
        <div className="flex justify-between border-b border-[#e3deda] pb-2"><span className="font-mono text-xs font-semibold uppercase">Editing Film</span><button type="button" onClick={() => setEditing(false)}><X className="w-4 h-4" /></button></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label className="text-[10px] font-mono uppercase">Title<input value={title} onChange={e => setTitle(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Year<input type="number" value={year} onChange={e => setYear(Number(e.target.value))} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Runtime (min)<input type="number" value={runtime} onChange={e => setRuntime(Number(e.target.value))} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Director<input value={director} onChange={e => setDirector(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Writer<input value={writer} onChange={e => setWriter(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Cinematographer<input value={cinematographer} onChange={e => setCinematographer(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Movement<input value={movement} onChange={e => setMovement(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase">Genres<input value={genres} onChange={e => setGenres(e.target.value)} className="w-full editor-input" /></label>
          <label className="text-[10px] font-mono uppercase sm:col-span-2">Synopsis<textarea value={synopsis} onChange={e => setSynopsis(e.target.value)} className="w-full editor-input" rows={3} /></label>
          <label className="text-[10px] font-mono uppercase sm:col-span-2">Film link<input type="url" value={link} onChange={e => setLink(e.target.value)} placeholder="https://…" className="w-full editor-input" /></label>
        </div>
        <div className="flex justify-between pt-2 border-t border-[#e3deda]">
          <div>{isFilmEdited && onResetFilmInfo && <button type="button" onClick={reset} className="text-xs text-amber-800 underline">Revert original</button>}</div>
          <div className="flex gap-2"><button type="button" onClick={() => setEditing(false)} className="px-3 py-1 border rounded text-xs">Cancel</button><button className="px-3 py-1 bg-[#586f6b] text-white rounded text-xs font-semibold">Save</button></div>
        </div>
      </form>
    </div>
  );

  const poster = film.posterUrl;
  const posterClass = 'w-full h-full object-cover grayscale transition-[filter,transform] duration-300 group-hover:grayscale-0 group-hover:scale-105';
  return (
    <article className="group relative bg-white border border-[#cfc0bd] hover:border-[#7f9183] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all">
      <div className="flex gap-4 p-4 cursor-pointer" onClick={() => setExpanded(v => !v)}>
        <div className={`${displayMode === 'posters' ? 'w-full aspect-[2/3]' : 'w-24 sm:w-28 aspect-[2/3]'} shrink-0 rounded bg-[#f7f5f3] border border-[#cfc0bd] overflow-hidden relative`}>
          {poster ? <img src={poster} alt={`${film.title} poster`} className={posterClass} loading="lazy" referrerPolicy="no-referrer" /> : <div className="h-full flex items-center justify-center text-xs font-mono text-[#7f9183]">{film.releaseYear}</div>}
          {displayMode !== 'posters' && <div className="absolute top-2 left-2"><button type="button" onClick={e => { e.stopPropagation(); onToggleWatched(film.id); }} className={`p-1.5 rounded-full shadow-xs ${isWatched ? 'bg-[#586f6b] text-white' : 'bg-white/90 text-[#586f6b]'}`} title={isWatched ? 'Mark unwatched' : 'Mark watched'}><Check className="w-3.5 h-3.5" /></button></div>}
        </div>
        <div className={`${displayMode === 'posters' ? 'hidden' : 'flex'} flex-1 min-w-0 flex-col justify-between`}>
          <div>
            <div className="flex items-start justify-between gap-2"><h3 className="font-serif-cinematic text-xl font-semibold text-[#222d2b] truncate">{film.title}</h3><span className="text-[#7f9183] text-xs">{expanded ? '−' : '+'}</span></div>
            <div className="mt-2 text-[11px] font-mono text-[#586f6b] flex items-center gap-2"><span className="font-semibold text-[#222d2b]">{film.releaseYear}</span><span>·</span><span>{film.runtimeMinutes}m</span><span>·</span><span>{isWatched ? 'Watched' : 'Unwatched'}</span></div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <button type="button" onClick={e => { e.stopPropagation(); onSetReaction(film.id, isLiked ? 'none' : 'like'); }} className="p-1.5 rounded border border-[#cfc0bd]" title={isLiked ? 'Remove favourite' : 'Add favourite'}><Star className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} /></button>
            <div className="flex gap-1"><button type="button" onClick={e => { e.stopPropagation(); startEdit(); }} className="p-1.5 rounded hover:bg-[#f7f5f3]"><Pencil className="w-3.5 h-3.5" /></button>{onDeleteFilm && <button type="button" onClick={e => { e.stopPropagation(); setConfirmDelete(true); }} className="p-1.5 rounded hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>}</div>
          </div>
        </div>
      </div>

      {displayMode === 'posters' && <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10 text-white"><div className="font-serif-cinematic font-semibold text-sm">{film.title}</div><div className="text-[10px] font-mono">{film.releaseYear} · {film.runtimeMinutes}m</div></div>}

      {expanded && <div className="fixed inset-0 z-40 bg-black/55 flex items-center justify-center p-4 sm:p-6" onClick={() => setExpanded(false)}>
        <section role="dialog" aria-modal="true" aria-label={film.title} className="bg-white w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-xl border border-[#cfc0bd] shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="flex items-start justify-between gap-4 p-5 border-b border-[#e3deda]">
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-20 sm:w-28 aspect-[2/3] shrink-0 overflow-hidden rounded border border-[#cfc0bd] bg-[#f7f5f3]">
                {poster ? <img src={poster} alt={film.title} className="w-full h-full object-cover" /> : <div className="h-full flex items-center justify-center text-xs font-mono">{film.releaseYear}</div>}
              </div>
              <div className="min-w-0">
                <h2 className="font-serif-cinematic text-2xl sm:text-3xl font-semibold text-[#222d2b]">{film.title}</h2>
                <p className="mt-2 text-xs font-mono text-[#586f6b]">{film.releaseYear} · {film.runtimeMinutes}m · {isWatched ? 'Watched' : 'Unwatched'}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <button type="button" onClick={() => onSetReaction(film.id, isLiked ? 'none' : 'like')} className="p-2 rounded border border-[#cfc0bd] text-[#586f6b]" title={isLiked ? 'Remove favourite' : 'Add favourite'}><Star className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} /></button>
                  <button type="button" onClick={() => onToggleWatched(film.id)} className="px-3 py-2 rounded border border-[#cfc0bd] text-xs font-mono text-[#586f6b]">{isWatched ? 'Mark unwatched' : 'Mark watched'}</button>
                  <button type="button" onClick={() => { setExpanded(false); startEdit(); }} className="p-2 rounded border border-[#cfc0bd] text-[#586f6b]" title="Edit film"><Pencil className="w-4 h-4" /></button>
                  {onDeleteFilm && <button type="button" onClick={() => { setExpanded(false); setConfirmDelete(true); }} className="p-2 rounded border border-[#cfc0bd] text-red-700" title="Delete film"><Trash2 className="w-4 h-4" /></button>}
                </div>
              </div>
            </div>
            <button type="button" onClick={() => setExpanded(false)} className="p-2 rounded hover:bg-[#f7f5f3]" aria-label="Close film details"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-5 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div><span className="text-[#7f9183]">Director</span><div className="font-semibold text-[#222d2b]">{film.director}</div></div>
              <div><span className="text-[#7f9183]">Writer</span><div>{film.writer}</div></div>
              <div><span className="text-[#7f9183]">Cinematographer</span><div>{film.cinematographer}</div></div>
              <div><span className="text-[#7f9183]">Genre</span><div>{film.genres.join(' · ')}</div></div>
              {film.movementName && <div><span className="text-[#7f9183]">Movement</span><div>{film.movementName}</div></div>}
            </div>
            <div><h3 className="text-[10px] font-mono uppercase tracking-wider text-[#7f9183]">Synopsis</h3><p className="mt-1 leading-relaxed text-[#222d2b]">{film.synopsis}</p></div>
            {film.link && <a href={film.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#586f6b] underline"><ExternalLink className="w-3 h-3" />Film link</a>}
          </div>
        </section>
      </div>}

      {confirmDelete && <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setConfirmDelete(false)}><div className="bg-white rounded-xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}><h3 className="font-serif-cinematic text-lg font-semibold">Delete this film?</h3><p className="text-xs text-[#586f6b] mt-2">{film.title} will be removed from the archive.</p><div className="flex justify-end gap-2 mt-5"><button onClick={() => setConfirmDelete(false)} className="px-3 py-1 border rounded text-xs">Cancel</button><button onClick={() => { onDeleteFilm?.(film.id); setConfirmDelete(false); }} className="px-3 py-1 bg-red-600 text-white rounded text-xs">Delete</button></div></div></div>}
    </article>
  );
};
