import { Button, Input, Space } from "antd"
import { PropsWithChildren, useEffect, useState } from "react"
import { useDeepCompareEffect } from "use-deep-compare"

const InnerSpan = ({ children }: PropsWithChildren) => (
  <div className="w-[50px] text-xs text-right text-gray-500">{children}</div>
)

export type ArxivType = {
  abstract: string
  pdf: string
}

type Props = {
  value?: ArxivType
  onChange?: (_: ArxivType) => void
}

export function ArxivEditor({ value, onChange }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [abstract, setAbstract] = useState("")
  const [pdf, setPdf] = useState("")

  useDeepCompareEffect(() => {
    if (value) {
      setAbstract(value?.abstract)
      setPdf(value?.pdf)
    }
  }, [value])

  if (isEditMode) {
    return (
      <Space direction="vertical" className="w-full">
        <Input
          value={abstract}
          onChange={(e) => setAbstract(e.currentTarget.value)}
          size="small"
          addonBefore={<InnerSpan>Abstract</InnerSpan>}
          placeholder="请输入"
        ></Input>
        <Input
          value={pdf}
          onChange={(e) => setPdf(e.currentTarget.value)}
          size="small"
          addonBefore={<InnerSpan>PDF</InnerSpan>}
          placeholder="请输入"
        ></Input>
        <Button
          size="small"
          onClick={() => {
            onChange?.({
              pdf,
              abstract,
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
      {abstract && (
        <Button size="small" onClick={() => window.open(abstract)}>
          Abstract
        </Button>
      )}
      {pdf && (
        <Button size="small" onClick={() => window.open(pdf)}>
          PDF
        </Button>
      )}
      <Button size="small" onClick={() => setIsEditMode(true)}>
        设置
      </Button>
    </Space>
  )
}
