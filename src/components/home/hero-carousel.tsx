"use client";

import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { HeroSlide } from "./hero-slide";

const AUTOPLAY_DELAY = 6000;

const toPersianNumber = (value: number) =>
  value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

const slides = [
  {
    id: 1,
    eyebrow: "پیشنهاد موپت",
    title: "برای دوست کوچولوت\nبهترین‌ها رو انتخاب کن",
    description:
      "محصولات منتخب حیوانات خانگی با کیفیتی که می‌تونی بهش اعتماد کنی.",
    cta: "مشاهده محصولات",
    accent: "primary" as const,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    eyebrow: "خرید هوشمندانه",
    title: "خریدی که\nپتت عاشقشه",
    description: "غذا، تشویقی و لوازم مورد نیاز پتت رو راحت پیدا کن.",
    cta: "شروع خرید",
    accent: "accent" as const,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    eyebrow: "تکرار خرید",
    title: "هر بار خرید،\nیک قدم بهتر",
    description: "محصولات مورد علاقه پتت رو دوباره سفارش بده.",
    cta: "مشاهده پیشنهادها",
    accent: "secondary" as const,
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((value) => value + 1);
  };

  return (
    <section className="container-page py-2 sm:py-4">
      <div
        className="
          relative
          overflow-hidden
          rounded-[var(--radius-hero)]
          border-2 border-border
          bg-surface
          shadow-brutal-lg
        "
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          speed={650}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={handleSlideChange}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Meta */}
        <div
          className="
            pointer-events-none
            absolute bottom-4 left-5 right-5 z-20
            flex items-center gap-3
            sm:left-8 sm:right-8
          "
        >
          {/* Counter */}
          <div
            dir="ltr"
            className="
              shrink-0
              rounded-md
              border-2 border-border
              bg-surface
              px-2.5 py-1
              font-mono
              text-xs font-black
              shadow-brutal-sm
            "
          >
            {toPersianNumber(activeIndex + 1)}

            <span className="mx-1 opacity-40">/</span>

            {toPersianNumber(slides.length)}
          </div>

          {/* Progress */}
          <div className="min-w-0 flex-1">
            <div
              key={progressKey}
              className="hero-progress"
              style={
                {
                  "--hero-duration": `${AUTOPLAY_DELAY}ms`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
