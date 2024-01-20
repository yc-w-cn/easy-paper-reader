import { BlockRole } from "@/pages"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { PopoverDragger } from "./PopoverDragger"

type Props = {
  id: string
  role: BlockRole
  left?: React.ReactNode
  right?: React.ReactNode
}
export function TwoColumnsWrapper({
  id,
  left,
  right,
  role = "creator",
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const content = (
    <div className="grid grid-cols-2 gap-4 w-full ml-10">
      <div className="">{left}</div>
      <div className="">{right}</div>
    </div>
  )

  if (role === "creator") {
    return content
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <PopoverDragger
        setActivatorNodeRef={setActivatorNodeRef}
        listeners={listeners}
      >
        {content}
      </PopoverDragger>
    </div>
  )
}
