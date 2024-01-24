import { setCreatorState } from "@/features/reader/creator"
import { useReaderDispatch } from "@/stores"
import { PlusOutlined } from "@ant-design/icons"

export function DefaultDisplayer() {
  const dispatch = useReaderDispatch()

  return (
    <div
      onClick={() => dispatch(setCreatorState("select"))}
      className="rounded-xl flex justify-center items-center outline-dashed outline-gray-300 h-[150px] my-2 hover:cursor-pointer"
    >
      <PlusOutlined className="text-[40px] text-gray-300" />
    </div>
  )
}
