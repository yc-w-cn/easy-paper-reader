import { ReaderStartListening } from "@/stores"
import { Unsubscribe } from "@reduxjs/toolkit"
import { initPaper } from "./slice"
import { fetchBlocks } from "../blocks"

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
  ]

  return () => {
    subscriptions.forEach((unsubscribe) => unsubscribe())
  }
}
