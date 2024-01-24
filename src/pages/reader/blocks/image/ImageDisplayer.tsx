import { ImagePropertiesType } from "@/apis/local-data/block"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "@/pages/reader/providers"
import { Button, Image, Popover, Space } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { removeBlockKey } from "@/features/reader/paper"
import { removeBlock } from "@/apis/local-data/block/remove"
import { getGeminiImageReply } from "@/apis/gemini/generate"

export function ImageDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const properties = entity?.properties as ImagePropertiesType

  if (!entity || !blockKey) return <></>

  const handleAI = async () => {
    const responseText = await getGeminiImageReply(
      "图片中的文字是什么？直接返回原文，请不要翻译，也不要添加其他内容。",
      {
        inlineData: {
          mimeType: properties.type,
          data: properties.content.split(",")[1],
        },
      },
    )
    if (responseText) {
      dispatch(
        saveBlockProperties({
          blockKey,
          properties: {
            comment: responseText,
          },
        }),
      )
    }
  }

  const handleRemove = () => {
    dispatch(removeBlockKey(blockKey))
    removeBlock(blockKey)
  }

  return (
    <Popover
      placement="topLeft"
      content={
        <Space.Compact>
          <Button type="default" size="small" onClick={handleAI}>
            AI
          </Button>
          <Button
            type="default"
            size="small"
            icon={<DeleteOutlined />}
            onClick={handleRemove}
          />
        </Space.Compact>
      }
      arrow={false}
      overlayInnerStyle={{
        backgroundColor: "transparent",
        padding: 0,
        boxShadow: "none",
      }}
    >
      <div>
        <Image
          src={properties.content}
          className="my-5"
          onDoubleClick={() => {
            dispatch(
              updateBlockState({
                blockKey,
                blockState: "edit",
              }),
            )
          }}
        />
        <p className="bg-gray-100 py-2 px-4  rounded-lg text-xs text-gray-500 leading-4">
          {properties.comment}
        </p>
      </div>
    </Popover>
  )
}
