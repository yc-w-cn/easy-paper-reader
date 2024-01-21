import { createSlice } from "@reduxjs/toolkit"
import {
  addAddBlockCases,
  addFetchBlocksCases,
  addSaveBlockPropertiesCases,
} from "./thunks"
import {
  resetBlockStateReducer,
  updateBlockEntityReducer,
  updateBlockShowDraggerReducer,
  updateBlockStateReducer,
} from "./reducers"
import { DEFAULT_BLOCKS_STATE } from "./constants"

export const readerBlocksSlice = createSlice({
  name: "reader/blocks",
  initialState: DEFAULT_BLOCKS_STATE,
  reducers: {
    resetBlocks: () => DEFAULT_BLOCKS_STATE,
    updateBlockState: updateBlockStateReducer,
    resetBlockState: resetBlockStateReducer,
    updateBlockEntity: updateBlockEntityReducer,
    updateBlockShowDragger: updateBlockShowDraggerReducer,
  },
  extraReducers: (builder) => {
    addFetchBlocksCases(builder)
    addAddBlockCases(builder)
    addSaveBlockPropertiesCases(builder)
  },
})

export const {
  resetBlocks,
  updateBlockState,
  updateBlockEntity,
  resetBlockState,
  updateBlockShowDragger,
} = readerBlocksSlice.actions

export const readerBlocksReducer = readerBlocksSlice.reducer
