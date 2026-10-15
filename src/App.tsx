import React, { useState } from 'react';
import { useFilmStore } from './hooks/useFilmStore';
import { Header, ActiveTab } from './components/Header';
import { MovementTimelineView } from './components/MovementTimelineView';
import { DirectorsView } from './components/DirectorsView';
import { ReadingsView } from './components/ReadingsView';
import { CatalogView } from './components/CatalogView';
import { AddFilmModal } from './components/AddFilmModal';
import { ArchiveEditModal, EditTab } from './components/ArchiveEditModal';
import { StudyStatsRibbon } from './components/StudyStatsRibbon';
import { Film, ReactionType } from './types/film';

export default function App() {
  const {
    allFilms,
    allDirectors,
    allMovements,
    userStates,
    toggleWatched,
    setReaction,
    updateFilmInfo,
    resetFilmInfo,
    isFilmEdited,
    updateFilmGenres,
    resetFilmGenres,
    isFilmGenreEdited,
    updateDirectorInfo,
    resetDirectorInfo,
    isDirectorEdited,
    updateMovementInfo,
    resetMovementInfo,
    isMovementEdited,
    deleteFilm,
    addCustomFilm,
    getMovementStats,
    getDirectorStats,
    overallStats
  } = useFilmStore();

  const [activeTab, setActiveTab] = useState<ActiveTab>('movements');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditArchiveOpen, setIsEditArchiveOpen] = useState(false);
  const [editArchiveTarget, setEditArchiveTarget] = useState<{
    tab: EditTab;
    id?: string;
  }>({ tab: 'films' });

  const [displayMode, setDisplayMode] = useState<'detailed' | 'posters'>(() => {
    try {
      const stored = localStorage.getItem('cinema_display_mode');
      if (stored === 'posters' || stored === 'detailed') return stored;
    } catch {
      // ignore
    }
    return 'detailed';
  });

  const handleSetDisplayMode = (mode: 'detailed' | 'posters') => {
    setDisplayMode(mode);
    try {
      localStorage.setItem('cinema_display_mode', mode);
    } catch {
      // ignore
    }
  };

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenEditArchive = (target?: { type: 'film' | 'director' | 'movement'; id: string }) => {
    if (target) {
      const tabMap: Record<string, EditTab> = {
        film: 'films',
        director: 'directors',
        movement: 'movements'
      };
      setEditArchiveTarget({ tab: tabMap[target.type] || 'films', id: target.id });
    } else {
      if (activeTab === 'directors') {
        setEditArchiveTarget({ tab: 'directors' });
      } else if (activeTab === 'movements') {
        setEditArchiveTarget({ tab: 'movements' });
      } else {
        setEditArchiveTarget({ tab: 'films' });
      }
    }
    setIsEditArchiveOpen(true);
  };

  const handleAddFilm = (
    filmData: Omit<Film, 'id'>,
    initialWatched?: boolean,
    initialReaction?: ReactionType
  ) => {
    const newId = addCustomFilm(filmData);
    if (initialWatched) {
      toggleWatched(newId);
    }
    if (initialReaction && initialReaction !== 'none') {
      setReaction(newId, initialReaction);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f3] text-[#222d2b] film-grain flex flex-col selection:bg-[#7f9183]/30 selection:text-[#222d2b]">
      
      {/* 3-Zone Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Progress Ribbon */}
      <StudyStatsRibbon
        overallStats={overallStats}
        onExploreCatalog={() => handleSelectTab('catalog')}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'movements' && (
          <MovementTimelineView
            films={allFilms}
            movements={allMovements}
            userStates={userStates}
            onToggleWatched={toggleWatched}
            onSetReaction={setReaction}
            onUpdateFilmInfo={updateFilmInfo}
            onResetFilmInfo={resetFilmInfo}
            isFilmEdited={isFilmEdited}
            onUpdateMovementInfo={updateMovementInfo}
            onResetMovementInfo={resetMovementInfo}
            isMovementEdited={isMovementEdited}
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
            getMovementStats={getMovementStats}
            onOpenEditArchive={handleOpenEditArchive}
            displayMode={displayMode}
            onSetDisplayMode={handleSetDisplayMode}
          />
        )}

        {activeTab === 'directors' && (
          <DirectorsView
            films={allFilms}
            directors={allDirectors}
            userStates={userStates}
            onToggleWatched={toggleWatched}
            onSetReaction={setReaction}
            onUpdateFilmInfo={updateFilmInfo}
            onResetFilmInfo={resetFilmInfo}
            isFilmEdited={isFilmEdited}
            onUpdateDirectorInfo={updateDirectorInfo}
            onResetDirectorInfo={resetDirectorInfo}
            isDirectorEdited={isDirectorEdited}
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
            getDirectorStats={getDirectorStats}
            onOpenEditArchive={handleOpenEditArchive}
            displayMode={displayMode}
            onSetDisplayMode={handleSetDisplayMode}
          />
        )}

        {activeTab === 'readings' && (
          <ReadingsView />
        )}

        {activeTab === 'catalog' && (
          <CatalogView
            films={allFilms}
            userStates={userStates}
            onToggleWatched={toggleWatched}
            onSetReaction={setReaction}
            onUpdateFilmInfo={updateFilmInfo}
            onResetFilmInfo={resetFilmInfo}
            isFilmEdited={isFilmEdited}
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
            onOpenEditArchive={handleOpenEditArchive}
            displayMode={displayMode}
            onSetDisplayMode={handleSetDisplayMode}
          />
        )}
      </main>

      {/* Institutional Quiet Light Footer */}
      <footer className="border-t border-[#cfc0bd] bg-[#ffffff] mt-16 text-xs text-[#586f6b] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="text-[#586f6b] flex items-center gap-4">
            <span>Progress: {overallStats.watched} of {overallStats.total} viewed ({overallStats.percentage}%)</span>
            <span>·</span>
            <span>Records stored locally</span>
          </div>
        </div>
      </footer>

      {/* Add Custom Film Modal */}
      <AddFilmModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddFilm={handleAddFilm}
      />

      {/* Universal Archive & Descriptions Editor Modal */}
      <ArchiveEditModal
        isOpen={isEditArchiveOpen}
        onClose={() => setIsEditArchiveOpen(false)}
        initialTab={editArchiveTarget.tab}
        initialTargetId={editArchiveTarget.id}
        films={allFilms}
        directors={allDirectors}
        movements={allMovements}
        onUpdateFilm={updateFilmInfo}
        onResetFilm={resetFilmInfo}
        isFilmEdited={isFilmEdited}
        onUpdateDirector={updateDirectorInfo}
        onResetDirector={resetDirectorInfo}
        isDirectorEdited={isDirectorEdited}
        onUpdateMovement={updateMovementInfo}
        onResetMovement={resetMovementInfo}
        isMovementEdited={isMovementEdited}
      />

    </div>
  );
}
