"use client";

import { BellIcon, GiftIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    if (mediaQuery.matches) {
      const previousOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Notification button */}
      <button
        type="button"
        aria-label="اعلان‌ها"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="
          relative flex size-9 items-center justify-center
          text-foreground
          transition-transform
          active:scale-95
        "
      >
        <BellIcon className="size-[20px]" strokeWidth={2} aria-hidden="true" />

        <span
          className="
            absolute -right-0.5 -top-0.5
            flex size-4 items-center justify-center
            rounded-full
            bg-accent
            text-[8px] font-black
          "
        >
          1
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="بستن اعلان‌ها"
            onClick={() => setOpen(false)}
            className="
              fixed inset-0 z-40
              cursor-default
              bg-black/30
              backdrop-blur-[2px]
              animate-in fade-in duration-200
              md:bg-black/10
              md:backdrop-blur-0
            "
          />

          {/* Mobile Bottom Sheet */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="اعلان‌ها"
            className="
              fixed inset-x-0 bottom-0 z-50
              md:hidden
              rounded-t-[24px]
              border-2 border-b-0 border-border
              bg-surface
              px-4 pt-3
              pb-[calc(6rem+env(safe-area-inset-bottom))]
              shadow-[0_-8px_30px_rgba(0,0,0,0.12)]
              animate-in
              slide-in-from-bottom
              duration-300
              ease-out
            "
          >
            {/* Handle */}
            <div className="mb-4 flex justify-center">
              <span className="h-1 w-10 rounded-full bg-border/40" />
            </div>

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-black">اعلان‌ها</h3>

              <button
                type="button"
                aria-label="بستن"
                onClick={() => setOpen(false)}
                className="
                  flex size-8 items-center justify-center
                  rounded-lg
                  text-muted
                  transition-all
                  hover:bg-surface-muted
                  active:scale-95
                "
              >
                <XMarkIcon
                  className="size-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </div>

            <NotificationItem />
          </div>

          {/* Desktop Dropdown */}
          <div
            role="dialog"
            aria-modal="false"
            aria-label="اعلان‌ها"
            className="
              absolute left-1/2 top-[calc(100%+12px)] z-50
              hidden w-[360px]
              -translate-x-1/2
              rounded-xl
              border-2 border-border
              bg-surface
              p-4
              shadow-brutal
              animate-in
              fade-in
              zoom-in-95
              duration-150
              md:block
            "
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black">اعلان‌ها</h3>

              <button
                type="button"
                aria-label="بستن"
                onClick={() => setOpen(false)}
                className="
                  flex size-7 items-center justify-center
                  rounded-md
                  text-muted
                  transition-colors
                  hover:bg-surface-muted
                "
              >
                <XMarkIcon
                  className="size-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </div>

            <NotificationItem />
          </div>
        </>
      )}
    </div>
  );
}

/* --------------------------------
   Notification Item
-------------------------------- */

function NotificationItem() {
  return (
    <div
      className="
        flex items-start gap-3
        rounded-xl
        border border-border/40
        bg-surface-muted/40
        p-3
      "
    >
      <span
        className="
          flex size-10 shrink-0
          items-center justify-center
          rounded-lg
          border-2 border-border
          bg-primary
        "
      >
        <GiftIcon className="size-[18px]" strokeWidth={2} aria-hidden="true" />
      </span>

      <div className="min-w-0 pt-0.5">
        <p className="text-xs font-black">تخفیف خرید بعدی پتت</p>

        <p className="mt-1 text-[11px] leading-5 text-muted">
          با تکرار خرید، ۱۰٪ تخفیف دریافت کن.
        </p>

        <span className="mt-1 block text-[9px] font-medium text-muted">
          همین الان
        </span>
      </div>
    </div>
  );
}
