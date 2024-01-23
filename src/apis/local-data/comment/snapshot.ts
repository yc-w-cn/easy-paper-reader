import localforage from "localforage"
import { getAllPapers } from "@/apis/local-data/paper/get"
import { CacheCommentType } from "."
import { getBlocks } from "../block/get"

export async function getCommentsSnapshot() {
  const comments = await localforage.getItem<CacheCommentType[]>("comments")
  return comments || []
}

export async function refreshCommentsSnapshot() {
  const papers = await getAllPapers()
  const comments: CacheCommentType[] = []
  for (const paper of papers) {
    const blocks = await getBlocks(paper.blockKeys)
    for (const block of blocks) {
      if (block?.properties?.comment) {
        comments.push({
          paperKey: paper.key,
          blockKey: block.key,
          comment: block.properties.comment,
          mtime: block.mtime || block.ctime,
        })
      }
    }
  }
  localforage.setItem("comments", comments)
}
