import { RootReaderState } from "@/stores"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type LayoutMode = "zen" | "basic"
export type ColumnMode = "one" | "two"

export type LayoutState = {
  mode: LayoutMode
  columnMode: ColumnMode
}

export const readerLayoutSlice = createSlice({
  name: "reader/layout",
  initialState: {
    mode: "basic",
    columnMode: "two"
  } as LayoutState,
  reducers: {
    changeMode: (state, action: PayloadAction<LayoutMode>) => {
      state.mode = action.payload
    },
    changeColumnMode: (state, action: PayloadAction<ColumnMode>) => {
      state.columnMode = action.payload
    },
  },
})

export const selectLayoutMode = (state: RootReaderState) => {
  return state.layout.mode
}

export const selectLayoutColumnMode = (state: RootReaderState) => {
  return state.layout.columnMode
}

export const { changeMode, changeColumnMode } = readerLayoutSlice.actions

export const readerLayoutReducer = readerLayoutSlice.reducer
