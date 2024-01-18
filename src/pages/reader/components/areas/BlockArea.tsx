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

  if (role === "creator" && creatorState === "default") {
    return <DefaultDisplayer />
  }

  if (role === "creator" && creatorState === "select") {
    return <BlockSelector />
  }

  if (role === "block" && !blockEntity) {
    return <></>
  }

  if (
    (role === "creator" ? creatorState : blockState)  === "edit" &&
    (role === "creator" ? creatorType : blockEntity?.type) === "header"
  ) {
    return <HeaderEditor blockKey={blockKey} role={role} />
  }

  if (
    role === "block" &&
    blockState === "display" &&
    blockEntity.type === "header" &&
    blockEntity.properties
  ) {
    return <HeaderDisplayer blockKey={blockKey} role={role} />
  }

  if (
    role === "block" &&
    blockState === "display" &&
    blockEntity.type === "paragraph"
  ) {
    return <ParagraphDisplayer blockKey={blockKey} role={role} />
  }

  if (
    (role === "creator" ? creatorState : blockState) === "edit" &&
    (role === "creator" ? creatorType : blockEntity?.type) === "paragraph"
  ) {
    return <ParagraphEditor blockKey={blockKey} role={role} />
  }

  return <></>
}
