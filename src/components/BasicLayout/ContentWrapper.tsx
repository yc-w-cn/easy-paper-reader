import { cn } from "@/utils/tailwind";
import { ReactNode } from "react";

type Props = {
  className?: string | string[];
  children?: ReactNode;
};

export function ContentWrapper({ children, className }: Props) {
  return <div className={cn("w-full h-full pt-10 flex flex-col", className)}>{children}</div>;
}
