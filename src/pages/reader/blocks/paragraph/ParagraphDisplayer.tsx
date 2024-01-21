import { ParagraphPropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { Typography } from "antd"
import { useBlockKey } from "@/pages/reader/providers"


export function ParagraphDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  if (!entity || !blockKey) return <></>

  const properties = entity.properties as ParagraphPropertiesType

  return (
    <Typography.Paragraph
      onDoubleClick={() => {
        dispatch(
          updateBlockState({
            blockKey,
            blockState: "edit",
          }),
        )
      }}
    >
      {properties.content}
    </Typography.Paragraph>
  )
}
