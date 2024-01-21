import { RootReaderState } from "@/stores"
import { NULL_BLOCK_STATE } from "./constants"

export const selectBlock = (state: RootReaderState, blockKey?: string) => {
  if (!blockKey) {
    return NULL_BLOCK_STATE
  }

  return state.blocks.values[blockKey] || NULL_BLOCK_STATE
}

export const selectBlockState = (state: RootReaderState, blockKey?: string) => {
  if (!blockKey) return null
  return state.blocks.values[blockKey].state
}

export const selectBlockShowDragger = (
  state: RootReaderState,
  blockKey?: string,
) => {
  if (!blockKey) return null
  return state.blocks.values[blockKey]?.showDragger
}

export const selectBlockEntity = (
  state: RootReaderState,
  blockKey?: string,
) => {
  if (!blockKey) return null
  return state.blocks.values[blockKey]?.entity
}

export const selectIsEditing = (state: RootReaderState) => {
  Object.values(state.blocks.values).some((item) => item.state === "edit")
}
