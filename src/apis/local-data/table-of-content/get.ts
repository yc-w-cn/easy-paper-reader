import { getHeaderBlocks } from "@/apis/local-data/block/get"
import { BlockType } from "@/apis/local-data/block/types/block.type"
import type { DataNode } from "antd/es/tree"
import { operateNodes } from "./operate"
import { BlockNode } from "./block-node.type"
import { getPaperById } from "@/apis/local-data/paper/get"

export async function getTableOfContent(paperId: string | undefined) {
  if (!paperId) return []
  const paperResult = await getPaperById(paperId)
  if (!paperResult) return []
  const { blockKeys } = paperResult
  const blocks = await getHeaderBlocks(blockKeys || [])
  const nodes = getTableOfContentNodes(blocks)
  return nodes
}

export function getTableOfContentNodes(blocks: BlockType[]) {
  const stack: BlockNode[] = []
  const nodes: DataNode[] = []
  for (const block of blocks) {
    operateNodes(block, nodes, stack)
  }
  return nodes
}
