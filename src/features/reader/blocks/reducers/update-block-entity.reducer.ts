import { PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { ReaderBlocksState } from "../types"
import { BlockType } from "@/apis/local-data/block"

type UpdateBlockEntityPayload = {
  blockKey: string | undefined
  blockEntity: BlockType
}

export const updateBlockEntityReducer: CaseReducer<
  ReaderBlocksState,
  PayloadAction<UpdateBlockEntityPayload>
> = (state, { payload }) => {
  const { blockKey, blockEntity } = payload
  if (!blockKey) {
    return state
  } else if (blockKey in state.values) {
    state.values[blockKey].entity = blockEntity
  } else {
    state.loading = "failed"
    state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
  }
}
