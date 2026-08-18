"use client";

import Link from "next/link";
import { Grid2X2, Home, Search, ShoppingCart, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/",
    label: "خانه",
    icon: Home,
  },
  {
    href: "/categories",
    label: "دسته‌ها",
    icon: Grid2X2,
  },
  {
    href: "/search",
    label: "جستجو",
    icon: Search,
  },
  {
    href: "/cart",
    label: "سبد",
    icon: ShoppingCart,
  },
  {
    href: "/account",
    label: "حساب",
    icon: UserRound,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ناوبری موبایل"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-background md:hidden bg-white"
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-bold transition-colors ${
                active
                  ? "text-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
