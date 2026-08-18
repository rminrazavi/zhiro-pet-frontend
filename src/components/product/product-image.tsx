import Image from "next/image";

import type { ProductImage as ProductImageData } from "@/types/product";

type ProductImageProps = {
  image: ProductImageData;
};

export function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-border bg-surface-muted">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
