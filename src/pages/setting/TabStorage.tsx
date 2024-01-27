import { getBlocks } from "@/apis/local-data/block"
import { getAllPapers } from "@/apis/local-data/paper"
import { SyncOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Card, Space, Statistic } from "antd"
import dayjs from "dayjs"
import localforage from "localforage"
import { ImportDataButton } from "./ImportDataButton"

export function TabStorage() {
  const response = useQuery({
    queryKey: ["localforage-keys"],
    queryFn: () => localforage.keys(),
  })

  const handleExport = async () => {
    const result: any[] = []
    const papers = await getAllPapers()
    for (const paper of papers) {
      const blocks = await getBlocks(paper.blockKeys)
      result.push({
        ...paper,
        blocks,
      })
    }
    const jsonData = JSON.stringify(result, null, 2)
    const blob = new Blob([jsonData], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `exported-data-${dayjs().format('YYYY-MM-DD')}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }


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
              response.data?.filter((item) => item.startsWith("fanyi"))
                .length || "-"
            }
            suffix="条"
            className="w-[120px]"
          />
        </Card>
        <Card bordered>
          <Statistic
            title="论文"
            value={
              response.data?.filter((item) => item.startsWith("paper"))
                .length || "-"
            }
            suffix="篇"
            className="w-[120px]"
          />
        </Card>
        <Card bordered>
          <Statistic
            title="图片"
            value={
              response.data?.filter((item) => item.startsWith("image"))
                .length || "-"
            }
            suffix="个"
            className="w-[120px]"
          />
        </Card>
      </Space>
      <Space className="my-5">
        <Button type="primary" onClick={handleExport}>
          备份数据
        </Button>
        <ImportDataButton />
      </Space>
    </div>
  )
}
