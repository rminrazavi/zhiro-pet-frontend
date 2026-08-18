import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      action="/search"
      className="mx-auto w-full max-w-xl bg-background"
      role="search"
    >
      <label className="relative block">
        <span className="sr-only">جستجوی محصولات</span>

        <Search
          className="pointer-events-none absolute end-4 top-1/2 size-5 -translate-y-1/2 text-foreground/50"
          aria-hidden="true"
        />

        <input
          type="search"
          name="q"
          placeholder="جستجوی محصول، برند یا دسته‌بندی..."
          className="h-11 w-full rounded-xl border-2 border-border bg-background px-4 pe-12 text-sm font-medium outline-none transition-shadow placeholder:text-foreground/40 focus:shadow-brutal-sm bg-black"
        />
      </label>
    </form>
  );
}
