import Icon, {
  CarOutlined,
  FileAddOutlined,
  GithubOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { App, Button, Flex, Space } from "antd"
import { useNavigate } from "react-router-dom"
import chatSvg from "./chat.svg?react"
import localforage from "localforage"

export function MenuBar() {
  const navigate = useNavigate()
  const { message } = App.useApp()

  return (
    <Flex className="flex-none py-2 px-4 w-full border-b justify-between">
      <Space size="small">
        <Button
          type="text"
          size="small"
          icon={<CarOutlined />}
          onClick={() => navigate("/paper/create")}
        >
          新论文
        </Button>
        <Button
          type="text"
          size="small"
          icon={<FileAddOutlined />}
          onClick={() =>
            document.getElementById("recover-button-upload")?.click()
          }
        >
          加载论文
        </Button>
        <input
          id="recover-button-upload"
          type="file"
          accept=".json"
          onChange={async (event) => {
            const file = event.target.files?.[0]
            if (file) {
              const reader = new FileReader()
              reader.onload = async (e: any) => {
                const content = e.target.result
                try {
                  const parsedJSON = JSON.parse(content)
                  await Promise.all(
                    Object.keys(parsedJSON).map(async (keyName) => {
                      await localforage.setItem(keyName, parsedJSON[keyName])
                    }),
                  )
                  message.success("操作成功")
                } catch (error) {
                  message.error("发生错误")
                }
              }
              reader.readAsText(file)
            }
          }}
          className="hidden"
        />
        <Button
          type="text"
          size="small"
          icon={<Icon component={chatSvg} />}
          onClick={() => navigate("/conversation")}
        >
          对话模式
        </Button>
        <Button
          type="text"
          size="small"
          icon={<SearchOutlined />}
          onClick={() => navigate("/dictionary")}
        >
          词典
        </Button>
        <Button
          type="text"
          size="small"
          icon={<SettingOutlined />}
          onClick={() => navigate("/setting")}
        >
          设置
        </Button>
      </Space>
      <Space>
        <Button
          type="text"
          size="small"
          icon={<GithubOutlined />}
          onClick={() => {
            window.open("https://github.com/yc-w-cn")
          }}
        ></Button>
      </Space>
    </Flex>
  )
}
