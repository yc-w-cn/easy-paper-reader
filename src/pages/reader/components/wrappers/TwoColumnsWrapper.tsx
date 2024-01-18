type Props = {
  left?: React.ReactNode
  right?: React.ReactNode
}
export function TwoColumnsWrapper({ left, right }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="">{left}</div>
      <div className="">{right}</div>
    </div>
  )
}
