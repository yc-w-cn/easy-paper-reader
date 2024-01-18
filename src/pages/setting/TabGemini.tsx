import { getApiKey, setApiKey } from "@/apis/local-data/gemeni/api-key"
import { App, Button, Flex, Input, Space } from "antd"
import { useEffect, useState } from "react"
import { GeminiModelTable } from "./GeminiModelTable"

export function TabGemini() {
  const [text, setText] = useState("")
  const [currentApiKey, setCurrentApiKey] = useState("")
  const { message } = App.useApp()

  useEffect(() => {
    getApiKey().then((key) => {
      if (key) {
        setText(key)
        setCurrentApiKey(key)
      }
    })
  }, [])

  return (
    <Flex vertical gap={20}>
      <Flex vertical gap={0}>
        <h3>获取 Gemini API key</h3>
        <p className="leading-3">
          1. 打开{" "}
          <a href="https://makersuite.google.com/" target="_blank">
            Google AI Studio
          </a>
          ，使用 Google 账号登录
        </p>
        <p className="leading-3">
          2. 点击 Get API Key -&gt; Create API key in new project
        </p>
        <p className="leading-3">3. 填写 key 在这里 </p>
      </Flex>
      <Flex vertical>
        <h3>配置 API key</h3>
        <Space>
          <Input
            allowClear={true}
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            placeholder="在这里填写 API key"
            className="w-[300px]"
          />
          <Button
            onClick={() => {
              setApiKey(text)
                .then(() => message.success("操作成功"))
                .catch(() => message.error("操作失败"))
            }}
          >
            保存
          </Button>
        </Space>
      </Flex>
      {currentApiKey && <GeminiModelTable />}
    </Flex>
  )
}
