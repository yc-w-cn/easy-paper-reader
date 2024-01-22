import { replace, clone } from "lodash"

export const confusingList = [["e.g.", "e#g#"], ["vs.","vs#"]]

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

  const sentences = convertedText.split(".")

  sentences.forEach((item, index) => {
    if (item) {
      sentences[index] = recoveryConfusingWords(item.trim()) + "."
    }
  })

  return sentences.filter((item) => !!item)
}
