import headerSvg from "@/pages/reader/images/header.svg?react"
import paragraphSvg from "@/pages/reader/images/paragraph.svg?react"
import { Button, Flex, Tooltip } from "antd"
import Icon, { LogoutOutlined, PictureOutlined } from "@ant-design/icons"
import { useReaderDispatch } from "@/stores"
import {
  setCreatorState,
  setCreator,
  resetCreator,
} from "@/features/reader/creator"

export function BlockSelector() {
  const dispatch = useReaderDispatch()

  return (
    <div
      onClick={() => dispatch(setCreatorState("default"))}
      className="rounded-xl flex justify-center items-center outline-dashed outline-gray-300 h-[150px] hover:cursor-pointer"
    >
      <Flex gap={10} justify="center">
        <Tooltip placement="top" title="标题">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              dispatch(
                setCreator({
                  type: "header",
                  state: "edit",
                }),
              )
            }}
            icon={<Icon component={headerSvg} />}
          ></Button>
        </Tooltip>
        <Tooltip placement="top" title="段落">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              dispatch(
                setCreator({
                  type: "paragraph",
                  state: "edit",
                }),
              )
            }}
            icon={<Icon component={paragraphSvg} />}
          ></Button>
        </Tooltip>
        <Tooltip placement="top" title="图片">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              dispatch(
                setCreator({
                  type: "image",
                  state: "edit",
                }),
              )
            }}
            icon={<PictureOutlined />}
          ></Button>
        </Tooltip>
        <Tooltip placement="top" title="退出">
          <Button
            icon={<LogoutOutlined />}
            onClick={() => dispatch(resetCreator())}
          ></Button>
        </Tooltip>
      </Flex>
    </div>
  )
}
