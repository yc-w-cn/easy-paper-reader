import { BlockType } from "@/apis/local-data/block"

export type BlockState = "display" | "edit"

export type BlockStateItem = {
  state: BlockState
  entity: BlockType
  showDragger: boolean
}

export type ReaderBlocksState = {
  values: {
    [blockKey: string]: BlockStateItem
  }
  loading: "idle" | "pending" | "succeeded" | "failed"
  errorMessage: string | null
}
