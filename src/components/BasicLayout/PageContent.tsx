import { cn } from "@/utils/tailwind"
import { Flex } from "antd"

type Props = {
  className?: string
  children?: React.ReactNode
}
export function PageContent({ children, className }: Props) {
  return (
    <Flex vertical className={cn("w-full", className)}>
      {children}
    </Flex>
  )
}
