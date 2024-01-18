import { TagType } from "@/apis/local-data/tag/tag.type"
import Logger from "@/utils/logger"
import { PlusOutlined } from "@ant-design/icons"
import { Tag } from "antd"
import React, { useState } from "react"
import { TagEditor } from "./TagEditor"

type Props = {
  value?: TagType[]
  onChange?: (_: TagType[]) => void
}

export const TagsEditor: React.FC<Props> = ({ value, onChange }) => {
  const logger = new Logger(TagsEditor.name)
  const tags = value || []

  const [inputVisible, setInputVisible] = useState(false)
  const [editInputIndex, setEditInputIndex] = useState(-1)

  logger.debug("value", value)

  const handleRemove = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    onChange?.(newTags)
  }

  return (
    <>
      {tags.map((customTag, index) => {
        if (editInputIndex === index) {
          return (
            <TagEditor
              key={`tagEditor_${customTag.name}_${index}`}
              onCancel={() => {
                setEditInputIndex(-1)
              }}
              value={tags[editInputIndex]}
              onSubmit={(updatedTag) => {
                if (updatedTag.name) {
                  const newTags = [...tags]
                  newTags[editInputIndex] = updatedTag
                  setEditInputIndex(-1)
                  onChange?.(newTags)
                } else {
                  setEditInputIndex(-1)
                }
              }}
            />
          )
        }

        const tagElem = (
          <Tag
            style={{
              userSelect: "none",
            }}
            color={customTag.color}
            key={`tag_${customTag.name}_${index}`}
            onClose={() => handleRemove(index)}
            closable={true}
            bordered={true}
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index)
                e.preventDefault()
              }}
            >
              {customTag.name}
            </span>
          </Tag>
        )
        return tagElem
      })}
      {inputVisible && (
        <TagEditor
          onCancel={() => setInputVisible(false)}
          onSubmit={(newTag) => {
            if (newTag.name) {
              const newTags = [...tags, newTag]
              onChange?.(newTags)
            }
            setInputVisible(false)
          }}
        />
      )}
      {!inputVisible && (
        <Tag
          style={{
            background: "#fff",
            borderStyle: "dashed",
          }}
          onClick={() => setInputVisible(true)}
        >
          <PlusOutlined /> 添加
        </Tag>
      )}
    </>
  )
}
