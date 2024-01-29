import { Button, Flex, Space, Image } from "antd"
import { useEffect, useState } from "react"
import { InboxOutlined } from "@ant-design/icons"
import { FormulaPropertiesType } from "@/apis/local-data/block"

type Props = {
  handleCancel: () => void
  handleSubmit: (_: FormulaPropertiesType) => void
  initialValues?: FormulaPropertiesType
}

export function FormulaEditorBase({
  handleSubmit,
  handleCancel,
  initialValues,
}: Props) {
  const [imageSource, setImageSource] = useState("")
  const [imageSourceType, setImageSourceType] = useState("")

  useEffect(() => {
    if (initialValues?.imageSource) {
      setImageSource(initialValues.imageSource)
    }
  }, [initialValues?.imageSource])

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
                setImageSource(base64Data)
              }
              reader.readAsDataURL(blob);
              setImageSourceType(blob.type)
            }
          }
        }}
        className="flex flex-col justify-center items-center border border-gray-500 rounded-lg py-8 gap-2"
      >
        {imageSource ? (
          <Image src={imageSource} />
        ) : (
          <>
            <InboxOutlined className="text-2xl" />
            <span>复制粘贴公式图片到这个区域</span>
          </>
        )}
      </div>
      <Flex gap={10} align="center">
        <Button
          type="primary"
          size="small"
          onClick={() => {
            handleSubmit({
              imageSourceType,
              imageSource,
              latex: ''
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
