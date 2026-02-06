
import React from 'react';
import { Perfume } from '../types';
import { PERFUMES } from '../constants';

interface DiscoveryViewProps {
  onSelect: (p: Perfume) => void;
}

const DiscoveryView: React.FC<DiscoveryViewProps> = ({ onSelect }) => {
  const moods = ['Confident', 'Romantic', 'Elegant', 'Mysterious'];
  const topPicks = PERFUMES.slice(0, 3);

  return (
    <div className="px-6 space-y-8 animate-in fade-in duration-500">
      <section className="mt-4">
        <h2 className="serif text-3xl font-bold text-stone-900 leading-tight">
          Find your signature scent identity.
        </h2>
        <p className="text-stone-500 mt-2 text-sm">Discover fragrances mapped to your unique mood and style.</p>
      </section>

      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs uppercase tracking-widest font-bold text-stone-400">Discover by Mood</h3>
          <button className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {moods.map((mood) => (
            <button
              key={mood}
              className="px-6 py-3 rounded-full border border-stone-200 bg-white shadow-sm hover:border-amber-600 hover:text-amber-700 transition-all whitespace-nowrap text-sm font-medium"
            >
              {mood}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs uppercase tracking-widest font-bold text-stone-400">Curated For You</h3>
          <button className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">Refresh</button>
        </div>
        <div className="space-y-4">
          {topPicks.map((perfume) => (
            <div 
              key={perfume.id}
              onClick={() => onSelect(perfume)}
              className="group flex gap-4 bg-stone-50 rounded-2xl p-3 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm">
                <img src={perfume.imageUrl} alt={perfume.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 py-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">{perfume.brand}</span>
                <h4 className="serif text-lg font-bold text-stone-900">{perfume.name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-amber-600 font-bold">★ {perfume.rating}</span>
                  <span className="text-xs text-stone-400">• {perfume.mainAccords[0]}</span>
                </div>
                <div className="mt-2 flex gap-1">
                  {perfume.topNotes.slice(0, 2).map(note => (
                    <span key={note} className="text-[9px] px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-600">{note}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="serif text-xl font-bold text-amber-900 mb-2">Unsure of your profile?</h3>
          <p className="text-amber-800/70 text-sm mb-4">Take our AI-powered scent quiz and get personalized recommendations in seconds.</p>
          <button className="px-6 py-2.5 bg-amber-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-950 transition-colors">
            Start AI Quiz
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 translate-x-8 -translate-y-8">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-amber-900"><path d="M50 0 L100 50 L50 100 L0 50 Z" /></svg>
        </div>
      </section>
    </div>
  );
};

export default DiscoveryView;
