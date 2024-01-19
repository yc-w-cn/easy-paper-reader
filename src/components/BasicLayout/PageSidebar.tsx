import { Button } from "antd"
import {
  BookOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  ReadOutlined,
  TagOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

export function PageSidebar() {
  const navigate = useNavigate()

  return (
    <div
      className="flex-none h-full w-[300px] relative border-r border-gray-300"
    >
      <header className="px-4 py-3">
        <div className="font-bold text-lg">Easy Paper Reader</div>
        <div className="text-sm">基于人工智能的论文阅读辅助工具</div>
      </header>
      <div className="border-gray-300 border-t w-full"></div>
      <div className="py-8 px-6 flex flex-col gap-3">
        <Button
          icon={<HomeOutlined />}
          type="text"
          className="text-left"
          onClick={() => navigate("/")}
        >
          个人空间
        </Button>
        <Button
          icon={<ReadOutlined />}
          type="text"
          className="text-left"
          onClick={() => navigate("/papers/mine")}
        >
          我的论文
        </Button>
        <Button icon={<TagOutlined />} type="text" className="text-left">
          全部标签
        </Button>
        <Button icon={<BookOutlined />} type="text" className="text-left">
          我的笔记
        </Button>
        <Button icon={<FieldTimeOutlined />} type="text" className="text-left">
          时光荏苒
        </Button>
      </div>
      <footer className="absolute bottom-1 left-0 w-full flex justify-between text-xs px-5 pt-1 border-gray-500 border-t opacity-30">
        <span>&copy; 2024</span>
        <span>Yuchen Wang</span>
        <span>MIT LICENSED</span>
      </footer>
    </div>
  )
}

