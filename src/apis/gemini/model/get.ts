import { getApiKey } from "@/apis/local-data/gemeni/api-key"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function getModel(model: string = "gemini-pro") {
  const apiKey = await getApiKey()
  if (!apiKey) throw new Error("API_KEY_NOT_FOUND")
  const genAI = new GoogleGenerativeAI(apiKey)
  return genAI.getGenerativeModel({ model })
}

export async function getGeminiProModel() {
  return getModel("gemini-pro")
}

export async function getGeminiProVisionModel() {
  return getModel("gemini-pro-vision")
}

