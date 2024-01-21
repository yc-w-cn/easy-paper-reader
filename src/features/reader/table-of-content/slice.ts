import { DEFAULT_ERROR_MESSAGE, KnownError } from "@/apis/local-data/error"
import { getTableOfContent } from "@/apis/local-data/table-of-content"
import { RootReaderState } from "@/stores"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { DataNode } from "antd/es/tree"

export type ReaderTableOfContentState = {
  value: DataNode[]
  hideUnknownNodes: boolean
  loading: "idle" | "pending" | "succeeded" | "failed"
  errorMessage: string | null
  isLoaded: boolean
}

export const DEFAULT_TABLE_OF_CONTENT_STATE: ReaderTableOfContentState = {
  value: [],
  hideUnknownNodes: true,
  loading: "idle",
  errorMessage: null,
  isLoaded: false
}

export const readerTableOfContentSlice = createSlice({
  name: "reader/tableOfContent",
  initialState: DEFAULT_TABLE_OF_CONTENT_STATE,
  reducers: {
    resetTableOfContent: () => DEFAULT_TABLE_OF_CONTENT_STATE,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTableOfContent.pending, (state) => {
      state.loading = "pending"
      state.errorMessage = null
    })
    builder.addCase(fetchTableOfContent.fulfilled, (state, { payload }) => {
      state.loading = "succeeded"
      state.value = payload
      state.errorMessage = null
      state.isLoaded = true
    })
    builder.addCase(fetchTableOfContent.rejected, (state, action) => {
      state.loading = "failed"
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage
      } else {
        state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
      }
    })
  },
})

export const fetchTableOfContent = createAsyncThunk<
  DataNode[],
  void,
  {
    state: RootReaderState
    rejectValue: KnownError
  }
>(
  "reader/paper/fetchTableOfContent",
  async (_, { rejectWithValue, getState }) => {
    try {
      const paperId = getState().paper.value?.id
      if (!paperId) {
        return rejectWithValue({
          errorMessage: `localforage 没有找到 id 为 ${paperId} 的 Paper 对象`,
        })
      }
      return getTableOfContent(paperId)
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

export const { resetTableOfContent } = readerTableOfContentSlice.actions

export const selectTableOfContent = (state: RootReaderState) =>
  state.tableOfContent.value

export const readerTableOfContentReducer = readerTableOfContentSlice.reducer
