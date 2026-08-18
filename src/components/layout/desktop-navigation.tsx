"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CONTAINER = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-4";

const navigationItems = [
  {
    label: "سگ",
    items: ["غذای خشک", "غذای مرطوب", "تنقلات", "بهداشت", "لوازم"],
  },
  {
    label: "گربه",
    items: ["غذای خشک", "غذای مرطوب", "خاک", "بهداشت", "لوازم"],
  },
  {
    label: "پرندگان",
    items: ["غذا", "قفس", "لوازم", "بهداشت"],
  },
];

const simpleItems = ["لوازم و اکسسوری", "بهداشت و مراقبت", "جوندگان"];

export function DesktopNavigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="border-t border-border/50 bg-white">
      <div className={`${CONTAINER} flex items-center gap-1`}>
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-t-xl px-4 py-3 text-sm font-bold transition-colors hover:text-primary"
              aria-expanded={openMenu === item.label}
            >
              {item.label}

              <ChevronDown
                className={`size-4 transition-transform ${
                  openMenu === item.label ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === item.label && (
              <div className="absolute right-0 top-full z-50 min-w-56 rounded-2xl border-2 border-border bg-background p-4 shadow-brutal">
                <ul className="space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <a
                        href="#"
                        className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="mx-2 h-5 w-px bg-border/50" />

        {simpleItems.map((item) => (
          <a
            key={item}
            href="#"
            className="rounded-xl px-4 py-3 text-sm font-bold transition-colors hover:text-primary"
          >
            {item}
          </a>
        ))}

        <a
          href="#"
          className="mr-auto my-1.5 rounded-xl border-2 border-border bg-accent px-4 py-2 text-sm font-black text-foreground shadow-brutal-sm"
        >
          تخفیف‌ها 🔥
        </a>
      </div>
    </div>
  );
}
