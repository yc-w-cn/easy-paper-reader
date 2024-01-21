import { Flex, Radio, RadioChangeEvent } from "antd"
import { useState } from "react"
import { CommentPanel, PropertyPanel } from "."

export function DefaultPanel() {
  const [value, setValue] = useState("属性")

  const onChange = ({ target: { value: innerValue } }: RadioChangeEvent) => {
    setValue(innerValue)
  }

  return (
    <Flex vertical gap={5}>
      <Radio.Group
        options={["属性", "批注"]}
        onChange={onChange}
        value={value}
        size="small"
        optionType="button"
      />
      { value ==='属性' && (
        <PropertyPanel />
      )}
      { value ==='批注' && (
        <CommentPanel />
      )}
    </Flex>
  )
}
