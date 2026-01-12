
import React from 'react';
import { FEATURED_ARTICLE, SIDE_ARTICLES } from '../constants';
import { Article } from '../types';

interface HeroProps {
  onArticleClick: (article: Article) => void;
}

const Hero: React.FC<HeroProps> = ({ onArticleClick }) => {
  return (
    <section className="mb-20">
      <h2 className="font-serif text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-4 border-brand-blue pl-4">À la une</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Article */}
        <div 
          className="lg:col-span-8 group cursor-pointer"
          onClick={() => onArticleClick(FEATURED_ARTICLE)}
        >
          <div className="relative overflow-hidden rounded mb-8">
            <img 
              src={FEATURED_ARTICLE.image} 
              alt={FEATURED_ARTICLE.title}
              className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <span className="text-brand-blue">{FEATURED_ARTICLE.category}</span>
              <span>•</span>
              <span>{FEATURED_ARTICLE.readTime}</span>
            </div>
            <h3 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-slate-900 group-hover:text-brand-blue transition-colors">
              {FEATURED_ARTICLE.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {FEATURED_ARTICLE.summary}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={FEATURED_ARTICLE.authorImage} alt={FEATURED_ARTICLE.author} className="w-10 h-10 rounded-full border border-gray-100" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-800">Par {FEATURED_ARTICLE.author}</span>
            </div>
          </div>
        </div>

        {/* Sidebar Articles */}
        <div className="lg:col-span-4 flex flex-col gap-40">
          {SIDE_ARTICLES.map((article) => (
            <div 
              key={article.id} 
              className="border-b border-gray-100 pb-12 group cursor-pointer"
              onClick={() => onArticleClick(article)}
            >
              <div className="w-full aspect-video rounded overflow-hidden mb-4">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">{article.category}</p>
              <h4 className="font-serif text-xl font-bold leading-tight group-hover:text-brand-blue transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                {article.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
