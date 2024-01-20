import Icon from "@ant-design/icons"
import { Button, Popover } from "antd"
import { ReactNode } from "react"
import dragSvg from "@/pages/reader/images/drag.svg?react"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"

type Props = {
  listeners?: SyntheticListenerMap
  setActivatorNodeRef?: (element: HTMLElement | null) => void
  children?: ReactNode
}
export function PopoverDragger({ children, setActivatorNodeRef, listeners }: Props) {
  return (
    <Popover
      trigger="hover"
      content={
        <Button
          ref={setActivatorNodeRef}
          type="text"
          icon={<Icon component={dragSvg} />}
          {...listeners}
        ></Button>
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
