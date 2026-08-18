import Link from "next/link";
import { PawPrint } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="ژیرو پت"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl border-2 border-border bg-primary px-4 py-2 text-primary-foreground shadow-brutal-sm"
    >
      <PawPrint className="size-[18px]" aria-hidden="true" />

      <span className="text-base font-black">ژیرو پت</span>
    </Link>
  );
}
