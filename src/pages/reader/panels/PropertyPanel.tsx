import { selectBlockEntity } from "@/features/reader/blocks"
import { useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs"

export function PropertyPanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )
  return (
    <SyntaxHighlighter language="json" style={a11yLight}>
      {JSON.stringify(blockEntity?.properties)}
    </SyntaxHighlighter>
  )
}
