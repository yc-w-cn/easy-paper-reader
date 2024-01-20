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
import { useReaderSelector } from "@/stores"
import { selectBlock } from "@/features/reader/blocks"

type Props = {
  blockKey: string
}

export function ReadOnlyArea({ blockKey }: Props) {
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  if (!entity) return <></>

  if (entity.type === "header") {
    return <HeaderDisplayer blockKey={blockKey} />
  }

  if (entity.type === "paragraph") {
    return <ParagraphDisplayer blockKey={blockKey} />
  }

  return <></>
}
