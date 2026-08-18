import { Heart, PawPrint, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { SectionHeader } from "@/components/ui/section-header";

export default function Home() {
  return (
    <main className="py-10">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            icon={<PawPrint className="size-5" />}
            title="محصولات محبوب"
            href="/products"
          />

          <Card variant="brutal" className="p-6">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="mustard">جدید</Badge>
              <Badge variant="sage">پرفروش</Badge>
              <Badge variant="terracotta">۲۰٪ تخفیف</Badge>

              <div className="ms-auto flex gap-2">
                <IconButton label="افزودن به علاقه‌مندی‌ها">
                  <Heart className="size-5" />
                </IconButton>

                <IconButton label="مشاهده سبد خرید">
                  <ShoppingCart className="size-5" />
                </IconButton>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                افزودن به سبد
              </Button>

              <Button variant="secondary">مشاهده محصول</Button>

              <Button variant="outline">جزئیات</Button>

              <Button variant="ghost">لغو</Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
