type Props = {
  content?: React.ReactNode
}

export function OneColumnContent({ content }: Props) {
  return (
    <div className="w-full px-16">
      <div className="">{content}</div>
    </div>
  )
}
