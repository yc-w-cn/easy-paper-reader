import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { FormulaPropertiesType } from "@/apis/local-data/block"
import { useBlockKey } from "@/pages/reader/providers"
import { FormulaEditorBase } from "./FormulaEditorBase"

export function FormulaEditor() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const handleCancel = () => {
    if (!blockKey) return
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
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
    if (!blockKey) return
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          imageSourceType,
          imageSource,
          latex,
        },
      }),
    )
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  return (
    <FormulaEditorBase
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      initialValues={entity?.properties}
    />
  )
}
