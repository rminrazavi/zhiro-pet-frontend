import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "product-1",
    slug: "royal-canin-mini-adult",
    name: "غذای خشک سگ رویال کنین Mini Adult",
    animal: "dog",

    category: {
      id: "dog-food",
      name: "غذای سگ",
      slug: "dog-food",
    },

    brand: {
      id: "royal-canin",
      name: "Royal Canin",
      slug: "royal-canin",
    },

    image: {
      url: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop",
      alt: "غذای سگ",
    },

    price: {
      current: 1250000,
      original: 1500000,
    },

    rating: {
      value: 4.7,
      count: 118,
    },

    badges: [
      {
        id: "discount",
        type: "discount",
        label: "۲۰٪ تخفیف",
      },
      {
        id: "bestseller",
        type: "bestseller",
        label: "پرفروش",
      },
      {
        id: "new",
        type: "new",
        label: "جدید",
      },
    ],

    expiresAt: "2026-08-30T23:59:59Z",

    available: true,
  },

  {
    id: "product-2",
    slug: "cat-food",
    name: "غذای خشک گربه مخصوص گربه‌های بالغ",
    animal: "cat",

    category: {
      id: "cat-food",
      name: "غذای گربه",
      slug: "cat-food",
    },

    image: {
      url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&auto=format&fit=crop",
      alt: "گربه",
    },

    price: {
      current: 980000,
    },

    rating: {
      value: 4.5,
      count: 74,
    },

    badges: [
      {
        id: "new",
        type: "new",
        label: "جدید",
      },
    ],

    available: true,
  },

  {
    id: "product-3",
    slug: "bird-food",
    name: "غذای کامل پرندگان خانگی",
    animal: "bird",

    category: {
      id: "bird-food",
      name: "غذای پرندگان",
      slug: "bird-food",
    },

    image: {
      url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&auto=format&fit=crop",
      alt: "پرنده",
    },

    price: {
      current: 420000,
      original: 500000,
    },

    rating: {
      value: 4.8,
      count: 42,
    },

    badges: [
      {
        id: "discount",
        type: "discount",
        label: "تخفیف",
      },
    ],

    available: true,
  },
];
