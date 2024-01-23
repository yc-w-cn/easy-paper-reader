import { selectBlockEntity } from "@/features/reader/blocks"
import { useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { Popover, Space, Tag } from "antd"
import { WordType } from "@/apis/local-data/block"

export function WordPanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )
  const words = (blockEntity?.properties?.words as WordType[]) || []

  return (
    <Space direction="horizontal" wrap size={[0, 5]}>
      {words.map((item, index) => (
        <Popover
        key={`popover-${index}`}
          content={item.translatedWord}
          trigger={"hover"}
          placement="top"
        >
          <Tag key={`word-${index}`}>{item.word}</Tag>
        </Popover>
      ))}
    </Space>
  )
}
