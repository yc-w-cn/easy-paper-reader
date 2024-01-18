import { Flex, Popover, Tag } from "antd"
import { useState } from "react"

const colors = [
  undefined,
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
]

type Props = {
  value: string | undefined
  onChange?: (_: string | undefined) => void
}

export function ColorPicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={(newOpen) => setOpen(newOpen)}
      content={
        <Flex wrap="wrap" className="w-[300px] bg-white">
          {colors.map((color) => (
            <Tag
              key={color || "default"}
              color={color}
              className="text-[10px] leading-3 px-1 my-1 hover:cursor-pointer"
              onClick={() => {
                onChange?.(color)
                setOpen(false)
              }}
            >
              {color || "default"}
            </Tag>
          ))}
        </Flex>
      }
      title="选择颜色"
      trigger="click"
    >
      <Tag
        color={value}
        bordered={false}
        className="hover:cursor-pointer p-0 m-0 leading-3"
      >
        ■
      </Tag>
    </Popover>
  )
}
