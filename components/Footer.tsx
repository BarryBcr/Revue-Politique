
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-2xl font-bold uppercase text-white">Revue Politique</span>
              <span className="text-[9px] tracking-[0.45em] font-bold uppercase text-slate-500 mt-2">ET PARLEMENTAIRE</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Le média de référence pour comprendre les enjeux politiques, sociaux et internationaux contemporains à travers le regard des plus grands experts.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-blue">Sections</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-300 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Politique Française</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">International</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Économie</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Culture & Société</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-blue">À propos</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-300 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Qui sommes-nous ?</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Comité de rédaction</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contacts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-brand-blue">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Recevez nos meilleures analyses chaque semaine dans votre boîte mail.</p>
            <div className="flex gap-0 rounded overflow-hidden">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-slate-900 border-none text-sm w-full focus:ring-1 focus:ring-brand-blue px-4 py-3"
              />
              <button className="bg-brand-blue px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-darkBlue transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-medium text-slate-600 uppercase tracking-widest">
            © 2024 Revue Politique et Parlementaire. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">
               <span className="material-symbols-outlined text-[20px]">social_leaderboard</span>
            </a>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors font-bold text-xl">𝕏</a>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">
               <span className="material-symbols-outlined text-[20px]">rss_feed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
