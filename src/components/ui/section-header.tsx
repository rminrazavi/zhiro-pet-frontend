import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  icon?: ReactNode;
  href?: string;
  actionLabel?: string;
  className?: string;
};

export function SectionHeader({
  title,
  icon,
  href,
  actionLabel = "مشاهده همه",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div className="flex min-w-0 items-center gap-2">
        {icon ? (
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-accent shadow-brutal-sm"
          >
            {icon}
          </span>
        ) : null}

        <h2 className="truncate text-xl font-black text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>

      {href ? (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-foreground underline-offset-4 transition-opacity hover:opacity-70 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border"
        >
          {actionLabel}
          <ChevronLeft aria-hidden="true" className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
