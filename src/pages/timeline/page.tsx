import {
  getHistorySnapshot,
  refreshHistorySnapshot,
} from "@/apis/local-data/history"
import { BasicLayout, ContentWrapper } from "@/components"
import { SHORT_DATE_STRING } from "@/utils/date"
import { ReloadOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { App, Button, Space, Tag, Timeline } from "antd"
import dayjs from "dayjs"
import { CreatePaperAction } from "./CreatePaperAction"

export function TimelinePage() {
  const { message } = App.useApp()

  const response = useQuery({
    queryKey: ["history-snapshot"],
    queryFn: () => getHistorySnapshot(),
  })

  const items = response.data?.map((item) => ({
    children: <CreatePaperAction paperKey={item.payload.key} />,
  }))

  return (
    <BasicLayout mode="custom">
      <ContentWrapper className="p-5">
        <Space size="small">
          <Button
            onClick={() => {
              refreshHistorySnapshot()
              response.refetch()
              message.success("操作成功")
            }}
            type="text"
            size="small"
            icon={<ReloadOutlined />}
          >
            重新加载
          </Button>
        </Space>
        <Timeline
          pending={response.isLoading && "Loading..."}
          mode="left"
          items={items}
          className="my-5 mx-3"
        />
      </ContentWrapper>
    </BasicLayout>
  )
}
