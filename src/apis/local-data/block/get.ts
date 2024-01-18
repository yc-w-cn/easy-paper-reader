import { BlockType } from "@/apis/local-data/block/types/block.type"
import localforage from "localforage"

export async function getBlock(key: string) {
  return localforage.getItem<BlockType>(key)
}

export async function getHeaderBlocks(keys: string[]) {
  const blocks = await getBlocks(keys)
  return blocks.filter((item) => item.type === "header")
}

export async function getBlocks(keys: string[]) {
  const blocks = []
  for (const key of keys) {
    const block = await localforage.getItem<BlockType>(key)
    if (block) {
      blocks.push(block)
    }
  }
  return blocks
}
