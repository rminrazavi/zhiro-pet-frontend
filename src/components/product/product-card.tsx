import Link from "next/link";

import { ProductActions } from "./product-actions";
import { ProductBadge } from "./product-badge";
import { ProductImage } from "./product-image";
import { ProductPrice } from "./product-price";
import { ProductRating } from "./product-rating";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const badges =
    product.badges?.filter((badge) => badge.type !== "expiration") ?? [];

  return (
    <article className="h-full">
      <div className="flex h-full flex-col rounded-2xl border-2 border-border bg-surface p-3 shadow-brutal">
        <div className="relative">
          <Link
            href={`/products/${product.slug}`}
            aria-label={`مشاهده ${product.name}`}
          >
            <ProductImage image={product.image} />
          </Link>

          {/* Product badges */}
          {badges.length > 0 ? (
            <div className="absolute start-2 top-2 z-10 flex max-w-[45%] flex-col items-start gap-1.5">
              {badges.map((badge) => (
                <ProductBadge key={badge.id} badge={badge} />
              ))}
            </div>
          ) : null}

          {/* Expiration */}
          {product.expiresAt ? (
            <div className="absolute end-2 top-2 z-10">
              <ProductBadge
                badge={{
                  id: "expiration",
                  type: "expiration",
                  label: formatExpirationDate(product.expiresAt),
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="space-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border"
          >
            <p className="text-xs font-bold text-foreground/60">
              {product.category.name}
            </p>

            <h3 className="line-clamp-2 min-h-11 text-sm font-black leading-6">
              {product.name}
            </h3>
          </Link>

          <div className="mt-3">
            <ProductRating rating={product.rating} />
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <ProductPrice price={product.price} />

            <ProductActions productName={product.name} />
          </div>
        </div>
      </div>
    </article>
  );
}

function formatExpirationDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "تاریخ نامعتبر";
  }

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(parsedDate);
}
