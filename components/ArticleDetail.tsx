
import React from 'react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-ink-muted font-bold uppercase tracking-kicker text-[11px] mb-12 hover:text-brand-blue transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Retour à l'accueil
      </button>

      {/* Hero split — image gauche / panneau noir titre droite (style LGC) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 -mx-6 lg:mx-0">
        <div className="aspect-[4/5] lg:aspect-auto overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="bg-ink text-white p-10 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6 text-[11px] font-bold uppercase tracking-kicker">
            <span className="text-brand-blue">{article.category}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60">{article.readTime || '5 min'}</span>
          </div>
          <h1 className="serif-title text-[40px] lg:text-[56px] font-bold leading-[1.0] mb-6">
            {article.title}
          </h1>
          {article.summary && (
            <p className="serif-title italic text-[18px] lg:text-[22px] leading-relaxed text-white/70">
              {article.summary}
            </p>
          )}
          <div className="flex items-center gap-3 mt-10 pt-8 border-t border-white/10">
            {article.authorImage && (
              <img src={article.authorImage} alt={article.author} className="w-10 h-10 rounded-full grayscale brightness-110" />
            )}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-kicker">{article.author || 'Rédaction'}</p>
              <p className="text-[10px] uppercase tracking-kicker text-white/50 mt-1">
                Publié le {article.date || '12 mai 2024'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corps article */}
      <div className="max-w-[680px] mx-auto px-2 prose prose-slate lg:prose-lg max-w-none">
        <p className="text-xl leading-relaxed text-ink font-serif italic mb-10 first-letter:font-bold first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:font-serif first-letter:text-brand-blue">
          {article.summary}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-brand-blue pl-6 italic text-2xl text-ink my-12 font-serif">
          « La démocratie n'est pas seulement un mode de gouvernement, c'est aussi un mode de discussion. »
        </blockquote>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </article>
  );
};

export default ArticleDetail;
