import { Tabs } from "antd"
import { BasicLayout, ContentWrapper } from "@/components"
import { TabCommon, TabFanyi, TabDictionary, TabStorage } from "@/pages/setting"

export function SettingPage() {
  return (
    <BasicLayout mode='custom'>
      <ContentWrapper className="mr-5">
        <Tabs
          className="h-full"
          tabPosition="left"
          tabBarExtraContent={{
            left: <div className="h-4" />,
          }}
          destroyInactiveTabPane={true}
          items={[
            {
              label: "通用",
              key: "common",
              children: <TabCommon />,
            },
            {
              label: "存储",
              key: "storage",
              children: <TabStorage />,
            },
            {
              label: "词典",
              key: "dictionary",
              children: <TabDictionary />,
            },
            {
              label: "翻译",
              key: "fanyi",
              children: <TabFanyi />,
            },
          ]}
        />
      </ContentWrapper>
    </BasicLayout>
  )
}
