
import React from 'react';

const Contribute: React.FC = () => {
  return (
    <section id="contribuer" className="py-16 lg:py-24" aria-label="Contribuer">
      <div className="bg-paper-cream px-8 py-14 lg:px-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-4">
            Une revue ouverte depuis 1894
          </p>
          <h2 className="serif-title text-display-md font-bold text-ink leading-[1.1] mb-6">
            Contribuez aux débats
          </h2>
          <p className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-2xl">
            Marcel Fournier voulait offrir « un guide sûr et prudent pour les élus du suffrage universel ».
            Cette ambition reste la nôtre. Universitaires, parlementaires, hauts fonctionnaires, chefs
            d'entreprise, citoyens éclairés — proposez vos analyses pour éclairer le débat public.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
          <a
            href="#"
            className="inline-flex justify-center items-center gap-2 bg-ink text-white text-[11px] font-bold uppercase tracking-kicker px-8 py-4 hover:bg-brand-blue transition-colors whitespace-nowrap"
          >
            Soumettre un article
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center gap-2 border border-ink text-ink text-[11px] font-bold uppercase tracking-kicker px-8 py-4 hover:bg-ink hover:text-white transition-colors whitespace-nowrap"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
