import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "mustard" | "terracotta" | "sage" | "pink";
};

const variants = {
  mustard: "bg-accent",
  terracotta: "bg-primary text-white",
  sage: "bg-secondary",
  pink: "bg-pink",
};

export function Badge({
  className,
  variant = "mustard",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-xl border-2 border-border px-2.5 py-1 text-[10px] font-black leading-none shadow-brutal-sm",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
