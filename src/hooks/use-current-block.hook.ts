import { useEffect, useState } from "react"
import { BlockType, getBlock } from "@/apis/local-data/block"

export function useCurrentBlock(
  key?: string,
  successCallback?: (_: BlockType) => void,
) {
  const [currentBlock, setCurrentBlock] = useState<BlockType>()
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)

  const refresh = async () => {
    if (!key) return
    setIsLoading(true)
    const blockResult = await getBlock(key)
    if (blockResult) {
      setCurrentBlock(blockResult)
      successCallback?.(blockResult)
    }
    setIsLoading(false)
    setIsFetched(true)
  }

  useEffect(() => {
    refresh()
  }, [key])

  return { currentBlock, refresh, isLoading, isFetched, successCallback }
}
