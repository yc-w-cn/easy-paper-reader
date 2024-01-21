import { FloatButton } from "antd"
import { LogoutOutlined } from "@ant-design/icons"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { selectPaper } from "@/features/reader/paper"
import { changeMode } from "@/features/reader/layout"

export function ZenPaperHeader() {
  const paper = useReaderSelector(selectPaper)
  const dispatch = useReaderDispatch()

  if (!paper) return <></>

  return (
    <header className="px-20 pt-4 relative flex gap-4 justify-between items-center">
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
