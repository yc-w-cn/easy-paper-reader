import { BlockType } from "@/apis/local-data/block/types/block.type"
import { getLogger } from "@/utils/logger"
import localforage from "localforage"
import { saveBlock } from "."

export async function updateBlock(
  blockKey: string,
  updateValues: Partial<BlockType>,
) {
  const logger = getLogger(updateBlock)
  try {
    const previousValue = await localforage.getItem<BlockType>(blockKey)
    if (previousValue === null) {
      throw new Error("Object not found in local storage")
    }
    return saveBlock({
      ...previousValue,
      ...updateValues,
      key: blockKey,
      mtime: new Date().getTime(),
    })
  } catch (error) {
    logger.error("Error while getting object from storage:", error)
    throw error
  }
}

export async function saveBlockProperties(
  blockKey: string,
  properties: object,
) {
  const logger = getLogger(saveBlockProperties)
  try {
    const previousValue = await localforage.getItem<BlockType>(blockKey)
    if (previousValue === null) {
      throw new Error(`localforage 未找到 key 为 ${blockKey} 的 Block 对象`)
    }
    return saveBlock({
      ...previousValue,
      properties: {
        ...previousValue.properties,
        ...properties
      },
      key: blockKey,
      mtime: new Date().getTime(),
    })
  } catch (error) {
    logger.error("Error while getting object from storage:", error)
    throw error
  }
}
