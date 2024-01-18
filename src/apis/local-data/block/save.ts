import localforage from "localforage"
import { BlockType } from "."

export function saveBlock(block: BlockType) {
  return localforage.setItem(block.key, block)
}