import { getGeminiProModel } from "../model"

export async function getGeminiReply(prompt: string) {
  const model = await getGeminiProModel()
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  return text
}
