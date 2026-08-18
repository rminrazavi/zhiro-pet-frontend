export type AnimalType = "dog" | "cat" | "bird";

export type ProductBadgeType =
  | "bestseller"
  | "new"
  | "discount"
  | "featured"
  | "expiration";

export type ProductImage = {
  url: string;
  alt: string;
};

export type ProductPrice = {
  current: number;
  original?: number;
  currency?: string;
};

export type ProductRating = {
  value: number;
  count: number;
};

export type ProductBadge = {
  id: string;
  type: ProductBadgeType;
  label: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;

  animal: AnimalType;

  category: {
    id: string;
    name: string;
    slug: string;
  };

  brand?: {
    id: string;
    name: string;
    slug: string;
  };

  image: ProductImage;

  price: ProductPrice;

  rating?: ProductRating;

  badges?: ProductBadge[];

  /**
   * Gregorian expiration date/time.
   * ISO 8601 format.
   *
   * Example:
   * 2026-08-30T23:59:59Z
   */
  expiresAt?: string;

  available: boolean;
};
