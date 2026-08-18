import type { ProductPrice as ProductPriceData } from "@/types/product";

type ProductPriceProps = {
  price: ProductPriceData;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className="space-y-1">
      {price.original && price.original > price.current ? (
        <div className="text-xs text-foreground/50 line-through">
          {formatPrice(price.original)}
        </div>
      ) : null}

      <div className="flex items-baseline gap-1">
        <span className="text-lg font-black">{formatPrice(price.current)}</span>

        <span className="text-xs font-bold text-foreground/60">
          {price.currency ?? "تومان"}
        </span>
      </div>
    </div>
  );
}
