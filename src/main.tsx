import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App.tsx";
import "./tailwind.css";
import "./index.css";
import { App, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#000000",
        },
      }}
    >
      <App>
        <Root />
      </App>
    </ConfigProvider>
  </React.StrictMode>
);
