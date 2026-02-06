
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizAnswer } from '../types';
import { getPerfumeRecommendation } from '../services/gemini';

interface QuizViewProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSelect = (answer: string) => {
    const newAnswers = [...answers, { questionId: QUIZ_QUESTIONS[currentStep].id, answer }];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setLoading(true);
      // Simulate AI processing delay for UX effect
      setTimeout(() => {
        onComplete(newAnswers);
        setLoading(false);
      }, 1500);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 border-4 border-stone-100 border-t-amber-600 rounded-full animate-spin"></div>
        <h3 className="serif text-2xl font-bold">Mapping your Scent Identity...</h3>
        <p className="text-stone-500 text-sm">Our AI is analyzing notes, vibes, and budget to find your match.</p>
      </div>
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="px-6 py-8 h-full flex flex-col animate-in slide-in-from-right duration-300">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em]">Scent Profile Quiz</span>
          <span className="text-xs text-stone-400">{currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-amber-600 h-full transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="serif text-3xl font-bold text-stone-900 mb-8 leading-snug">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left p-5 rounded-2xl border-2 border-stone-100 bg-white hover:border-stone-900 hover:bg-stone-50 transition-all group relative overflow-hidden"
            >
              <span className="relative z-10 text-stone-800 font-medium group-hover:text-stone-900 transition-colors">
                {option}
              </span>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-[10px] text-stone-400 mt-8 italic">
        Powered by Scentia AI's intelligent note-mapping engine.
      </p>
    </div>
  );
};

export default QuizView;
