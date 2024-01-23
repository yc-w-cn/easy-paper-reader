import { selectBlockEntity } from "@/features/reader/blocks"
import { useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { Space, Tag } from "antd"
import { WordType } from "@/apis/local-data/block"

export function WordPanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )
  const words = (blockEntity?.properties?.words as WordType[]) || []

  return (
    <Space direction="horizontal" wrap>
      {words.map((item, index) => (
        <Tag key={`word-${index}`}>{item.word}</Tag>
      ))}
    </Space>
  )
}
