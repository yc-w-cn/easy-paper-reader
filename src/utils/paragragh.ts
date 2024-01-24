import { replace, clone, compact } from "lodash"

export const confusingList = [
  ["e.g.", "e#g#"],
  ["vs.", "vs#"],
]

export function replaceConfusingWords(text: string) {
  let result = clone(text)
  for (const pair of confusingList) {
    result = replace(result, pair[0], pair[1])
  }
  return result
}

export function recoveryConfusingWords(text: string) {
  let result = clone(text)
  for (const pair of confusingList) {
    result = replace(result, pair[1], pair[0])
  }
  return result
}

export function toSentences(text: string) {
  const convertedText = replaceConfusingWords(text)
  const sentences = convertedText.split("\n\n")
  const result: string[] = []
  for (const sentence of sentences) {
    const shouldAddTailDot = sentence.endsWith(".")
    const splitSentences = compact(sentence.split("."))
    splitSentences.forEach((item, index) => {
      if (item && index !== splitSentences.length - 1) {
        result.push(recoveryConfusingWords(item.trim()) + ".")
      } else if (
        item &&
        index === splitSentences.length - 1 &&
        shouldAddTailDot
      ) {
        result.push(recoveryConfusingWords(item.trim()) + ".")
      } else if (
        item &&
        index === splitSentences.length - 1 &&
        !shouldAddTailDot
      ) {
        result.push(recoveryConfusingWords(item.trim()))
      }
    })
  }

  return result
}

export function findWordOccurrences(
  sentence: string,
  word: string,
): { start: number; end: number }[] {
  const result: { start: number; end: number }[] = []
  const regex = new RegExp(`${word}`, "gi")

  let match
  while ((match = regex.exec(sentence)) !== null) {
    result.push({
      start: match.index,
      end: match.index + match[0].length - 1,
    })
  }

  return result
}
