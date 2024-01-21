import { Button, Flex, Input, Space } from "antd"
import { useEffect, useState } from "react"
import { ParagraphPropertiesType } from "@/apis/local-data/block"

type Props = {
  handleCancel: () => void
  handleSubmit: (_: ParagraphPropertiesType) => void
  initialValues?: ParagraphPropertiesType
}

export function ParagraphEditorBase({
  handleSubmit,
  handleCancel,
  initialValues,
}: Props) {
  const [content, setContent] = useState("")

  useEffect(() => {
    if (initialValues?.content) {
      setContent(initialValues.content)
    }
  }, [initialValues?.content])

  return (
    <Space direction="vertical" className="w-full mb-4">
      <Input.TextArea
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        placeholder="请输入..."
        autoSize={{ minRows: 3 }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleCancel()
          }
          if (e.metaKey && e.key === "Enter") {
            handleSubmit({
              content,
            })
          }
        }}
      />
      <Flex gap={10} align="center">
        <Button
          type="primary"
          size="small"
          onClick={() => handleSubmit({ content })}
        >
          保存
        </Button>
        <Button size="small" onClick={handleCancel}>
          取消
        </Button>
      </Flex>
    </Space>
  )
}
