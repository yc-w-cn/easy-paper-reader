import PageWrapper from "@/components/PageWrapper";
import PageSidebar from "@/components/PageSidebar";
import { Button, Space } from "antd";
import PageContent from "@/components/PageContent";
import horse from "./horse.png";
import { CarOutlined } from "@ant-design/icons";

export default function HomePage() {
  return (
    <PageWrapper>
      <PageSidebar />
      <PageContent>
        <div className="flex justify-center items-center h-full">
          <Space direction="vertical" align="center" size="large">
            <img src={horse} width={256} height={256} draggable={false} className="unselectable" />
            <Button icon={<CarOutlined />}>开始新的征途</Button>
          </Space>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
