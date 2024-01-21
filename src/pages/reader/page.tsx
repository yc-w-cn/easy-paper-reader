import { Skeleton, Spin } from "antd"
import { useCurrentPaper } from "@/hooks"
import { PageArea, PageHeader, AutoLayout } from "@/pages/reader"
import { Provider } from "react-redux"
import { readerStore, startAppListening } from "@/stores"
import { initPaper } from "@/features/reader/paper"
import { useEffect } from "react"
import { Unsubscribe } from "@reduxjs/toolkit"
import { setupPaperListeners } from "@/features/reader/paper/listeners"
import { setupBlocksListeners } from "@/features/reader/blocks/listeners"

export function ReaderPage() {
  const { currentPaper, isFetched, isLoading } = useCurrentPaper()

  useEffect(() => {
    const subscriptions: Unsubscribe[] = [
      setupPaperListeners(startAppListening),
      setupBlocksListeners(startAppListening),
    ]

    return () => subscriptions.forEach((unsubscribe) => unsubscribe())
  }, [])

  useEffect(() => {
    if (isFetched && currentPaper) {
      readerStore.dispatch(initPaper(currentPaper))
    }
  }, [currentPaper, isFetched])

  return (
    <Provider store={readerStore}>
      <Spin spinning={isLoading}>
        <AutoLayout>
          {currentPaper ? (
            <>
              <PageHeader />
              <PageArea />
            </>
          ) : (
            <div className="p-20">
              <Skeleton />
            </div>
          )}
        </AutoLayout>
      </Spin>
    </Provider>
  )
}
