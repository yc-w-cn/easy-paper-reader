import axios from "axios"
import localforage from "localforage"

export const ALAPI_CN_TOKEN_KEY_NAME = "ALAPI_CN_TOKEN"

export const getAlapiCnToken = () =>
  localforage.getItem<string>(ALAPI_CN_TOKEN_KEY_NAME) || ""

export const setAlapiCnToken = (token: string) =>
  localforage.setItem<string>(ALAPI_CN_TOKEN_KEY_NAME, token)

/**
 * 免费套餐
 * - QPS: 1
 * - Quota: 200 per day
 * - expired date: 2025-01-12 12:46:30
 */
export async function translate(q: string) {
  const token = await getAlapiCnToken()
  if (!token) {
    throw new Error("ALAPI_CN_TOKEN_NOT_FOUND")
  }
  const response = await axios<FanyiResult>({
    url: "https://v2.alapi.cn/api/fanyi",
    method: "post",
    data: {
      token,
      q,
      from: "en",
      to: "zh",
    },
  })
  return response.data
}

export type FanyiResult = {
  code: number // 200
  msg: string // "success"
  data: {
    from: string // "zh"
    to: string // "en"
    src: string
    dst: string
  }
}
