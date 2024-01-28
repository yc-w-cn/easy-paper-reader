import { useReaderDispatch, useReaderSelector } from "@/stores"
import { Button, ConfigProvider, Flex, Input, Modal, Radio, Space } from "antd"
import { useBlockKey } from "@/pages/reader/providers"
import { saveBlockProperties, selectBlock } from "@/features/reader/blocks"
import { useEffect, useState } from "react"
import { HighlightSentence } from "./HighlightSentence"
import { toSentences } from "@/utils/paragragh"
import { CommentPanel, ReferencePanel } from "../../panels"

type Props = {
  open?: boolean
  onOpenChange?: (_: boolean) => void
}

export function ParagraphAnalyzer({ open, onOpenChange }: Props) {
  const dispatch = useReaderDispatch()
  const { blockKey } = useBlockKey()
  const { entity } = useReaderSelector((state) => selectBlock(state, blockKey))
  const [panel, setPanel] = useState("拆句")
  const [isMix, setIsMix] = useState(false)

  const sentencesText = (entity?.properties?.sentences as string[])?.join?.(
    "\n\n",
  )

  const toggleMixNote = () => {
    setIsMix((previous) => !previous)
  }

  const updateSentencesFromText = (text: string) => {
    dispatch(
      saveBlockProperties({
        blockKey,
        properties: {
          sentences: text.split("\n\n"),
        },
      }),
    )
  }

  const initSentences = () => {
    if (!Array.isArray(entity?.properties?.sentences)) {
      updateSentencesFromText(entity?.properties?.content || "")
    }
  }

  const resetSentences = () => {
    updateSentencesFromText(entity?.properties?.content || "")
  }

  const autoSentences = () => {
    updateSentencesFromText(toSentences(sentencesText).join("\n\n"))
  }

  useEffect(() => {
    if (open) {
      initSentences()
    }
  }, [open])

  if (!entity) return <></>

  return (
    <Modal
      className="w-[70vw]"
      title="段落分析器"
      cancelButtonProps={{
        className: "hidden",
      }}
      okButtonProps={{
        className: "hidden",
      }}
      styles={{
        body: {
          height: "55vh",
          overflow: "auto",
          display: "flex",
          gap: 10,
          flexDirection: "column",
        },
      }}
      open={open}
      onOk={() => onOpenChange?.(false)}
      onCancel={() => onOpenChange?.(false)}
      destroyOnClose={true}
    >
      <Flex justify="space-between">
        <Radio.Group
          options={["拆句", "词解", "文献", "笔记"]}
          optionType="button"
          value={panel}
          onChange={(e) => setPanel(e.target.value)}
          size="small"
        ></Radio.Group>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Space.Compact>
            {panel === "拆句" && (
              <>
                <Button size="small" onClick={() => resetSentences()}>
                  重置
                </Button>
                <Button size="small" onClick={() => autoSentences()}>
                  自动
                </Button>
              </>
            )}
            {panel === "词解" && (
              <>
                <Button size="small" onClick={() => toggleMixNote()}>
                  MIX {"<->"} NOTE
                </Button>
              </>
            )}
            <Button size="small">AI</Button>
          </Space.Compact>
        </ConfigProvider>
      </Flex>
      {panel === "拆句" && sentencesText && (
        <Input.TextArea
          className="flex-grow flex-shrink resize-none"
          autoSize={false}
          defaultValue={sentencesText}
          onChange={(e) => updateSentencesFromText(e.currentTarget.value)}
        ></Input.TextArea>
      )}
      {panel === "词解" && (
        <div className="flex-grow flex-shrink overflow-auto pr-2">
          <Flex vertical gap={10}>
            {sentencesText.split("\n").map((sentence, index) => (
              <HighlightSentence
                id={`sentence-${index}`}
                key={`sentence-${index}`}
                sentence={sentence}
                isMix={isMix}
              />
            ))}
          </Flex>
        </div>
      )}
      {panel === "文献" && <ReferencePanel />}
      {panel === "笔记" && (
        <div className="w-[600px]">
          <CommentPanel />
        </div>
      )}
    </Modal>
  )
}
