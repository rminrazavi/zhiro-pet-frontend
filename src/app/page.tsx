import { PawPrint } from "lucide-react";

import { ProductSection } from "@/components/product/product-section";
import { mockProducts } from "@/lib/mock-products";
import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { Header } from "@/components/layout/header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="pb-20 md:pb-0">
        <ProductSection
          title="محصولات محبوب"
          products={mockProducts}
          href="/products"
          icon={<PawPrint className="size-5" />}
        />
      </main>
      <MobileBottomNav />
    </>
  );
}
