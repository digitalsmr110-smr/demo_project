
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  view: AppView;
  onBack: () => void;
  compareCount: number;
  onCompareClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ view, onBack, compareCount, onCompareClick }) => {
  const isHome = view === AppView.DISCOVERY;

  return (
    <header className="fixed top-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md z-50 h-16 flex items-center justify-between px-6 border-b border-stone-100">
      <div className="flex items-center gap-4">
        {!isHome && (
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-stone-50 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        )}
        <h1 className="serif text-xl font-bold tracking-tight text-stone-900">SCENTIA</h1>
      </div>

      <div className="flex items-center gap-3">
        {compareCount > 0 && (
          <button 
            onClick={onCompareClick}
            className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 16v5h-5"/><path d="M3 16v5h5"/><path d="M10 10l-6-6"/><path d="M14 10l6-6"/><path d="M10 14l-6 6"/><path d="M14 14l6 6"/></svg>
            <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {compareCount}
            </span>
          </button>
        )}
        <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/seed/scentia-user/64/64" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;
