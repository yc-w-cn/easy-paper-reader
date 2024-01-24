import { HeaderDisplayer, HeaderEditor } from "@/pages/reader/blocks/header"
import {
  ParagraphEditor,
  ParagraphDisplayer,
} from "@/pages/reader/blocks/paragraph"
import { useReaderSelector } from "@/stores"
import { selectBlock } from "@/features/reader/blocks"
import { useBlockKey } from "@/pages/reader/providers"
import { ImageEditor, ImageDisplayer } from "@/pages/reader/blocks/image"

export function BlockArea() {
  const { blockKey } = useBlockKey()

  const { state: blockState, entity: blockEntity } = useReaderSelector(
    (state) => selectBlock(state, blockKey),
  )

  if (!blockEntity) return <></>

  if (blockState === "edit" && blockEntity.type === "header") {
    return <HeaderEditor />
  }

  if (blockState === "display" && blockEntity.type === "header") {
    return <HeaderDisplayer />
  }

  if (blockState === "display" && blockEntity.type === "paragraph") {
    return <ParagraphDisplayer />
  }

  if (blockState === "edit" && blockEntity.type === "paragraph") {
    return <ParagraphEditor />
  }

  if (blockState === "display" && blockEntity.type === "image") {
    return <ImageDisplayer />
  }

  if (blockState === "edit" && blockEntity.type === "image") {
    return <ImageEditor />
  }

  return <></>
}
