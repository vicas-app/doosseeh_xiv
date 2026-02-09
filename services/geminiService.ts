
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI using a named parameter and process.env.API_KEY directly as per guidelines
// Fix: Initialize GoogleGenAI using a named parameter and import.meta.env.VITE_GEMINI_API_KEY
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  console.warn("VITE_GEMINI_API_KEY is not set. Gemini features will not work.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || "dummy-key" }); // Prevent crash on init, but calls will fail if key is invalid

export const getStylistAdvice = async (userInput: string) => {
  try {
    // Fix: Call generateContent directly on ai.models with both model and prompt
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: "You are an elite high-fashion personal stylist named VOGUE AI. Your tone is sophisticated, helpful, and concise. You provide outfit recommendations based on trends and user needs. Use bullet points where appropriate.",
        temperature: 0.7,
      },
    });

    // Fix: Access response.text as a property, not a method
    return response.text || "I'm sorry, I couldn't process your request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The styling assistant is currently offline. Please check back later.";
  }
};
