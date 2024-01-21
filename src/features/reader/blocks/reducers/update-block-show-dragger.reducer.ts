import { PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { ReaderBlocksState } from "../types"

type UpdateBlockShowDraggerPayload = {
  blockKey: string
  showDragger: boolean
}

export const updateBlockShowDraggerReducer: CaseReducer<
  ReaderBlocksState,
  PayloadAction<UpdateBlockShowDraggerPayload>
> = (state, { payload }) => {
  const { blockKey, showDragger } = payload
  if (!blockKey) {
    return state
  } else if (blockKey in state.values) {
    state.values[blockKey].showDragger = showDragger
  } else {
    state.loading = "failed"
    state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
  }
}
