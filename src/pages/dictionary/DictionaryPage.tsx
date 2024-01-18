import { DictionaryItem, lookup } from "@/apis/iciba/lookup"
import { BasicLayout } from "@/components"
import { AutoComplete, Button, Flex, Input, SelectProps } from "antd"
import { useState } from "react"
import dictionaryImage from "./dictionary.png"
import { useNavigate } from "react-router-dom"
import debounce from "lodash/debounce"

export function DictionaryPage() {
  const navigate = useNavigate()
  const [options, setOptions] = useState<SelectProps<object>["options"]>([])
  const [currentValue, setCurrentValue] = useState("")

  // 定义防抖函数
  const debouncedSearch = debounce(async (value) => {
    if (!value) return
    const result = await lookup(value)
    const resultOptions = result.message.map((item: DictionaryItem) => ({
      label: item.key,
      value: item.key,
    }))
    // 显示前 4 个结果
    setOptions(resultOptions.slice(0, 4) || [])
  }, 500) // 1秒的防抖延迟

  const handleSearch = async (value: string) => {
    // 使用防抖函数
    debouncedSearch(value)
  }

  const onSelect = (value: string) => {
    navigate("/word/" + value)
  }

  return (
    <BasicLayout>
      <Flex
        vertical
        justify="center"
        align="center"
        gap="small"
        className="pb-20"
      >
        <img
          src={dictionaryImage}
          width={180}
          height={180}
          draggable={false}
          className="unselectable"
        />
        <AutoComplete
          className="w-[400px]"
          options={options}
          onChange={(value) => setCurrentValue(value)}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search
            size="large"
            placeholder="请输入"
            onSearch={handleSearch}
            enterButton={
              <Button
                onClick={async () => {
                  navigate("/word/" + currentValue)
                }}
              >
                搜索
              </Button>
            }
          />
        </AutoComplete>
      </Flex>
    </BasicLayout>
  )
}
