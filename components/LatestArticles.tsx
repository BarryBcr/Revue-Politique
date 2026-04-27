
import React from 'react';
import { LATEST_ARTICLES } from '../constants';
import { Article } from '../types';
import SectionHeading from './SectionHeading';

interface Props {
  onArticleClick: (article: Article) => void;
}

const LatestArticles: React.FC<Props> = ({ onArticleClick }) => {
  return (
    <section id="politique" className="py-16 lg:py-20" aria-label="Dernières analyses">
      <SectionHeading
        kicker="Nouveautés à lire"
        title="Dernières analyses"
        rightSlot={
          <a href="#" className="text-[11px] font-bold uppercase tracking-kicker text-ink hover:text-brand-blue transition-colors flex items-center gap-2">
            Tout parcourir <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {LATEST_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => onArticleClick(article)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden mb-5">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-2">
              {article.category}
            </span>
            <h3 className="serif-title text-[19px] leading-[1.2] font-bold text-ink group-hover:text-brand-blue transition-colors mb-3">
              {article.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed line-clamp-2 mb-3">
              {article.summary}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-kicker text-ink-light mt-auto">
              Par {article.author}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
