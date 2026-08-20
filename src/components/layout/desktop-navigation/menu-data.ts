import {
  BirdIcon,
  CatIcon,
  DogIcon,
  RabbitIcon,
} from "./animal-icons";

export const animals = [
  {
    label: "سگ",
    icon: DogIcon,
    categories: [
      "غذای خشک",
      "غذای مرطوب",
      "تشویقی",
      "بهداشت و مراقبت",
      "اسباب‌بازی",
      "لوازم و اکسسوری",
    ],
  },
  {
    label: "گربه",
    icon: CatIcon,
    categories: [
      "غذای خشک",
      "غذای مرطوب",
      "تشویقی",
      "خاک گربه",
      "بهداشت و مراقبت",
      "اسباب‌بازی",
    ],
  },
  {
    label: "پرندگان",
    icon: BirdIcon,
    categories: ["غذا", "قفس", "لوازم", "بهداشت"],
  },
  {
    label: "جوندگان",
    icon: RabbitIcon,
    categories: [
      "غذا",
      "قفس و لانه",
      "لوازم",
      "بهداشت",
    ],
  },
];

export const brands = [
  "Royal Canin",
  "Hill's",
  "Purina",
  "Josera",
  "Brit",
  "Reflex",
];

export const educationItems = [
  "راهنمای نگهداری سگ",
  "راهنمای نگهداری گربه",
  "تغذیه پت",
  "بهداشت و مراقبت",
  "سلامت پت",
  "مجله موپت",
];

export const serviceItems = [
  "مشاوره تخصصی",
  "خدمات دامپزشکی",
  "آرایش و شستشو",
  "خدمات پت",
  "سایر خدمات",
];