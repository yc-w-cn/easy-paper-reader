import { PaperType, getPaper } from "@/apis/local-data/paper";
import localforage from "localforage";

export async function updatePaper(key: string, paper: Partial<PaperType>) {
  const previousValue = await getPaper(key);
  if (!previousValue) return;
  const currentValue = {
    ...previousValue,
    ...paper,
    mtime: new Date().getTime(),
  };
  return localforage.setItem<PaperType>(key, currentValue);
}
