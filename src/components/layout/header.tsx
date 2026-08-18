import { Bell, Heart, Search, ShoppingCart, UserRound } from "lucide-react";

import { DesktopNavigation } from "./desktop-navigation";
import { Logo } from "./logo";

const CONTAINER = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-4";

function HeaderAction({
  label,
  children,
  badge,
}: {
  label: string;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative flex size-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted"
    >
      {children}

      {badge && (
        <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full border-2 border-white bg-primary text-[9px] font-black leading-none text-primary-foreground">
          {badge}
        </span>
      )}
    </button>
  );
}

export function Header() {
  return (
    <header className="border-b-2 border-border bg-white">
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Row 1 */}
        <div className={`${CONTAINER} flex items-center gap-6 py-4`}>
          {/* Logo */}
          <Logo />

          {/* Search */}
          <div className="flex-1">
            <div className="mx-auto max-w-[560px]">
              <div className="flex h-11 overflow-hidden rounded-xl border-2 border-border bg-white shadow-brutal-sm">
                <input
                  type="search"
                  placeholder="جستجو در محصولات، برندها و دسته‌بندی‌ها..."
                  className="min-w-0 flex-1 bg-[#FFF4DF] px-4 text-right text-sm outline-none placeholder:text-foreground/40"
                  aria-label="جستجو"
                />

                <button
                  type="button"
                  aria-label="جستجو"
                  className="flex w-12 shrink-0 items-center justify-center border-s-2 border-border bg-[#d96b3b] text-black transition-colors hover:bg-[#d96a3bc4]"
                >
                  <Search
                    className="size-[18px]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1">
            <HeaderAction label="اعلان‌ها">
              <Bell className="size-[19px]" strokeWidth={2} />
            </HeaderAction>

            <HeaderAction label="علاقه‌مندی‌ها">
              <Heart className="size-[19px]" strokeWidth={2} />
            </HeaderAction>

            <HeaderAction label="سبد خرید" badge="۳">
              <ShoppingCart className="size-[19px]" strokeWidth={2} />
            </HeaderAction>

            <HeaderAction label="حساب کاربری">
              <UserRound className="size-[19px]" strokeWidth={2} />
            </HeaderAction>
          </div>
        </div>

        {/* Row 2 */}
        <DesktopNavigation />
      </div>

      {/* Mobile — Logo ONLY */}
      <div className="md:hidden">
        <div className={`${CONTAINER} flex items-center justify-center py-3`}>
          <Logo />
        </div>
      </div>
    </header>
  );
}
