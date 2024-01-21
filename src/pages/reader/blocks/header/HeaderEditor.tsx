import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { HeaderEditorBase } from "./HeaderEditorBase"
import { HeaderPropertiesType } from "@/apis/local-data/block"
import { useBlockKey } from "@/pages/reader/providers"

export function HeaderEditor() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const handleCancel = () => {
    if (!blockKey) return
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  const handleSubmit = ({ level, content }: HeaderPropertiesType) => {
    if (!content) {
      handleCancel()
      return
    }
    if (!blockKey) return
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          level,
          content,
        },
      }),
    )
    dispatch(updateBlockState({ blockKey, blockState: "display" }))
  }

  return (
    <HeaderEditorBase
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      initialValues={entity?.properties}
    />
  )
}
