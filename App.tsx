
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestArticles from './components/LatestArticles';
import FeatureLongForm from './components/FeatureLongForm';
import Editorials from './components/Editorials';
import UpcomingEvents from './components/UpcomingEvents';
import Dossiers from './components/Dossiers';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ArticleDetail from './components/ArticleDetail';
import { Article } from './types';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setSearchResult('Analyse en cours par notre IA…');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `En tant qu'analyste pour la Revue Politique et Parlementaire (fondée en 1894), propose une brève synthèse (150 mots max) sur le sujet suivant : ${searchQuery}`,
        config: {
          systemInstruction: "Tu es un éditorialiste politique français de haut niveau dans la tradition de la Revue Politique et Parlementaire. Ton ton est analytique, neutre, sophistiqué — sans jargon militant.",
        }
      });
      setSearchResult(response.text || 'Aucun résultat trouvé.');
    } catch (error) {
      console.error('Search error:', error);
      setSearchResult("Une erreur est survenue lors de la recherche.");
    } finally {
      setIsLoading(false);
    }
  };

  const goHome = () => {
    setSelectedArticle(null);
    setIsSearching(false);
    setSearchQuery('');
    setSearchResult('');
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header
        onSearchClick={() => setIsSearching(!isSearching)}
        onLogoClick={goHome}
      />

      <main className="max-w-[1240px] mx-auto px-6">
        {isSearching && (
          <div className="mt-10 mb-8 bg-paper-cream p-8 lg:p-10 border-l-4 border-brand-blue">
            <p className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue mb-4">
              Recherche assistée par IA
            </p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une analyse, un sujet, un auteur…"
                className="flex-1 bg-white border border-paper-line rounded-none p-3 text-base focus:ring-1 focus:ring-brand-blue focus:border-brand-blue focus:outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-ink hover:bg-brand-blue text-white px-8 py-3 font-bold uppercase tracking-kicker text-[11px] transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Recherche…' : 'Chercher'}
              </button>
            </form>
            {searchResult && (
              <div className="prose max-w-none">
                <p className="text-[10px] font-bold uppercase tracking-kicker text-ink-muted mb-3">Synthèse IA</p>
                <p className="serif-title text-base text-ink leading-relaxed whitespace-pre-wrap">
                  {searchResult}
                </p>
              </div>
            )}
          </div>
        )}

        {selectedArticle ? (
          <div className="pt-8 pb-24">
            <ArticleDetail article={selectedArticle} onBack={goHome} />
          </div>
        ) : (
          <>
            <Hero onArticleClick={setSelectedArticle} />
            <LatestArticles onArticleClick={setSelectedArticle} />
            <FeatureLongForm onArticleClick={setSelectedArticle} />
            <Editorials />
          </>
        )}
      </main>

      {!selectedArticle && !isSearching && (
        <>
          <Dossiers />
          <div className="max-w-[1240px] mx-auto px-6">
            <UpcomingEvents />
            <Contribute />
          </div>
        </>
      )}

      <Footer />

      <div className="block md:hidden h-16" aria-hidden="true" />
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default App;
