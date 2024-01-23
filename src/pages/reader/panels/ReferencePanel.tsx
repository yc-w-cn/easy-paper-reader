import { selectBlockEntity } from "@/features/reader/blocks"
import { useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { Space } from "antd"

export function ReferencePanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )

  const references = blockEntity?.properties?.references as string[] || []

  return (
    <Space direction="vertical">
      {references.map((item, index) => (
        <span key={`refenrence-${index}`}>{item}</span>
      ))}
    </Space>
  )
}
