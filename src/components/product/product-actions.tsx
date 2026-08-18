"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { IconButton } from "@/components/ui/icon-button";

type ProductActionsProps = {
  productName: string;
};

export function ProductActions({ productName }: ProductActionsProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center gap-2">
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
        <Heart className="size-4" fill={liked ? "currentColor" : "none"} />
      </IconButton>

      <IconButton label={`افزودن ${productName} به سبد خرید`}>
        <ShoppingCart className="size-4" />
      </IconButton>
    </div>
  );
}
