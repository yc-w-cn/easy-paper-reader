import { BlockTypeType } from "./block-type.type"

export type BlockType<T = any> = {
  id: string // UUID
  key: string // Cache Key
  paperKey: string
  type: BlockTypeType
  properties: T
  ctime: number
  mtime?: number
  childBlockKeys: string[]
}
