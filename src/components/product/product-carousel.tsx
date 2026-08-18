import type { Product } from "@/types/product";

import { ProductCard } from "./product-card";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6" dir="rtl">
      <div className="flex snap-x snap-mandatory gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[calc(50vw-1.5rem)] min-w-[220px] max-w-[280px] shrink-0 snap-start sm:w-[280px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
