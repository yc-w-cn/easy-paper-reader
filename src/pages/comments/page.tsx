import {
  getCommentsSnapshot,
  refreshCommentsSnapshot,
} from "@/apis/local-data/comment"
import { BasicLayout, ContentWrapper } from "@/components"
import { ReloadOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { App, Button, Card, Space } from "antd"

export function CommentsPage() {
  const { message } = App.useApp()
  const response = useQuery({
    queryKey: ["comments-snapshot"],
    queryFn: () => getCommentsSnapshot(),
  })
  return (
    <BasicLayout mode="custom">
      <ContentWrapper className="p-5">
        <Space size="small">
          <Button
            onClick={() => {
              refreshCommentsSnapshot()
              response.refetch()
              message.success("操作成功")
            }}
            type="text"
            size="small"
            icon={<ReloadOutlined />}
          />
          <strong>全部笔记</strong>
        </Space>
        <Space className="my-3">
          {response.data?.map((comment, index) => (
            <Card size="small" className="w-[200px]" key={`comment-${index}`}>
              {comment.comment}
            </Card>
          ))}
        </Space>
      </ContentWrapper>
    </BasicLayout>
  )
}
