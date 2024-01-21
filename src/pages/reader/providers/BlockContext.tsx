import { createContext } from "react"

export interface IBlockContext {
  blockKey: string | null
  setBlockKey: (_: string | null) => void
}

export const BlockContext = createContext<IBlockContext>({
  blockKey: null,
  setBlockKey: () => null,
})
