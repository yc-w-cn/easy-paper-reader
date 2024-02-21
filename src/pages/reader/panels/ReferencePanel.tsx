import {
  saveBlockProperties,
  selectBlockEntity,
} from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import {
  App,
  Button,
  ConfigProvider,
  Empty,
  Flex,
  Input,
  Popover,
  Space,
} from "antd"
import { ReferenceType } from "@/apis/local-data/block"
import { useState } from "react"
import filter from "lodash/filter"
import some from "lodash/some"
import { DeleteOutlined } from "@ant-design/icons"
import { isURL } from "@/utils/url"

type Props = {
  readonly?: boolean
  showEditor?: boolean
}

export function ReferencePanel({
  readonly = false,
  showEditor = false,
}: Props) {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )
  const [word, setWord] = useState("")
  const [title, setTitle] = useState("")
  const { message } = App.useApp()

  const references =
    (blockEntity?.properties?.references as ReferenceType[]) || []

  const resetCreator = () => {
    setWord("")
    setTitle("")
  }

  const hasSameWord = some(references, ["word", word])

  const handleSave = () => {
    if (!word) {
      message.error("请填写文献缩写")
      return
    }
    if (hasSameWord) {
      message.error("重复的文献缩写")
      return
    }
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          references: [
            ...references,
            {
              word,
              title,
            },
          ],
        },
      }),
    )
    resetCreator()
  }

  const remove = (word: string) => {
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          references: filter(references, (item) => item.word !== word),
        },
      }),
    )
  }

  return (
    <Flex vertical className="flex-grow flex-shrink overflow-hidden pr-2">
      {!references?.length && (
        <div className="flex-grow flex-shrink overflow-auto items-center flex justify-center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="w-[400px]" />
        </div>
      )}
      {!!references?.length && (
        <div className="flex-grow flex-shrink overflow-auto">
          {references.map((reference, index) => (
            <p key={`refenrence-${index}`}>
              <Popover
                content={
                  <Button
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={() => remove(reference.word)}
                  />
                }
                arrow={false}
                placement="right"
                overlayInnerStyle={{
                  backgroundColor: "transparent",
                  padding: 0,
                  boxShadow: "none",
                }}
              >
                <strong>{reference.word}</strong>
              </Popover>
              <br />
              {isURL(reference.title) ? (
                <a href={reference.title} target="_blank">
                  {reference.title}
                </a>
              ) : (
                reference.title
              )}
            </p>
          ))}
        </div>
      )}
      {!readonly && showEditor && (
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Space
            direction="vertical"
            size="small"
            className="min-h-[155px] mt-1 flex-none"
          >
            <Input
              value={word}
              onChange={(e) => setWord(e.currentTarget.value)}
              size="small"
              className="w-full"
              placeholder="文献缩写"
            />
            <Input.TextArea
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              size="small"
              autoSize={{
                minRows: 4,
              }}
              className="w-full"
              placeholder="文章名称"
            />
            <Flex gap={8} justify="end">
              <Button size="small" type="primary" onClick={handleSave}>
                保存
              </Button>
              <Button size="small" type="default" onClick={resetCreator}>
                重置
              </Button>
            </Flex>
          </Space>
        </ConfigProvider>
      )}
    </Flex>
  )
}
