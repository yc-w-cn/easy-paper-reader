import { FormulaPropertiesType } from "@/apis/local-data/block"
import {
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "@/pages/reader/providers"
import { Button, ConfigProvider, Image, Input, Popover, Space } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { removeBlockKey } from "@/features/reader/paper"
import { removeBlock } from "@/apis/local-data/block/remove"
import { getGeminiImageReply } from "@/apis/gemini/generate"
import { useState } from "react"
import "katex/dist/katex.min.css"
import { BlockMath } from "react-katex"

export function FormulaDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))
  const [renderFormula, setRenderFormula] = useState(false)

  const properties = entity?.properties as FormulaPropertiesType

  if (!entity || !blockKey) return <></>

  const handleAI = async () => {
    if (!properties.imageSourceType || !properties.imageSource) return
    const responseText = await getGeminiImageReply(
      "图片中的公式是什么？直接返回LaTeX表达式，请不要添加其他内容，也不要包裹$$。",
      {
        inlineData: {
          mimeType: properties.imageSourceType,
          data: properties.imageSource.split(",")[1],
        },
      },
    )
    if (responseText) {
      dispatch(
        saveBlockProperties({
          blockKey,
          properties: {
            latex: responseText,
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
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Space.Compact>
            <Button type="default" size="small" onClick={handleAI}>
              AI
            </Button>
            {renderFormula ? (
              <Button
                type="default"
                size="small"
                onClick={() => setRenderFormula(false)}
              >
                RAW
              </Button>
            ) : (
              <Button
                type="default"
                size="small"
                onClick={() => setRenderFormula(true)}
              >
                渲染
              </Button>
            )}

            <Button
              type="default"
              size="small"
              icon={<DeleteOutlined />}
              onClick={handleRemove}
            />
          </Space.Compact>
        </ConfigProvider>
      }
      arrow={false}
      overlayInnerStyle={{
        backgroundColor: "transparent",
        padding: 0,
        boxShadow: "none",
      }}
    >
      {renderFormula ? (
        <div>
          <BlockMath math={properties.latex} />
        </div>
      ) : (
        <div>
          <Image
            src={properties.imageSource}
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
          <p className="bg-gray-100 py-2 px-4  rounded-lg">
            <Input.TextArea
              autoSize
              classNames={{
                textarea: "text-xs text-gray-500 leading-4",
              }}
              value={properties.latex}
              bordered={false}
              onChange={(e) => {
                dispatch(
                  saveBlockProperties({
                    blockKey,
                    properties: {
                      latex: e.currentTarget.value,
                    },
                  }),
                )
              }}
            />
          </p>
        </div>
      )}
    </Popover>
  )
}
