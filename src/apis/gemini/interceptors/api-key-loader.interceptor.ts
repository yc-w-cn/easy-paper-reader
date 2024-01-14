import { InternalAxiosRequestConfig } from "axios"
import { getApiKey } from "@/apis/gemini/api-key"

export async function apiKeyLoader(config: InternalAxiosRequestConfig) {
  const key = await getApiKey()
  config.params.key = key
  return config
}
