import localforage from "localforage"

import { translate as alapiCnTranslate } from "./providers/alapi-cn"
import { translate as gemeniProTranslate } from "./providers/gemeni-pro"

export type TranslateProvider = "alapi-cn" | "gemeni-pro"

export const TRANSLATE_PROVIDER_KEY = "translate-provider"

export async function translate(source: string) {
  const provider = await getTranslateProvider() || 'gemeni-pro'
  switch (provider) {
    case "alapi-cn":
      return alapiCnTranslate(source)
    case "gemeni-pro":
      return gemeniProTranslate(source)
  }
}

export async function getTranslateProvider() {
  return localforage.getItem<TranslateProvider>(TRANSLATE_PROVIDER_KEY)
}

export async function setTranslateProvider(value: TranslateProvider) {
  return localforage.setItem<TranslateProvider>(TRANSLATE_PROVIDER_KEY, value)
}
