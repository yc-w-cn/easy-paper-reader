import { GithubType } from "@/pages/paper/edit/GithubEditor"
import { TagType } from "../tag/tag.type"
import { PaperWithCodeType } from "@/pages/paper/edit/PaperWithCodeEditor"
import { ArxivType } from "@/pages/paper/edit/ArxivEditor"

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
  github?: GithubType
  paperWithCode?: PaperWithCodeType
  arxiv?: ArxivType
}
