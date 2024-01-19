import {
  TypedAddListener,
  TypedStartListening,
  configureStore,
  createListenerMiddleware,
  addListener,
} from "@reduxjs/toolkit"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { readerLayoutReducer } from "@/features/reader/layout/slice"
import { readerCreatorReducer } from "@/features/reader/creator/slice"
import { readerPaperReducer } from "@/features/reader/paper"
import { readerTableOfContentReducer } from "@/features/reader/table-of-content"
import { readerBlocksReducer } from "@/features/reader/blocks"

const listenerMiddleware = createListenerMiddleware()

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
export const useReaderSelector: TypedUseSelectorHook<RootReaderState> =
  useSelector
export type ReaderStartListening = TypedStartListening<
  RootReaderState,
  ReaderDispatch
>
export type ReaderAddListener = TypedAddListener<
  RootReaderState,
  ReaderDispatch
>

export const startAppListening =
  listenerMiddleware.startListening as ReaderStartListening
export const addAppListener = addListener as ReaderAddListener
