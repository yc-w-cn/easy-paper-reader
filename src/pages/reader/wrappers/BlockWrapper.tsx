import { BlockArea, DraggableWrapper } from "@/pages"
import { BlockProvider } from "../providers"
import { AutoColumnContent } from "./AutoColumnContent"
import { DefaultPanel } from "../panels"

type Props = {
  blockKey: string
  readonly?: boolean
  hideRight?: boolean
}

export function BlockWrapper({ blockKey, readonly, hideRight = false }: Props) {
  if (!blockKey) return <></>

  return (
    <BlockProvider blockKey={blockKey}>
      {readonly ? (
        <AutoColumnContent
          content={[<BlockArea />, hideRight ? "" : <DefaultPanel />]}
        />
      ) : (
        <AutoColumnContent
          content={[
            <DraggableWrapper>
              <BlockArea />
            </DraggableWrapper>,
            hideRight ? "" : <DefaultPanel />,
          ]}
        />
      )}
    </BlockProvider>
  )
}
