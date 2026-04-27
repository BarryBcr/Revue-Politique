
import React from 'react';
import { FEATURED_ARTICLE, SIDE_ARTICLES } from '../constants';
import { Article } from '../types';

interface HeroProps {
  onArticleClick: (article: Article) => void;
}

const Kicker: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`text-[10px] font-bold uppercase tracking-kicker text-brand-blue ${className}`}>
    {children}
  </span>
);

const Hero: React.FC<HeroProps> = ({ onArticleClick }) => {
  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-24" aria-label="À la une">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

        {/* === Article principal — 8 colonnes ============= */}
        <article
          className="lg:col-span-8 group cursor-pointer"
          onClick={() => onArticleClick(FEATURED_ARTICLE)}
        >
          <div className="overflow-hidden mb-8">
            <img
              src={FEATURED_ARTICLE.image}
              alt={FEATURED_ARTICLE.title}
              className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>

          <div className="flex items-center gap-3 mb-5 text-[11px] font-bold uppercase tracking-kicker">
            <Kicker>{FEATURED_ARTICLE.category}</Kicker>
            <span className="text-paper-line">·</span>
            <span className="text-ink-muted">{FEATURED_ARTICLE.readTime}</span>
            {FEATURED_ARTICLE.date && (
              <>
                <span className="text-paper-line">·</span>
                <span className="text-ink-muted">{FEATURED_ARTICLE.date}</span>
              </>
            )}
          </div>

          <h1 className="serif-title text-display-xl font-bold text-ink mb-6 group-hover:text-brand-blue transition-colors">
            {FEATURED_ARTICLE.title}
          </h1>

          <p className="text-lg lg:text-xl text-ink-muted leading-relaxed font-serif italic max-w-3xl">
            {FEATURED_ARTICLE.summary}
          </p>

          <div className="flex items-center gap-3 mt-8">
            {FEATURED_ARTICLE.authorImage && (
              <img
                src={FEATURED_ARTICLE.authorImage}
                alt={FEATURED_ARTICLE.author}
                className="w-9 h-9 rounded-full object-cover grayscale"
              />
            )}
            <span className="text-[11px] font-bold uppercase tracking-kicker text-ink">
              Par {FEATURED_ARTICLE.author}
            </span>
          </div>
        </article>

        {/* === Colonne édito — 4 colonnes =================== */}
        <aside className="lg:col-span-4 lg:border-l lg:border-paper-line lg:pl-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue">
              Édito
            </span>
          </div>

          <ul className="flex flex-col divide-y divide-paper-line">
            {SIDE_ARTICLES.map((article, idx) => (
              <li
                key={article.id}
                onClick={() => onArticleClick(article)}
                className={`group cursor-pointer ${idx === 0 ? 'pb-7' : 'py-7'} ${idx === SIDE_ARTICLES.length - 1 ? 'pb-0' : ''}`}
              >
                <Kicker className="block mb-2">{article.category}</Kicker>
                <h3 className="serif-title text-[20px] leading-[1.15] font-bold text-ink group-hover:text-brand-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
                <p className="text-[10px] uppercase tracking-kicker text-ink-light mt-3 font-bold">
                  {article.author}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
