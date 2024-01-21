import { ReaderStartListening } from "@/stores"
import { Unsubscribe } from "@reduxjs/toolkit"
import { updateBlockEntity } from "./slice"
import { fetchBlocks } from "./thunks"

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
export function setupBlocksListeners(
  startListening: ReaderStartListening,
): Unsubscribe {
  const subscriptions = [
    startListening({
      actionCreator: updateBlockEntity,
      effect: async (_, listenerApi) => {
        const blockKeys = Object.keys(listenerApi.getState().blocks.values)
        listenerApi.dispatch(fetchBlocks(blockKeys))
      },
    }),
  ]

  return () => {
    subscriptions.forEach((unsubscribe) => unsubscribe())
  }
}
