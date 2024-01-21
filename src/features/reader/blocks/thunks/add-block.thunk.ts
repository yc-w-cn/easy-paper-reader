import { BlockType, BlockTypeType, createBlock } from "@/apis/local-data/block"
import { DEFAULT_ERROR_MESSAGE, KnownError } from "@/apis/local-data/error"
import { addBlockToPaper } from "@/apis/local-data/paper"
import { RootReaderState } from "@/stores"
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { updatePaperOnly } from "../../paper"
import { fetchBlocks } from "./fetch-blocks.thunk"
import { ReaderBlocksState } from "../types"

export const addBlock = createAsyncThunk<
  BlockType,
  {
    type: BlockTypeType
    properties: object
  },
  {
    rejectValue: KnownError
    state: RootReaderState
  }
>(
  "reader/blocks/addBlock",
  async (payload, { dispatch, rejectWithValue, getState }) => {
    try {
      const { type, properties } = payload
      const paperValue = getState().paper.value
      if (!paperValue) {
        return rejectWithValue({
          errorMessage: `对象 Paper 尚未加载`,
        })
      }
      /**
       * operate: localforage
       */
      const block = await createBlock(type, paperValue.key, properties)
      const paper = await addBlockToPaper(paperValue.key, block.key)
      /**
       * operate: redux
       */
      dispatch(updatePaperOnly(paper))
      dispatch(fetchBlocks(paper.blockKeys))
      return block
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

export const addAddBlockCases = (
  builder: ActionReducerMapBuilder<ReaderBlocksState>,
) => {
  /**
   * pending
   */
  builder.addCase(addBlock.pending, (state) => {
    state.loading = "pending"
    state.errorMessage = null
  })
  /**
   * fulfilled
   */
  builder.addCase(addBlock.fulfilled, (state, { payload }) => {
    state.loading = "succeeded"
    state.values[payload.key] = {
      state: "display",
      entity: payload,
      showDragger: false,
    }
    state.errorMessage = null
  })
  /**
   * rejected
   */
  builder.addCase(addBlock.rejected, (state, action) => {
    state.loading = "failed"
    if (action.payload) {
      state.errorMessage = action.payload.errorMessage
    } else {
      state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
    }
  })
}
