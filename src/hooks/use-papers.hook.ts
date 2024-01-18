import { useEffect, useState } from "react"
import { useKeys } from "@/hooks"
import { PaperType, getAllPapers } from "@/apis/local-data/paper"

export function usePapers() {
  const { keys } = useKeys()
  const [papers, setPapers] = useState<PaperType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const refresh = async () => {
    if (!keys) return
    setIsLoading(true)
    const paperResult = await getAllPapers()
    setPapers(paperResult.filter((item) => item.ctime))
    setIsLoading(false)
  }

  useEffect(() => {
    refresh()
  }, [keys])

  return { papers, refresh, isLoading }
}
