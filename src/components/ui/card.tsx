import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "brutal" | "flat";
};

const variants = {
  default: "rounded-2xl border-2 border-border bg-surface",
  brutal: "rounded-2xl border-2 border-border bg-surface shadow-brutal",
  flat: "rounded-2xl border-2 border-border bg-surface",
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return <div className={cn(variants[variant], className)} {...props} />;
}
