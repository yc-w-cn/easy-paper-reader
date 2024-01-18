import { useEffect, useState } from "react"
import { BlockType, getBlocks } from "@/apis/local-data/block"
import { useCurrentPaper } from "@/hooks"
import { getPaper } from "@/apis/local-data/paper"

export function useCurrentBlocks() {
  const { currentPaper, isFetched: isCurrentPaperFetched } = useCurrentPaper()
  const [currentBlocks, setCurrentBlocks] = useState<BlockType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)

  const refresh = async () => {
    if (!currentPaper) return
    setIsLoading(true)
    const newPaper = await getPaper(currentPaper.key)
    if (!newPaper) {
      setIsLoading(false)
      setIsFetched(true)
      throw new Error("Paper not found.")
    } else {
      const blocks = await getBlocks(newPaper.blockKeys)
      if (blocks) {
        setCurrentBlocks(blocks)
      }
      setIsLoading(false)
      setIsFetched(true)
    }
  }

  const currentBlockMappings = Object.fromEntries(
    currentBlocks.map((item) => [item.key, item]),
  )

  useEffect(() => {
    if (isCurrentPaperFetched && currentPaper) {
      refresh()
    }
  }, [isCurrentPaperFetched])

  return {
    currentPaper,
    currentBlocks,
    currentBlockMappings,
    refresh,
    isLoading,
    isFetched,
  }
}
