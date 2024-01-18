import { isGeminiError } from "@/apis/gemini/generativelanguage/error.type"
import { getModels } from "@/apis/gemini/generativelanguage/v1/models"
import { getModels as getModelsBeta } from "@/apis/gemini/generativelanguage/v1beta/models"
import Logger from "@/utils/logger"
import { ActionType, ProTable } from "@ant-design/pro-components"
import { App, Flex, Radio } from "antd"
import { isAxiosError } from "axios"
import { useRef, useState } from "react"

type VersionType = "v1" | "v1beta"

export function GeminiModelTable() {
  const logger = new Logger(GeminiModelTable.name)
  const [version, setVersion] = useState<VersionType>("v1")
  const actionRef = useRef<ActionType>()
  const { notification } = App.useApp()

  const handleRequest = async () => {
    if (version === "v1") {
      try {
        const data = await getModels()
        logger.debug("data", data)
        if (isGeminiError(data)) {
          notification.error({
            message: data.error.status,
            description: data.error.message,
          })
        } else {
          return {
            total: data.models?.length || 0,
            data: data.models || [],
            success: true,
          }
        }
      } catch (e) {
        if (isAxiosError(e)) {
          const data = e.response?.data
          if (isGeminiError(data)) {
            notification.error({
              message: data.error.status,
              description: data.error.message,
            })
          } else {
            notification.error({
              message: e.code,
              description: e.message,
            })
          }
        } else {
          logger.error("e", e)
        }
      }
    }
    if (version === "v1beta") {
      try {
        const data = await getModelsBeta()
        logger.debug("data", data)
        if (isGeminiError(data)) {
          notification.error({
            message: data.error.status,
            description: data.error.message,
          })
        } else {
          return {
            total: data.models?.length || 0,
            data: data.models || [],
            success: true,
          }
        }
      } catch (e) {
        if (isAxiosError(e)) {
          const data = e.response?.data
          if (isGeminiError(data)) {
            notification.error({
              message: data.error.status,
              description: data.error.message,
            })
          } else {
            notification.error({
              message: e.code,
              description: e.message,
            })
          }
        } else {
          logger.error("e", e)
        }
      }
    }
    return {
      success: true,
      data: [],
      total: 0,
    }
  }

  return (
    <Flex gap={10} vertical>
      <h3>Gemini 可用模型</h3>
      <Radio.Group
        value={version}
        onChange={(e) => {
          setVersion(e.target.value)
          actionRef.current?.reload()
        }}
      >
        <Radio.Button value="v1">v1</Radio.Button>
        <Radio.Button value="v1beta">v1beta</Radio.Button>
      </Radio.Group>
      <ProTable
        actionRef={actionRef}
        rowKey="name"
        search={false}
        toolBarRender={false}
        request={handleRequest}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          { title: "模型名称", dataIndex: "name" },
          { title: "模型介绍", dataIndex: "description" },
        ]}
      />
    </Flex>
  )
}
