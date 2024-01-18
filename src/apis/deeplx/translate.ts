import Logger from "@/utils/logger"
import axios from "axios"

type TranslateResult = {
  alternatives: string[]
  code: number
  data: string
  id: number
  method: string
  source_lang: string
  target_lang: string
}

export async function translate(text: string) {
  const logger = new Logger(translate.name)
  try {
    const data = JSON.stringify({
      text,
      source_lang: "EN", // "auto",
      target_lang: "ZH",
    })

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.deeplx.org/translate",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    }

    const result = await axios.request<TranslateResult>(config)
    logger.debug("result", result)
    return result.data
  } catch (error) {
    logger.error("error", error)
  }
}
