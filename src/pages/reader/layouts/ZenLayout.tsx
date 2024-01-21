import { ReactNode } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { TableOfContent } from "@/pages/reader/areas"

type Props = {
  children?: ReactNode
}

export function ZenLayout({ children }: Props) {
  return (
    <PanelGroup direction="horizontal" className="bg-white h-screen">
      <Panel defaultSize={25} minSize={15}>
        <div className="h-full flex flex-col justify-start items-start relative border-r overflow-auto">
          <h3 className="px-5 pt-5">页面导航</h3>
          <TableOfContent />
        </div>
      </Panel>
      <PanelResizeHandle className="w-2" />
      <Panel minSize={50} className="bg-grap-100 overflow-auto">
        {children}
      </Panel>
    </PanelGroup>
  )
}
