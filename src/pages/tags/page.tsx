import { getTagsSnapshot } from "@/apis/local-data/tag"
import { BasicLayout } from "@/components"
import { useQuery } from "@tanstack/react-query"
import { Flex, Tag } from "antd"

export function TagsPage() {
  const response = useQuery({
    queryKey: ["tags-snapshot"],
    queryFn: () => getTagsSnapshot(),
  })
  return (
    <BasicLayout mode="center">
      <Flex align="center" justify="center">
        <strong>全部标签：</strong>
        {response.data?.map((tag, index) => (
          <Tag key={`tag-${index}`}>{tag}</Tag>
        ))}
      </Flex>
    </BasicLayout>
  )
}
