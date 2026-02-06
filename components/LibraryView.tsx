
import React, { useState } from 'react';
import { Perfume } from '../types';
import { PERFUMES } from '../constants';

interface LibraryViewProps {
  onSelect: (p: Perfume) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const LibraryView: React.FC<LibraryViewProps> = ({ onSelect, favorites, toggleFavorite }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = PERFUMES.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || p.mainAccords.includes(filter as any);
    return matchesSearch && matchesFilter;
  });

  const accords = ['All', 'Woody', 'Fresh', 'Oriental', 'Citrus', 'Floral'];

  return (
    <div className="px-6 py-4 space-y-6 animate-in slide-in-from-bottom duration-500">
      <div className="relative">
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search brand or scent..."
          className="w-full bg-stone-100 rounded-2xl py-4 px-12 text-sm border-none focus:ring-2 focus:ring-amber-200 transition-all"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {accords.map(a => (
          <button
            key={a}
            onClick={() => setFilter(a)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
              filter === a 
                ? 'bg-stone-900 border-stone-900 text-white' 
                : 'bg-white border-stone-200 text-stone-400'
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map(perfume => (
          <div key={perfume.id} className="group flex flex-col space-y-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 shadow-sm">
              <img 
                src={perfume.imageUrl} 
                alt={perfume.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                onClick={() => onSelect(perfume)}
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(perfume.id);
                }}
                className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                  favorites.includes(perfume.id) ? 'bg-amber-600/90 text-white' : 'bg-white/70 text-stone-400 hover:text-stone-900'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={favorites.includes(perfume.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>
            <div className="px-1" onClick={() => onSelect(perfume)}>
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">{perfume.brand}</span>
              <h4 className="serif text-sm font-bold text-stone-900 truncate">{perfume.name}</h4>
              <p className="text-xs text-stone-500 mt-1">${perfume.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-stone-400 italic">No fragrances found in this collection.</p>
        </div>
      )}
    </div>
  );
};

export default LibraryView;
