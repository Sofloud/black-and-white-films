import React, { useState } from 'react';
import { Film, MovementId, ReactionType } from '../types/film';
import { X } from 'lucide-react';
import { MOVEMENTS_DATA } from '../data/movements';

interface AddFilmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFilm: (filmData: Omit<Film, 'id'>, initialWatched?: boolean, initialReaction?: ReactionType) => void;
}

export const AddFilmModal: React.FC<AddFilmModalProps> = ({
  isOpen,
  onClose,
  onAddFilm
}) => {
  const [title, setTitle] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState<number>(1960);
  const [director, setDirector] = useState('');
  const [writer, setWriter] = useState('');
  const [cinematographer, setCinematographer] = useState('');
  const [genresInput, setGenresInput] = useState('');
  const [movementId, setMovementId] = useState<string>('none');
  const [runtimeMinutes, setRuntimeMinutes] = useState<number>(100);
  const [aspectRatio, setAspectRatio] = useState('1.37:1');
  const [colorProcess, setColorProcess] = useState<'Black & White' | 'Color' | 'Color & Black/White'>('Black & White');
  const [synopsis, setSynopsis] = useState('');
  const [cinematographyAnalysis, setCinematographyAnalysis] = useState('');
  const [historicalSignificance, setHistoricalSignificance] = useState('');
  const [keyScene, setKeyScene] = useState('');
  const [initialWatched, setInitialWatched] = useState(false);
  const [initialReaction, setInitialReaction] = useState<ReactionType>('none');

  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFormError('Please enter a film title.');
      return;
    }
    if (!director.trim()) {
      setFormError('Please enter the film director.');
      return;
    }
    if (!writer.trim()) {
      setFormError('Please enter the screenwriter.');
      return;
    }
    if (!cinematographer.trim()) {
      setFormError('Please enter the cinematographer (Director of Photography).');
      return;
    }
    if (!genresInput.trim()) {
      setFormError('Please enter at least one genre (e.g., Film Noir, Crime).');
      return;
    }

    const parsedGenres = genresInput
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);

    const movementObj = MOVEMENTS_DATA.find((m) => m.id === movementId);

    const newFilmData: Omit<Film, 'id'> = {
      title: title.trim(),
      originalTitle: originalTitle.trim() || undefined,
      releaseYear: Number(releaseYear) || new Date().getFullYear(),
      director: director.trim(),
      writer: writer.trim(),
      cinematographer: cinematographer.trim(),
      genres: parsedGenres.length > 0 ? parsedGenres : ['Drama'],
      movementId: movementId !== 'none' ? (movementId as MovementId) : undefined,
      movementName: movementObj ? movementObj.name.split(' (')[0] : undefined,
      runtimeMinutes: Number(runtimeMinutes) || 90,
      aspectRatio: aspectRatio.trim() || '1.37:1',
      colorProcess,
      synopsis: synopsis.trim() || 'Film added to personal curriculum for aesthetic study.',
      cinematographyAnalysis:
        cinematographyAnalysis.trim() ||
        'Formal analysis of camera staging, lighting temperature, and focal lengths.',
      historicalSignificance:
        historicalSignificance.trim() ||
        'Historical context within the auteur’s filmography and broader cinematic history.',
      keyScene: keyScene.trim() || 'Key sequence selected for formal stylistic breakdown.'
    };

    onAddFilm(newFilmData, initialWatched, initialReaction);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#ffffff] border border-[#cfc0bd] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-[#222d2b]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#586f6b] hover:text-[#222d2b] p-1 rounded hover:bg-[#f7f5f3] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#e3deda] pb-4 mb-6">
          <h2 className="font-serif-cinematic text-2xl sm:text-3xl text-[#222d2b] font-semibold">
            Add Film to Study Archive
          </h2>
          <p className="text-[#586f6b] text-xs mt-1">
            Input cinematic credits required for academic film study analysis.
          </p>
        </div>

        {formError && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded text-rose-700 text-xs font-mono">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          
          {/* Title & Original Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Film Title <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Cleo from 5 to 7"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Original Title (Optional)
              </label>
              <input
                type="text"
                value={originalTitle}
                onChange={(e) => setOriginalTitle(e.target.value)}
                placeholder="e.g. Cléo de 5 à 7"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>
          </div>

          {/* Director & Release Year */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[#455854] font-medium mb-1">
                Director <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="text"
                required
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                placeholder="e.g. Agnès Varda"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Release Year <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="number"
                required
                min={1895}
                max={2030}
                value={releaseYear}
                onChange={(e) => setReleaseYear(Number(e.target.value))}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
              />
            </div>
          </div>

          {/* Screenwriter & Cinematographer (DoP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Screenwriter(s) <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="text"
                required
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
                placeholder="e.g. Agnès Varda"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Cinematographer (DoP) <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="text"
                required
                value={cinematographer}
                onChange={(e) => setCinematographer(e.target.value)}
                placeholder="e.g. Jean Rabier, Alain Levent"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>
          </div>

          {/* Genres & Movement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Genre(s) (Comma separated) <span className="text-[#7f9183]">*</span>
              </label>
              <input
                type="text"
                required
                value={genresInput}
                onChange={(e) => setGenresInput(e.target.value)}
                placeholder="e.g. French New Wave, Real-Time Drama"
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Movement Classification
              </label>
              <select
                value={movementId}
                onChange={(e) => setMovementId(e.target.value)}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none cursor-pointer"
              >
                <option value="none">None / Independent Auteur</option>
                {MOVEMENTS_DATA.map((m) => (
                  <option key={m.id} value={m.id}>{m.name.split(' (')[0]} ({m.era})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Technical Specs: Runtime, Aspect Ratio, Color */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Runtime (Minutes)
              </label>
              <input
                type="number"
                min={1}
                value={runtimeMinutes}
                onChange={(e) => setRuntimeMinutes(Number(e.target.value))}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2 text-[#222d2b] font-mono focus:border-[#586f6b] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Aspect Ratio
              </label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2 text-[#222d2b] focus:border-[#586f6b] focus:outline-none cursor-pointer"
              >
                <option value="1.37:1">1.37:1 (Academy)</option>
                <option value="1.33:1">1.33:1 (Silent Standard)</option>
                <option value="1.66:1">1.66:1 (European Flat)</option>
                <option value="1.85:1">1.85:1 (American Flat)</option>
                <option value="2.35:1">2.35:1 (Anamorphic / Scope)</option>
                <option value="2.39:1">2.39:1 (Modern Scope)</option>
              </select>
            </div>

            <div>
              <label className="block text-[#455854] font-medium mb-1">
                Color Process
              </label>
              <select
                value={colorProcess}
                onChange={(e) => setColorProcess(e.target.value as any)}
                className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2 text-[#222d2b] focus:border-[#586f6b] focus:outline-none cursor-pointer"
              >
                <option value="Black & White">Black & White</option>
                <option value="Color">Color</option>
                <option value="Color & Black/White">Color & Black/White</option>
              </select>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <label className="block text-[#455854] font-medium mb-1">
              Synopsis
            </label>
            <textarea
              rows={2}
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              placeholder="Concise overview of premise and thematic conflict..."
              className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-2.5 text-[#222d2b] focus:border-[#586f6b] focus:outline-none"
            />
          </div>

          {/* Initial Status Checks - Emoji only, supports unhearting */}
          <div className="bg-[#f7f5f3] border border-[#cfc0bd] p-3 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-[#222d2b] font-medium">
              <input
                type="checkbox"
                checked={initialWatched}
                onChange={(e) => setInitialWatched(e.target.checked)}
                className="rounded border-[#cfc0bd] text-[#586f6b] focus:ring-0"
              />
              <span>Mark as Watched</span>
            </label>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setInitialReaction(initialReaction === 'like' ? 'none' : 'like')}
                title={initialReaction === 'like' ? 'Remove heart' : 'Add heart'}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-transform active:scale-90 cursor-pointer ${
                  initialReaction === 'like'
                    ? 'bg-[#ddd5d0]/60 border-[#b8b8aa]'
                    : 'bg-[#ffffff] border-[#cfc0bd] hover:border-[#b8b8aa]'
                }`}
              >
                <span className="text-base select-none leading-none">
                  {initialReaction === 'like' ? '❤️' : '🤍'}
                </span>
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e3deda]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#f7f5f3] hover:bg-[#e3deda] text-[#586f6b] hover:text-[#222d2b] rounded text-xs transition-colors cursor-pointer font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#586f6b] hover:bg-[#485c58] text-[#ffffff] font-semibold rounded text-xs transition-colors shadow-sm cursor-pointer"
            >
              Add Film to Archive
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
