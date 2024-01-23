import Icon from "@ant-design/icons"
import { Button, Popover } from "antd"
import { ReactNode } from "react"
import dragSvg from "@/pages/reader/images/drag.svg?react"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import {
  selectBlockShowDragger,
  updateBlockShowDragger,
} from "@/features/reader/blocks"
import { useBlockKey } from "../providers"

type Props = {
  listeners?: SyntheticListenerMap
  setActivatorNodeRef?: (element: HTMLElement | null) => void
  children?: ReactNode
}
export function PopoverDragger({
  children,
  setActivatorNodeRef,
  listeners,
}: Props) {
  const { blockKey } = useBlockKey()
  const dispatch = useReaderDispatch()
  const showDragger = useReaderSelector((state) =>
    selectBlockShowDragger(state, blockKey),
  )
  return (
    <Popover
      open={showDragger || false}
      onOpenChange={(visible) =>
        dispatch(updateBlockShowDragger({ blockKey, showDragger: visible }))
      }
      content={
        <Button
          ref={setActivatorNodeRef}
          type="text"
          className="opacity-30"
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
