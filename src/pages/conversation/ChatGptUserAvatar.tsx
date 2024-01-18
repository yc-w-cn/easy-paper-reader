import {
  getSession,
  parseSession,
} from "@/apis/chatgpt/web-session"
import { downloadImageToBase64 } from "@/utils/image"
import { c } from "@/utils/key-name"
import { Avatar } from "antd"
import localforage from "localforage"
import { useEffect, useState } from "react"

type Props = {
  className?: string
}

export function ChatGptUserAvatar({ className }: Props) {
  const [image, setImage] = useState<string>()

  const initImage = async () => {
    const sessionText = await getSession()
    if (!sessionText) return
    const sessionObject = parseSession(sessionText)
    if (sessionObject?.user.picture) {
      const keyName = c("image", sessionObject?.user.picture)
      const imageUrlFromCache = await localforage.getItem<string>(keyName)
      if (imageUrlFromCache) {
        setImage(imageUrlFromCache)
      } else {
        const base64 = await downloadImageToBase64(sessionObject?.user.picture)
        localforage.setItem(keyName, base64)
        setImage(base64)
      }
    }
  }

  useEffect(() => {
    initImage()
  }, [])
  
  return <Avatar src={image} className={className} />
}
