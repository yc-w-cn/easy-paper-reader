import { getTagsSnapshot, refreshTagsSnapshot } from "@/apis/local-data/tag"
import { BasicLayout } from "@/components"
import { ReloadOutlined } from "@ant-design/icons"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { App, Button, Empty, Flex, Tag } from "antd"

const QUERY_KEY = "tags-snapshot"

export function TagsPage() {
  const { message } = App.useApp()
  const queryClinet = useQueryClient()

  const response = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getTagsSnapshot(),
  })

  return (
    <BasicLayout mode="center">
      <Flex align="center" justify="center" gap={5}>
        <Button
          onClick={() => {
            refreshTagsSnapshot()
            queryClinet.invalidateQueries({ queryKey: [QUERY_KEY] })
            response.refetch()
            message.success("操作成功")
          }}
          type="text"
          size="small"
          icon={<ReloadOutlined />}
        />
        {!(response.data?.length || 0) ? (
          <>
            <strong>全部标签：</strong>
            {response.data?.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Flex>
    </BasicLayout>
  )
}
