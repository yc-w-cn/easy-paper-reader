import {
  HeaderDisplayer,
  HeaderEditor,
} from "@/pages/reader/components/blocks/header"
import { DefaultDisplayer } from "@/pages/reader/components/blocks/default"
import {
  ParagraphEditor,
  ParagraphDisplayer,
} from "@/pages/reader/components/blocks/paragraph"
import { BlockSelector } from "@/pages/reader/components/blocks/selector"
import { BlockRole } from "./block-role.type"
import { useReaderSelector } from "@/stores"
import { selectBlock } from "@/features/reader/blocks"

type Props = {
  role: BlockRole
  blockKey?: string
}

export function BlockArea({ blockKey, role }: Props) {
  const { state: blockState, entity: blockEntity } = useReaderSelector(
    (state) => selectBlock(state, blockKey),
  )

  const { state: creatorState, type: creatorType } = useReaderSelector(
    (state) => state.creator,
  )

  const currentState = role === "creator" ? creatorState : blockState
  const currentType = role === "creator" ? creatorType : blockEntity?.type

  if (currentState === "edit" && currentType === "header") {
    return <HeaderEditor blockKey={blockKey} role={role} />
  }

  if (blockState === "display" && currentType === "header") {
    return <HeaderDisplayer blockKey={blockKey} role={role} />
  }

  if (blockState === "display" && currentType === "paragraph") {
    return <ParagraphDisplayer blockKey={blockKey} role={role} />
  }

  if (currentState === "edit" && currentType === "paragraph") {
    return <ParagraphEditor blockKey={blockKey} role={role} />
  }

  if (currentState === "default") {
    return <DefaultDisplayer />
  }

  if (currentState === "select") {
    return <BlockSelector />
  }

  return <></>
}
