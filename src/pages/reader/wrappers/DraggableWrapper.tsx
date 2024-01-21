import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { PopoverDragger } from "./PopoverDragger"
import { useBlockKey } from "../providers"

type Props = {
  children?: React.ReactNode | React.ReactNode[]
  hideDragger?: boolean
}
export function DraggableWrapper({ children, hideDragger = false }: Props) {
  const { blockKey } = useBlockKey()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id: blockKey })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  if (!children) return <></>

  if (hideDragger) {
    return children
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <PopoverDragger
        setActivatorNodeRef={setActivatorNodeRef}
        listeners={listeners}
      >
        <div>{children}</div>
      </PopoverDragger>
    </div>
  )
}
