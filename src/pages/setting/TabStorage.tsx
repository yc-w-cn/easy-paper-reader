import { SyncOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { App, Button, Card, Space, Statistic } from "antd";
import localforage from "localforage";

export function TabStorage() {
  const { message } = App.useApp();

  const response = useQuery({
    queryKey: ["localforage-keys"],
    queryFn: () => localforage.keys(),
  });

  return (
    <div className="my-4 flex flex-col">
      <h3>
        <SyncOutlined className="mr-1" />
        本地缓存
      </h3>
      <Space size="large" wrap>
        <Card bordered>
          <Statistic
            title="单词"
            value={
              response.data?.filter((item) => item.startsWith("word")).length ||
              "-"
            }
            suffix="个"
            className="w-[120px]"
          />
        </Card>
        <Card bordered>
          <Statistic
            title="翻译"
            value={
              response.data?.filter((item) => item.startsWith("fanyi")).length ||
              "-"
            }
            suffix="条"
            className="w-[120px]"
          />
        </Card>
        <Card bordered>
          <Statistic
            title="论文"
            value={
              response.data?.filter((item) => item.startsWith("paper")).length ||
              "-"
            }
            suffix="篇"
            className="w-[120px]"
          />
        </Card>
        <Card bordered>
          <Statistic
            title="图片"
            value={
              response.data?.filter((item) => item.startsWith("image")).length ||
              "-"
            }
            suffix="个"
            className="w-[120px]"
          />
        </Card>
      </Space>
      <div className="my-5">
        <Button
          type="primary"
          onClick={() => message.warning("该功能尚在建设中")}
        >
          备份数据
        </Button>
      </div>
    </div>
  );
}
