
import React from 'react';
import { UPCOMING_EVENTS } from '../constants';
import SectionHeading from './SectionHeading';

const UpcomingEvents: React.FC = () => {
  return (
    <section id="evenements" className="py-16 lg:py-20 border-t border-paper-line" aria-label="Événements">
      <SectionHeading
        kicker="La Cité des débats · Le Printemps des technologies"
        title="Prochains rendez-vous"
        rightSlot={
          <a href="#" className="text-[11px] font-bold uppercase tracking-kicker text-ink hover:text-brand-blue transition-colors flex items-center gap-2">
            Tous les événements <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        }
      />

      <ul className="divide-y divide-paper-line">
        {UPCOMING_EVENTS.map((evt) => (
          <li key={evt.id} className="py-6 lg:py-8 grid grid-cols-12 gap-6 items-center group cursor-pointer hover:bg-paper-cream/40 transition-colors -mx-4 px-4">
            {/* Date — gros chiffre serif (style LGC Dimanches) */}
            <div className="col-span-3 sm:col-span-2 lg:col-span-2 flex items-baseline gap-2">
              <span className="serif-title text-[64px] lg:text-[80px] leading-none font-bold text-ink">
                {evt.day}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-kicker text-ink-muted -ml-1">
                {evt.month}
                <br />
                {evt.year}
              </span>
            </div>

            {/* Détails */}
            <div className="col-span-9 sm:col-span-7 lg:col-span-7">
              <p className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-2">
                {evt.series}
              </p>
              <h3 className="serif-title text-[24px] lg:text-[28px] leading-[1.15] font-bold text-ink group-hover:text-brand-blue transition-colors">
                {evt.title}
              </h3>
              <p className="text-sm text-ink-muted mt-2">{evt.location}</p>
            </div>

            {/* CTA */}
            <div className="hidden sm:flex col-span-3 justify-end">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-kicker text-ink-muted group-hover:text-brand-blue transition-colors">
                S'inscrire
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
