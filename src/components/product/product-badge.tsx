import { Badge } from "@/components/ui/badge";

import type { ProductBadge as ProductBadgeData } from "@/types/product";

type ProductBadgeProps = {
  badge: ProductBadgeData;
};

const variants = {
  bestseller: "terracotta",
  new: "sage",
  discount: "mustard",
  featured: "pink",
  expiration: "terracotta",
} as const;

export function ProductBadge({ badge }: ProductBadgeProps) {
  return <Badge variant={variants[badge.type]}>{badge.label}</Badge>;
}
