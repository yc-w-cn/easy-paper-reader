import {
  BlockType,
  saveBlockProperties as saveBlockPropertiesApi,
} from "@/apis/local-data/block"
import { DEFAULT_ERROR_MESSAGE, KnownError } from "@/apis/local-data/error"
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { updateBlockEntity } from "../slice"
import { ReaderBlocksState } from "../types"

export const saveBlockProperties = createAsyncThunk<
  BlockType,
  {
    blockKey: string
    properties: object
  },
  {
    rejectValue: KnownError
  }
>(
  "reader/blocks/saveBlockProperties",
  async ({ blockKey, properties }, { dispatch, rejectWithValue }) => {
    try {
      // localforage
      const blockEntity = await saveBlockPropertiesApi(blockKey, properties)
      // redux
      dispatch(
        updateBlockEntity({
          blockKey,
          blockEntity,
        }),
      )
      return blockEntity
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

export const addSaveBlockPropertiesCases = (
  builder: ActionReducerMapBuilder<ReaderBlocksState>,
) => {
  /**
   * pending
   */
  builder.addCase(saveBlockProperties.pending, (state) => {
    state.loading = "pending"
    state.errorMessage = null
  })
  /**
   * fulfilled
   */
  builder.addCase(saveBlockProperties.fulfilled, (state, { payload }) => {
    state.loading = "succeeded"
    state.values[payload.key] = {
      state: "display",
      entity: payload,
      showDragger: false
    }
    state.errorMessage = null
  })
  /**
   * rejected
   */
  builder.addCase(saveBlockProperties.rejected, (state, action) => {
    state.loading = "failed"
    if (action.payload) {
      state.errorMessage = action.payload.errorMessage
    } else {
      state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
    }
  })
}
