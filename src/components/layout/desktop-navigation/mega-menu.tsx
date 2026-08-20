import {
  ArrowLeftIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { animals, brands } from "./menu-data";

export function MegaMenu() {
  return (
    <div
      role="menu"
      className="
        absolute right-0 top-full z-[100]
        w-[780px]
        overflow-hidden
        rounded-xl
        border-2 border-border
        bg-surface
        shadow-brutal-lg
      "
    >
      <div className="grid grid-cols-[1fr_220px]">
        {/* Animals */}
        <div className="p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-black text-foreground">
                خرید بر اساس حیوان
              </h3>

              <p className="mt-1 text-xs text-muted">
                همه چیز برای دوست کوچولوی شما
              </p>
            </div>

            <span
              className="
                flex size-9 items-center justify-center
                rounded-lg
                border-2 border-border
                bg-primary
                shadow-brutal-sm
              "
            >
              <HeartIcon className="size-5" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {animals.map((animal) => {
              const Icon = animal.icon;

              return (
                <div
                  key={animal.label}
                  className="
                    rounded-lg
                    border-2 border-border
                    bg-background
                    p-3
                    transition-transform
                    hover:-translate-y-0.5
                  "
                >
                  <a
                    href="#"
                    className="mb-2 flex items-center gap-2"
                  >
                    <span
                      className="
                        flex size-8 items-center justify-center
                        rounded-md
                        border-2 border-border
                        bg-primary
                      "
                    >
                      <Icon className="size-4" />
                    </span>

                    <span className="font-black text-foreground">
                      {animal.label}
                    </span>
                  </a>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {animal.categories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="
                          rounded-md
                          px-1.5 py-1
                          text-xs
                          font-medium
                          text-muted
                          transition-colors
                          hover:bg-primary
                          hover:text-foreground
                        "
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brands */}
        <aside className="border-r-2 border-border bg-surface-muted p-5">
          <div className="mb-4 flex items-center gap-2">
            <span
              className="
                flex size-8 items-center justify-center
                rounded-md
                border-2 border-border
                bg-primary
              "
            >
              <SparklesIcon className="size-4" />
            </span>

            <h3 className="font-black text-foreground">
              برندهای محبوب
            </h3>
          </div>

          <div className="space-y-1.5">
            {brands.map((brand) => (
              <a
                key={brand}
                href="#"
                className="
                  flex items-center justify-between
                  rounded-md
                  border-2 border-transparent
                  px-3 py-2
                  text-sm
                  font-bold
                  text-foreground
                  transition-colors
                  hover:border-border
                  hover:bg-primary
                "
              >
                <span>{brand}</span>

                <ArrowLeftIcon className="size-3.5" />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="
              mt-5 flex items-center justify-center
              rounded-lg
              border-2 border-border
              bg-foreground
              px-3 py-2
              text-xs
              font-black
              text-white
              shadow-brutal-sm
              transition-all
              hover:-translate-x-px
              hover:-translate-y-px
              hover:shadow-none
            "
          >
            مشاهده همه برندها
          </a>
        </aside>
      </div>
    </div>
  );
}