
import React from 'react';
import { EDITORIALS } from '../constants';
import SectionHeading from './SectionHeading';

const Editorials: React.FC = () => {
  return (
    <section id="societe" className="py-16 lg:py-20 border-t border-paper-line" aria-label="Nos éditoriaux">
      <SectionHeading
        kicker="Tribunes signées"
        title="Nos éditoriaux"
        rightSlot={
          <a href="#" className="text-[11px] font-bold uppercase tracking-kicker text-ink hover:text-brand-blue transition-colors flex items-center gap-2">
            Tout parcourir <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EDITORIALS.map((ed) => (
          <article
            key={ed.id}
            className="group bg-white border-t-2 border-brand-blue p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-12px_rgba(10,10,10,0.12)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-full overflow-hidden grayscale shrink-0">
                <img src={ed.authorImage} alt={ed.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-kicker text-ink">{ed.author}</p>
                {ed.role && <p className="text-[10px] text-ink-light mt-1 leading-tight">{ed.role}</p>}
              </div>
            </div>

            <h3 className="serif-title text-[22px] leading-[1.2] font-bold text-ink mb-4 group-hover:text-brand-blue transition-colors">
              {ed.title}
            </h3>

            <blockquote className="text-[15px] text-ink-muted leading-relaxed font-serif italic">
              « {ed.quote} »
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Editorials;
