import { PageWrapper, PageSidebar, PageContent, MenuBar } from "@/components"
import { ReactNode } from "react"

type Props = {
  mode?: "center" | "custom"
  children?: ReactNode
}

export function BasicLayout({ children, mode = "center" }: Props) {
  return (
    <PageWrapper>
      <PageSidebar />
      <PageContent>
        <MenuBar />
        {mode === "center" ? (
          <div className="flex flex-1 justify-center items-center">
            {children}
          </div>
        ) : (
          children
        )}
      </PageContent>
    </PageWrapper>
  )
}
