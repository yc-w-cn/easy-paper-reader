export type WordType = {
  word: string
  translatedWord?: string
}

export type ParagraphPropertiesType = {
  content: string
  comment?: string
  words?: WordType[]
  sentences?: string[]
  references?: string[]
}
