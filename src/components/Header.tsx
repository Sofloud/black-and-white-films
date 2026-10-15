import React from 'react';
import { Film as FilmIcon, Plus, Eye, Pencil } from 'lucide-react';

export type ActiveTab = 'movements' | 'directors' | 'readings' | 'catalog';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenAddModal: () => void;
  onOpenEditModal: () => void;
  watchedCount: number;
  totalFilms: number;
  likedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenAddModal,
  onOpenEditModal,
  watchedCount,
  totalFilms,
  likedCount
}) => {
  const handleNavClick = (tab: ActiveTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="border-b border-[#cfc0bd] bg-[#ffffff]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Icon Mark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('movements')}
            className="flex items-center text-left group focus:outline-none cursor-pointer"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded bg-[#586f6b]/10 border border-[#7f9183]/50 flex items-center justify-center text-[#586f6b] group-hover:border-[#586f6b] transition-colors">
              <FilmIcon className="w-5 h-5 text-[#586f6b]" />
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation links (Only Film Movements, Directors, Reading, All Films) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans">
          <button
            onClick={() => handleNavClick('movements')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'movements'
                ? 'text-[#c64b4b] border-[#c64b4b] font-semibold'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent'
            }`}
          >
            Film Movements
          </button>
          
          <button
            onClick={() => handleNavClick('directors')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'directors'
                ? 'text-[#c64b4b] border-[#c64b4b] font-semibold'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent'
            }`}
          >
            Selected Directors
          </button>
          
          <button
            onClick={() => handleNavClick('readings')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'readings'
                ? 'text-[#c64b4b] border-[#c64b4b] font-semibold'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent'
            }`}
          >
            Reading
          </button>

          <button
            onClick={() => handleNavClick('catalog')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'catalog'
                ? 'text-[#c64b4b] border-[#c64b4b] font-semibold'
                : 'text-[#586f6b] hover:text-[#222d2b] border-transparent'
            }`}
          >
            All Films ({totalFilms})
          </button>
        </nav>

        {/* Zone 3: Watched count, emoji heart count, Edit button, and Add Film primary button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-3 text-xs text-[#586f6b] font-mono mr-1">
            <span className="flex items-center gap-1.5 text-[#222d2b]">
              <Eye className="w-3.5 h-3.5 text-[#7f9183]" />
              <strong className="text-[#222d2b] font-semibold">{watchedCount}</strong> / {totalFilms} watched
            </span>
            <span className="text-[#cfc0bd]">·</span>
            <span className="flex items-center gap-1 text-[#222d2b]" title={`${likedCount} films hearted`}>
              <span>❤️</span>
              <strong className="text-[#222d2b] font-semibold">{likedCount}</strong>
            </span>
          </div>

          {/* Single Edit Button in the Top Right Corner - just pen sign like in film editing */}
          <button
            type="button"
            onClick={onOpenEditModal}
            className="p-2 sm:p-2.5 text-[#586f6b] hover:text-[#222d2b] bg-[#ffffff] hover:bg-[#f7f5f3] active:bg-[#e3deda] border border-[#cfc0bd] hover:border-[#586f6b] rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center"
            title="Edit info"
            aria-label="Edit info"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#ffffff] bg-[#586f6b] hover:bg-[#485c58] active:bg-[#3d4f4b] rounded transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Film</span>
          </button>
        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-around border-t border-[#cfc0bd] px-2 py-2 overflow-x-auto text-xs bg-[#ffffff]">
        <button
          onClick={() => handleNavClick('movements')}
          className={`px-2 py-1 whitespace-nowrap cursor-pointer ${
            activeTab === 'movements' ? 'text-[#c64b4b] font-bold border-b-2 border-[#c64b4b]' : 'text-[#586f6b]'
          }`}
        >
          Film Movements
        </button>
        <button
          onClick={() => handleNavClick('directors')}
          className={`px-2 py-1 whitespace-nowrap cursor-pointer ${
            activeTab === 'directors' ? 'text-[#c64b4b] font-bold border-b-2 border-[#c64b4b]' : 'text-[#586f6b]'
          }`}
        >
          Selected Directors
        </button>
        <button
          onClick={() => handleNavClick('readings')}
          className={`px-2 py-1 whitespace-nowrap cursor-pointer ${
            activeTab === 'readings' ? 'text-[#c64b4b] font-bold border-b-2 border-[#c64b4b]' : 'text-[#586f6b]'
          }`}
        >
          Reading
        </button>
        <button
          onClick={() => handleNavClick('catalog')}
          className={`px-2 py-1 whitespace-nowrap cursor-pointer ${
            activeTab === 'catalog' ? 'text-[#c64b4b] font-bold border-b-2 border-[#c64b4b]' : 'text-[#586f6b]'
          }`}
        >
          All Films
        </button>
      </div>
    </header>
  );
};
