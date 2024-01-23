import localforage from "localforage"
import { getAllPapers } from "@/apis/local-data/paper/get"
import { CacheHistoryItem } from "./cache-history-item.type"
import { HistoryAction } from "./history-action.enum"

export async function getHistorySnapshot() {
  const records = await localforage.getItem<CacheHistoryItem[]>("history-snapshot")
  return records || []
}

export async function refreshHistorySnapshot() {
  const papers = await getAllPapers()
  const records: CacheHistoryItem[] = papers.map((paper) => ({
    action: HistoryAction.CreatePaper,
    payload: {
      key: paper.key,
    },
    ctime: paper.ctime,
  }))
  localforage.setItem("history-snapshot", records)
}
