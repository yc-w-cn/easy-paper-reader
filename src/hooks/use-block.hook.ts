import { useEffect, useState } from "react"
import { BlockType, getBlock } from "@/apis/local-data/block"

export function useBlock(
  key?: string,
  successCallback?: (_: BlockType) => void,
) {
  const [block, setBlock] = useState<BlockType>()
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)

  const refresh = async () => {
    if (!key) return
    setIsLoading(true)
    const blockResult = await getBlock(key)
    if (blockResult) {
      setBlock(blockResult)
      successCallback?.(blockResult)
    }
    setIsLoading(false)
    setIsFetched(true)
  }

  useEffect(() => {
    refresh()
  }, [key])

  return { block, refresh, isLoading, isFetched, successCallback }
}
