import { HeaderPropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { BlockRole } from "@/pages/reader"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { cn } from "@/utils/tailwind"
import { Typography } from "antd"

type Props = {
  role?: BlockRole
  blockKey?: string
}

const styles = {
  0: "hidden",
  1: "text-xl",
  2: "text-lg",
  3: "text-base",
  4: "text-sm",
  5: "text-xs",
}

export function HeaderDisplayer({ blockKey }: Props) {
  const dispatch = useReaderDispatch()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  if (!entity || !blockKey) return <></>

  const properties = entity.properties as HeaderPropertiesType

  return (
    <Typography.Title
      level={entity.properties.level}
      className={cn("", styles[properties.level || 0])}
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
    </Typography.Title>
  )
}
