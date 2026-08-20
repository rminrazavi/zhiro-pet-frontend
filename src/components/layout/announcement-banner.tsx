import {
  ArrowLeftIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export function AnnouncementBanner() {
  return (
    <div className="container-page hidden md:block">
      <div
        className="
          mb-4 flex min-h-11 items-center gap-3
          rounded-lg border-2 border-border
          bg-primary px-3 py-2
          text-foreground
          sm:px-4
        "
      >
        {/* Message */}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className="
              flex size-7 shrink-0 items-center justify-center
              rounded-md border-2 border-border
              bg-surface
            "
            aria-hidden="true"
          >
            <ArrowPathIcon
              className="size-4"
              strokeWidth={2.4}
            />
          </span>

          <p className="min-w-0 text-xs font-bold leading-5 sm:text-sm">
            خریدهای همیشگی پتت، این بار با ۱۰٪ تخفیف
          </p>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="
            group flex shrink-0 items-center gap-1.5
            rounded-md border-2 border-border
            bg-surface px-2.5 py-1.5
            text-xs font-black
            shadow-brutal-sm
            transition-all
            hover:translate-x-[1px]
            hover:translate-y-[1px]
            hover:shadow-none
            sm:px-3 sm:text-sm
          "
        >
          <span>بیشتر بدانید</span>

          <ArrowLeftIcon
            className="
              size-3.5
              transition-transform
              group-hover:-translate-x-0.5
            "
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}