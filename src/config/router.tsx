import {
  DictionaryPage,
  HomePage,
  WordPage,
  SettingPage,
  PapersMinePage,
  ConversationPage,
  PaperCreatePage,
  PaperEditPage,
  ReaderPage,
  TagsPage,
  CommentsPage,
} from "@/pages"
import { TimelinePage } from "@/pages/timeline"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dictionary",
    element: <DictionaryPage />,
  },
  {
    path: "/word/:word",
    element: <WordPage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/reader/:paperId",
    element: <ReaderPage />,
  },
  {
    path: "/paper/edit/:paperId",
    element: <PaperEditPage />,
  },
  {
    path: "/paper/create",
    element: <PaperCreatePage />,
  },
  {
    path: "/papers/mine",
    element: <PapersMinePage />,
  },
  {
    path: "/conversation",
    element: <ConversationPage />,
  },
  {
    path: "/tags",
    element: <TagsPage />,
  },
  {
    path: "/comments",
    element: <CommentsPage />,
  },
  {
    path: "/timeline",
    element: <TimelinePage />,
  },
])
