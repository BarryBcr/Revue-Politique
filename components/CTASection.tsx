
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white p-10 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-12 rounded-lg shadow-xl">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="font-serif text-4xl font-bold mb-6">Contribuez aux débats</h2>
        <p className="text-white/80 leading-relaxed text-lg">
          Rejoignez notre communauté de chercheurs, d'intellectuels et de décideurs. Proposez vos analyses pour éclairer le débat public et participer à la construction des idées de demain.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button className="bg-white text-brand-blue font-bold uppercase tracking-widest text-[11px] px-10 py-5 rounded hover:bg-slate-50 transition-colors whitespace-nowrap shadow-xl">
          Soumettre un article
        </button>
        <button className="bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-10 py-5 rounded hover:bg-white/10 transition-colors whitespace-nowrap">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default CTASection;
