import { PaperType } from "@/apis/local-data/paper/paper.type"
import localforage from "localforage"

export type PagePaperListOptions = {
  current?: number
  pageSize?: number
  title?: string
  tags?: string[]
}

export async function pagePaperList(options: PagePaperListOptions) {
  // init
  const { current, pageSize, title, tags } = options
  const keys = await localforage.keys()
  const paperKeys = keys.filter((item) => item.startsWith("paper"))
  const paperResult: PaperType[] = []

  // iterate
  for (const paperKey of paperKeys) {
    const paper = await localforage.getItem<PaperType>(paperKey)

    // filter
    if (
      title &&
      paper?.title.includes(title) !== true &&
      paper?.translatedTitle?.includes(title) !== true
    ) {
      continue
    }

    // filter
    if (tags && tags.length > 0) {
      const thisPaperHasOneTag = paper?.tags.some((item) =>
        tags.includes(item.name),
      )
      if (!thisPaperHasOneTag) {
        continue
      }
    }

    if (paper) {
      paperResult.push(paper)
    }
  }

  // sort
  const papersOrderByCtime = paperResult.sort(
    (item1, item2) => item1.ctime - item2.ctime,
  )

  // pagination
  if (current && pageSize) {
    const startIndex = (current - 1) * pageSize
    const endIndex = startIndex + pageSize

    return {
      total: papersOrderByCtime.length,
      data: papersOrderByCtime.slice(startIndex, endIndex),
    }
  }

  // return all
  return {
    total: papersOrderByCtime.length,
    data: papersOrderByCtime,
  }
}
