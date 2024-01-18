import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./App.tsx"
import "./tailwind.css"
import "./index.css"
import { App, ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"
import theme from "@/config/theme.ts"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StyleProvider } from "@ant-design/cssinjs"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN} theme={theme}>
      <StyleProvider hashPriority="high">
        <App>
          <QueryClientProvider client={queryClient}>
            <Root />
          </QueryClientProvider>
        </App>
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
