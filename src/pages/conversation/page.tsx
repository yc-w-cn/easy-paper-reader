import { ChatGptUserAvatar, ProviderAvatar } from "@/pages"
import { BasicLayout, ContentWrapper } from "@/components"
import { UpSquareFilled } from "@ant-design/icons"
import { App, Button, Flex, Input } from "antd"
import { useState } from "react"
import { marked } from "marked"
import Logger from "@/utils/logger"
import { getGeminiProModel } from "@/apis/gemini/model"

interface Message {
  user: string
  text: string
}

const provider: "gemini" | "chatgpt" = "gemini"

export function ConversationPage() {
  const logger = new Logger(ConversationPage.name)
  const { message } = App.useApp()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")

  const addMessage = (user: string, text: string) => {
    setMessages((prevMessages) => [...prevMessages, { user, text }])
  }

  const startMessage = (user: string) => {
    addMessage(user, "")
  }

  const appendLastMessageContent = (text: string) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1]
      if (lastMessage) {
        const updatedMessages = [...prevMessages]
        updatedMessages[prevMessages.length - 1] = {
          user: lastMessage.user,
          text: lastMessage.text + text,
        }
        return updatedMessages
      }
      return prevMessages
    })
  }

  const sendMessageStream = async (prompt: string) => {
    if (prompt.trim() === "") return
    try {
      addMessage("user", prompt)

      const model = await getGeminiProModel()

      const chat = model.startChat({
        history: messages.map((item) => ({
          role: item.user === "user" ? "user" : "model",
          parts: item.text,
        })),
      })

      const result = await chat.sendMessageStream(prompt)
      startMessage("gemini")
      for await (const chunk of result.stream) {
        const chunkText = chunk.text()
        logger.debug("chunkText", chunkText)
        appendLastMessageContent(chunkText)
      }
    } catch (error: any) {
      message.error(error.message)
    }
  }

  return (
    <BasicLayout mode="custom">
      <ContentWrapper className="flex flex-col">
        <Flex vertical gap={20} className="flex-1 overflow-y-auto px-20 py-10">
          {messages.length === 0 && <div></div>}
          {messages.map((messageItem, messageIndex) => {
            if (messageItem.user === "gemini") {
              return (
                <div key={`message-${messageIndex}`}>
                  <Flex align="start" gap={8}>
                    <ProviderAvatar provider={provider} />
                    <div className="flex-1">
                      <div className="font-bold text-md">Gemini</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(messageItem.text),
                        }}
                      />
                    </div>
                  </Flex>
                </div>
              )
            }
            if (messageItem.user === "user") {
              return (
                <div key={`message-${messageIndex}`}>
                  <Flex align="start" gap={8}>
                    <ChatGptUserAvatar className="w-[25px] h-[25px]" />
                    <div className="flex-1">
                      <div className="font-bold text-md">You</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(messageItem.text),
                        }}
                      />
                    </div>
                  </Flex>
                </div>
              )
            }
          })}
        </Flex>
        <div className="px-10">
          <Button
            type="text"
            className="text-gray-500"
            onClick={() => setMessages([])}
          >
            清空对话
          </Button>
        </div>
        <div className="relative mb-5 mt-1 px-10">
          <Input.TextArea
            size="large"
            placeholder="请输入..."
            className="pl-4 pr-10 px-4 rounded-2xl overflow-hidden"
            autoSize={{ minRows: 1, maxRows: 6 }}
            value={inputText}
            onKeyDown={(e) => {
              if (e.key == "Enter" && e.metaKey) {
                e.preventDefault()
                sendMessageStream(inputText)
                setInputText("")
              }
            }}
            onChange={(e) => setInputText(e.target.value)}
          />
          <UpSquareFilled
            onClick={(e) => {
              e.stopPropagation()
              sendMessageStream(inputText)
              setInputText("")
            }}
            className="rounded-xl overflow-hidden text-[28px] absolute right-12 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
      </ContentWrapper>
    </BasicLayout>
  )
}
