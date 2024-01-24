import { ImagePropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "@/pages/reader/providers"
import { Image } from "antd"

export function ImageDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const properties = entity?.properties as ImagePropertiesType

  if (!entity || !blockKey) return <></>

  return (
    <Image
      src={properties.content}
      className="my-5"
      onDoubleClick={() => {
        dispatch(
          updateBlockState({
            blockKey,
            blockState: "edit",
          }),
        )
      }}
    />
  )
}
