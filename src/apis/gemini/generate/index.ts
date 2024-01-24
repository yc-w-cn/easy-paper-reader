import { getGeminiProModel, getGeminiProVisionModel } from "../model"

export async function getGeminiReply(prompt: string) {
  const model = await getGeminiProModel()
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  return text
}

export async function fileToGenerativePart(file: any) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader: any = new FileReader()
    reader.onloadend = () => resolve(reader.result.split(",")[1])
    reader.readAsDataURL(file)
  })
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  }
}

export type GeminiImageType = {
  inlineData: {
    mimeType: string
    data: string
  }
}

export async function getGeminiImageReply(
  prompt: string,
  image: GeminiImageType,
) {
  const model = await getGeminiProVisionModel()
  const result = await model.generateContent([prompt, image])
  const response = await result.response
  const text = response.text()
  return text
}
