import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type LayoutMode = "zen" | "basic"

export type LayoutState = {
  mode: LayoutMode
}

export const readerLayoutSlice = createSlice({
  name: "reader/layout",
  initialState: {
    mode: "basic",
  } as LayoutState,
  reducers: {
    changeMode: (state, action: PayloadAction<LayoutMode>) => {
      state.mode = action.payload
    },
  },
})

export const { changeMode } = readerLayoutSlice.actions

export const readerLayoutReducer = readerLayoutSlice.reducer
