import { ReactNode, useState } from "react"
import { BlockContext } from "./BlockContext"

export type BlockProviderProps = {
  blockKey: string | null
  children?: ReactNode
}

export const BlockProvider = ({
  blockKey: initBlockKey,
  children,
}: BlockProviderProps) => {
  const [blockKey, setBlockKey] = useState<string | null>(initBlockKey)

  const contextValue = {
    blockKey,
    setBlockKey,
  }

  return (
    <BlockContext.Provider value={contextValue}>
      {children}
    </BlockContext.Provider>
  )
}
