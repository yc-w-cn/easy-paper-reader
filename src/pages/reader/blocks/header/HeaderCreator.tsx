import { useReaderDispatch } from "@/stores"
import { addBlock } from "@/features/reader/blocks"
import { resetCreator } from "@/features/reader/creator"
import { HeaderEditorBase } from "./HeaderEditorBase"
import { HeaderPropertiesType } from "@/apis/local-data/block"

export function HeaderCreator() {
  const dispatch = useReaderDispatch()

  const handleCancel = () => {
    dispatch(resetCreator())
  }

  const handleSubmit = ({ level, content }: HeaderPropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    dispatch(
      addBlock({
        type: "header",
        properties: { level, content },
      }),
    )
    dispatch(resetCreator())
  }

  return (
    <HeaderEditorBase handleSubmit={handleSubmit} handleCancel={handleCancel} />
  )
}
