
import React from 'react';

const MobileNav: React.FC = () => {
  const tabs = [
    { name: 'Accueil', icon: 'home' },
    { name: 'Recherche', icon: 'search' },
    { name: 'Favoris', icon: 'bookmarks' },
    { name: 'Compte', icon: 'person' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 h-16 flex items-center justify-around px-6 z-50">
      {tabs.map((tab, idx) => (
        <button key={tab.name} className={`flex flex-col items-center ${idx === 0 ? 'text-brand-blue' : 'text-slate-400'}`}>
          <span className="material-symbols-outlined">{tab.icon}</span>
          <span className="text-[9px] font-bold uppercase mt-1 tracking-tighter">{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
