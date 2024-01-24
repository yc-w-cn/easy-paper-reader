import { ReaderStartListening } from "@/stores"
import { Unsubscribe } from "@reduxjs/toolkit"
import { exchangeBlockKeys, initPaper, removeBlockKey } from "./slice"
import { fetchBlocks } from "../blocks"
import { updatePaper } from "@/apis/local-data/paper"

/**
 * Subscribes counter listeners and returns a `teardown` function.
 * @example
 * ```ts
 * useEffect(() => {
 *   const unsubscribe = setupCounterListeners();
 *   return unsubscribe;
 * }, []);
 * ```
 */
export function setupPaperListeners(
  startListening: ReaderStartListening,
): Unsubscribe {
  const subscriptions = [
    startListening({
      actionCreator: initPaper,
      effect: async (action, listenerApi) => {
        listenerApi.dispatch(fetchBlocks(action.payload.blockKeys))
      },
    }),
    startListening({
      actionCreator: exchangeBlockKeys,
      effect: async (_, listenerApi) => {
        const paper = listenerApi.getState().paper.value
        if (paper) {
          listenerApi.dispatch(fetchBlocks(paper.blockKeys))
        }
      },
    }),
    startListening({
      actionCreator: exchangeBlockKeys,
      effect: async (_, listenerApi) => {
        const paper = listenerApi.getState().paper.value
        if (paper) {
          updatePaper(paper.key, {
            blockKeys: paper.blockKeys,
          })
        }
      },
    }),
    startListening({
      actionCreator: removeBlockKey,
      effect: async (_, listenerApi) => {
        const paper = listenerApi.getState().paper.value
        if (paper) {
          updatePaper(paper.key, {
            blockKeys: paper.blockKeys,
          })
        }
      },
    }),
  ]

  return () => {
    subscriptions.forEach((unsubscribe) => unsubscribe())
  }
}
