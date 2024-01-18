import { BlockTypeType } from '@/apis/local-data/block'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CreatorBlockState = "default" | "edit" | "display" | "select"

export type CreatorState = {
  state: CreatorBlockState
  type: BlockTypeType | null
}

export const DEFAULT_CREATOR_STATE: CreatorState = {
  state: "default",
  type: null,
}

export const readerCreatorSlice = createSlice({
  name: 'reader/creator',
  initialState: DEFAULT_CREATOR_STATE,
  reducers: {
    setCreator: (_, action: PayloadAction<CreatorState>) => {
      return action.payload
    },
    setCreatorState: (state, action: PayloadAction<CreatorBlockState>) => {
      state.state = action.payload
    },
    setCreatorType: (state, action: PayloadAction<BlockTypeType | null>) => {
      state.type = action.payload
    },
    resetCreator: () => {
      return DEFAULT_CREATOR_STATE
    },
  },
})

export const { setCreator, setCreatorState, setCreatorType, resetCreator } = readerCreatorSlice.actions

export const readerCreatorReducer=   readerCreatorSlice.reducer