type Props = {
  children?: React.ReactNode;
};
export default function PageContent({ children }: Props) {
  return <div className="flex-grow">{children}</div>;
}
