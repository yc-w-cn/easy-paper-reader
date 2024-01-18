import { ParagraphPropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { BlockRole } from "@/pages/reader"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { Typography } from "antd"

type Props = {
  role: BlockRole
  blockKey?: string
}

export function ParagraphDisplayer({ blockKey }: Props) {
  const dispatch = useReaderDispatch()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  if (!entity || !blockKey) return <></>

  const properties = entity.properties as ParagraphPropertiesType

  return (
    <Typography.Paragraph
      onClick={() => {
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
