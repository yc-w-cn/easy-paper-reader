import { ParagraphPropertiesType } from "@/apis/local-data/block"
import { selectBlock, updateBlockState } from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { Button, Popover, Space, Typography } from "antd"
import { useBlockKey } from "@/pages/reader/providers"
import { EyeOutlined } from "@ant-design/icons"
import { useState } from "react"
import { ParagraphAnalyzer } from "./ParagraphAnalyzer"
import { HighlightSentence } from "./HighlightSentence"

export function ParagraphDisplayer() {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))
  const [openViewer, setOpenViewer] = useState(false)

  if (!entity || !blockKey) return <></>

  const properties = entity.properties as ParagraphPropertiesType

  return (
    <>
      <Popover
        trigger={["hover", "click"]}
        placement="topLeft"
        overlayInnerStyle={{
          backgroundColor: "transparent",
          padding: 0,
          boxShadow: "none",
        }}
        arrow={false}
        content={
          <Space direction="horizontal">
            <Button
              icon={<EyeOutlined />}
              size="small"
              onClick={() => setOpenViewer(true)}
            ></Button>
          </Space>
        }
      >
        <Typography.Paragraph
          onDoubleClick={() => {
            dispatch(
              updateBlockState({
                blockKey,
                blockState: "edit",
              }),
            )
          }}
        >
          <HighlightSentence id={blockKey} sentence={properties.content} readonly={true} />
        </Typography.Paragraph>
      </Popover>
      <ParagraphAnalyzer open={openViewer} onOpenChange={setOpenViewer} />
    </>
  )
}
