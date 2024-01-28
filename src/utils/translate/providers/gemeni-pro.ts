import { getGeminiReply } from "../../../apis/gemini/generate"

export async function translate(source: string) {
  const prompt = `请翻译下述内容为简体中文，只需要返回结果。请翻译：「${source}」`
  const target = await getGeminiReply(prompt)
  return target
}
