
import React, { useState } from 'react';
import { NAV_LINKS } from '../types';

interface HeaderProps {
  onSearchClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick, onLogoClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md">
      {/* Top bar — nav primaire éditoriale (style LGC) */}
      <div className="bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 h-10 flex items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase">
          <button onClick={onSearchClick} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span className="hidden sm:inline">Recherche</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-blue transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <span className="hidden sm:inline text-white/70">
            Édition française <span className="text-white/40">⌄</span>
          </span>
        </div>
      </div>

      {/* Bandeau logo — wordmark centré */}
      <div className="border-b border-paper-line">
        <div className="max-w-[1240px] mx-auto px-6 h-[140px] md:h-[150px] flex items-center justify-between">
          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Slot gauche desktop : utilitaire */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <a href="#contribuer" className="text-[11px] font-bold uppercase tracking-kicker text-ink-muted hover:text-brand-blue transition-colors">
              Contribuez aux débats
            </a>
          </div>

          {/* Logo centré */}
          <button onClick={onLogoClick} className="flex flex-col items-center text-center group">
            <img
              src="/assets/logo-RPP-bleu.png"
              alt="Revue Politique et Parlementaire"
              className="h-[58px] md:h-[72px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="mt-3 text-[9px] md:text-[10px] tracking-wordmark font-semibold text-ink-muted uppercase">
              Fondée en 1894
            </span>
          </button>

          {/* Slot droit desktop : abonnement */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <a href="#" className="text-[11px] font-bold uppercase tracking-kicker text-ink-muted hover:text-brand-blue transition-colors">
              Connexion
            </a>
            <a
              href="#"
              className="bg-brand-blue text-white text-[11px] font-bold uppercase tracking-kicker px-5 py-3 hover:bg-brand-darkBlue transition-colors"
            >
              S'abonner
            </a>
          </div>

          {/* Mobile : bouton abonner compact */}
          <a
            href="#"
            className="md:hidden bg-brand-blue text-white text-[10px] font-bold uppercase tracking-kicker px-3 py-2"
          >
            S'abonner
          </a>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-paper-line bg-paper px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-kicker text-ink hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-paper-line pt-4 flex flex-col gap-3">
              <a href="#contribuer" className="text-[11px] uppercase tracking-kicker text-ink-muted">Contribuez aux débats</a>
              <a href="#" className="text-[11px] uppercase tracking-kicker text-ink-muted">Connexion</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
