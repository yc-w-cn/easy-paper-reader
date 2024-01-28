import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { PaperType, getPaperById } from "@/apis/local-data/paper"

export function useCurrentPaper(id?: string) {
  const { paperId } = useParams()
  const [currentPaper, setCurrentPaper] = useState<PaperType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  
  const currentPaperId = useMemo(() => id || paperId, [id, paperId])

  const refresh = async () => {
    if (!currentPaperId) return
    setIsLoading(true)
    const paperResult = await getPaperById(currentPaperId)
    if (paperResult) {
      setCurrentPaper(paperResult)
    }
    setIsLoading(false)
    setIsFetched(true)
  }

  useEffect(() => {
    refresh()
  }, [currentPaperId])

  return { currentPaper, refresh, isLoading, isFetched }
}
