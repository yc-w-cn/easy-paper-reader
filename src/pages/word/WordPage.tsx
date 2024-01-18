import { useParams } from "react-router-dom"
import { BasicLayout } from "@/components"
import { Empty, Space, Spin } from "antd"
import { useQuery } from "@tanstack/react-query"
import { DictionaryItem, lookup } from "@/apis/iciba"
import Logger from "@/utils/logger"
import localforage from "localforage"
import { Fragment } from "react"
import { c } from "@/utils/key-name"

export function WordPage() {
  const logger = new Logger(WordPage.name)
  const { word } = useParams()

  const response = useQuery({
    queryKey: ["translate", { word }],
    queryFn: async () => {
      if (!word) {
        return []
      }
      const keyName = c("word", word)
      const cachedResult = await localforage.getItem<DictionaryItem[]>(keyName)
      if (cachedResult) {
        logger.debug("cachedResult", cachedResult)
        return cachedResult
      }
      const result = await lookup(word)
      logger.debug("result", result)
      const returnValue = result.message || []
      logger.debug("returnValue", result)
      localforage.setItem(keyName, returnValue)
      return returnValue
    },
  })

  const detail = response.data?.[0]

  if (response.isLoading || !detail) {
    return (
      <BasicLayout>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="空空如也" />
      </BasicLayout>
    )
  }

  return (
    <BasicLayout>
      <Space
        direction="vertical"
        align="start"
        size="large"
        className="h-full w-full px-10 py-16"
      >
        <Spin spinning={response.isLoading}>
          <h1>{detail.key}</h1>
          {detail.means.map((item, index) => {
            return (
              <Fragment key={`mean-${index}`}>
                <h2>{item.part || "-"}</h2>
                <p>{item.means.join("; ")}</p>
              </Fragment>
            )
          })}
        </Spin>
      </Space>
    </BasicLayout>
  )
}
