import { useReaderDispatch } from "@/stores"
import { useBlockKey } from "../providers"
import { App, Button, Space } from "antd"
import { removeBlockKey } from "@/features/reader/paper"

export function SettingPanel() {
  const { blockKey } = useBlockKey()
  const {modal}=App.useApp()
  const dispatch = useReaderDispatch()

  return (
    <Space direction="horizontal" wrap size={[0, 5]} onClick={async()=> {
      const confirmed = await modal.confirm({
        content: "确认要删除吗？",
      })
      if (confirmed) {
        dispatch(removeBlockKey(blockKey))
      }
    }}>
      <Button danger>删除段落</Button>
    </Space>
  )
}
