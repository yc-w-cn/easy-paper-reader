import { getPaper } from "@/apis/local-data/paper"
import { SHORT_DATE_STRING } from "@/utils/date"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"

type Props = {
  paperKey: string
}
export function CreatePaperAction({ paperKey }: Props) {
  const response = useQuery({
    queryKey: ["paper", paperKey],
    queryFn: () => getPaper(paperKey),
  })
  return (
    <span>
      <strong>
        {dayjs(response.data?.ctime).format(SHORT_DATE_STRING)} 创建文章
      </strong>
      <br />
      {response.data?.title}
    </span>
  )
}
