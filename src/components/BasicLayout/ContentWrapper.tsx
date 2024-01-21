import { cn } from "@/utils/tailwind";
import { ReactNode } from "react";

type Props = {
  className?: string | string[];
  children?: ReactNode;
};

export function ContentWrapper({ children, className }: Props) {
  return <div className={cn("w-full flex-grow-1 flex-shrink flex flex-col overflow-auto", className)}>{children}</div>;
}
