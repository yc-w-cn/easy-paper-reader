import horse from "./horse.png"
import { CarOutlined } from "@ant-design/icons"
import { BasicLayout } from "@/components"
import { Button, Space } from "antd"
import { useNavigate } from "react-router-dom"

export function HomePage() {
  const navigate = useNavigate()

  return (
    <BasicLayout mode="center">
      <Space direction="vertical" align="center" size="large">
        <img
          src={horse}
          width={256}
          height={256}
          draggable={false}
          className="unselectable"
        />
        <Button
          icon={<CarOutlined />}
          onClick={() => navigate("/paper/create/")}
        >
          开始新的征途
        </Button>
      </Space>
    </BasicLayout>
  )
}
