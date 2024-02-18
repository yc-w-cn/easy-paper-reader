import { PaperType, backupPaper } from "@/apis/local-data/paper"
import { ISO_DATE_FORMAT } from "@/utils/date"
import { App, Dropdown } from "antd"
import dayjs from "dayjs"
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
            label: "备份数据",
            key: "backup",
            onClick: async ()=> {
              const data = await backupPaper(paper.key);
              const jsonData = JSON.stringify(data, null, 2);
              const blob = new Blob([jsonData], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `${paper.key}-${dayjs().format(ISO_DATE_FORMAT)}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }
          },
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
