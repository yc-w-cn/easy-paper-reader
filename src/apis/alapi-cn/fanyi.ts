import axios from "axios";

/**
 * 免费套餐
 * - QPS: 1
 * - Quota: 200 per day
 * - expired date: 2025-01-12 12:46:30
 */
export async function translate(q: string) {
  const response = await axios<FanyiResult>({
    url: "https://v2.alapi.cn/api/fanyi",
    method: "post",
    data: {
      token: import.meta.env.VITE_ALAPI_CN_TOKEN,
      q,
      from: "en",
      to: "zh",
    },
  });
  return response.data;
}

export type FanyiResult = {
  code: number; // 200
  msg: string; // "success"
  data: {
    from: string; // "zh"
    to: string; // "en"
    src: string;
    dst: string;
  };
};
