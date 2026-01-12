
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Editorials from './components/Editorials';
import CTASection from './components/CTASection';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ArticleDetail from './components/ArticleDetail';
import { Article } from './types';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchResult('Analyse en cours par notre IA...');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `En tant qu'analyste pour la Revue Politique, propose une brève synthèse (150 mots max) sur le sujet suivant: ${searchQuery}`,
        config: {
          systemInstruction: "Tu es un éditorialiste politique français de haut niveau. Ton ton est analytique, neutre et sophistiqué.",
        }
      });
      setSearchResult(response.text || 'Aucun résultat trouvé.');
    } catch (error) {
      console.error('Search error:', error);
      setSearchResult('Une erreur est survenue lors de la recherche.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-brand-blue text-white py-2 text-center text-[10px] font-bold tracking-[0.2em] uppercase px-4">
        Offre spéciale : 50% de réduction sur l'abonnement annuel
      </div>

      <Header 
        onSearchClick={() => setIsSearching(!isSearching)} 
        onLogoClick={() => {
          setSelectedArticle(null);
          setIsSearching(false);
        }}
      />

      <main className="max-w-[1200px] mx-auto px-6 pt-12 pb-24">
        {isSearching && (
          <div className="mb-12 bg-slate-50 p-8 rounded-lg border border-slate-200">
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une analyse ou un sujet..." 
                className="flex-1 bg-white border-slate-200 rounded p-3 focus:ring-brand-blue"
              />
              <button 
                type="submit"
                className="bg-brand-blue text-white px-8 py-3 rounded font-bold uppercase tracking-widest text-[11px]"
              >
                Chercher
              </button>
            </form>
            {searchResult && (
              <div className="prose max-w-none">
                <h4 className="serif-title text-brand-blue text-xl mb-4">Analyse IA</h4>
                <p className="text-slate-600 italic whitespace-pre-wrap">{searchResult}</p>
              </div>
            )}
          </div>
        )}

        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />
        ) : (
          <>
            <Hero onArticleClick={setSelectedArticle} />
            <Editorials />
            <CTASection />
            <CategoryGrid onArticleClick={setSelectedArticle} />
          </>
        )}
      </main>

      <Footer />
      
      {/* Mobile Floating Nav */}
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default App;
