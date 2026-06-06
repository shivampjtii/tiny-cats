import { GoogleGenAI } from "@google/genai";
import config from "../config/config.ts";

const ai = new GoogleGenAI({
    apiKey: config.GEMINI_API_KEY!
});

export async function generateAiResponse(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text
}