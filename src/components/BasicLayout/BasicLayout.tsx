import { PageWrapper, PageSidebar, PageContent, MenuBar } from "@/components"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export function BasicLayout({ children }: Props) {
  return (
    <PageWrapper>
      <PageSidebar />
      <PageContent>
        <MenuBar />
        <div className="flex justify-center items-center h-full">
          {children}
        </div>
      </PageContent>
    </PageWrapper>
  )
}
