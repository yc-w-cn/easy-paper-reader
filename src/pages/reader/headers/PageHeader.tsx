import { NormalPaperHeader, ZenPaperHeader } from "@/pages/reader/headers"
import { useReaderSelector } from "@/stores"

export function PageHeader() {
  const mode = useReaderSelector((state) => state.layout.mode)
  return <>{mode === "basic" ? <NormalPaperHeader /> : <ZenPaperHeader />}</>
}
