import {
  BlockType,
  BlockTypeType,
  createBlock,
  getBlocks,
  saveBlockProperties as saveBlockPropertiesApi,
} from "@/apis/local-data/block"
import { DEFAULT_ERROR_MESSAGE, KnownError } from "@/apis/local-data/error"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { loadTableOfContent } from "../table-of-content"
import { fromPairs } from "lodash"
import { RootReaderState } from "@/stores"
import { addBlockToPaper } from "@/apis/local-data/paper"
import { updatePaperOnly } from "../paper"

export type BlockState = "display" | "edit"

export type BlockStateItem = {
  state: BlockState
  entity: BlockType
}

export type ReaderBlocksState = {
  values: {
    [blockKey: string]: BlockStateItem
  }
  loading: "idle" | "pending" | "succeeded" | "failed"
  errorMessage: string | null
}

export const DEFAULT_BLOCKS_STATE: ReaderBlocksState = {
  values: {},
  loading: "idle",
  errorMessage: null,
}

export const readerBlocksSlice = createSlice({
  name: "reader/blocks",
  initialState: DEFAULT_BLOCKS_STATE,
  reducers: {
    resetBlocks: () => DEFAULT_BLOCKS_STATE,
    updateBlockState: (
      state,
      {
        payload,
      }: PayloadAction<{
        blockKey: string
        blockState: BlockState
      }>,
    ) => {
      const { blockKey, blockState } = payload
      if (!blockKey) {
        return state
      } else if (blockKey in state.values) {
        state.values[blockKey].state = blockState
      } else {
        state.loading = "failed"
        state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
      }
    },
    resetBlockState: (
      state,
      { payload }: PayloadAction<string | undefined>,
    ) => {
      const blockKey = payload
      if (!blockKey) {
        return state
      } else if (blockKey in state.values) {
        state.values[blockKey].state = "display"
      } else {
        state.loading = "failed"
        state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
      }
    },
    updateBlockEntity: (
      state,
      {
        payload,
      }: PayloadAction<{
        blockKey: string | undefined
        blockEntity: BlockType
      }>,
    ) => {
      const { blockKey, blockEntity } = payload
      if (!blockKey) {
        return state
      } else if (blockKey in state.values) {
        state.values[blockKey].entity = blockEntity
      } else {
        state.loading = "failed"
        state.errorMessage = `redux 没有未找到 key 为 ${blockKey} 的 Block 对象`
      }
    },
  },
  extraReducers: (builder) => {
    /**
     * fetchBlocks
     */
    builder.addCase(fetchBlocks.pending, (state) => {
      state.loading = "pending"
      state.errorMessage = null
    })
    builder.addCase(fetchBlocks.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.values = Object.fromEntries(
        action.payload.map((entity) => [
          entity.key,
          { state: "display", entity },
        ]),
      )
      state.errorMessage = null
    })
    builder.addCase(fetchBlocks.rejected, (state, action) => {
      state.loading = "failed"
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage
      } else {
        state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
      }
    })
    /**
     * addBlock
     */
    builder.addCase(addBlock.pending, (state) => {
      state.loading = "pending"
      state.errorMessage = null
    })
    builder.addCase(addBlock.fulfilled, (state, { payload }) => {
      state.loading = "succeeded"
      state.values[payload.key] = {
        state: "display",
        entity: payload,
      }
      state.errorMessage = null
    })
    builder.addCase(addBlock.rejected, (state, action) => {
      state.loading = "failed"
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage
      } else {
        state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
      }
    })
    /**
     * saveBlockProperties
     */
    builder.addCase(saveBlockProperties.pending, (state) => {
      state.loading = "pending"
      state.errorMessage = null
    })
    builder.addCase(saveBlockProperties.fulfilled, (state, { payload }) => {
      state.loading = "succeeded"
      state.values[payload.key] = {
        state: "display",
        entity: payload,
      }
      state.errorMessage = null
    })
    builder.addCase(saveBlockProperties.rejected, (state, action) => {
      state.loading = "failed"
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage
      } else {
        state.errorMessage = action.error.message || DEFAULT_ERROR_MESSAGE
      }
    })
  },
})

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

export const fetchBlocks = createAsyncThunk<
  BlockType[],
  string[],
  {
    rejectValue: KnownError
  }
>(
  "reader/blocks/fetchBlocks",
  async (blockKeys, { dispatch, rejectWithValue }) => {
    try {
      const blocks = await getBlocks(blockKeys)
      dispatch(loadTableOfContent(blocks))
      return blocks
    } catch (e: any) {
      return rejectWithValue({
        errorMessage: e.errorMessage || DEFAULT_ERROR_MESSAGE,
      })
    }
  },
)

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

export const NULL_BLOCK_STATE = {
  state: null,
  entity: null,
}

export const selectBlock = (state: RootReaderState, blockKey?: string) => {
  if (!blockKey) {
    return NULL_BLOCK_STATE
  }

  return state.blocks.values[blockKey] || NULL_BLOCK_STATE
}

export const selectBlockState = (state: RootReaderState, blockKey?: string) => {
  if (!blockKey) return null
  return state.blocks.values[blockKey].state
}

export const selectBlockEntity = (
  state: RootReaderState,
  blockKey?: string,
) => {
  if (!blockKey) return null
  return state.blocks.values[blockKey].entity
}

export const selectIsEditing = (state: RootReaderState) => {
  Object.values(state.blocks.values).some((item) => item.state === "edit")
}

export const {
  resetBlocks,
  updateBlockState,
  updateBlockEntity,
  resetBlockState,
} = readerBlocksSlice.actions

export const readerBlocksReducer = readerBlocksSlice.reducer
