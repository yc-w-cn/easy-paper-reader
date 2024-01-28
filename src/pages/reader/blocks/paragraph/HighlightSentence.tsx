import { Button, Flex, Input, Popover, Space, Tooltip } from "antd"
import Highlightable, { Range } from "highlightable"
import { cloneDeep, filter, map, slice, update } from "lodash"
import { DeleteOutlined, TranslationOutlined } from "@ant-design/icons"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "@/pages/reader/providers"
import { saveBlockProperties, selectBlock } from "@/features/reader/blocks"
import { findWordOccurrences } from "@/utils/paragragh"
import { ReferenceType, WordType } from "@/apis/local-data/block"
import { useDeepCompareMemo } from "use-deep-compare"
import { getGeminiReply } from "@/apis/gemini/generate"
import { isURL } from "@/utils/url"
import { translate } from "@/utils/translate/providers/gemeni-pro"

type Props = {
  id: string
  sentence: string
  readonly?: boolean
  isMix?: boolean
}

const rangeToWord = (range: Range) => {
  const { text, start, end } = range
  return slice(text, start, end + 1).join("")
}

export function HighlightSentence({
  id,
  sentence,
  readonly = false,
  isMix = false,
}: Props) {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))

  const allWords: WordType[] = useDeepCompareMemo(
    () => entity?.properties?.words || [],
    [entity?.properties?.words],
  )

  const references: ReferenceType[] = useDeepCompareMemo(() => {
    const rawRecords: ReferenceType[] = entity?.properties?.references || []
    const items = filter(rawRecords, (item) => sentence.includes(item.word))
    return items
  }, [entity?.properties?.references, sentence])

  const words = useDeepCompareMemo(() => {
    const result: WordType[] = []
    if (!allWords) return result
    for (const word of allWords) {
      if (sentence.includes(word.word)) {
        result.push(word)
      }
    }
    result.sort(
      (item1, item2) =>
        sentence.indexOf(item1.word) - sentence.indexOf(item2.word),
    )
    return result
  }, [allWords, sentence])

  const ranges = useDeepCompareMemo(() => {
    const result: Range[] = []
    for (const word of words) {
      const occurrences = findWordOccurrences(sentence, word.word)
      result.push(
        ...occurrences.map(({ start, end }) => ({
          start,
          end,
          text: sentence,
          data: word as any,
        })),
      )
    }

    return result
  }, [words, sentence])

  const removeWord = (word: string) => {
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          words: filter(allWords, (item) => item.word !== word),
        },
      }),
    )
  }

  const removeRange = (range: Range) => {
    const word = rangeToWord(range)
    removeWord(word)
  }

  const handleTranslatedWordChange = (word: string, translatedWord: string) => {
    const newWords = map(cloneDeep(allWords), (obj) => {
      if (obj.word === word) {
        return update(obj, "translatedWord", () => translatedWord)
      }
      return obj
    })

    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          words: newWords,
        },
      }),
    )
  }

  const handleCreateWord = (word: string) => {
    if (!word) return
    if (!allWords.some((item) => item.word === word)) {
      const newWords = [
        ...allWords,
        {
          word,
          translatedWord: "",
        },
      ]

      dispatch(
        saveBlockProperties({
          blockKey,
          properties: {
            words: newWords,
          },
        }),
      )
    }
  }

  return (
    <>
      <Highlightable
        ranges={ranges}
        enabled={true}
        onTextHighlighted={(range) => {
          handleCreateWord(rangeToWord(range))
          window.getSelection()?.removeAllRanges()
        }}
        id={id}
        rangeRenderer={(
          lettersNode,
          range,
          rangeIndex,
          onMouseOverHighlightedWord,
        ) => {
          if (readonly) {
            return (
              <Tooltip
                key={`tooltip-${rangeIndex}`}
                placement="top"
                overlay={
                  (range.data as any as WordType).translatedWord || false
                }
              >
                <span>{lettersNode}</span>
              </Tooltip>
            )
          }
          if (isMix) {
            const translatedWord = (range.data as any as WordType)
              .translatedWord
            if (translatedWord) {
              return (
                <span key={`tooltip-${rangeIndex}`}>
                  {lettersNode}（{translatedWord}）
                </span>
              )
            }
            return <span key={`tooltip-${rangeIndex}`}>{lettersNode}</span>
          }
          return (
            <Tooltip
              key={`tooltip-${rangeIndex}`}
              onOpenChange={(isVisbile) =>
                onMouseOverHighlightedWord(range, isVisbile)
              }
              placement="topLeft"
              arrow={false}
              overlayInnerStyle={{
                backgroundColor: "transparent",
                padding: 0,
                boxShadow: "none",
                marginBottom: -10,
              }}
              overlay={
                <Button
                  type="default"
                  icon={<DeleteOutlined />}
                  size="small"
                  onClick={() => removeRange(range)}
                />
              }
            >
              <span>{lettersNode}</span>
            </Tooltip>
          )
        }}
        onMouseOverHighlightedWord={() => {
          // do nothing
        }}
        highlightStyle={{
          backgroundColor: "#ffcc80",
        }}
        style={{}}
        text={sentence}
      />
      {!readonly && !isMix && (
        <>
          {!!words.length && (
            <Space
              direction="vertical"
              className="bg-gray-100 rounded-xl py-2 mt-2 mx-5 w-auto"
            >
              {words.map((word, index) => {
                if (sentence.includes(word.word)) {
                  return (
                    <Flex key={`word-${index}`}>
                      <Popover
                        placement="topLeft"
                        content={
                          <Button
                            type="default"
                            icon={<DeleteOutlined />}
                            size="small"
                            onClick={() => removeWord(word.word)}
                          />
                        }
                        arrow={false}
                        overlayInnerStyle={{
                          backgroundColor: "transparent",
                          padding: 0,
                          boxShadow: "none",
                        }}
                      >
                        <span className="flex-none ml-5 font-bold">
                          {word.word || "(empty)"}
                        </span>
                      </Popover>
                      <Popover
                        placement="topLeft"
                        content={
                          <Button
                            type="default"
                            icon={<TranslationOutlined />}
                            size="small"
                            onClick={async () => {
                              const translatedWord = await translate(word.word)
                              handleTranslatedWordChange(
                                word.word,
                                translatedWord,
                              )
                            }}
                          />
                        }
                        arrow={false}
                        overlayInnerStyle={{
                          backgroundColor: "transparent",
                          padding: 0,
                          marginLeft: 5,
                          boxShadow: "none",
                        }}
                      >
                        <Input
                          size="small"
                          bordered={false}
                          className="flex-grow"
                          value={word.translatedWord}
                          onChange={(e) =>
                            handleTranslatedWordChange(
                              word.word,
                              e.currentTarget.value,
                            )
                          }
                          placeholder={word.word}
                        />
                      </Popover>
                    </Flex>
                  )
                }
                return <></>
              })}
            </Space>
          )}

          {!!references.length && (
            <Space
              direction="vertical"
              className="bg-gray-100 rounded-xl py-2 my-2 mx-5 px-4 w-auto"
            >
              {references.map((reference, index) => (
                <span key={`reference-${index}`}>
                  <strong className="mr-2">{reference.word}</strong>
                  {isURL(reference.title) ? (
                    <a href={reference.title} target="_blank">
                      {reference.title}
                    </a>
                  ) : (
                    reference.title
                  )}
                </span>
              ))}
            </Space>
          )}
        </>
      )}
    </>
  )
}
