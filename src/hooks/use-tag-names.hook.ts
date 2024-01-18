import { useEffect, useState } from "react"
import { useKeys } from "./use-keys.hook"
import { getTagsSnapshot } from "@/apis/local-data/tag"

export function useTagNames() {
  const { keys } = useKeys()
  const [tagNames, setTagNames] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const refresh = async () => {
    if (!keys) return
    setIsLoading(true)
    const tagNames = await getTagsSnapshot()
    setTagNames(tagNames)
    setIsLoading(false)
  }

  const tagOptions = tagNames.map((tagName) => ({
    label: tagName,
    value: tagName,
  }))

  useEffect(() => {
    refresh()
  }, [keys])

  return { tagNames, tagOptions, refresh, isLoading }
}
