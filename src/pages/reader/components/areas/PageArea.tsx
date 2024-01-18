import { selectPaper } from "@/features/reader/paper"
import { TwoColumnsWrapper, BlockArea } from "@/pages/reader"
import { useReaderSelector } from "@/stores"

export function PageArea() {
  const paper = useReaderSelector(selectPaper)

  if (!paper) return <></>

  return (
    <>
      {paper.blockKeys.map((blockKey) => (
        <TwoColumnsWrapper
          key={blockKey}
          left={<BlockArea blockKey={blockKey} role="block" />}
          right={""}
        />
      ))}
      <TwoColumnsWrapper
        key="creator"
        left={<BlockArea role="creator" />}
        right={""}
      />
    </>
  )
}
