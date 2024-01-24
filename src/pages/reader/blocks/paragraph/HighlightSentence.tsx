import { Button, Input, Popover, Space, Tooltip } from "antd"
import Highlightable, { Range } from "highlightable"
import { useState } from "react"
import { cloneDeep, filter, map, slice, uniq, update } from "lodash"
import { DeleteOutlined } from "@ant-design/icons"
import { useReaderDispatch, useReaderSelector } from "@/stores"
import { useBlockKey } from "@/pages/reader/providers"
import { saveBlockProperties, selectBlock } from "@/features/reader/blocks"
import { findWordOccurrences } from "@/utils/paragragh"
import { WordType } from "@/apis/local-data/block"
import { useDeepCompareMemo } from "use-deep-compare"

type Props = {
  id: string
  sentence: string
}

const rangeToWord = (range: Range) => {
  const { text, start, end } = range
  return slice(text, start, end + 1).join("")
}

export function HighlightSentence({ id, sentence }: Props) {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))
  const words = (entity?.properties?.words as WordType[]) || []

  const ranges = useDeepCompareMemo(() => {
    const result: Range[] = []
    for (const word of words) {
      const occurrences = findWordOccurrences(sentence, word.word)
      result.push(
        ...occurrences.map(({ start, end }) => ({
          start,
          end,
          text: sentence,
          data: null as any,
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
          words: filter(words, (item) => item.word !== word),
        },
      }),
    )
  }

  const removeRange = (range: Range) => {
    const word = rangeToWord(range)
    removeWord(word)
  }

  const handleTranslatedWordChange = (word: string, translatedWord: string) => {
    const newWords = map(cloneDeep(words), (obj) => {
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
    if (!words.some((item) => item.word === word)) {
      const newWords = [
        ...words,
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
                  type="text"
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
        onMouseOverHighlightedWord={(range: Range) => {
          console.log("range", range)
        }}
        highlightStyle={{
          backgroundColor: "#ffcc80",
        }}
        style={{}}
        text={sentence}
      />
      <Space wrap className="bg-gray-100 rounded-xl py-2 my-2 ml-5">
        {words.map((word, index) => {
          if (sentence.includes(word.word)) {
            return (
              <Space key={`word-${index}`}>
                <Popover
                  placement="left"
                  content={
                    <Button
                      type="text"
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
                  <span className="ml-5 font-bold">{word.word}</span>
                </Popover>
                <Input
                  size="small"
                  bordered={false}
                  value={word.translatedWord}
                  onChange={(e) =>
                    handleTranslatedWordChange(word.word, e.currentTarget.value)
                  }
                  placeholder={word.word}
                />
              </Space>
            )
          }
          return <></>
        })}
      </Space>
    </>
  )
}
