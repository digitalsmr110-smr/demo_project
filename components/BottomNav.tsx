
import React from 'react';
import { AppView } from '../types';

interface BottomNavProps {
  activeView: AppView;
  onChange: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onChange }) => {
  const tabs = [
    { id: AppView.DISCOVERY, label: 'Explore', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2 2-2 2-2 2-2 2"/><path d="m7.8 16.2 2-2 2-2 2-2 2-2"/></svg> },
    { id: AppView.LIBRARY, label: 'Search', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> },
    { id: AppView.QUIZ, label: 'Quiz', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg> },
    { id: AppView.CHAT, label: 'AI Concierge', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-stone-900/95 backdrop-blur-md z-50 py-3 pb-6 px-4 flex justify-around rounded-t-3xl shadow-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeView === tab.id ? 'text-amber-400 scale-110' : 'text-stone-400'
          }`}
        >
          {tab.icon}
          <span className="text-[10px] uppercase tracking-widest font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
