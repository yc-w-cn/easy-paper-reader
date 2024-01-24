import { useReaderDispatch } from "@/stores"
import { addBlock } from "@/features/reader/blocks"
import { resetCreator } from "@/features/reader/creator"
import { ImagePropertiesType } from "@/apis/local-data/block/properties"
import { ImageEditorBase } from "./ImageEditorBase"

export function ImageCreator() {
  const dispatch = useReaderDispatch()

  const handleCancel = () => {
    dispatch(resetCreator())
  }

  const handleSubmit = ({ content }: ImagePropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    dispatch(
      addBlock({
        type: "image",
        properties: { content },
      }),
    )
    dispatch(resetCreator())
  }

  return (
    <ImageEditorBase handleSubmit={handleSubmit} handleCancel={handleCancel} />
  )
}
