import { PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { BlockState, ReaderBlocksState } from "../types"

type UpdateBlockStatePayload = {
  blockKey: string
  blockState: BlockState
}

export const updateBlockStateReducer: CaseReducer<
  ReaderBlocksState,
  PayloadAction<UpdateBlockStatePayload>
> = (state, { payload }) => {
  const { blockKey, blockState } = payload
  if (!blockKey) {
    return state
  } else if (blockKey in state.values) {
    state.values[blockKey].state = blockState
  } else {
    state.loading = "failed"
    state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
  }
}
