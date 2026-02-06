
import React from 'react';
import { Perfume } from '../types';

interface DetailViewProps {
  perfume: Perfume;
  isFavorite: boolean;
  toggleFavorite: () => void;
  isComparing: boolean;
  toggleCompare: () => void;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ perfume, isFavorite, toggleFavorite, isComparing, toggleCompare }) => {
  return (
    <div className="animate-in slide-in-from-bottom duration-500 pb-10">
      <div className="relative aspect-[4/5] w-full">
        <img src={perfume.imageUrl} alt={perfume.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-6 right-6 text-white">
          <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80 mb-1 block">{perfume.brand}</span>
          <h2 className="serif text-4xl font-bold">{perfume.name}</h2>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm font-bold">★ {perfume.rating}</span>
            <span className="w-px h-3 bg-white/30"></span>
            <span className="text-sm font-medium">{perfume.mainAccords[0]} / {perfume.mainAccords[1]}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-10">
        <div className="flex gap-3">
          <button 
            onClick={toggleFavorite}
            className={`flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs transition-all ${
              isFavorite ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            {isFavorite ? 'Saved' : 'Save'}
          </button>
          <button 
            onClick={toggleCompare}
            className={`flex-1 py-4 rounded-2xl border-2 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs transition-all ${
              isComparing ? 'border-amber-600 text-amber-600 bg-amber-50' : 'border-stone-100 text-stone-900 hover:border-stone-200'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 16v5h-5"/><path d="M3 16v5h5"/></svg>
            {isComparing ? 'In Compare' : 'Compare'}
          </button>
        </div>

        <section>
          <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">The Fragrance Story</h3>
          <p className="text-stone-600 leading-relaxed text-sm">
            {perfume.description} This masterpiece opens with an intoxicating blend of {perfume.topNotes.join(' and ')}, giving way to a heart of {perfume.middleNotes.join(', ')}.
          </p>
        </section>

        <section className="bg-stone-50 rounded-3xl p-6">
          <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-6">Olfactory Pyramid</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 text-[10px] font-bold text-stone-400 uppercase pt-1">Top</div>
              <div className="flex-1 flex flex-wrap gap-2">
                {perfume.topNotes.map(n => <span key={n} className="px-3 py-1 bg-white rounded-lg text-xs text-stone-800 shadow-sm">{n}</span>)}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 text-[10px] font-bold text-stone-400 uppercase pt-1">Heart</div>
              <div className="flex-1 flex flex-wrap gap-2">
                {perfume.middleNotes.map(n => <span key={n} className="px-3 py-1 bg-white rounded-lg text-xs text-stone-800 shadow-sm">{n}</span>)}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 text-[10px] font-bold text-stone-400 uppercase pt-1">Base</div>
              <div className="flex-1 flex flex-wrap gap-2">
                {perfume.baseNotes.map(n => <span key={n} className="px-3 py-1 bg-white rounded-lg text-xs text-stone-800 shadow-sm">{n}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Mood Mapping</h3>
          <div className="flex flex-wrap gap-2">
            {perfume.moods.map(mood => (
              <span key={mood} className="px-4 py-2 bg-amber-50 text-amber-900 rounded-full text-xs font-medium border border-amber-100">{mood}</span>
            ))}
            {perfume.occasions.map(occ => (
              <span key={occ} className="px-4 py-2 bg-stone-100 text-stone-900 rounded-full text-xs font-medium border border-stone-200">{occ}</span>
            ))}
          </div>
        </section>

        <div className="fixed bottom-24 left-6 right-6 max-w-[calc(448px-3rem)] mx-auto">
          <button className="w-full bg-stone-900 text-white py-5 rounded-3xl font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-stone-800 transition-colors">
            Purchase • ${perfume.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
