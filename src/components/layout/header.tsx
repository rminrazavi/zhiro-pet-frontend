import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { AnnouncementBanner } from "./announcement-banner";
import { DesktopNavigation } from "./desktop-navigation/desktop-navigation";
import { Logo } from "./logo";
import { MobileHeader } from "./mobile-header";

function HeaderAction({
  label,
  children,
  badge,
  text,
}: {
  label: string;
  children: React.ReactNode;
  badge?: string;
  text?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="
        relative
        flex h-10 items-center gap-2
        rounded-lg
        border-2 border-border
        bg-surface
        px-2.5
        text-foreground
        shadow-brutal-sm
        transition-all
        hover:-translate-x-px
        hover:-translate-y-px
        hover:shadow-none
        active:translate-x-0
        active:translate-y-0
      "
    >
      {children}

      {text && (
        <span className="hidden text-sm font-bold lg:inline">
          {text}
        </span>
      )}

      {badge && (
        <span
          className="
            absolute -right-2 -top-2
            flex size-5 items-center justify-center
            rounded-full
            border-2 border-border
            bg-primary
            text-[10px]
            font-black
            leading-none
            text-foreground
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}

export function Header() {
  return (
    <header className="bg-transparent py-3">
      <AnnouncementBanner />

      <div className="container-page">
        <div
          className="
            relative
            rounded-xl
            border-2 border-border
            bg-surface
            shadow-brutal-lg
          "
        >
          {/* Desktop */}
          <div className="hidden h-[76px] items-center gap-5 px-5 md:flex">
            {/* Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Navigation */}
            <div className="min-w-0 flex-1 self-stretch">
              <DesktopNavigation />
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">
              <HeaderAction label="جستجو">
                <MagnifyingGlassIcon
                  className="size-[19px]"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </HeaderAction>

              <HeaderAction label="سبد خرید" badge="۳">
                <ShoppingCartIcon
                  className="size-[19px]"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </HeaderAction>

              <HeaderAction
                label="حساب کاربری"
                text="حساب کاربری"
              >
                <UserCircleIcon
                  className="size-[19px]"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </HeaderAction>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <MobileHeader />
          </div>
        </div>
      </div>
    </header>
  );
}