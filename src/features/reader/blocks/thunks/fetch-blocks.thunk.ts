import { BlockType, getBlocks } from "@/apis/local-data/block"
import { DEFAULT_ERROR_MESSAGE, KnownError } from "@/apis/local-data/error"
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import { ReaderBlocksState } from "@/features/reader/blocks"
import { fetchTableOfContent } from "@/features/reader/table-of-content"
import { RootReaderState } from "@/stores"

export const fetchBlocks = createAsyncThunk<
  BlockType[],
  string[],
  {
    state: RootReaderState
    rejectValue: KnownError
  }
>(
  "reader/blocks/fetchBlocks",
  async (blockKeys, { dispatch, rejectWithValue }) => {
    try {
      const blocks = await getBlocks(blockKeys)
      dispatch(fetchTableOfContent())
      return blocks
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

export const addFetchBlocksCases = (
  builder: ActionReducerMapBuilder<ReaderBlocksState>,
) => {
  /**
   * pending
   */
  builder.addCase(fetchBlocks.pending, (state) => {
    state.loading = "pending"
    state.errorMessage = null
  })
  /**
   * fulfilled
   */
  builder.addCase(fetchBlocks.fulfilled, (state, action) => {
    state.loading = "succeeded"
    state.values = Object.fromEntries(
      action.payload.map((entity) => [
        entity.key,
        { state: "display", entity, showDragger: false },
      ]),
    )
    state.errorMessage = null
  })
  /**
   * rejected
   */
  builder.addCase(fetchBlocks.rejected, (state, action) => {
    state.loading = "failed"
    if (action.payload) {
      state.errorMessage = action.payload.errorMessage
    } else {
      state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
    }
  })
}
