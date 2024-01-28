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
      <Space size={4}>
        {paper.arxiv && (
          <>
            <Tag
              color="cyan"
              className="text-xs text-[10px] px-1 m-0 hover:cursor-pointer"
              onClick={() => window.open(paper.arxiv?.abstract)}
            >
              Abstract
            </Tag>
            <Tag
              color="red"
              className="text-xs text-[10px] px-1 m-0 hover:cursor-pointer"
              onClick={() => window.open(paper.arxiv?.pdf)}
            >
              PDF
            </Tag>
          </>
        )}
        {paper.github && (
          <Tag
            color="gold"
            className="text-xs text-[10px] px-1 m-0 hover:cursor-pointer"
            onClick={() => window.open(paper.github?.url)}
          >
            Code
          </Tag>
        )}
        {paper.tags?.length > 0 && (
          <>
            {paper.tags.map((item, index) => (
              <Tag
                key={`tag-${item.name}-${index}`}
                color={item.color}
                className="text-xs text-[10px] px-1 m-0"
              >
                {item.name}
              </Tag>
            ))}
          </>
        )}
      </Space>
    </Space>
  )
}
