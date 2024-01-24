import localforage from "localforage"

export async function removeBlock(blockKey: string) {
  return localforage.removeItem(blockKey)
}
