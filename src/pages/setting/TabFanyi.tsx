import {
  getAlapiCnToken,
  setAlapiCnToken as setLocalAlapiCnToken,
} from "@/utils/translate/providers/alapi-cn"
import {
  TranslateProvider,
  getTranslateProvider,
  setTranslateProvider,
} from "@/utils/translate/translate"
import { ProFormRadio, ProFormText } from "@ant-design/pro-components"
import { useEffect, useState } from "react"

export function TabFanyi() {
  const [provider, setProvider] = useState<TranslateProvider>("gemeni-pro")
  const [alapiCnToken, setAlapiCnToken] = useState<string>()

  useEffect(() => {
    getTranslateProvider().then((value) => {
      if (value) {
        setProvider(value)
      }
    })
  }, [])

  useEffect(() => {
    getAlapiCnToken().then((value) => {
      if (value) {
        setAlapiCnToken(value)
      }
    })
  }, [])

  const handleProviderChange = (value: TranslateProvider) => {
    setProvider(value)
    setTranslateProvider(value)
  }

  const handleAlapiCnTokenChange = (value: string) => {
    setAlapiCnToken(value)
    setLocalAlapiCnToken(value)
  }

  return (
    <div className="my-4">
      <ProFormRadio.Group
        label="翻译"
        fieldProps={{
          onChange: (e) => handleProviderChange(e.target.value),
          value: provider,
          defaultValue: "alapi-cn",
        }}
        options={[
          {
            label: "Gemeni Pro",
            value: "gemeni-pro",
          },
          {
            label: "APNIC",
            value: "alapi-cn",
          },
        ]}
      />
      {provider === "alapi-cn" && (
        <ProFormText
          label="APNIC TOKEN"
          fieldProps={{
            className: "w-[300px]",
            value: alapiCnToken,
            onChange: (e) => handleAlapiCnTokenChange(e.currentTarget.value),
          }}
        />
      )}
    </div>
  )
}
