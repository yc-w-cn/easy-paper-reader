import { Button, Input, Space } from "antd"
import { PropsWithChildren, useState } from "react"
import { useDeepCompareEffect } from "use-deep-compare"

const InnerSpan = ({ children }: PropsWithChildren) => (
  <div className="text-xs text-gray-500">{children}</div>
)

export type PaperWithCodeType = {
  url: string
}

type Props = {
  value?: PaperWithCodeType
  onChange?: (_: PaperWithCodeType) => void
}

export function PaperWithCodeEditor({ value, onChange }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [url, setUrl] = useState("")

  useDeepCompareEffect(() => {
    if (value) {
      setUrl(value?.url)
    }
  }, [value])

  if (isEditMode) {
    return (
      <Space direction="vertical" className="w-full">
        <Input
          value={url}
          onChange={(e) => setUrl(e.currentTarget.value)}
          size="small"
          addonBefore={<InnerSpan>URL</InnerSpan>}
          placeholder="请输入"
        ></Input>
        <Button
          size="small"
          onClick={() => {
            onChange?.({
              url,
            })
            setIsEditMode(false)
          }}
        >
          确定
        </Button>
      </Space>
    )
  }

  return (
    <Space>
      {url && (
        <Button type="link" size="small" onClick={() => window.open(url)}>
          {url}
        </Button>
      )}
      <Button size="small" onClick={() => setIsEditMode(true)}>
        设置
      </Button>
    </Space>
  )
}
