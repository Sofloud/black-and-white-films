import React, { useState } from 'react';
import { useFilmStore } from './hooks/useFilmStore';
import { Header, ActiveTab } from './components/Header';
import { MovementTimelineView } from './components/MovementTimelineView';
import { DirectorsView } from './components/DirectorsView';
import { ReadingsView } from './components/ReadingsView';
import { CatalogView } from './components/CatalogView';
import { AddFilmModal } from './components/AddFilmModal';
import { StudyStatsRibbon } from './components/StudyStatsRibbon';
import { Film, ReactionType } from './types/film';

export default function App() {
  const {
    allFilms,
    userStates,
    toggleWatched,
    setReaction,
    updateFilmGenres,
    resetFilmGenres,
    isFilmGenreEdited,
    deleteFilm,
    addCustomFilm,
    getMovementStats,
    getDirectorStats,
    overallStats
  } = useFilmStore();

  const [activeTab, setActiveTab] = useState<ActiveTab>('movements');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
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
        watchedCount={overallStats.watched}
        totalFilms={overallStats.total}
        likedCount={overallStats.liked}
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
            userStates={userStates}
            onToggleWatched={toggleWatched}
            onSetReaction={setReaction}
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
            getMovementStats={getMovementStats}
          />
        )}

        {activeTab === 'directors' && (
          <DirectorsView
            films={allFilms}
            userStates={userStates}
            onToggleWatched={toggleWatched}
            onSetReaction={setReaction}
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
            getDirectorStats={getDirectorStats}
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
            onUpdateGenres={updateFilmGenres}
            onResetGenres={resetFilmGenres}
            isFilmGenreEdited={isFilmGenreEdited}
            onDeleteFilm={deleteFilm}
          />
        )}
      </main>

      {/* Institutional Quiet Light Footer */}
      <footer className="border-t border-[#cfc0bd] bg-[#ffffff] mt-16 text-xs text-[#586f6b] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-display-cinematic text-[#222d2b] text-sm font-semibold">Film Studies</span>
          </div>

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

    </div>
  );
}
