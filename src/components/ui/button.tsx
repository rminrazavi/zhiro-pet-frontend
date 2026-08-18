import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "border-2 border-border bg-primary text-white shadow-brutal hover:-translate-y-1 hover:shadow-brutal-hover active:translate-y-0 active:shadow-brutal-sm",
  secondary:
    "border-2 border-border bg-secondary text-foreground shadow-brutal hover:-translate-y-1 hover:shadow-brutal-hover active:translate-y-0 active:shadow-brutal-sm",
  outline:
    "border-2 border-border bg-surface text-foreground shadow-brutal hover:-translate-y-1 hover:shadow-brutal-hover active:translate-y-0 active:shadow-brutal-sm",
  ghost:
    "border-2 border-transparent bg-transparent text-foreground hover:bg-surface-muted",
};

const sizes = {
  sm: "min-h-9 px-3 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-[transform,box-shadow,background-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
