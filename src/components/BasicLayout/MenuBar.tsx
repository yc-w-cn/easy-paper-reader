import Icon, {
  CarOutlined,
  GithubOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Button, Flex, Space } from "antd"
import { useNavigate } from "react-router-dom"
import chatSvg from "./chat.svg?react"

export function MenuBar() {
  const navigate = useNavigate()

  return (
    <Flex className="absolute top-0 left-0 py-2 px-4 w-full border-b justify-between">
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
