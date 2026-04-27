
import React from 'react';

const MobileNav: React.FC = () => {
  const tabs = [
    { name: 'Accueil', icon: 'home' },
    { name: 'Rubriques', icon: 'view_list' },
    { name: 'Recherche', icon: 'search' },
    { name: 'Compte', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-paper/98 backdrop-blur-md border-t border-paper-line h-16 flex items-center justify-around px-6 z-40">
      {tabs.map((tab, idx) => (
        <button key={tab.name} className={`flex flex-col items-center ${idx === 0 ? 'text-brand-blue' : 'text-ink-light'}`}>
          <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
          <span className="text-[9px] font-bold uppercase mt-0.5 tracking-tight">{tab.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;
