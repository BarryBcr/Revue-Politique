
import React from 'react';
import { DOSSIERS } from '../constants';
import SectionHeading from './SectionHeading';

const Dossiers: React.FC = () => {
  return (
    <section id="international" className="py-16 lg:py-20 bg-paper-cream/50 border-y border-paper-line" aria-label="Dossiers et numéros">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeading
          kicker="Dossiers"
          title="Numéros récents"
          rightSlot={
            <a href="#" className="text-[11px] font-bold uppercase tracking-kicker text-ink hover:text-brand-blue transition-colors flex items-center gap-2">
              Voir les archives <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          }
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {DOSSIERS.map((d) => (
            <a
              key={d.id}
              href={d.href}
              className="group flex flex-col"
            >
              <div className="aspect-[5/7] overflow-hidden bg-white shadow-[0_8px_24px_-12px_rgba(10,10,10,0.18)] mb-4">
                <img
                  src={d.cover}
                  alt={`Couverture ${d.number}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-1">
                {d.number}
              </p>
              <h3 className="serif-title text-[15px] leading-[1.25] font-bold text-ink group-hover:text-brand-blue transition-colors">
                {d.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dossiers;
