
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateAppDescription = async (appName: string, category: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a compelling, premium-style description (approx 100 words) for a mobile app named "${appName}" in the "${category}" category. Highlight its "Pro" features and why users should download it.`,
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return `An amazing premium app for ${category}. Get all the pro features unlocked for free. High performance and user-friendly interface.`;
  }
};
