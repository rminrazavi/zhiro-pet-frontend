"use client";

import {
  Bars3Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useRef, useState } from "react";

import { MegaMenu } from "./mega-menu";
import { NavTrigger } from "./nav-trigger";
import { educationItems, serviceItems } from "./menu-data";
import { SimpleMenu } from "./simple-menu";

type OpenMenu = "categories" | "education" | "services" | null;

export function DesktopNavigation() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <nav
      ref={navigationRef}
      className="
        relative
        flex h-full
        items-center
        bg-surface
      "
    >
      {/* Categories */}
      <div className="relative flex h-full items-center">
        <NavTrigger
          label="دسته‌بندی‌ها"
          icon={<Bars3Icon className="size-[18px]" />}
          isOpen={openMenu === "categories"}
          onClick={() => toggleMenu("categories")}
        />

        {openMenu === "categories" && <MegaMenu />}
      </div>

      <div className="mx-1.5 h-6 w-px bg-border" />

      {/* Education */}
      <div className="relative flex h-full items-center">
        <NavTrigger
          label="آموزش"
          isOpen={openMenu === "education"}
          onClick={() => toggleMenu("education")}
        />

        {openMenu === "education" && (
          <SimpleMenu items={educationItems} />
        )}
      </div>

      {/* Services */}
      <div className="relative flex h-full items-center">
        <NavTrigger
          label="خدمات"
          isOpen={openMenu === "services"}
          onClick={() => toggleMenu("services")}
        />

        {openMenu === "services" && (
          <SimpleMenu items={serviceItems} />
        )}
      </div>

      {/* About */}
      <a
        href="/about"
        className="
          flex h-10 items-center
          rounded-lg
          px-3
          text-sm
          font-black
          text-foreground
          transition-colors
          hover:bg-surface-muted
        "
      >
        درباره ما
      </a>

      {/* AI Assistant */}
      <a
        href="#"
        className="
          mr-1
          flex h-10 items-center gap-1.5
          rounded-lg
          border-2 border-border
          bg-primary
          px-3.5
          text-sm
          font-black
          text-foreground
          shadow-brutal-sm
          transition-all
          hover:-translate-x-px
          hover:-translate-y-px
          hover:shadow-none
        "
      >
        <SparklesIcon className="size-4" />
        موپت‌یار
      </a>
    </nav>
  );
}