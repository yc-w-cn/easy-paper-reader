import { Button, Popover, Space } from "antd"
import { useNavigate } from "react-router-dom"
import Icon, { EditOutlined, MenuOutlined } from "@ant-design/icons"
import zenImage from "@/pages/reader/images/zen.svg?react"
import { TableOfContent } from "@/pages/reader/components/areas"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { selectPaper } from "@/features/reader/paper"
import { changeMode } from "@/features/reader/layout"

export function NormalPaperHeader() {
  const paper = useReaderSelector(selectPaper)
  const dispatch = useReaderDispatch()
  const navigate = useNavigate()

  if (!paper) return <></>

  return (
    <header className="flex-none px-2 pt-4 pb-3 border-b relative flex gap-4 justify-between items-center">
      <Popover
        content={<TableOfContent className="w-[300px]" />}
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
        <Button
          size="small"
          icon={
            <Icon
              component={zenImage}
              onClick={() => dispatch(changeMode("zen"))}
            />
          }
        />
      </Space>
    </header>
  )
}
