import { translate } from "@/utils/translate/providers/alapi-cn"
import { PaperType, getPaper, updatePaper } from "@/apis/local-data/paper"
import { BasicLayout, ContentWrapper } from "@/components"
import { c } from "@/utils/key-name"
import Logger from "@/utils/logger"
import { TranslationOutlined } from "@ant-design/icons"
import {
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormItem,
  ProFormRate,
  ProFormText,
} from "@ant-design/pro-components"
import { App, Button, Flex, Input, Spin } from "antd"
import localforage from "localforage"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TagsEditor } from "@/pages/paper"
import { refreshTagsSnapshot } from "@/apis/local-data/tag"
import { ArxivEditor } from "./ArxivEditor"
import { PaperWithCodeEditor } from "./PaperWithCodeEditor"
import { GithubEditor } from "./GithubEditor"

const { Search } = Input

/**
 * ENABLE_RATE
 * 打分功能开关
 * 为了功能保持简洁，关闭打分功能
 */
const ENABLE_RATE = false

export function PaperEditPage() {
  const logger = new Logger(PaperEditPage.name)
  const formRef = useRef<ProFormInstance>()
  const [title, setTitle] = useState("")
  const { message } = App.useApp()
  const { paperId } = useParams()
  const [previousPaper, setPreviousPaper] = useState<PaperType>()
  const navigate = useNavigate()

  const initPaper = async () => {
    if (!paperId) return null
    const paper = await getPaper(c("paper", paperId))
    logger.debug("paper", paper)
    if (paper) {
      setPreviousPaper(paper)
    }
  }

  useEffect(() => {
    initPaper()
  }, [])

  if (previousPaper === undefined) {
    return (
      <BasicLayout mode="center">
        <ContentWrapper className="px-10">
          <Spin spinning />
        </ContentWrapper>
      </BasicLayout>
    )
  }

  return (
    <BasicLayout mode="custom">
      <ContentWrapper className="px-10">
        {previousPaper && (
          <ProForm
            formRef={formRef}
            className="mt-10 max-w-[600px]"
            layout="horizontal"
            grid
            request={async () => {
              return previousPaper
            }}
            labelCol={{
              span: 6,
            }}
            colProps={{
              span: 24,
            }}
            onFinish={async (values) => {
              if (!previousPaper) return
              logger.debug("onFinish -> values", values)
              await updatePaper(previousPaper.key, values)
              refreshTagsSnapshot()
              message.success("操作成功")
              navigate(`/reader/${paperId}`)
              return true
            }}
            submitter={{
              searchConfig: {
                submitText: "保存更改",
                resetText: "取消",
              },
              onReset: () => navigate(`/reader/${paperId}`),
              render: (_, doms) => {
                return (
                  <Flex
                    justify="center"
                    gap={10}
                    align="center"
                    className="flex-row-reverse"
                  >
                    {doms}
                  </Flex>
                )
              },
            }}
          >
            <ProFormItem label="文章名称" name="title" className="w-full">
              <Search
                onChange={(e) => {
                  setTitle(e.currentTarget.value)
                }}
                enterButton={
                  <Button
                    type="text"
                    icon={<TranslationOutlined />}
                    onClick={async () => {
                      if (!title) return
                      const keyName = c("fanyi", title)
                      const cachedResult =
                        await localforage.getItem<string>(keyName)
                      if (cachedResult) {
                        logger.debug("cachedResult", cachedResult)
                        formRef.current?.setFieldValue(
                          "translatedTitle",
                          cachedResult,
                        )
                        return
                      }
                      const result = await translate(title)
                      logger.debug("result", result)
                      if (result.code !== 200) {
                        message.error(result.msg)
                      }
                      formRef.current?.setFieldValue(
                        "translatedTitle",
                        result.data.dst,
                      )
                      localforage.setItem(keyName, result.data.dst)
                    }}
                  ></Button>
                }
              />
            </ProFormItem>
            <ProFormDependency name={["translatedTitle"]}>
              {({ translatedTitle }) => {
                if (translatedTitle) {
                  return (
                    <ProFormText
                      label="中文名称"
                      name="translatedTitle"
                      className="focus:border-2"
                    ></ProFormText>
                  )
                }
              }}
            </ProFormDependency>
            {ENABLE_RATE && (
              <ProFormRate
                label="评分"
                name="score"
                fieldProps={{
                  allowHalf: true,
                  className: "text-gray-900",
                }}
              />
            )}
            <ProFormItem name="arxiv" label="arXiv" className="w-full">
              <ArxivEditor />
            </ProFormItem>
            <ProFormItem
              name="paperWithCode"
              label="PaperWithCode"
              className="w-full"
            >
              <PaperWithCodeEditor />
            </ProFormItem>
            <ProFormItem name="github" label="Github" className="w-full">
              <GithubEditor />
            </ProFormItem>
            <ProFormItem label="标签" name="tags" className="w-full">
              <TagsEditor />
            </ProFormItem>
          </ProForm>
        )}
      </ContentWrapper>
    </BasicLayout>
  )
}
