
import React from 'react';
import { NavigationTab } from '../types';

interface HeaderProps {
  onSearchClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick, onLogoClick }) => {
  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 md:py-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Construction */}
          <div 
            className="flex flex-col items-center text-center cursor-pointer group"
            onClick={onLogoClick}
          >
            <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
              <svg fill="none" height="30" viewBox="0 0 120 35" width="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25L60 5L110 25" fill="none" stroke="#c6c6c6" strokeWidth="2.5"></path>
                <rect fill="#c6c6c6" height="2" width="80" x="20" y="27"></rect>
              </svg>
            </div>
            <div className="text-brand-blue font-serif text-3xl md:text-5xl font-bold leading-none uppercase tracking-tight">
              Revue Politique
            </div>
            <div className="text-brand-blue font-serif text-[10px] md:text-[11px] font-bold uppercase mt-2 tracking-[0.6em] ml-2">
              ET PARLEMENTAIRE
            </div>
            <div className="mt-4">
              <div className="mx-auto h-[1px] w-[60px] bg-brand-grey"></div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between w-full border-t border-gray-100 pt-6">
            <nav className="hidden md:flex items-center gap-8 overflow-x-auto no-scrollbar">
              {Object.values(NavigationTab).map((tab, idx) => (
                <a 
                  key={tab} 
                  href={`#${tab.toLowerCase()}`}
                  className={`text-[10px] font-bold uppercase tracking-widest hover:text-brand-blue transition-colors pb-1 ${idx === 0 ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-slate-500'}`}
                >
                  {tab}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Icon (Placeholder for the real nav which is the bottom bar in mobile) */}
            <div className="md:hidden">
              <button className="text-slate-500">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={onSearchClick}
                className="flex items-center justify-center p-2 text-slate-400 hover:text-brand-blue transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">search</span>
              </button>
              <button className="bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded shadow-sm hover:bg-brand-darkBlue transition-colors hidden sm:block">
                S'abonner
              </button>
            </div>
          </div>
          
          <div className="hidden md:block text-center pb-2">
            <a href="#" className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 hover:text-brand-blue transition-colors border-b border-slate-100 pb-1">
              Contribuez aux débats
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
