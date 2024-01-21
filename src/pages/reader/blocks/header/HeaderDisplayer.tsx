import { HeaderPropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { cn } from "@/utils/tailwind"
import { Typography } from "antd"
import { useBlockKey } from "@/pages/reader/providers"
import { useMemo } from "react"

const styles: Record<number, string> = {
  0: "hidden",
  1: "text-xl",
  2: "text-lg",
  3: "text-base",
  4: "text-sm",
  5: "text-xs",
}

export function HeaderDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const properties = entity?.properties as HeaderPropertiesType

  const matchedClassName = useMemo(() => {
    if (properties.level in styles) {
      return styles[properties.level]
    }
    return styles[0]
  }, [properties.level])

  if (!entity || !blockKey) return <></>

  return (
    <Typography.Title
      level={entity.properties.level}
      className={cn("", matchedClassName)}
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
    </Typography.Title>
  )
}
