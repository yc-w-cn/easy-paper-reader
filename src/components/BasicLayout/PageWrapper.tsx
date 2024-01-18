type Props = {
  children?: React.ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-screen p-10">
      <div className="flex w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}
