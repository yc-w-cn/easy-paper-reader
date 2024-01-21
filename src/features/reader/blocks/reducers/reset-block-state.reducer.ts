import { PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { ReaderBlocksState } from "../types"

export const resetBlockStateReducer: CaseReducer<
  ReaderBlocksState,
  PayloadAction<string | undefined>
> = (state, { payload }) => {
  const blockKey = payload
  if (!blockKey) {
    return state
  } else if (blockKey in state.values) {
    state.values[blockKey].state = "display"
  } else {
    state.loading = "failed"
    state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
  }
}
