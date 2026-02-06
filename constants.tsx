
import { Perfume, NoteType, Occasion, Mood } from './types';

export const PERFUMES: Perfume[] = [
  {
    id: '1',
    name: 'Oud Wood',
    brand: 'Tom Ford',
    topNotes: ['Rosewood', 'Cardamom', 'Chinese Pepper'],
    middleNotes: ['Oud', 'Sandalwood', 'Vetiver'],
    baseNotes: ['Tonka Bean', 'Vanilla', 'Amber'],
    price: 320,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&h=400&auto=format&fit=crop',
    description: 'A rare and exotic fragrance featuring precious oud and warm sandalwood.',
    moods: ['Confident', 'Elegant', 'Mysterious'],
    occasions: ['Formal', 'Date Night'],
    mainAccords: ['Woody', 'Oriental']
  },
  {
    id: '2',
    name: 'Aventus',
    brand: 'Creed',
    topNotes: ['Pineapple', 'Bergamot', 'Black Currant'],
    middleNotes: ['Birch', 'Patchouli', 'Moroccan Jasmine'],
    baseNotes: ['Musk', 'Oak Moss', 'Ambergris'],
    price: 435,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&h=400&auto=format&fit=crop',
    description: 'The king of luxury scents, celebrating strength, power and success.',
    moods: ['Confident', 'Energetic'],
    occasions: ['Office', 'Casual', 'Formal'],
    mainAccords: ['Fresh', 'Woody']
  },
  {
    id: '3',
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    topNotes: ['Saffron', 'Jasmine'],
    middleNotes: ['Amberwood', 'Ambergris'],
    baseNotes: ['Fir Resin', 'Cedar'],
    price: 325,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400&h=400&auto=format&fit=crop',
    description: 'Luminous and sophisticated, it lays on the skin like an amber, floral and woody breeze.',
    moods: ['Elegant', 'Romantic'],
    occasions: ['Party', 'Formal', 'Date Night'],
    mainAccords: ['Oriental', 'Woody']
  },
  {
    id: '4',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    topNotes: ['Lemon', 'Mint', 'Pink Pepper'],
    middleNotes: ['Ginger', 'Iso E Super', 'Nutmeg'],
    baseNotes: ['Incense', 'Vetiver', 'Cedar'],
    price: 130,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&h=400&auto=format&fit=crop',
    description: 'A fresh, clean, and profoundly sensual fragrance that reveals the spirit of a man who chooses his own destiny.',
    moods: ['Energetic', 'Confident'],
    occasions: ['Office', 'Casual', 'Gym'],
    mainAccords: ['Citrus', 'Fresh']
  },
  {
    id: '5',
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    topNotes: ['Pear', 'Pink Pepper', 'Orange Blossom'],
    middleNotes: ['Coffee', 'Jasmine', 'Bitter Almond'],
    baseNotes: ['Vanilla', 'Patchouli', 'Cedar'],
    price: 155,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1616948055600-a19139e80e61?q=80&w=400&h=400&auto=format&fit=crop',
    description: 'A seductive intoxicating fragrance with notes of coffee, vanilla and white flowers.',
    moods: ['Romantic', 'Mysterious', 'Energetic'],
    occasions: ['Party', 'Date Night'],
    mainAccords: ['Gourmand', 'Oriental']
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'personality',
    question: 'How would you describe your personal style?',
    options: ['Classic & Elegant', 'Modern & Minimal', 'Bold & Edgy', 'Bohemian & Free-spirited']
  },
  {
    id: 'setting',
    question: 'Where do you plan to wear this scent most?',
    options: ['Business meetings', 'Romantic dates', 'Beach or outdoor adventures', 'Nightclubs and parties']
  },
  {
    id: 'preference',
    question: 'Which of these scents attracts you most naturally?',
    options: ['Freshly cut grass', 'Warm vanilla cupcakes', 'The smell of a library', 'A bouquet of roses']
  },
  {
    id: 'budget',
    question: 'What is your preferred budget range?',
    options: ['Under $50', '$50 - $150', '$150 - $300', 'Luxury ($300+)']
  }
];
