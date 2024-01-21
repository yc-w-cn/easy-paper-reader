import {
  saveBlockProperties,
  selectBlockEntity,
} from "@/features/reader/blocks"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "../providers"
import { Input } from "antd"

export function CommentPanel() {
  const { blockKey } = useBlockKey()
  const blockEntity = useReaderSelector((state) =>
    selectBlockEntity(state, blockKey),
  )
  const dispatch = useReaderDispatch()

  return (
    <Input.TextArea
      value={blockEntity?.properties.comment}
      onChange={(e) => {
        if (blockEntity) {
          dispatch(
            saveBlockProperties({
              blockKey: blockEntity.key,
              properties: {
                comment: e.currentTarget.value,
              },
            }),
          )
        }
      }}
    />
  )
}
