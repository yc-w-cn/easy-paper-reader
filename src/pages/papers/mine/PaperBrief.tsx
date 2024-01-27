import { PaperType } from "@/apis/local-data/paper"
import { Space, Tag } from "antd"

type Props = {
  paper: PaperType
}

export function PaperBrief({ paper }: Props) {
  return (
    <Space direction="vertical" size={0}>
      <span className="font-semibold">{paper.title}</span>
      {paper.translatedTitle && (
        <span className="text-xs text-gray-600">{paper.translatedTitle}</span>
      )}
      {paper.tags?.length > 0 && (
        <Space size={4}>
          {paper.tags.map((item, index) => (
            <Tag
              key={`tag-${item.name}-${index}`}
              color={item.color}
              className="text-xs text-[10px] px-1 m-0"
            >
              {item.name}
            </Tag>
          ))}
        </Space>
      )}
    </Space>
  )
}
