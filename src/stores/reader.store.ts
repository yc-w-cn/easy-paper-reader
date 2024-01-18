import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { readerLayoutReducer } from "@/features/reader/layout/slice"
import { readerCreatorReducer } from "@/features/reader/creator/slice"
import { readerPaperReducer, initPaper } from "@/features/reader/paper"
import { readerTableOfContentReducer } from "@/features/reader/table-of-content"
import { fetchBlocks, readerBlocksReducer } from "@/features/reader/blocks"

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: initPaper,
  effect: async (action, listenerApi) => {
    listenerApi.getState()
    listenerApi.dispatch(fetchBlocks(action.payload.blockKeys))
  },
})

export const readerStore = configureStore({
  reducer: {
    layout: readerLayoutReducer,
    creator: readerCreatorReducer,
    blocks: readerBlocksReducer,
    paper: readerPaperReducer,
    tableOfContent: readerTableOfContentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootReaderState = ReturnType<typeof readerStore.getState>
export type ReaderDispatch = typeof readerStore.dispatch
export const useReaderDispatch: () => ReaderDispatch = useDispatch
export const useReaderSelector: TypedUseSelectorHook<RootReaderState> = useSelector