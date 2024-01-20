import { exchangeBlockKeys, selectPaper } from "@/features/reader/paper"
import { TwoColumnsWrapper, BlockArea } from "@/pages/reader"
import { useReaderDispatch, useReaderSelector } from "@/stores"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

export function PageArea() {
  const paper = useReaderSelector(selectPaper)
  const dispatch = useReaderDispatch()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  if (!paper) return <></>

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    console.log("handleDragEnd", {
      active,
      over,
    })
    if (over && active.id !== over.id) {
      dispatch(
        exchangeBlockKeys({
          fromBlockKey: active.id as string,
          toBlockKey: over.id as string,
        }),
      )
    }
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={paper.blockKeys}
          strategy={verticalListSortingStrategy}
        >
          {paper.blockKeys.map((blockKey) => (
            <TwoColumnsWrapper
              id={blockKey}
              role="block"
              key={blockKey}
              left={<BlockArea blockKey={blockKey} role="block" />}
              right={""}
            />
          ))}
        </SortableContext>
      </DndContext>
      <TwoColumnsWrapper
        id="creator"
        role="creator"
        key="creator"
        left={<BlockArea role="creator" />}
        right={""}
      />
    </>
  )
}
