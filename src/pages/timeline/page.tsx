import {
  getHistorySnapshot,
  refreshHistorySnapshot,
} from "@/apis/local-data/history"
import { BasicLayout, ContentWrapper } from "@/components"
import { ReloadOutlined } from "@ant-design/icons"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { App, Button, Space, Timeline } from "antd"
import { CreatePaperAction } from "./CreatePaperAction"

const QUERY_KEY = "history-snapshot"

export function TimelinePage() {
  const { message } = App.useApp()
  const queryClient = useQueryClient()

  const response = useQuery({
    queryKey: [QUERY_KEY],
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
              queryClient.invalidateQueries({
                queryKey: [QUERY_KEY],
              })
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
