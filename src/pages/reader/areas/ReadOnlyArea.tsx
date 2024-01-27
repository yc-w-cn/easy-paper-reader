import { HeaderDisplayer } from "@/pages/reader/blocks/header"
import { ParagraphDisplayer } from "@/pages/reader/blocks/paragraph"
import { useReaderSelector } from "@/stores"
import { selectBlock } from "@/features/reader/blocks"

type Props = {
  blockKey: string
}

export function ReadOnlyArea({ blockKey }: Props) {
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  if (!entity) return <></>

  if (entity.type === "header") {
    return <HeaderDisplayer />
  }

  if (entity.type === "paragraph") {
    return <ParagraphDisplayer />
  }

  return <></>
}
