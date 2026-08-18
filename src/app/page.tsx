import { PawPrint } from "lucide-react";

import { ProductSection } from "@/components/product/product-section";
import { mockProducts } from "@/lib/mock-products";

export default function Home() {
  return (
    <main>
      <ProductSection
        title="محصولات محبوب"
        products={mockProducts}
        href="/products"
        icon={<PawPrint className="size-5" />}
      />
    </main>
  );
}
