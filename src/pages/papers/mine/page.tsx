import { useRef } from "react"
import { useTagNames } from "@/hooks"
import { BasicLayout, ContentWrapper } from "@/components"
import { PaperType, pagePaperList } from "@/apis/local-data/paper"
import { ActionType, ProTable } from "@ant-design/pro-components"
import { PaperBrief, OperationButton } from "@/pages/papers/mine"

export default function PapersMinePage() {
  const actionRef = useRef<ActionType>()
  const { tagOptions } = useTagNames()

  return (
    <BasicLayout mode="custom">
      <ContentWrapper className="px-5 mt-10">
        <ProTable<PaperType>
          actionRef={actionRef}
          rowKey="id"
          options={{
            density: false,
          }}
          search={{
            span: 12,
            className: 'm-0 py-0'
          }}
          request={pagePaperList}
          columns={[
            {
              title: "ID",
              key: "id",
              dataIndex: "id",
              hideInTable: true,
              hideInSearch: true,
            },
            {
              title: "论文",
              key: "title",
              dataIndex: "title",
              renderText: (_, record) => <PaperBrief paper={record} />,
            },
            {
              title: "标签",
              key: "tags",
              dataIndex: "tags",
              valueType: "select",
              fieldProps: {
                mode: "tags",
                options: tagOptions,
              },
              hideInTable: true,
            },
            {
              title: "最后修改",
              width: 120,
              key: "modified",
              renderText: (_, record) => record.mtime || record.ctime,
              valueType: "date",
              hideInSearch: true,
            },
            {
              title: "操作",
              dataIndex: "cacheKey",
              key: "operation",
              hideInSearch: true,
              renderText: (_, record) => (
                <OperationButton
                  paper={record}
                  onChange={() => actionRef.current?.reload()}
                />
              ),
            },
          ]}
        ></ProTable>
      </ContentWrapper>
    </BasicLayout>
  )
}
