
import React from 'react';
import { Perfume } from '../types';

interface CompareViewProps {
  perfumes: Perfume[];
  onRemove: (id: string) => void;
}

const CompareView: React.FC<CompareViewProps> = ({ perfumes, onRemove }) => {
  if (perfumes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center space-y-4 pt-40">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 16v5h-5"/><path d="M3 16v5h5"/></svg>
        </div>
        <h3 className="serif text-xl font-bold">Compare Scent Masterpieces</h3>
        <p className="text-stone-500 text-sm max-w-xs">Select up to 3 fragrances to view side-by-side details, notes, and pricing comparisons.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {perfumes.map(perfume => (
          <div key={perfume.id} className="space-y-6">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <img src={perfume.imageUrl} alt={perfume.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => onRemove(perfume.id)}
                className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full backdrop-blur-sm"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="min-h-[60px]">
                <span className="text-[9px] text-stone-400 font-bold uppercase block">{perfume.brand}</span>
                <h4 className="serif text-sm font-bold text-stone-900 leading-tight">{perfume.name}</h4>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase">Price</span>
                <p className="text-sm font-bold text-amber-700">${perfume.price}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase">Top Notes</span>
                <p className="text-[10px] text-stone-600 leading-tight">{perfume.topNotes.slice(0, 3).join(', ')}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase">Heart Notes</span>
                <p className="text-[10px] text-stone-600 leading-tight">{perfume.middleNotes.slice(0, 3).join(', ')}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase">Accord</span>
                <div className="flex flex-wrap gap-1">
                  {perfume.mainAccords.map(a => (
                    <span key={a} className="px-1.5 py-0.5 bg-stone-100 rounded text-[8px] text-stone-600 uppercase font-bold">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {perfumes.length < 3 && (
          <div className="border-2 border-dashed border-stone-200 rounded-xl flex items-center justify-center aspect-square text-stone-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareView;
