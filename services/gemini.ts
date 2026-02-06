
import { GoogleGenAI, Type } from "@google/genai";
import { Perfume, QuizAnswer, ChatMessage, AIRecommendation } from "../types";
import { PERFUMES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPerfumeRecommendation = async (answers: QuizAnswer[]): Promise<AIRecommendation[]> => {
  const prompt = `
    Based on these user preferences from a perfume quiz:
    ${answers.map(a => `${a.questionId}: ${a.answer}`).join(', ')}
    
    Recommend the best perfumes from this selection:
    ${JSON.stringify(PERFUMES.map(p => ({ id: p.id, name: p.name, brand: p.brand, accords: p.mainAccords })))}

    Return exactly 3 recommendations with specific reasons why they fit the user's personality and stated preferences.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            perfumeId: { type: Type.STRING },
            reason: { type: Type.STRING },
          },
          required: ["perfumeId", "reason"],
        },
      },
    },
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return [];
  }
};

export const getChatResponse = async (history: ChatMessage[], currentMessage: string): Promise<string> => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are 'Scentia', an expert luxury perfume consultant. You are knowledgeable about fragrance notes, sillage, longevity, and brand heritage. Help the user find perfumes, explain notes, and give advice. Keep responses elegant, helpful, and concise.",
    },
  });

  // Simplified: history is usually managed by the SDK but we'll send context
  const message = `Context: ${history.map(h => h.role + ': ' + h.text).join('\n')}\nUser: ${currentMessage}`;
  const response = await chat.sendMessage({ message });
  return response.text || "I'm sorry, I couldn't process that fragrance inquiry.";
};
