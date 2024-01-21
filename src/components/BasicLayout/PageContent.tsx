import { Flex } from "antd"

type Props = {
  children?: React.ReactNode
}
export function PageContent({ children }: Props) {
  return <Flex vertical className="w-full">{children}</Flex>
}
