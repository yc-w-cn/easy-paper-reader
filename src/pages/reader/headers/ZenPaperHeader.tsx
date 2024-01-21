import { FloatButton } from "antd"
import { LogoutOutlined } from "@ant-design/icons"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { selectPaper } from "@/features/reader/paper"
import { changeMode, selectLayoutColumnMode } from "@/features/reader/layout"
import { cn } from "@/utils/tailwind"

export function ZenPaperHeader() {
  const paper = useReaderSelector(selectPaper)
  const columnMode = useReaderSelector(selectLayoutColumnMode)
  const dispatch = useReaderDispatch()

  if (!paper) return <></>

  return (
    <header
      className={cn(
        columnMode === "one" ? "px-20" : "px-14",
        "pt-4 relative flex gap-4 justify-between items-center",
      )}
    >
      <div className="flex-1">
        <h1 className="text-lg leading-4 font-normal">{paper.title}</h1>
        <h2 className="text-sm text-gray-500 leading-4 font-normal">
          {paper.translatedTitle}
        </h2>
      </div>
      <FloatButton
        icon={<LogoutOutlined />}
        onClick={() => dispatch(changeMode("basic"))}
      />
    </header>
  )
}
