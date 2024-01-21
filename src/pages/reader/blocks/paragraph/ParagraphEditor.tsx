import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { ParagraphEditorBase } from "./ParagraphEditorBase"
import { ParagraphPropertiesType } from "@/apis/local-data/block"
import { useBlockKey } from "@/pages/reader/providers"

export function ParagraphEditor() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const handleCancel = () => {
    if (!blockKey) return
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  const handleSubmit = ({ content }: ParagraphPropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    if (!blockKey) return
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          content,
        },
      }),
    )
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  return (
    <ParagraphEditorBase
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      initialValues={entity?.properties}
    />
  )
}
