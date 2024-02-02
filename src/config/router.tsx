import { createBrowserRouter } from "react-router-dom"

const lazyWrap = (factory: () => Promise<any>) => {
  return async () => {
    const page = await factory()
    // https://reactrouter.com/en/main/route/lazy
    return {
      Component: page.default || page.Component,
      ErrorBoundary: page.ErrorBoundary,
      loader: page.loader,
    }
  }
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      lazy: lazyWrap(() => import("@/pages/home/page")),
    },
    {
      path: "/dictionary",
      lazy: lazyWrap(() => import("@/pages/dictionary/page")),
    },
    {
      path: "/word/:word",
      lazy: lazyWrap(() => import("@/pages/word/page")),
    },
    {
      path: "/setting",
      lazy: lazyWrap(() => import("@/pages/setting/page")),
    },
    {
      path: "/reader/:paperId",
      lazy: lazyWrap(() => import("@/pages/reader/page")),
    },
    {
      path: "/paper/edit/:paperId",
      lazy: lazyWrap(() => import("@/pages/paper/edit")),
    },
    {
      path: "/paper/create",
      lazy: lazyWrap(() => import("@/pages/paper/create")),
    },
    {
      path: "/papers/mine",
      lazy: lazyWrap(() => import("@/pages/papers/mine")),
    },
    {
      path: "/conversation",
      lazy: lazyWrap(() => import("@/pages/conversation/page")),
    },
    {
      path: "/tags",
      lazy: lazyWrap(() => import("@/pages/tags/page")),
    },
    {
      path: "/comments",
      lazy: lazyWrap(() => import("@/pages/comments/page")),
    },
    {
      path: "/timeline",
      lazy: lazyWrap(() => import("@/pages/timeline/page")),
    },
  ],
  {
    basename: import.meta.env.MODE === "gh-pages" ? "/easy-paper-reader" : "/",
  },
)
