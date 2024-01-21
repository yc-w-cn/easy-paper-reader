import { BlockArea, DraggableWrapper } from "@/pages"
import { BlockProvider } from "../providers"
import { AutoColumnContent } from "./AutoColumnContent"
import { DefaultPanel } from "../panels"

type Props = {
  blockKey: string
  readonly?: boolean
}

export function BlockWrapper({ blockKey, readonly }: Props) {
  if (!blockKey) return <></>

  return (
    <BlockProvider blockKey={blockKey}>
      {readonly ? (
        <AutoColumnContent content={[<BlockArea />, <DefaultPanel />]} />
      ) : (
        <DraggableWrapper>
          <AutoColumnContent content={[<BlockArea />, <DefaultPanel />]} />
        </DraggableWrapper>
      )}
    </BlockProvider>
  )
}
