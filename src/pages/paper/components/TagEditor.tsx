import { Input, InputRef } from "antd"
import { ColorPicker } from "./ColorPicker"
import { useEffect, useRef, useState } from "react"
import { TagType } from "@/apis/local-data/tag"

type Props = {
  value?: TagType
  onSubmit?: (_: TagType) => void
  onCancel?: () => void
}

export function TagEditor({ onSubmit, value, onCancel }: Props) {
  const inputRef = useRef<InputRef>(null)
  const [inputValue, setInputValue] = useState(value?.name || "")
  const [currentColor, setCurrentColor] = useState(value?.color)

  // 光标
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = async () => {
    if (inputValue) {
      onSubmit?.({
        name: inputValue,
        color: currentColor,
      })
    }
    setInputValue("")
  }

  return (
    <Input
      ref={inputRef}
      type="text"
      size="small"
      style={{
        width: 78,
        marginRight: 8,
        verticalAlign: "top",
      }}
      value={inputValue}
      onChange={handleInputChange}
      onPressEnter={handleInputConfirm}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onCancel?.()
        }
      }}
      suffix={
        <ColorPicker
          value={currentColor}
          onChange={(color) => {
            setCurrentColor(color)
            inputRef.current?.focus()
          }}
        />
      }
    />
  )
}
