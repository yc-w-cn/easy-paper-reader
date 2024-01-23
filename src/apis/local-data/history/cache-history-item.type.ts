import { HistoryAction } from "./history-action.enum"

export type CacheHistoryItem<T = any> = {
  action: HistoryAction
  payload: T
  ctime: number
}

export type CreatePaperPayload = {
  key: string
}
