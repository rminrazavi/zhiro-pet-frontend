import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type HeroContentProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  accent: "primary" | "accent" | "secondary";
};

export function HeroContent({
  eyebrow,
  title,
  description,
  cta,
  accent,
}: HeroContentProps) {
  const accentClass = {
    primary: "bg-primary",
    accent: "bg-accent",
    secondary: "bg-secondary",
  }[accent];

  return (
    <div className="max-w-[560px] text-right">
      <span
        className={`
          inline-flex
          rounded-md
          border-2 border-border
          px-3 py-1.5
          text-xs font-black
          shadow-brutal-sm
          ${accentClass}
        `}
      >
        {eyebrow}
      </span>

      <h1 className="mt-5 whitespace-pre-line text-3xl font-black leading-[1.35] tracking-tight sm:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-[480px] text-sm font-medium leading-7 text-muted sm:text-base">
        {description}
      </p>

      <Link
        href="/products"
        className="
          group
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-lg
          border-2 border-border
          bg-foreground
          px-5 py-3
          text-sm font-black
          text-white
          shadow-brutal
          transition-all
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-brutal-sm
        "
      >
        {cta}

        <ArrowLeftIcon
          className="
            size-4
            transition-transform
            group-hover:-translate-x-1
          "
          strokeWidth={2.5}
        />
      </Link>
    </div>
  );
}