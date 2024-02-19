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
  const { mode } = useReaderSelector((state) => state.layout)

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
          onClick={(_, node) => {
            if (mode === "basic") {
              const container = document.getElementById("page-area")
              const target = document.getElementById(String(node.key))
              if (container && target) {
                container.scrollTo({
                  top: target.offsetTop - 150,
                  behavior: "smooth",
                })
              }
            }
            if (mode === "zen") {
              const container = document.querySelector(
                '[data-panel-id="zen-layout"]',
              )
              const target = document.getElementById(String(node.key))
              if (container && target) {
                container.scrollTo({
                  top: target.offsetTop - 20,
                  behavior: "smooth",
                })
              }
            }
          }}
          titleRender={(node) => {
            if (!node.children?.length) {
              return <>· {node.title}</>
            }
            return <>{node.title}</>
          }}
          className="p-5 my-2 mx-1 w-full"
        />
      )}
    </div>
  )
}
