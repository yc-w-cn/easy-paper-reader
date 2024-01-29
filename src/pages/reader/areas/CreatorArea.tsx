import { HeaderCreator,  } from "@/pages/reader/blocks/header"
import { DefaultDisplayer } from "@/pages/reader/blocks/default"
import {
  ParagraphCreator,
} from "@/pages/reader/blocks/paragraph"
import { BlockSelector } from "@/pages/reader/blocks/selector"
import { useReaderSelector } from "@/stores"
import { ImageCreator } from "@/pages/reader/blocks/image"
import { FormulaCreator } from "../blocks/formula"

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

  if (creatorState === "edit" && creatorType === "image") {
    return <ImageCreator  />
  }

  if (creatorState === "edit" && creatorType === "formula") {
    return <FormulaCreator />
  }

  if (creatorState === "default") {
    return <DefaultDisplayer />
  }

  if (creatorState === "select") {
    return <BlockSelector />
  }

  return <></>
}
