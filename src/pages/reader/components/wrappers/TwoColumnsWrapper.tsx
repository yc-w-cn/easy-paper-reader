import Icon from "@ant-design/icons"
import { Button, Popover } from "antd"
import dragSvg from "@/pages/reader/images/drag.svg?react"

type Props = {
  left?: React.ReactNode
  right?: React.ReactNode
}
export function TwoColumnsWrapper({ left, right }: Props) {
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
      <div className="grid grid-cols-2 gap-4 w-full ml-10">
        <div className="">{left}</div>
        <div className="">{right}</div>
      </div>
    </Popover>
  )
}
