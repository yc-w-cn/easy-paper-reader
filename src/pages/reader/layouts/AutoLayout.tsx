import { BasicLayout, ContentWrapper } from "@/components/"
import { ZenLayout } from "./ZenLayout"
import { useReaderSelector } from "@/stores"

type Props = {
  children?: React.ReactNode
}

export function AutoLayout({ children }: Props) {
  const mode = useReaderSelector((state) => state.layout.mode)
  if (mode === "zen") {
    return <ZenLayout>{children}</ZenLayout>
  }
  if (mode === "basic") {
    return (
      <BasicLayout mode="custom">
        <ContentWrapper>{children}</ContentWrapper>
      </BasicLayout>
    )
  }
}
