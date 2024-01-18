import { PaperType } from "@/apis/local-data/paper/paper.type"
import { c } from "@/utils/key-name"
import localforage from "localforage"

export async function getAllPapers() {
  const keys = await localforage.keys()
  const paperKeys = keys.filter((item) => item.startsWith("paper"))
  const papers: PaperType[] = []
  for (const paperKey of paperKeys) {
    const paper = await localforage.getItem<PaperType>(paperKey)
    if (paper) {
      papers.push(paper)
    }
  }
  return papers
}

export async function getPaper(key: string) {
  return localforage.getItem<PaperType>(key)
}

export async function getPaperById(paperId: string) {
  const key = c("paper", paperId)
  return getPaper(key)
}
