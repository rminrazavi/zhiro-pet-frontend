import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-[1200px]",
  wide: "max-w-[1400px]",
  narrow: "max-w-[900px]",
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6", sizes[size], className)}
      {...props}
    />
  );
}
