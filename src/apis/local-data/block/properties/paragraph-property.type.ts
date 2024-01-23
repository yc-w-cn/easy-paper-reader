export type WordType = {
  word: string
  translatedWord?: string
}

export type ReferenceType = {
  word: string
  title: string
}

export type ParagraphPropertiesType = {
  content: string
  comment?: string
  words?: WordType[]
  sentences?: string[]
  references?: ReferenceType[]
}
