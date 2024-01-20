import { BlockType } from "@/apis/local-data/block/types/block.type"
import { getLogger } from "@/utils/logger"
import type { DataNode } from "antd/es/tree"
import { BlockNode } from "./block-node.type"
import { uuid } from "@/utils/uuid"
import { c } from "@/utils/key-name"

export function operateNodes(
  block: BlockType,
  nodes: DataNode[],
  stack: BlockNode[],
  hideUnknownNodes: boolean = true,
) {
  const logger = getLogger(operateNodes, false)
  const currentLevel = block.properties.level

  /**
   * 新增：在根节点
   */
  const pushNewNode = () => {
    const newNode = {
      title: block.properties.content,
      key: block.key,
      isLeaf: true,
      children: [],
    }
    nodes.push(newNode)
    stack.push({
      node: newNode,
      level: currentLevel,
    })
  }

  /**
   * 追加：到上级节点
   */
  const appendNewNode = () => {
    const newNode = {
      title: block.properties.content,
      key: block.key,
      isLeaf: true,
      children: [],
    }
    if (lastNode) {
      lastNode.children?.push(newNode)
      lastNode.isLeaf = false
    }
    stack.push({
      node: newNode,
      level: currentLevel,
    })
  }

  const createUnknownLevels = (from: number, to: number) => {
    const levels = Array.from(
      {
        length: to - from + 1,
      },
      (_, index) => from + index,
    )
    logger.debug("createUnknownLevels", { from, to, levels })
    return levels
  }

  const createUnknownBlock = (level: number, fakeId: string = uuid()) => ({
    id: fakeId,
    key: c("unknown", fakeId),
    paperKey: block.paperKey,
    type: block.type,
    ctime: block.ctime,
    properties: {
      content: "unknown",
      level,
    },
    childBlockKeys: [],
  })

  const lastNode = stack.at(-1)?.node
  const lastLevel = stack.at(-1)?.level || 0

  if (stack.length === 0) {
    // 堆栈为空的情况
    logger.debug("Stack Empty")
    pushNewNode()
    return
  }

  if (currentLevel === lastLevel) {
    logger.debug("Same Level")
    // 并列的情况
    stack.pop() // 挤出最后一个元素
    operateNodes(block, nodes, stack) // 递归
    return
  }

  if (currentLevel === lastLevel + 1) {
    logger.debug("Child Level")
    // 是子元素的情况
    appendNewNode()
    return
  }

  if (currentLevel > lastLevel + 1) {
    logger.debug("Jump Level", { currentLevel, lastLevel })
    // 当前目录应当是下级目录
    const unknownLevels = createUnknownLevels(lastLevel + 1, currentLevel - 1)
    if (!hideUnknownNodes) {
      // 补足目录差距
      for (const unknownLevel of unknownLevels) {
        const unknownBlock = createUnknownBlock(unknownLevel)
        operateNodes(unknownBlock, nodes, stack)
      }
    } else {
      appendNewNode()
      return
    }
    // 加入到堆栈
    operateNodes(block, nodes, stack)
    return
  }

  if (currentLevel < lastLevel) {
    logger.debug("Higer Level")
    // 并列的情况
    stack.pop() // 挤出最后一个元素
    operateNodes(block, nodes, stack) // 递归
    return
  }
}
