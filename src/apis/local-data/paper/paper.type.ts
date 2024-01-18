import { TagType } from "../tag/tag.type"

export type PaperType = {
  id: string // UUID
  key: string // Cache Key
  title: string
  translatedTitle: string
  ctime: number
  mtime?: number
  blockKeys: string[]
  tags: TagType[]
  score: number
}
