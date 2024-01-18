import { Tabs } from "antd"
import { TabChatGpt } from "./TabChatGpt"
import { TabGemini } from "./TabGemini"

export function TabCommon() {
  return (
    <Tabs
      defaultActiveKey="gemini"
      items={[
        {
          label: "Gemini",
          key: "gemini",
          children: <TabGemini />,
        },
        {
          label: "ChatGPT",
          key: "chatgpt",
          children: <TabChatGpt />,
          disabled: true,
        },
      ]}
    ></Tabs>
  )
}
