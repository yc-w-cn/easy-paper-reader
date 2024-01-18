import { Button, Flex, Input, Space } from "antd"
import { useEffect, useState } from "react"
import { BlockRole } from "@/pages/reader/components/areas/block-role.type"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  addBlock,
  saveBlockProperties,
  selectBlock,
  updateBlockState,
} from "@/features/reader/blocks"
import { resetCreator } from "@/features/reader/creator"

type Props = {
  role: BlockRole
  blockKey?: string
}

export function ParagraphEditor({ blockKey, role }: Props) {
  const dispatch = useReaderDispatch()
  const { state, entity } = useReaderSelector((state) =>
    selectBlock(state, blockKey),
  )

  const [content, setContent] = useState("")

  useEffect(() => {
    if (entity && entity.properties.content) {
      setContent(entity.properties.content)
    }
  }, [state, entity, entity?.properties.content])

  const handleCancel = () => {
    if (role === "block") {
      if (!blockKey) return
      dispatch(updateBlockState({ blockKey, blockState: "display" }))
    } else if (role === "creator") {
      dispatch(resetCreator())
    }
  }

  const handleSubmit = () => {
    if (!content) {
      handleCancel()
      return
    }
    if (role === "block") {
      if (!blockKey) return
      dispatch(
        saveBlockProperties({
          blockKey,
          properties: {
            content,
          },
        }),
      )
      dispatch(updateBlockState({ blockKey, blockState: "display" }))
      return
    }
    if (role === "creator") {
      dispatch(
        addBlock({
          type: "paragraph",
          properties: { content },
        }),
      )
      dispatch(resetCreator())
      return
    }
  }

  return (
    <Space direction="vertical" className="w-full">
      <Input.TextArea
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        placeholder="请输入..."
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleCancel()
          }
          if (e.metaKey && e.key === "Enter") {
            handleSubmit()
          }
        }}
      />
      <Flex gap={10} align="center">
        <Button type="primary" size="small" onClick={handleSubmit}>
          保存
        </Button>
        <Button size="small" onClick={handleCancel}>
          取消
        </Button>
      </Flex>
    </Space>
  )
}
