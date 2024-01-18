import axios from "axios";
import { corsProxy } from "../cors-proxy/cors-proxy-io";

/**
 * @see {@link https://www.free-api.com/doc/517}
 */
export async function lookup(word: string) {
  const response = await axios<TranslateResult>({
    url: corsProxy(
      `https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&is_need_mean=1&word=${word}`
    ),
    method: "get",
  });
  return response.data;
}

export type TranslateResult = {
  status: number;
  message: DictionaryItem[];
};

export type DictionaryItem = {
  key: string;
  means: {
    part: string;
    means: string[];
  }[];
  paraphrase: string;
  value: number;
};
