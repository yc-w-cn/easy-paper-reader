import { BlockType } from "@/apis/local-data/block"
import { getTableOfContentNodes } from "@/apis/local-data/table-of-content"
import { RootReaderState } from "@/stores"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DataNode } from "antd/es/tree"

export type ReaderTableOfContentState = {
  value: DataNode[]
  isLoaded: boolean
}

export const DEFAULT_TABLE_OF_CONTENT_STATE: ReaderTableOfContentState = {
  value: [],
  isLoaded: false,
}

export const readerTableOfContentSlice = createSlice({
  name: "reader",
  initialState: DEFAULT_TABLE_OF_CONTENT_STATE,
  reducers: {
    resetTableOfContent: () => DEFAULT_TABLE_OF_CONTENT_STATE,
    loadTableOfContent: (state, action: PayloadAction<BlockType[]>) => {
      const nodes = getTableOfContentNodes(action.payload)
      state.isLoaded = true
      state.value = nodes
    },
  },
})

export const { resetTableOfContent, loadTableOfContent } =
  readerTableOfContentSlice.actions

export const selectTableOfContent= (state: RootReaderState) => state.tableOfContent.value

export const readerTableOfContentReducer = readerTableOfContentSlice.reducer
