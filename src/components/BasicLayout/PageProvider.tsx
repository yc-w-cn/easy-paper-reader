import ConfigProvider from "antd/es/config-provider";

type Props = {
  children?: React.ReactNode;
};

export function PageProvider({ children }: Props) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
