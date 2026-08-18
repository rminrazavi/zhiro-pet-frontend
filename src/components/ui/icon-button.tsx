import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export function IconButton({
  label,
  children,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-surface text-foreground transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:shadow-brutal-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
