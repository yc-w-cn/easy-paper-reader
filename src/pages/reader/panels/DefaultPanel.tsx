import { Flex, Radio, RadioChangeEvent } from "antd"
import { useState } from "react"
import { CommentPanel, PropertyPanel, ReferencePanel, WordPanel } from "."

export function DefaultPanel() {
  const [value, setValue] = useState("属性")

  const onChange = ({ target: { value: innerValue } }: RadioChangeEvent) => {
    setValue(innerValue)
  }

  return (
    <Flex vertical gap={5} className="mb-5">
      <Radio.Group
        options={["属性", "术语", "文献", "笔记"]}
        onChange={onChange}
        value={value}
        size="small"
        optionType="button"
      />
      {value === "属性" && <PropertyPanel />}
      {value === "笔记" && <CommentPanel />}
      {value === "术语" && <WordPanel />}
      {value === "文献" && <ReferencePanel />}
    </Flex>
  )
}
