import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { DataNode } from "antd/es/tree"
import { getTableOfContent } from "@/apis/local-data/table-of-content"

export function useCurrentTableOfContent(id?: string) {
  const { paperId } = useParams()
  const [currentTableOfContent, setCurrentTableOfContent] = useState<
    DataNode[]
  >([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const currentPaperId = id || paperId

  const refresh = async () => {
    setIsLoading(true)
    const nodes = await getTableOfContent(currentPaperId)
    setCurrentTableOfContent(nodes)
    setIsLoading(false)
    setIsFetched(true)
  }

  useEffect(() => {
    refresh()
  }, [currentPaperId])

  return { currentTableOfContent, refresh, isLoading, isFetched }
}
