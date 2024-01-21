import { HeaderCreator, HeaderDisplayer, HeaderEditor } from "@/pages/reader/blocks/header"
import { DefaultDisplayer } from "@/pages/reader/blocks/default"
import {
  ParagraphEditor,
  ParagraphDisplayer,
  ParagraphCreator,
} from "@/pages/reader/blocks/paragraph"
import { BlockSelector } from "@/pages/reader/blocks/selector"
import { useReaderSelector } from "@/stores"

export function CreatorArea() {
  const { state: creatorState, type: creatorType } = useReaderSelector(
    (state) => state.creator,
  )

  if (creatorState === "edit" && creatorType === "header") {
    return <HeaderCreator />
  }

  if (creatorState === "edit" && creatorType === "paragraph") {
    return <ParagraphCreator  />
  }

  if (creatorState === "default") {
    return <DefaultDisplayer />
  }

  if (creatorState === "select") {
    return <BlockSelector />
  }

  return <></>
}
