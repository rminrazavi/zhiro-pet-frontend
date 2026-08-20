"use client";

import {
  HeartIcon as HeartOutlineIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

import { IconButton } from "@/components/ui/icon-button";

type ProductActionsProps = {
  productName: string;
};

export function ProductActions({
  productName,
}: ProductActionsProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {/* Wishlist */}
      <IconButton
        label={
          liked
            ? `حذف ${productName} از علاقه‌مندی‌ها`
            : `افزودن ${productName} به علاقه‌مندی‌ها`
        }
        aria-pressed={liked}
        onClick={() => setLiked((value) => !value)}
        className={liked ? "bg-pink" : undefined}
      >
        {liked ? (
          <HeartSolidIcon
            className="size-4"
            aria-hidden="true"
          />
        ) : (
          <HeartOutlineIcon
            className="size-4"
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </IconButton>

      {/* Add to cart */}
      <IconButton
        label={`افزودن ${productName} به سبد خرید`}
      >
        <ShoppingCartIcon
          className="size-4"
          strokeWidth={2}
          aria-hidden="true"
        />
      </IconButton>
    </div>
  );
}
