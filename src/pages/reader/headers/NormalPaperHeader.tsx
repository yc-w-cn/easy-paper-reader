import { Button, Popover, Space } from "antd"
import { useNavigate } from "react-router-dom"
import Icon, {
  DownloadOutlined,
  EditOutlined,
  MenuOutlined,
} from "@ant-design/icons"
import zenImage from "@/pages/reader/images/zen.svg?react"
import oneColumnImage from "@/pages/reader/images/column-width.svg?react"
import doubleColumnImage from "@/pages/reader/images/columns.svg?react"
import { TableOfContent } from "@/pages/reader"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { selectPaper } from "@/features/reader/paper"
import { changeColumnMode, changeMode } from "@/features/reader/layout"
import { backupPaper } from "@/apis/local-data/paper"
import { ISO_DATE_FORMAT } from "@/utils/date"
import dayjs from "dayjs"

export function NormalPaperHeader() {
  const paper = useReaderSelector(selectPaper)
  const columnMode = useReaderSelector((state) => state.layout.columnMode)
  const dispatch = useReaderDispatch()
  const navigate = useNavigate()

  if (!paper) return <></>

  return (
    <header className="flex-none px-2 pt-4 pb-3 border-b relative flex gap-4 justify-between items-center">
      <Popover
        content={
          <div className="max-h-[400px] overflow-y-scroll overflow-x-hidden">
            <TableOfContent className="w-[300px]" />
          </div>
        }
        placement="bottomLeft"
        title="页面导航"
        trigger={["click", "hover"]}
      >
        <Button
          size="small"
          className="flex-none"
          icon={<MenuOutlined />}
        ></Button>
      </Popover>
      <div className="flex-1">
        <h1 className="text-lg leading-4 font-normal">{paper.title}</h1>
        <h2 className="text-sm text-gray-500 leading-4 font-normal">
          {paper.translatedTitle}
        </h2>
      </div>
      <Space className="flex-none">
        <Button
          size="small"
          icon={<EditOutlined />}
          onClick={() => navigate(`/paper/edit/${paper.id}`)}
        />
        {columnMode === "one" ? (
          <Button
            size="small"
            icon={
              <Icon
                component={doubleColumnImage}
                onClick={() => dispatch(changeColumnMode("two"))}
              />
            }
          />
        ) : (
          <Button
            size="small"
            icon={
              <Icon
                component={oneColumnImage}
                onClick={() => dispatch(changeColumnMode("one"))}
              />
            }
          />
        )}
        <Button
          size="small"
          icon={
            <Icon
              component={zenImage}
              onClick={() => dispatch(changeMode("zen"))}
            />
          }
        />
        <Button
          size="small"
          icon={<DownloadOutlined />}
          onClick={async () => {
            const data = await backupPaper(paper.key)
            const jsonData = JSON.stringify(data, null, 2)
            const blob = new Blob([jsonData], { type: "application/json" })
            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `${paper.key}-${dayjs().format(ISO_DATE_FORMAT)}.json`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
          }}
        />
      </Space>
    </header>
  )
}
