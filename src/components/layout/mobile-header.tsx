"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";

import { Logo } from "./logo";
import { NotificationDropdown } from "./notification-dropdown";

export function MobileHeader() {
  const isAuthenticated = false;

  return (
    <header className="md:hidden">
      <div className="container-page">
        <div className="flex flex-col py-3">
          {/* Row 1 — Centered Logo */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Row 2 — Actions */}
          <div className="mt-3 flex items-center justify-between border-t border-border/10 pt-3">
            {/* Profile */}
            <button
              type="button"
              aria-label={
                isAuthenticated ? "حساب کاربری" : "ورود یا ثبت‌نام"
              }
              className="
                flex items-center gap-2
                text-right
                active:opacity-70
              "
            >
              <span
                className="
                  flex size-9 shrink-0
                  items-center justify-center
                  rounded-full
                  border-2 border-border
                  bg-primary
                "
              >
                <UserCircleIcon
                  className="size-[19px]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-xs font-black leading-5">
                  {isAuthenticated ? "سلام آرمین" : "خوش اومدی"}
                </span>

                <span className="text-[10px] font-medium text-muted">
                  {isAuthenticated
                    ? "خوش اومدی به موپت"
                    : "برای ورود ضربه بزن"}
                </span>
              </span>
            </button>

            {/* Notification */}
            <div className="relative shrink-0">
              <NotificationDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}