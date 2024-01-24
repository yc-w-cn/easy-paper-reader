import { KnownError, DEFAULT_ERROR_MESSAGE } from "@/apis/local-data/error"
import { PaperType, getPaperById } from "@/apis/local-data/paper"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootReaderState } from "@/stores"
import { arrayMove } from "@dnd-kit/sortable"
import { filter } from "lodash"
import { fetchBlocks } from "../blocks/thunks/fetch-blocks.thunk"

export type PaperState = {
  value: PaperType | null
  loading: "idle" | "pending" | "succeeded" | "failed"
  errorMessage: string | null
}

export const DEFAULT_PAPER_STATE: PaperState = {
  value: null,
  loading: "idle",
  errorMessage: null,
}

export const readerPaperSlice = createSlice({
  name: "reader/paper",
  initialState: DEFAULT_PAPER_STATE,
  reducers: {
    /**
     * initPaper:
     * - 用于初次设置 paper
     * - 设置了变动监听，会自动更新 blocks 和 tableOfContent
     */
    initPaper: (state, action: PayloadAction<PaperType>) => {
      state.value = action.payload
      state.loading = "succeeded"
      state.errorMessage = null
    },
    /**
     * 更新 Paper 但不触发更新
     * - 全局更新比较费劲，不触发更新更加轻量
     */
    updatePaperOnly(state, action: PayloadAction<Partial<PaperType>>) {
      state.value = {
        ...state.value,
        ...action.payload,
      } as PaperType
    },
    resetPaper: () => DEFAULT_PAPER_STATE,
    /**
     * 交换 blockKeys
     */
    exchangeBlockKeys(
      state,
      action: PayloadAction<{
        fromBlockKey: string
        toBlockKey: string
      }>,
    ) {
      if (!state.value) return
      const blockKeys = state.value.blockKeys
      const { fromBlockKey, toBlockKey } = action.payload
      const oldIndex = blockKeys.indexOf(fromBlockKey)
      const newIndex = blockKeys.indexOf(toBlockKey)
      if (oldIndex !== -1 && newIndex !== -1) {
        state.value.blockKeys = arrayMove(blockKeys, oldIndex, newIndex)
      }
    },
    removeBlockKey(state, action: PayloadAction<string>) {
      if (!state.value) return
      const blockKeys = state.value.blockKeys
      const blockKey = action.payload
      state.value.blockKeys = filter(blockKeys, (item) => item !== blockKey)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaperById.pending, (state) => {
      state.loading = "pending"
      state.errorMessage = null
    })
    builder.addCase(fetchPaperById.fulfilled, (state, { payload }) => {
      state.loading = "succeeded"
      state.value = payload
      state.errorMessage = null
    })
    builder.addCase(fetchPaperById.rejected, (state, action) => {
      state.loading = "failed"
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage
      } else {
        state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
      }
    })
  },
})

export const fetchPaperById = createAsyncThunk<
  PaperType | null,
  string,
  {
    state: RootReaderState
    rejectValue: KnownError
  }
>(
  "reader/paper/fetchPaperById",
  async (paperId, { dispatch, rejectWithValue }) => {
    try {
      const paper = await getPaperById(paperId)
      if (paper) {
        dispatch(fetchBlocks(paper.blockKeys))
        return paper
      }
      return rejectWithValue({
        errorMessage: `localforage 没有找到 id 为 ${paperId} 的 Paper 对象`,
      })
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

export const {
  resetPaper,
  initPaper,
  updatePaperOnly,
  exchangeBlockKeys,
  removeBlockKey,
} = readerPaperSlice.actions

export const selectPaper = (state: RootReaderState) => state.paper.value

export const readerPaperReducer = readerPaperSlice.reducer
