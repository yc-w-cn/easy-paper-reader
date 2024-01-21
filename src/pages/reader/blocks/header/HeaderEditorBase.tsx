import { Button, Flex, Input, Radio, Space } from "antd"
import { useEffect, useState } from "react"
import { HeaderPropertiesType } from "@/apis/local-data/block"

type Props = {
  handleCancel: () => void
  handleSubmit: (_: HeaderPropertiesType) => void
  initialValues?: HeaderPropertiesType
}

export function HeaderEditorBase({
  handleSubmit,
  handleCancel,
  initialValues,
}: Props) {
  const [level, setLevel] = useState(1)
  const [content, setContent] = useState("")

  useEffect(() => {
    if (initialValues?.level) {
      setLevel(initialValues.level)
    }
  }, [initialValues?.level])

  useEffect(() => {
    if (initialValues?.content) {
      setContent(initialValues.content)
    }
  }, [initialValues?.content])

  return (
    <Space direction="vertical" className="w-full">
      <Space>
        <Radio.Group
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          size="small"
        >
          <Radio.Button value={1}>1</Radio.Button>
          <Radio.Button value={2}>2</Radio.Button>
          <Radio.Button value={3}>3</Radio.Button>
          <Radio.Button value={4}>4</Radio.Button>
          <Radio.Button value={5}>5</Radio.Button>
        </Radio.Group>
      </Space>
      <Input.TextArea
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        placeholder="请输入..."
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleCancel()
          }
          if (e.metaKey && e.key === "Enter") {
            handleSubmit({
              level,
              content,
            })
          }
        }}
      />
      <Flex gap={10} align="center">
        <Button
          type="primary"
          size="small"
          onClick={() => {
            handleSubmit({
              level,
              content,
            })
          }}
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
