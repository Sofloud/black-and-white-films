import React, { useState, useEffect, useMemo } from 'react';
import { Film, DirectorInfo, MovementInfo } from '../types/film';
import { X, Check, RotateCcw, Search, Film as FilmIcon, User, Compass, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export type EditTab = 'films' | 'directors' | 'movements';

interface ArchiveEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: EditTab;
  initialTargetId?: string;
  films: Film[];
  directors: DirectorInfo[];
  movements: MovementInfo[];
  onUpdateFilm: (filmId: string, updates: Partial<Film>) => void;
  onResetFilm: (filmId: string) => void;
  isFilmEdited: (filmId: string) => boolean;
  onUpdateDirector: (directorId: string, updates: Partial<DirectorInfo>) => void;
  onResetDirector: (directorId: string) => void;
  isDirectorEdited: (directorId: string) => boolean;
  onUpdateMovement: (movementId: string, updates: Partial<MovementInfo>) => void;
  onResetMovement: (movementId: string) => void;
  isMovementEdited: (movementId: string) => boolean;
}

const COMMON_GENRES = [
  'Film Noir',
  'Neo-Noir',
  'Psychological Thriller',
  'Drama',
  'Historical Drama',
  'Surrealism',
  'French New Wave',
  'Italian Neorealism',
  'German Expressionism',
  'Crime Drama',
  'Mystery',
  'Fantasy',
  'Romance',
  'Poetic Realism',
  'Avant-Garde'
];

export const ArchiveEditModal: React.FC<ArchiveEditModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'films',
  initialTargetId,
  films,
  directors,
  movements,
  onUpdateFilm,
  onResetFilm,
  isFilmEdited,
  onUpdateDirector,
  onResetDirector,
  isDirectorEdited,
  onUpdateMovement,
  onResetMovement,
  isMovementEdited
}) => {
  const [activeTab, setActiveTab] = useState<EditTab>(initialTab);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Film State
  const [selectedFilmId, setSelectedFilmId] = useState<string>(() => {
    return initialTargetId && films.some((f) => f.id === initialTargetId)
      ? initialTargetId
      : films[0]?.id || '';
  });
  const [filmSearchQuery, setFilmSearchQuery] = useState('');
  const [filmFormData, setFilmFormData] = useState<Partial<Film>>({});

  // Director State
  const [selectedDirectorId, setSelectedDirectorId] = useState<string>(() => {
    return initialTargetId && directors.some((d) => d.id === initialTargetId)
      ? initialTargetId
      : directors[0]?.id || '';
  });
  const [directorFormData, setDirectorFormData] = useState<Partial<DirectorInfo>>({});
  const [thematicFixationsText, setThematicFixationsText] = useState('');

  // Movement State
  const [selectedMovementId, setSelectedMovementId] = useState<string>(() => {
    return initialTargetId && movements.some((m) => m.id === initialTargetId)
      ? initialTargetId
      : movements[0]?.id || '';
  });
  const [movementFormData, setMovementFormData] = useState<Partial<MovementInfo>>({});
  const [coreAestheticsText, setCoreAestheticsText] = useState('');

  // Sync tab and target if modal re-opens
  useEffect(() => {
    if (isOpen) {
      if (initialTab) setActiveTab(initialTab);
      if (initialTargetId) {
        if (initialTab === 'films' && films.some((f) => f.id === initialTargetId)) {
          setSelectedFilmId(initialTargetId);
        } else if (initialTab === 'directors' && directors.some((d) => d.id === initialTargetId)) {
          setSelectedDirectorId(initialTargetId);
        } else if (initialTab === 'movements' && movements.some((m) => m.id === initialTargetId)) {
          setSelectedMovementId(initialTargetId);
        }
      }
    }
  }, [isOpen, initialTab, initialTargetId, films, directors, movements]);

  // Load current film into form
  const currentFilm = useMemo(() => {
    return films.find((f) => f.id === selectedFilmId) || films[0];
  }, [films, selectedFilmId]);

  useEffect(() => {
    if (currentFilm) {
      setFilmFormData({
        title: currentFilm.title,
        originalTitle: currentFilm.originalTitle || '',
        releaseYear: currentFilm.releaseYear,
        director: currentFilm.director,
        directorId: currentFilm.directorId,
        writer: currentFilm.writer,
        cinematographer: currentFilm.cinematographer,
        genres: [...currentFilm.genres],
        movementId: currentFilm.movementId || '',
        movementName: currentFilm.movementName || '',
        runtimeMinutes: currentFilm.runtimeMinutes,
        aspectRatio: currentFilm.aspectRatio,
        colorProcess: currentFilm.colorProcess,
        synopsis: currentFilm.synopsis,
        historicalSignificance: currentFilm.historicalSignificance || '',
        cinematographyAnalysis: currentFilm.cinematographyAnalysis || '',
        keyScene: currentFilm.keyScene || '',
        posterUrl: currentFilm.posterUrl || ''
      });
    }
  }, [currentFilm]);

  // Load current director into form
  const currentDirector = useMemo(() => {
    return directors.find((d) => d.id === selectedDirectorId) || directors[0];
  }, [directors, selectedDirectorId]);

  useEffect(() => {
    if (currentDirector) {
      setDirectorFormData({
        name: currentDirector.name,
        nativeName: currentDirector.nativeName || '',
        lifespan: currentDirector.lifespan,
        nationality: currentDirector.nationality,
        signatureStyle: currentDirector.signatureStyle,
        thematicFixations: [...currentDirector.thematicFixations],
        quote: currentDirector.quote
      });
      setThematicFixationsText(currentDirector.thematicFixations.join('\n'));
    }
  }, [currentDirector]);

  // Load current movement into form
  const currentMovement = useMemo(() => {
    return movements.find((m) => m.id === selectedMovementId) || movements[0];
  }, [movements, selectedMovementId]);

  useEffect(() => {
    if (currentMovement) {
      setMovementFormData({
        name: currentMovement.name,
        era: currentMovement.era,
        timelineStartYear: currentMovement.timelineStartYear,
        timelineEndYear: currentMovement.timelineEndYear,
        originCountry: currentMovement.originCountry,
        manifesto: currentMovement.manifesto,
        historicalContext: currentMovement.historicalContext,
        visualMotif: { ...currentMovement.visualMotif }
      });
      setCoreAestheticsText(currentMovement.coreAesthetics.join('\n'));
    }
  }, [currentMovement]);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  if (!isOpen) return null;

  // Filtered film selection list
  const filteredFilms = films.filter((f) => {
    if (!filmSearchQuery.trim()) return true;
    const q = filmSearchQuery.toLowerCase();
    return (
      f.title.toLowerCase().includes(q) ||
      f.director.toLowerCase().includes(q) ||
      f.releaseYear.toString().includes(q)
    );
  });

  const currentFilmIndex = films.findIndex((f) => f.id === currentFilm?.id);
  const handlePrevFilm = () => {
    if (currentFilmIndex > 0) {
      setSelectedFilmId(films[currentFilmIndex - 1].id);
    }
  };
  const handleNextFilm = () => {
    if (currentFilmIndex < films.length - 1) {
      setSelectedFilmId(films[currentFilmIndex + 1].id);
    }
  };

  // Save Handlers
  const handleSaveFilm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentFilm) return;

    // sync movement name if movementId changed
    const selectedMv = movements.find((m) => m.id === filmFormData.movementId);
    const updates: Partial<Film> = {
      ...filmFormData,
      movementName: selectedMv ? selectedMv.name : filmFormData.movementName
    };

    onUpdateFilm(currentFilm.id, updates);
    showToast(`Updated description & metadata for "${updates.title || currentFilm.title}"`);
  };

  const handleResetFilm = () => {
    if (!currentFilm) return;
    onResetFilm(currentFilm.id);
    showToast(`Reverted "${currentFilm.title}" to original archive record`);
  };

  const handleSaveDirector = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDirector) return;

    const parsedThemes = thematicFixationsText
      .split('\n')
      .map((t) => t.trim())
      .filter(Boolean);

    const updates: Partial<DirectorInfo> = {
      ...directorFormData,
      thematicFixations: parsedThemes.length > 0 ? parsedThemes : currentDirector.thematicFixations
    };

    onUpdateDirector(currentDirector.id, updates);
    showToast(`Updated dossier & style description for ${updates.name || currentDirector.name}`);
  };

  const handleResetDirector = () => {
    if (!currentDirector) return;
    onResetDirector(currentDirector.id);
    showToast(`Reverted ${currentDirector.name} to default dossier`);
  };

  const handleSaveMovement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMovement) return;

    const parsedAesthetics = coreAestheticsText
      .split('\n')
      .map((a) => a.trim())
      .filter(Boolean);

    const updates: Partial<MovementInfo> = {
      ...movementFormData,
      coreAesthetics: parsedAesthetics.length > 0 ? parsedAesthetics : currentMovement.coreAesthetics
    };

    onUpdateMovement(currentMovement.id, updates);
    showToast(`Updated manifesto & description for ${updates.name || currentMovement.name}`);
  };

  const handleResetMovement = () => {
    if (!currentMovement) return;
    onResetMovement(currentMovement.id);
    showToast(`Reverted ${currentMovement.name} to default archive data`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="archive-editor-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#ffffff] border border-[#cfc0bd] rounded-xl max-w-4xl w-full shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-[#cfc0bd] bg-[#ffffff] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7f9183] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#586f6b]" />
                Archive Curatorial Suite
              </span>
            </div>
            <h2 id="archive-editor-title" className="font-serif-cinematic text-2xl font-bold text-[#222d2b]">
              Edit Archive Information & Descriptions
            </h2>
            <p className="text-xs text-[#586f6b] mt-0.5 font-sans">
              Modify descriptions, synopses, styles, manifestos, and metadata across films, directors, and movements.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#7f9183] hover:text-[#222d2b] hover:bg-[#f7f5f3] rounded-lg transition-colors cursor-pointer"
            aria-label="Close editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Switcher Tabs */}
        <div className="px-6 pt-3 pb-0 border-b border-[#cfc0bd] bg-[#f7f5f3] flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('films')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-t border-x transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'films'
                ? 'bg-[#ffffff] text-[#222d2b] border-[#cfc0bd] border-b-transparent -mb-[1px]'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent hover:bg-[#ffffff]/50'
            }`}
          >
            <FilmIcon className="w-4 h-4 text-[#586f6b]" />
            <span>Films & Descriptions</span>
            <span className="font-mono text-[10px] text-[#7f9183] bg-[#e3deda]/60 px-1.5 py-0.5 rounded-full">
              {films.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('directors')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-t border-x transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'directors'
                ? 'bg-[#ffffff] text-[#222d2b] border-[#cfc0bd] border-b-transparent -mb-[1px]'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent hover:bg-[#ffffff]/50'
            }`}
          >
            <User className="w-4 h-4 text-[#586f6b]" />
            <span>Selected Directors</span>
            <span className="font-mono text-[10px] text-[#7f9183] bg-[#e3deda]/60 px-1.5 py-0.5 rounded-full">
              {directors.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('movements')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-t border-x transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'movements'
                ? 'bg-[#ffffff] text-[#222d2b] border-[#cfc0bd] border-b-transparent -mb-[1px]'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent hover:bg-[#ffffff]/50'
            }`}
          >
            <Compass className="w-4 h-4 text-[#586f6b]" />
            <span>Film Movements</span>
            <span className="font-mono text-[10px] text-[#7f9183] bg-[#e3deda]/60 px-1.5 py-0.5 rounded-full">
              {movements.length}
            </span>
          </button>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="p-3 bg-[#586f6b]/10 border border-[#586f6b] rounded-lg text-xs font-medium text-[#222d2b] flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
              <Check className="w-4 h-4 text-[#586f6b] shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* TAB 1: FILMS */}
          {activeTab === 'films' && (
            <div className="space-y-6">
              {/* Film Selector / Search Bar */}
              <div className="bg-[#f7f5f3] p-4 rounded-lg border border-[#cfc0bd] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#7f9183]" />
                    <input
                      type="text"
                      placeholder="Search films by title, director, or year..."
                      value={filmSearchQuery}
                      onChange={(e) => setFilmSearchQuery(e.target.value)}
                      className="w-full bg-[#ffffff] border border-[#cfc0bd] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#222d2b] placeholder-[#7f9183] focus:border-[#586f6b] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevFilm}
                      disabled={currentFilmIndex <= 0}
                      className="p-1.5 rounded border border-[#cfc0bd] bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      title="Previous Film"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-[11px] text-[#586f6b] whitespace-nowrap">
                      {currentFilmIndex + 1} of {films.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextFilm}
                      disabled={currentFilmIndex >= films.length - 1}
                      className="p-1.5 rounded border border-[#cfc0bd] bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      title="Next Film"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Film Picker Dropdown */}
                <div className="flex items-center gap-2">
                  <label htmlFor="film-selector" className="text-xs font-semibold text-[#222d2b] shrink-0 font-mono">
                    Select Film:
                  </label>
                  <select
                    id="film-selector"
                    value={selectedFilmId}
                    onChange={(e) => setSelectedFilmId(e.target.value)}
                    className="flex-1 bg-[#ffffff] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] font-medium focus:border-[#586f6b] focus:outline-none"
                  >
                    {filteredFilms.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.title} ({f.releaseYear}) — dir. {f.director} {isFilmEdited(f.id) ? ' [Edited]' : ''}
                      </option>
                    ))}
                  </select>

                  {currentFilm && isFilmEdited(currentFilm.id) && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-100 text-amber-900 border border-amber-300 whitespace-nowrap">
                      Custom Edits
                    </span>
                  )}
                </div>
              </div>

              {/* Film Form */}
              {currentFilm && (
                <form onSubmit={handleSaveFilm} className="space-y-5">
                  {/* Row: Title & Original Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Film Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={filmFormData.title || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, title: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Original Foreign Title
                      </label>
                      <input
                        type="text"
                        value={filmFormData.originalTitle || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, originalTitle: e.target.value })}
                        placeholder="e.g. Les quatre cents coups, Shichinin no Samurai"
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row: Technical specs: Year and Runtime (Aspect Ratio and Color Process removed) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Year *
                      </label>
                      <input
                        type="number"
                        required
                        min="1880"
                        max="2035"
                        value={filmFormData.releaseYear || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, releaseYear: parseInt(e.target.value, 10) || 1900 })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Runtime (min) *
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="900"
                        value={filmFormData.runtimeMinutes || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, runtimeMinutes: parseInt(e.target.value, 10) || 90 })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row: Key Creators */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Director *
                      </label>
                      <input
                        type="text"
                        required
                        value={filmFormData.director || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, director: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Screenwriter *
                      </label>
                      <input
                        type="text"
                        required
                        value={filmFormData.writer || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, writer: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Cinematographer *
                      </label>
                      <input
                        type="text"
                        required
                        value={filmFormData.cinematographer || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, cinematographer: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row: Movement & Poster URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Film Movement
                      </label>
                      <select
                        value={filmFormData.movementId || ''}
                        onChange={(e) => {
                          const mId = e.target.value;
                          const mv = movements.find((m) => m.id === mId);
                          setFilmFormData({
                            ...filmFormData,
                            movementId: mId,
                            movementName: mv ? mv.name : ''
                          });
                        }}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none font-medium"
                      >
                        <option value="">None / Unassigned</option>
                        {movements.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name} ({m.era})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Poster Image URL
                      </label>
                      <input
                        type="url"
                        value={filmFormData.posterUrl || ''}
                        onChange={(e) => setFilmFormData({ ...filmFormData, posterUrl: e.target.value })}
                        placeholder="https://..."
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Genres Editor */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Genres (comma separated)
                    </label>
                    <input
                      type="text"
                      value={(filmFormData.genres || []).join(', ')}
                      onChange={(e) => {
                        const parsed = e.target.value
                          .split(',')
                          .map((g) => g.trim())
                          .filter(Boolean);
                        setFilmFormData({ ...filmFormData, genres: parsed });
                      }}
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none mb-2"
                    />
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      {COMMON_GENRES.slice(0, 8).map((genre) => (
                        <button
                          key={genre}
                          type="button"
                          onClick={() => {
                            const cur = filmFormData.genres || [];
                            if (!cur.includes(genre)) {
                              setFilmFormData({ ...filmFormData, genres: [...cur, genre] });
                            }
                          }}
                          className="px-2 py-0.5 rounded bg-[#f7f5f3] hover:bg-[#ddd5d0] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd] transition-colors cursor-pointer"
                        >
                          + {genre}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Synopsis / Description */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase">
                        Plot Synopsis & Overview *
                      </label>
                      <span className="text-[10px] text-[#7f9183] font-mono">
                        {(filmFormData.synopsis || '').length} characters
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={filmFormData.synopsis || ''}
                      onChange={(e) => setFilmFormData({ ...filmFormData, synopsis: e.target.value })}
                      placeholder="Enter film plot synopsis and overview..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs sm:text-sm text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Historical Significance Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Historical Significance & Critical Context
                    </label>
                    <textarea
                      rows={3}
                      value={filmFormData.historicalSignificance || ''}
                      onChange={(e) => setFilmFormData({ ...filmFormData, historicalSignificance: e.target.value })}
                      placeholder="Why is this film pivotal to cinema history?"
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Cinematography Analysis */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Cinematography & Visual Analysis
                    </label>
                    <textarea
                      rows={3}
                      value={filmFormData.cinematographyAnalysis || ''}
                      onChange={(e) => setFilmFormData({ ...filmFormData, cinematographyAnalysis: e.target.value })}
                      placeholder="Lighting, framing, camera movement, lens choices..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Key Scene */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Key Scene Study
                    </label>
                    <textarea
                      rows={2}
                      value={filmFormData.keyScene || ''}
                      onChange={(e) => setFilmFormData({ ...filmFormData, keyScene: e.target.value })}
                      placeholder="Describe the defining sequence..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#cfc0bd]">
                    <div>
                      {isFilmEdited(currentFilm.id) && (
                        <button
                          type="button"
                          onClick={handleResetFilm}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded transition-colors cursor-pointer font-medium"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Revert to Original Film Data</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-medium text-[#586f6b] hover:text-[#222d2b] transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-[#ffffff] bg-[#586f6b] hover:bg-[#485c58] rounded shadow-xs transition-colors cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Film Changes</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: DIRECTORS */}
          {activeTab === 'directors' && (
            <div className="space-y-6">
              {/* Director Selector Pills */}
              <div className="bg-[#f7f5f3] p-4 rounded-lg border border-[#cfc0bd]">
                <label className="block text-xs font-semibold text-[#222d2b] font-mono mb-2">
                  Select Director to Edit:
                </label>
                <div className="flex flex-wrap gap-2">
                  {directors.map((d) => {
                    const isSelected = d.id === selectedDirectorId;
                    const edited = isDirectorEdited(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDirectorId(d.id)}
                        className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#586f6b] text-[#ffffff] font-semibold shadow-xs'
                            : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd]'
                        }`}
                      >
                        <span>{d.name}</span>
                        {edited && (
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-amber-500'}`} title="Custom edits active" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Director Form */}
              {currentDirector && (
                <form onSubmit={handleSaveDirector} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Director Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={directorFormData.name || ''}
                        onChange={(e) => setDirectorFormData({ ...directorFormData, name: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Native / Birth Script Name
                      </label>
                      <input
                        type="text"
                        value={directorFormData.nativeName || ''}
                        onChange={(e) => setDirectorFormData({ ...directorFormData, nativeName: e.target.value })}
                        placeholder="e.g. 黒澤 明, Jean Maurice Eugène Clément Cocteau"
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Lifespan *
                      </label>
                      <input
                        type="text"
                        required
                        value={directorFormData.lifespan || ''}
                        onChange={(e) => setDirectorFormData({ ...directorFormData, lifespan: e.target.value })}
                        placeholder="e.g. 1899 – 1980"
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Nationality *
                      </label>
                      <input
                        type="text"
                        required
                        value={directorFormData.nationality || ''}
                        onChange={(e) => setDirectorFormData({ ...directorFormData, nationality: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Signature Style Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Signature Style & Visual Aesthetic Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={directorFormData.signatureStyle || ''}
                      onChange={(e) => setDirectorFormData({ ...directorFormData, signatureStyle: e.target.value })}
                      placeholder="Describe camera work, staging, cutting style, atmosphere..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs sm:text-sm text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Thematic Fixations */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Thematic Fixations & Core Themes (one per line)
                    </label>
                    <textarea
                      rows={4}
                      value={thematicFixationsText}
                      onChange={(e) => setThematicFixationsText(e.target.value)}
                      placeholder="Enter core themes separated by line..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs text-[#222d2b] leading-relaxed font-mono focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Quote */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Directorial Quote / Philosophy
                    </label>
                    <textarea
                      rows={2}
                      value={directorFormData.quote || ''}
                      onChange={(e) => setDirectorFormData({ ...directorFormData, quote: e.target.value })}
                      placeholder="Memorable quote from director..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs italic text-[#222d2b] leading-relaxed font-serif-cinematic focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#cfc0bd]">
                    <div>
                      {isDirectorEdited(currentDirector.id) && (
                        <button
                          type="button"
                          onClick={handleResetDirector}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded transition-colors cursor-pointer font-medium"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Revert to Original Dossier</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-medium text-[#586f6b] hover:text-[#222d2b] transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-[#ffffff] bg-[#586f6b] hover:bg-[#485c58] rounded shadow-xs transition-colors cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Director Changes</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: MOVEMENTS */}
          {activeTab === 'movements' && (
            <div className="space-y-6">
              {/* Movement Selector Pills */}
              <div className="bg-[#f7f5f3] p-4 rounded-lg border border-[#cfc0bd]">
                <label className="block text-xs font-semibold text-[#222d2b] font-mono mb-2">
                  Select Movement to Edit:
                </label>
                <div className="flex flex-wrap gap-2">
                  {movements.map((m) => {
                    const isSelected = m.id === selectedMovementId;
                    const edited = isMovementEdited(m.id);
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMovementId(m.id)}
                        className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#586f6b] text-[#ffffff] font-semibold shadow-xs'
                            : 'bg-[#ffffff] text-[#586f6b] hover:text-[#222d2b] border border-[#cfc0bd]'
                        }`}
                      >
                        <span>{m.name.split(' (')[0]}</span>
                        {edited && (
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-amber-500'}`} title="Custom edits active" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Movement Form */}
              {currentMovement && (
                <form onSubmit={handleSaveMovement} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Movement Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={movementFormData.name || ''}
                        onChange={(e) => setMovementFormData({ ...movementFormData, name: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Origin Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={movementFormData.originCountry || ''}
                        onChange={(e) => setMovementFormData({ ...movementFormData, originCountry: e.target.value })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Era Display String *
                      </label>
                      <input
                        type="text"
                        required
                        value={movementFormData.era || ''}
                        onChange={(e) => setMovementFormData({ ...movementFormData, era: e.target.value })}
                        placeholder="e.g. 1919 – 1933"
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        Start Year
                      </label>
                      <input
                        type="number"
                        value={movementFormData.timelineStartYear || ''}
                        onChange={(e) => setMovementFormData({ ...movementFormData, timelineStartYear: parseInt(e.target.value, 10) || 1920 })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                        End Year
                      </label>
                      <input
                        type="number"
                        value={movementFormData.timelineEndYear || ''}
                        onChange={(e) => setMovementFormData({ ...movementFormData, timelineEndYear: parseInt(e.target.value, 10) || 1930 })}
                        className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded px-3 py-1.5 text-xs text-[#222d2b] focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Historical Context Description (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-[#222d2b] font-mono uppercase mb-1">
                      Historical Context & Significance Description
                    </label>
                    <textarea
                      rows={4}
                      value={movementFormData.historicalContext || ''}
                      onChange={(e) => setMovementFormData({ ...movementFormData, historicalContext: e.target.value })}
                      placeholder="Historical backdrop, key filmmakers, cultural impact (optional)..."
                      className="w-full bg-[#f7f5f3] border border-[#cfc0bd] rounded p-3 text-xs sm:text-sm text-[#222d2b] leading-relaxed focus:border-[#586f6b] focus:bg-[#ffffff] focus:outline-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#cfc0bd]">
                    <div>
                      {isMovementEdited(currentMovement.id) && (
                        <button
                          type="button"
                          onClick={handleResetMovement}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded transition-colors cursor-pointer font-medium"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Revert to Original Movement Record</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-medium text-[#586f6b] hover:text-[#222d2b] transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-[#ffffff] bg-[#586f6b] hover:bg-[#485c58] rounded shadow-xs transition-colors cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Movement Changes</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
