import Icon from "@ant-design/icons"
import { Button, Popover } from "antd"
import { ReactNode } from "react"
import dragSvg from "@/pages/reader/images/drag.svg?react"

type Props = {
  children?: ReactNode
}
export function PopoverDragger({ children }: Props) {
  return (
    <Popover
      trigger="hover"
      content={
        <Button type="text" icon={<Icon component={dragSvg} />}></Button>
      }
      overlayInnerStyle={{
        backgroundColor: "transparent",
        padding: 0,
        boxShadow: "none",
      }}
      placement="leftTop"
      arrow={false}
    >
      {children}
    </Popover>
  )
}
