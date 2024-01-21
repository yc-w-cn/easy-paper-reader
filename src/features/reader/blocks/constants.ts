import { ReaderBlocksState } from "./types"

export const NULL_BLOCK_STATE = {
  state: null,
  entity: null,
}

export const DEFAULT_BLOCKS_STATE: ReaderBlocksState = {
  values: {},
  loading: "idle",
  errorMessage: null,
}