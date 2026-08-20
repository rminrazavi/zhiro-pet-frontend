"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HomeIcon,
  Squares2X2Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeSolidIcon,
  Squares2X2Icon as Squares2X2SolidIcon,
  MagnifyingGlassIcon as MagnifyingGlassSolidIcon,
  ShoppingCartIcon as ShoppingCartSolidIcon,
  UserIcon as UserSolidIcon,
} from "@heroicons/react/24/solid";

const items = [
  {
    href: "/",
    label: "خانه",
    outline: HomeIcon,
    solid: HomeSolidIcon,
  },
  {
    href: "/categories",
    label: "دسته‌ها",
    outline: Squares2X2Icon,
    solid: Squares2X2SolidIcon,
  },
  {
    href: "/search",
    label: "جستجو",
    outline: MagnifyingGlassIcon,
    solid: MagnifyingGlassSolidIcon,
  },
  {
    href: "/cart",
    label: "سبد خرید",
    outline: ShoppingCartIcon,
    solid: ShoppingCartSolidIcon,
    badge: "۳",
  },
  {
    href: "/account",
    label: "حساب",
    outline: UserIcon,
    solid: UserSolidIcon,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ناوبری موبایل"
      className="
        fixed inset-x-0 bottom-0 z-50
        border-t-2 border-border
        bg-white
        pb-[env(safe-area-inset-bottom)]
        md:hidden
      "
    >
      <div className="flex h-16 w-full">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          const Icon = active ? item.solid : item.outline;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className="
                relative
                flex min-w-0 flex-1
                items-center justify-center
                active:opacity-70
              "
            >
              <span
                className={`
                  flex flex-col
                  items-center justify-center
                  gap-1
                  leading-none
                  ${active ? "text-primary" : "text-muted"}
                `}
              >
                <span className="relative flex items-center justify-center">
                  <Icon className="size-[21px]" />

                  {item.badge && (
                    <span
                      className="
                        absolute
                        -right-2.5 -top-2
                        flex size-[17px]
                        items-center justify-center
                        rounded-full
                        border-2 border-white
                        bg-accent
                        text-[8px]
                        font-black
                        leading-none
                        text-black
                      "
                    >
                      {item.badge}
                    </span>
                  )}
                </span>

                <span
                  className={`
                    text-[10px]
                    ${active ? "font-bold" : "font-medium"}
                  `}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
