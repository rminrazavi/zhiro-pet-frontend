import { Star } from "lucide-react";

import type { ProductRating as ProductRatingData } from "@/types/product";

type ProductRatingProps = {
  rating?: ProductRatingData;
};

export function ProductRating({ rating }: ProductRatingProps) {
  if (!rating) return null;

  const rounded = Math.round(rating.value);

  return (
    <div
      className="flex items-center gap-1.5 text-xs"
      aria-label={`امتیاز ${rating.value} از 5، ${rating.count} نظر`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < rounded
                ? "size-3.5 fill-accent text-accent"
                : "size-3.5 text-border"
            }
          />
        ))}
      </div>

      <span className="text-foreground/60">({rating.count})</span>
    </div>
  );
}
