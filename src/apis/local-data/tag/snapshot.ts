import localforage from "localforage"
import { getAllPapers } from "@/apis/local-data/paper/get"

export async function getTagsSnapshot() {
  const tags = await localforage.getItem<string[]>("tags")
  return tags || []
}

export async function refreshTagsSnapshot() {
  const papers = await getAllPapers()
  const tags: string[] = []
  for (const paper of papers) {
    if (paper?.tags) {
      for (const tag of paper.tags) {
        if (!tags.includes(tag.name)) {
          tags.push(tag.name)
        }
      }
    }
  }
  localforage.setItem("tags", tags)
}
