import {
  getSession,
  parseSession,
  SessionType,
} from "@/apis/chatgpt/web-session"
import { Avatar, Card, Flex, Space } from "antd"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { LONG_DATE_STRING } from "@/utils/date"

export function ChatGptAccount() {
  const [session, setSession] = useState<SessionType>()
  useEffect(() => {
    getSession().then((s) => {
      if (s) {
        setSession(parseSession(s))
      }
    })
  }, [])
  if (!session) return <></>
  return (
    <Card size="small" className="w-[250px]">
      <Space>
        <Avatar src={session.user.picture} />
        <Flex vertical>
          <span>{session.user.name}</span>
          <span className="text-xs text-gray-500">
            过期时间：{dayjs(session.expires).format(LONG_DATE_STRING)}
          </span>
        </Flex>
      </Space>
    </Card>
  )
}
