type Props = {
  children?: React.ReactNode;
};
export function PageContent({ children }: Props) {
  return <div className="flex-grow relative">{children}</div>;
}
