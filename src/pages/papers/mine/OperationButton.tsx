import { PaperType } from "@/apis/local-data/paper"
import { App, Dropdown } from "antd"
import localforage from "localforage"
import { useNavigate } from "react-router-dom"

type Props = {
  onChange: () => void
  paper: PaperType
}

const { useApp } = App

export function OperationButton({ paper, onChange }: Props) {
  const { modal, message } = useApp()
  const navigate = useNavigate()

  return (
    <Dropdown.Button
      size="small"
      menu={{
        items: [
          {
            label: "删除",
            key: "delete",
            onClick: async () => {
              const confirmed = await modal.confirm({
                content: "确认要删除吗？",
              })
              if (confirmed) {
                localforage.removeItem(paper.key).then(() => {
                  message.success("操作成功")
                  onChange()
                })
              }
            },
            danger: true,
          },
        ],
      }}
      onClick={() => navigate("/reader/" + paper.id)}
    >
      详细
    </Dropdown.Button>
  )
}
