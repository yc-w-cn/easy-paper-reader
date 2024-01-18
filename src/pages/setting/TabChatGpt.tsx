import { getSession, saveSession } from "@/apis/chatgpt/web-session"
import { Button, Flex, Input, Space } from "antd"
import { useEffect, useState } from "react"
import { ChatGptAccount } from "@/pages/setting"

export function TabChatGpt() {
  const [textarea, setTextarea] = useState("")

  useEffect(() => {
    getSession().then((s) => {
      if (s) {
        setTextarea(s)
      }
    })
  }, [])

  return (
    <div className="my-4">
      <h3>第一步：Backend API Mode</h3>
      <p>
        获取 SESSION 信息：
        <a href="https://chat.openai.com/api/auth/session" target="_blank">
          点击这里
        </a>
      </p>
      <Flex gap={15} vertical>
        <Input.TextArea
          value={textarea}
          className="w-[300px]"
          onChange={(e) => setTextarea(e.target.value)}
        />
        <div>
          <Button type="primary" onClick={() => saveSession(textarea)}>
            保存 SESSION
          </Button>
        </div>
        <ChatGptAccount />
        <div>
          <h3>第二步：允许发起跨域请求（CORS）</h3>
          <p>
            安装浏览器插件：
            <a href="https://modheader.com/" target="_blank">
              ModHeader
            </a>
          </p>
        </div>

        <div>
          <h4>Response headers</h4>
          <Space>
            <Input className="w-[300px]" value="Access-Control-Allow-Origin" />
            <Input className="w-[50px]" value="*" />
          </Space>
        </div>

        <div>
          <h4>Request URL filters</h4>
          <Space>
            <Input className="w-[250px]" value=".*://chat.openai.com/.*" />
            <Input className="w-[100px]" value="All methods" />
          </Space>
        </div>
      </Flex>
    </div>
  )
}
