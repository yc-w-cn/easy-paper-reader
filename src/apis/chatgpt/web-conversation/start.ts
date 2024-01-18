import { uuid } from "@/utils/uuid"
import axios from "axios"

/**
 * ChatGPT 网页端接口
 * - 根据需要可以改成反向代理
 * - 例如：https://ai.fakeopen.com/api/conversation
 */
// export const CHATGPT_BASE_WEB_URL =
//   "https://chat.openai.com/backend-api/conversation"

export const CHATGPT_BASE_WEB_URL =
  "https://chatgpt.joydragon.workers.dev/backend-api/conversation"
  
export async function startConversation(apiKey: string, inputText: string) {
  const id = uuid()
  const response = await axios.post(
    CHATGPT_BASE_WEB_URL,
    {
      action: "next",
      messages: [
        {
          id,
          author: { role: "user" },
          content: { content_type: "text", parts: [inputText] },
          metadata: {},
        },
      ],
      parent_message_id: null, // "aaa16bcd-6cce-4c99-ac2e-a3a835c4ebce",
      model: "text-davinci-002-render-sha",
      timezone_offset_min: -480,
      suggestions: [
        "Give me 3 ideas about how to plan good New Years resolutions. Give me some that are personal, family, and professionally-oriented.",
        "Explain why popcorn pops to a kid who loves watching it in the microwave.",
        "Show me a code snippet of a website's sticky header in CSS and JavaScript.",
        "Can you brainstorm some edge cases for a function that takes birthdate as input and returns the horoscope?",
      ],
      history_and_training_disabled: false,
      arkose_token: null,
      conversation_mode: { kind: "primary_assistant" },
      force_paragen: false,
      force_rate_limit: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    },
  )
  console.log("response", response.data)
  return id
}
