import { useReaderDispatch } from "@/stores"
import { addBlock } from "@/features/reader/blocks"
import { resetCreator } from "@/features/reader/creator"
import { ParagraphEditorBase } from "./ParagraphEditorBase"
import { ParagraphPropertiesType } from "@/apis/local-data/block"

export function ParagraphCreator() {
  const dispatch = useReaderDispatch()

  const handleCancel = () => {
    dispatch(resetCreator())
  }

  const handleSubmit = ({ content }: ParagraphPropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    dispatch(
      addBlock({
        type: "paragraph",
        properties: { content },
      }),
    )
    dispatch(resetCreator())
  }

  return (
    <ParagraphEditorBase handleSubmit={handleSubmit} handleCancel={handleCancel} />
  )
}
