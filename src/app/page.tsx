import { HeartIcon } from "@heroicons/react/24/outline";

import { HeroCarousel } from "@/components/home";
import { Header } from "@/components/layout/header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { ProductSection } from "@/components/product/product-section";
import { mockProducts } from "@/lib/mock-products";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pb-20 md:pb-0">
        <HeroCarousel />

        <ProductSection
          title="محصولات محبوب"
          products={mockProducts}
          href="/products"
          icon={<HeartIcon className="size-5" />}
        />
      </main>

      <MobileBottomNav />
    </>
  );
}
