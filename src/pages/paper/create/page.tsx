import { translate } from "@/utils/translate/providers/alapi-cn"
import { BasicLayout } from "@/components"
import { c } from "@/utils/key-name"
import Logger from "@/utils/logger"
import { uuid } from "@/utils/uuid"
import { TranslationOutlined } from "@ant-design/icons"
import {
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormItem,
  ProFormText,
} from "@ant-design/pro-components"
import { App, Button, Card, Input } from "antd"
import localforage from "localforage"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const { Search } = Input

type FormType = {
  title: string
  translatedTitle?: string
}

export function PaperCreatePage() {
  const logger = new Logger(PaperCreatePage.name)
  const [title, setTitle] = useState("")
  const { message } = App.useApp()
  const navigate = useNavigate()
  const formRef = useRef<ProFormInstance>()

  const handleTranslate = async () => {
    if (!title) return
    const keyName = c("fanyi", title)
    const cachedResult = await localforage.getItem<string>(keyName)
    if (cachedResult) {
      logger.debug("cachedResult", cachedResult)
      formRef.current?.setFieldValue("translatedTitle", cachedResult)
      return
    }
    const result = await translate(title)
    logger.debug("result", result)
    if (result.code !== 200) {
      message.error(result.msg)
    }
    formRef.current?.setFieldValue("translatedTitle", result.data.dst)
    localforage.setItem(keyName, result.data.dst)
  }

  return (
    <BasicLayout>
      <Card title="开始新的征途">
        <ProForm<FormType>
          formRef={formRef}
          layout="horizontal"
          className="pt-2 w-[450px]"
          onFinish={async (values) => {
            logger.debug("values", values)
            const id = uuid()
            const ctime = new Date().getTime()
            const key = c("paper", id)
            localforage.setItem(key, {
              ...values,
              id,
              key,
              ctime,
            })
            navigate("/reader/" + id)
            return true
          }}
        >
          <ProFormItem label="文章名称" name="title">
            <Search
              onChange={(e) => {
                setTitle(e.currentTarget.value)
              }}
              enterButton={
                <Button
                  type="text"
                  icon={<TranslationOutlined />}
                  onClick={handleTranslate}
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
        </ProForm>
      </Card>
    </BasicLayout>
  )
}
