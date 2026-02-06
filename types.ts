
export type NoteType = 'Floral' | 'Woody' | 'Fresh' | 'Oriental' | 'Citrus' | 'Spicy' | 'Aquatic' | 'Gourmand';
export type Occasion = 'Date Night' | 'Office' | 'Party' | 'Casual' | 'Formal' | 'Gym';
export type Mood = 'Confident' | 'Romantic' | 'Energetic' | 'Calm' | 'Mysterious' | 'Elegant';

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
  moods: Mood[];
  occasions: Occasion[];
  mainAccords: NoteType[];
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AIRecommendation {
  perfumeId: string;
  reason: string;
}

export enum AppView {
  DISCOVERY = 'discovery',
  QUIZ = 'quiz',
  LIBRARY = 'library',
  COMPARE = 'compare',
  CHAT = 'chat',
  FAVORITES = 'favorites',
  DETAIL = 'detail'
}
