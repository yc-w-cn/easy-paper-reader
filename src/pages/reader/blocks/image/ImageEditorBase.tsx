import { Button, Flex, Space, Image } from "antd"
import { useEffect, useState } from "react"
import { ImagePropertiesType } from "@/apis/local-data/block"
import { InboxOutlined } from "@ant-design/icons"

type Props = {
  handleCancel: () => void
  handleSubmit: (_: ImagePropertiesType) => void
  initialValues?: ImagePropertiesType
}

export function ImageEditorBase({
  handleSubmit,
  handleCancel,
  initialValues,
}: Props) {
  const [content, setContent] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    if (initialValues?.content) {
      setContent(initialValues.content)
    }
  }, [initialValues?.content])

  return (
    <Space direction="vertical" className="w-full">
      <div
        onPaste={(event: any) => {
          const items = (
            event.clipboardData || event.originalEvent.clipboardData
          ).items

          for (const item of items) {
            if (item.type.indexOf("image") !== -1) {
              const blob = item.getAsFile();
              const reader = new FileReader()
              reader.onload = (e: any) => {
                const base64Data = e.target.result
                setContent(base64Data)
              }
              reader.readAsDataURL(blob);
              setType(blob.type)
            }
          }
        }}
        className="flex flex-col justify-center items-center border border-gray-500 rounded-lg py-8 gap-2"
      >
        {content ? (
          <Image src={content} />
        ) : (
          <>
            <InboxOutlined className="text-2xl" />
            <span>复制粘贴到这个区域上传</span>
          </>
        )}
      </div>
      <Flex gap={10} align="center">
        <Button
          type="primary"
          size="small"
          onClick={() => {
            handleSubmit({
              type,
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
