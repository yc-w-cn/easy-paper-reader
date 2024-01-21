import { useReaderSelector } from "@/stores"
import { DownOutlined } from "@ant-design/icons"
import { Empty, Tree } from "antd"

type Props = {
  className?: string
}

export function TableOfContent({ className }: Props) {
  const { isLoaded, value: tableOfContent } = useReaderSelector(
    (state) => state.tableOfContent,
  )

  return (
    <div className={className}>
      {isLoaded && tableOfContent.length === 0 && (
        <div className="h-full flex justify-center items-center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="文章目录" />
        </div>
      )}
      {isLoaded && !!tableOfContent.length && (
        <Tree
          blockNode
          defaultExpandAll
          switcherIcon={<DownOutlined />}
          treeData={tableOfContent}
          className="p-5 my-2 mx-1 w-full"
        />
      )}
    </div>
  )
}
