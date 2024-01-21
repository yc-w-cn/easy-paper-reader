import { useContext } from "react"
import { BlockContext } from "./BlockContext"

export const useNullableBlockKey = () => {
  const context = useContext(BlockContext)
  if (!context) {
    throw new Error("useBlock must be used within a BlockProvider")
  }
  return context
}
