import { selectBlockEntity } from "@/features/reader/blocks"
import { useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { Space } from "antd"
import { ReferenceType } from "@/apis/local-data/block"

export function ReferencePanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )

  const references = blockEntity?.properties?.references as ReferenceType[] || []

  return (
    <Space direction="vertical">
      {references.map((reference, index) => (
        <span key={`refenrence-${index}`}>{reference.title}</span>
      ))}
    </Space>
  )
}
