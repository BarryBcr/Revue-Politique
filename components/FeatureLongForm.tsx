
import React from 'react';
import { LONG_FORM_ARTICLE } from '../constants';
import { Article } from '../types';

interface Props {
  onArticleClick: (article: Article) => void;
}

const FeatureLongForm: React.FC<Props> = ({ onArticleClick }) => {
  const a = LONG_FORM_ARTICLE;
  return (
    <section id="tech" className="py-16 lg:py-20 border-t border-paper-line" aria-label="Enquête">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        <div className="lg:col-span-5 group cursor-pointer" onClick={() => onArticleClick(a)}>
          <div className="aspect-square overflow-hidden">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-7 cursor-pointer group" onClick={() => onArticleClick(a)}>
          <div className="flex items-center gap-3 mb-5 text-[11px] font-bold uppercase tracking-kicker">
            <span className="text-brand-blue">Enquête · {a.category}</span>
            <span className="text-paper-line">·</span>
            <span className="text-ink-muted">{a.readTime}</span>
          </div>

          <h2 className="serif-title text-display-lg font-bold text-ink leading-[1.05] mb-6 group-hover:text-brand-blue transition-colors">
            {a.title}
          </h2>

          <p className="text-lg text-ink-muted font-serif italic leading-relaxed mb-8">
            {a.summary}
          </p>

          <div className="flex items-center gap-4">
            {a.authorImage && (
              <img src={a.authorImage} alt={a.author} className="w-9 h-9 rounded-full object-cover grayscale" />
            )}
            <span className="text-[11px] font-bold uppercase tracking-kicker text-ink">
              Par {a.author}
            </span>
            <span className="text-[11px] uppercase tracking-kicker text-ink-light">
              {a.date}
            </span>
          </div>

          <div className="mt-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-kicker text-brand-blue group-hover:text-brand-darkBlue">
              Lire l'enquête complète
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureLongForm;
