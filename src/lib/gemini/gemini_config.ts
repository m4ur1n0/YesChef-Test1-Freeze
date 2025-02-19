import { GoogleGenerativeAI } from "@google/generative-ai"

const gemini_key = import.meta.env.VITE_GEMINI_API_KEY

export const GeminiObject = new GoogleGenerativeAI(gemini_key)
export const Gemini_2_0 = GeminiObject.getGenerativeModel({
  model: "gemini-2.0-flash",
})
