
import React from 'react';
import { EDITORIALS } from '../constants';

const Editorials: React.FC = () => {
  return (
    <section className="py-20 border-t border-gray-100 mb-20">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-brand-blue"></div>
          <h2 className="font-serif text-3xl font-bold">Nos éditoriaux</h2>
        </div>
        <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-brand-blue hover:opacity-80 transition-opacity flex items-center gap-2">
          Tout parcourir <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EDITORIALS.map((ed) => (
          <div 
            key={ed.id}
            className="group bg-slate-50 p-10 rounded-sm border-b-4 border-transparent hover:border-brand-blue transition-all flex flex-col items-center text-center"
          >
            <div className="size-20 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all border-2 border-white shadow-md">
              <img src={ed.authorImage} alt={ed.author} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">{ed.title}</h3>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-6">{ed.author}</p>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "{ed.quote}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Editorials;
