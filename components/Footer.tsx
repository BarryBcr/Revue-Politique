
import React from 'react';
import { LATEST_ARTICLES, EDITORIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-10 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Wall of recent — clin d'œil au footer LGC */}
        <div className="border-t border-white/10 pt-12 mb-16">
          <p className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-6">
            Récemment publié
          </p>
          <p className="serif-title text-[20px] lg:text-[24px] leading-[1.5] text-white/80 max-w-5xl">
            {LATEST_ARTICLES.map((a, i) => (
              <span key={a.id}>
                <a href="#" className="hover:text-brand-blue transition-colors">« {a.title} »</a>
                {i < LATEST_ARTICLES.length - 1 && <span className="text-brand-blue mx-3">·</span>}
              </span>
            ))}
            {EDITORIALS.slice(0, 2).map((e) => (
              <span key={e.id}>
                <span className="text-brand-blue mx-3">·</span>
                <a href="#" className="hover:text-brand-blue transition-colors">« {e.title} »</a>
              </span>
            ))}
          </p>
        </div>

        {/* Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <img src="/assets/logo-RPP-bleu.png" alt="Revue Politique et Parlementaire" className="h-14 w-auto mb-4 brightness-0 invert opacity-90" />
            <p className="text-[9px] tracking-wordmark font-bold uppercase text-white/50 mb-6">
              Fondée en 1894
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Un guide sûr et prudent pour les élus du suffrage universel.
              La revue de référence du débat politique français depuis Marcel Fournier
              et Waldeck-Rousseau.
            </p>
            <address className="not-italic text-sm text-white/60 leading-relaxed">
              10 rue du Colisée<br />
              75008 Paris<br />
              <a href="tel:0176470930" className="hover:text-brand-blue transition-colors">01 76 47 09 30</a><br />
              <a href="mailto:contact@revuepolitique.fr" className="hover:text-brand-blue transition-colors">contact@revuepolitique.fr</a>
            </address>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-kicker mb-6 text-brand-blue">Rubriques</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><a href="#politique" className="hover:text-brand-blue transition-colors">Politique</a></li>
              <li><a href="#international" className="hover:text-brand-blue transition-colors">International</a></li>
              <li><a href="#economie" className="hover:text-brand-blue transition-colors">Économie</a></li>
              <li><a href="#societe" className="hover:text-brand-blue transition-colors">Société</a></li>
              <li><a href="#tech" className="hover:text-brand-blue transition-colors">Tech</a></li>
              <li><a href="#evenements" className="hover:text-brand-blue transition-colors">Événements</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-kicker mb-6 text-brand-blue">La revue</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Notre histoire</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">L'équipe</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Comité de rédaction</a></li>
              <li><a href="#contribuer" className="hover:text-brand-blue transition-colors">Contribuer</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-kicker mb-6 text-brand-blue">Newsletter</h4>
            <p className="text-sm text-white/60 mb-5 leading-relaxed">
              Chaque dimanche, les analyses à ne pas manquer dans votre boîte mail.
            </p>
            <form className="flex border border-white/20 focus-within:border-brand-blue transition-colors">
              <input
                type="email"
                required
                placeholder="votre@email.fr"
                className="bg-transparent border-none text-sm text-white placeholder-white/40 w-full focus:ring-0 focus:outline-none px-4 py-3"
              />
              <button type="submit" className="bg-brand-blue px-6 py-3 text-[10px] font-bold uppercase tracking-kicker text-white hover:bg-brand-darkBlue transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-white/40 uppercase tracking-kicker">
            © 1894 — {new Date().getFullYear()} Revue Politique et Parlementaire. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-white/50">
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-blue transition-colors text-sm font-bold">in</a>
            <a href="#" aria-label="X" className="hover:text-brand-blue transition-colors text-base font-bold">𝕏</a>
            <a href="#" aria-label="Facebook" className="hover:text-brand-blue transition-colors text-sm font-bold">f</a>
            <a href="#" aria-label="RSS" className="hover:text-brand-blue transition-colors">
              <span className="material-symbols-outlined text-[18px]">rss_feed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
