import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { ImageEditorBase } from "./ImageEditorBase"
import { ImagePropertiesType } from "@/apis/local-data/block"
import { useBlockKey } from "@/pages/reader/providers"

export function ImageEditor() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const handleCancel = () => {
    if (!blockKey) return
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  const handleSubmit = ({ type, content }: ImagePropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    if (!blockKey) return
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          type,
          content,
        },
      }),
    )
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  return (
    <ImageEditorBase
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      initialValues={entity?.properties}
    />
  )
}
