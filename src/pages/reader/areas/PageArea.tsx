import { exchangeBlockKeys, selectPaper } from "@/features/reader/paper"
import { useReaderDispatch, useReaderSelector } from "@/stores"

import {
  DndContext,
  pointerWithin,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { useState } from "react"
import { BlockWrapper } from "../wrappers/BlockWrapper"
import { CreatorWrapper } from "../wrappers/CreatorWrapper"
import { BlockArea } from "."
import { BlockProvider } from "../providers"

export function PageArea() {
  const paper = useReaderSelector(selectPaper)
  const dispatch = useReaderDispatch()
  const [activeId, setActiveId] = useState<string>()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  if (!paper) return <></>

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      dispatch(
        exchangeBlockKeys({
          fromBlockKey: active.id as string,
          toBlockKey: over.id as string,
        }),
      )
    }
    setActiveId(undefined)
  }

  return (
    <main className="flex-grow flex flex-col w-full px-4 py-8 overflow-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={pointerWithin}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={paper.blockKeys || []}
          strategy={verticalListSortingStrategy}
        >
          {paper.blockKeys?.map((blockKey) => (
            <BlockWrapper key={blockKey} blockKey={blockKey} />
          ))}
        </SortableContext>
        <DragOverlay adjustScale={false}>
          {!!activeId && (
            <BlockProvider blockKey={activeId}>
              <BlockArea />
            </BlockProvider>
          )}
        </DragOverlay>
      </DndContext>
      <CreatorWrapper />
    </main>
  )
}
