
import React from 'react';
import { SECONDARY_ARTICLES } from '../constants';
import { Article } from '../types';

interface CategoryGridProps {
  onArticleClick: (article: Article) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onArticleClick }) => {
  return (
    <section className="mb-32">
      <h2 className="font-serif text-3xl font-bold mb-12 pb-6 border-b border-gray-100">International & Économie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {SECONDARY_ARTICLES.map((article) => (
          <div 
            key={article.id} 
            className="group cursor-pointer"
            onClick={() => onArticleClick(article)}
          >
            <div className="aspect-[4/3] rounded overflow-hidden mb-4">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue mb-2">{article.category}</p>
            <h4 className="font-serif font-bold leading-snug group-hover:text-brand-blue transition-colors text-lg">
              {article.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
