import { NormalPaperHeader, ZenPaperHeader } from "@/pages/reader/components"
import { useReaderSelector } from "@/stores"

export function AutoPageHeader() {
  const mode = useReaderSelector((state) => state.layout.mode)
  return <>{mode === "basic" ? <NormalPaperHeader /> : <ZenPaperHeader />}</>
}
