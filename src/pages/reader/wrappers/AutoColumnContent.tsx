import { useReaderSelector } from "@/stores"
import { OneColumnContent } from "./OneColumnContent"
import { TwoColumnsContent } from "./TwoColumnsContent"
import { selectLayoutColumnMode } from "@/features/reader/layout"

type Props = {
  content?: React.ReactNode | React.ReactNode[]
}

export function AutoColumnContent({ content }: Props) {
  const columnMode = useReaderSelector(selectLayoutColumnMode)

  if (columnMode === "one" && Array.isArray(content)) {
    return <OneColumnContent content={content[0]} />
  }

  if (columnMode === "one" && !Array.isArray(content)) {
    return <OneColumnContent content={content} />
  }

  if (columnMode === "two" && !Array.isArray(content)) {
    return <TwoColumnsContent left={content} right="" />
  }

  if (columnMode === "two" && Array.isArray(content) && content.length === 1) {
    return <TwoColumnsContent left={content[0]} right="" />
  }

  if (columnMode === "two" && Array.isArray(content) && content.length > 1) {
    return <TwoColumnsContent left={content[0]} right={content[1]} />
  }

  return <TwoColumnsContent left="" right="" />
}
