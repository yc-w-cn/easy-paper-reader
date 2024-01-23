import { getTagsSnapshot, refreshTagsSnapshot } from "@/apis/local-data/tag"
import { BasicLayout } from "@/components"
import { ReloadOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { App, Button, Flex, Tag } from "antd"

export function TagsPage() {
  const { message } = App.useApp()
  const response = useQuery({
    queryKey: ["tags-snapshot"],
    queryFn: () => getTagsSnapshot(),
  })
  return (
    <BasicLayout mode="center">
      <Flex align="center" justify="center" gap={5}>
        <Button
          onClick={() => {
            refreshTagsSnapshot()
            response.refetch()
            message.success("操作成功")
          }}
          type="text"
          size="small"
          icon={<ReloadOutlined />}
        />
        <strong>全部标签：</strong>
        {response.data?.map((tag, index) => (
          <Tag key={`tag-${index}`}>{tag}</Tag>
        ))}
      </Flex>
    </BasicLayout>
  )
}
