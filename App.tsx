
import React, { useState, useEffect } from 'react';
import { AppView, Perfume, QuizAnswer, ChatMessage } from './types';
import { PERFUMES } from './constants';
import DiscoveryView from './components/DiscoveryView';
import QuizView from './components/QuizView';
import LibraryView from './components/LibraryView';
import ChatView from './components/ChatView';
import DetailView from './components/DetailView';
import CompareView from './components/CompareView';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DISCOVERY);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(c => c !== id);
      if (prev.length >= 3) return prev; // Limit to 3 for mobile layout
      return [...prev, id];
    });
  };

  const handlePerfumeSelect = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
    setCurrentView(AppView.DETAIL);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.DISCOVERY:
        return <DiscoveryView onSelect={handlePerfumeSelect} />;
      case AppView.QUIZ:
        return <QuizView onComplete={(results) => {
          console.log('Quiz results:', results);
          setCurrentView(AppView.LIBRARY); // Or a special result view
        }} />;
      case AppView.LIBRARY:
        return (
          <LibraryView 
            onSelect={handlePerfumeSelect} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite}
          />
        );
      case AppView.CHAT:
        return <ChatView />;
      case AppView.DETAIL:
        return selectedPerfume ? (
          <DetailView 
            perfume={selectedPerfume} 
            isFavorite={favorites.includes(selectedPerfume.id)}
            toggleFavorite={() => toggleFavorite(selectedPerfume.id)}
            isComparing={compareList.includes(selectedPerfume.id)}
            toggleCompare={() => toggleCompare(selectedPerfume.id)}
            onBack={() => setCurrentView(AppView.DISCOVERY)}
          />
        ) : null;
      case AppView.COMPARE:
        return <CompareView 
          perfumes={PERFUMES.filter(p => compareList.includes(p.id))} 
          onRemove={toggleCompare}
        />;
      default:
        return <DiscoveryView onSelect={handlePerfumeSelect} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white shadow-2xl relative">
      <Header 
        view={currentView} 
        onBack={() => setCurrentView(AppView.DISCOVERY)} 
        compareCount={compareList.length}
        onCompareClick={() => setCurrentView(AppView.COMPARE)}
      />
      
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 pt-16">
        {renderView()}
      </main>

      <BottomNav 
        activeView={currentView} 
        onChange={(view) => setCurrentView(view)} 
      />
    </div>
  );
};

export default App;
