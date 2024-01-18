import localforage from "localforage"
import { useEffect, useState } from "react"
import { useKeys } from "@/hooks"

export function useItemByKeyStartsWith<T = any>(keyStartsWith: string) {
  const { keys } = useKeys()
  const [value, setValue] = useState<T | null>()

  const refresh = () => {
    if (!keys) return
    const filterKey = keys.find((item) => item.startsWith(keyStartsWith))
    if (filterKey) {
      localforage
        .getItem<T>(filterKey)
        .then((cachedValue) => setValue(cachedValue))
    }
  }

  useEffect(() => {
    refresh()
  }, [keys])

  return { keys, value }
}
