
import React from 'react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-[11px] mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Retour à l'accueil
      </button>

      <header className="mb-12">
        <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
          <span className="text-brand-blue">{article.category}</span>
          <span>•</span>
          <span>{article.readTime || '5 min'}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 py-8 border-y border-slate-100">
          <img src={article.authorImage || 'https://picsum.photos/seed/default/100/100'} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-[12px] font-bold uppercase tracking-widest text-slate-900">
              {article.author || 'Rédaction'}
            </p>
            <p className="text-[11px] text-slate-400 uppercase tracking-widest">
              Publié le 12 Mai 2024
            </p>
          </div>
        </div>
      </header>

      <img src={article.image} className="w-full aspect-video object-cover rounded-lg mb-12 shadow-2xl" />

      <div className="prose prose-slate lg:prose-xl max-w-none font-serif">
        <p className="text-xl leading-relaxed text-slate-700 mb-8 font-sans font-medium italic">
          {article.summary}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-brand-blue pl-6 italic text-2xl text-slate-800 my-12">
          "La démocratie n'est pas seulement un mode de gouvernement, c'est aussi un mode de discussion."
        </blockquote>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </article>
  );
};

export default ArticleDetail;
