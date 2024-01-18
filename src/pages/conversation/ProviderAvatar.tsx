import Icon from "@ant-design/icons"
import { Avatar } from "antd"
import chatgptSvg from "./images/chatgpt.svg?react"
import geminiSvg from "./images/gemini.svg?react"

type Props = {
  provider: "gemini" | "chatgpt"
}

export function ProviderAvatar({ provider }: Props) {
  if (provider === "gemini") {
    return (
      <Avatar
        src={<Icon component={geminiSvg} className="text-[14px]" />}
        className="w-[25px] h-[25px] bg-gray-500 flex justify-center items-center"
      />
    )
  }
  if (provider === "chatgpt") {
    return (
      <Avatar
        src={<Icon component={chatgptSvg} className="text-[23px]" />}
        className="w-[25px] h-[25px]"
      />
    )
  }
}
