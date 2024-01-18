import { getPaper, savePaper } from "@/apis/local-data/paper"

export async function addBlockToPaper(paperKey: string, blockKey: string) {
  const paper = await getPaper(paperKey)
  if (!paper) {
    throw new Error("PAPER_NOT_FOUND")
  }
  paper.blockKeys = [...(paper.blockKeys || []), blockKey]
  return savePaper(paper)
}
