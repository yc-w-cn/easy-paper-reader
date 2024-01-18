import { BlockType, BlockTypeType } from "."
import { uuid } from "@/utils/uuid"
import { c } from "@/utils/key-name"
import { saveBlock } from "./save"

export function createBlock(type: BlockTypeType, paperKey: string, properties: any)
{
  const id = uuid()
  const key = c("block", id)
  const block: BlockType = {
    id: uuid(),
    key,
    paperKey,
    type,
    properties,
    ctime: new Date().getTime(),
    childBlockKeys: [],
  }
  return saveBlock(block)
}
