import { useContext } from "react"
import { BlockContext } from "./BlockContext"

export const useBlockKey = () => {
  const context = useContext(BlockContext)

  if (!context) {
    throw new Error("useBlockKey must be used within a BlockProvider")
  }
  if (!context.blockKey) {
    throw new Error("useBlockKey should use a specified block Key")
  }
  if (!context.setBlockKey) {
    throw new Error("useBlockKey should use specified setBlockKey")
  }
  const { blockKey, setBlockKey: setInnerBlockKey } = context
  const setBlockKey = (value: string) => {
    if (!value) {
      throw new Error("value cannot be null or undefined")
    }
    setInnerBlockKey(value)
  }
  return { blockKey, setBlockKey }
}
