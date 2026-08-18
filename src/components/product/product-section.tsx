import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

import type { Product } from "@/types/product";

import { ProductCarousel } from "./product-carousel";

type ProductSectionProps = {
  title: string;
  products: Product[];
  href?: string;
  icon?: ReactNode;
};

export function ProductSection({
  title,
  products,
  href,
  icon,
}: ProductSectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`product-section-${title}`} className="py-10">
      <Container>
        <SectionHeader title={title} href={href} icon={icon} />

        <div className="mt-6">
          <ProductCarousel products={products} />
        </div>
      </Container>
    </section>
  );
}
