import { useReaderDispatch } from "@/stores"
import { addBlock } from "@/features/reader/blocks"
import { resetCreator } from "@/features/reader/creator"
import { FormulaPropertiesType } from "@/apis/local-data/block/properties"
import { FormulaEditorBase } from "./FormulaEditorBase"

export function FormulaCreator() {
  const dispatch = useReaderDispatch()

  const handleCancel = () => {
    dispatch(resetCreator())
  }

  const handleSubmit = ({
    imageSourceType,
    imageSource,
    latex,
  }: FormulaPropertiesType) => {
    if (!imageSource) {
      handleCancel()
      return
    }
    dispatch(
      addBlock({
        type: "formula",
        properties: { imageSourceType, imageSource, latex },
      }),
    )
    dispatch(resetCreator())
  }

  return (
    <FormulaEditorBase
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  )
}
