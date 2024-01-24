import {
  saveBlockProperties,
  selectBlockEntity,
} from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { App, Button, ConfigProvider, Empty, Input, Popover, Space } from "antd"
import { ReferenceType } from "@/apis/local-data/block"
import { useState } from "react"
import { filter, some } from "lodash"
import { DeleteOutlined } from "@ant-design/icons"
import { isURL } from "@/utils/url"

type Props = {
  readonly?: boolean
}

export function ReferencePanel({ readonly = false }: Props) {
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
    <Space direction="vertical">
      {!references?.length && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="w-[400px]" />
      )}
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
      {!readonly && (
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Space direction="vertical" size="small">
            <Input
              value={word}
              onChange={(e) => setWord(e.currentTarget.value)}
              size="small"
              className="w-[400px]"
              placeholder="文献缩写"
            />
            <Input.TextArea
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              size="small"
              autoSize={{
                minRows: 4,
              }}
              className="w-[400px]"
              placeholder="文章名称"
            />
            <Space>
              <Button size="small" type="primary" onClick={handleSave}>
                保存
              </Button>
              <Button size="small" type="default" onClick={resetCreator}>
                重置
              </Button>
            </Space>
          </Space>
        </ConfigProvider>
      )}
    </Space>
  )
}
