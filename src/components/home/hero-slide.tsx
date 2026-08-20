import Image from "next/image";
import { HeroContent } from "./hero-content";

type HeroSlideProps = {
  slide: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    accent: "primary" | "accent" | "secondary";
    image: string;
  };
};

const accentClasses = {
  primary: "bg-primary/30",
  accent: "bg-accent/30",
  secondary: "bg-secondary/30",
};

export function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <article
      className="
        relative
        min-h-[540px]
        w-full
        overflow-hidden
        bg-surface
        sm:min-h-[440px]
      "
    >
      {/* Pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.06]
          [background-image:radial-gradient(var(--brand-border)_1.5px,transparent_1.5px)]
          [background-size:18px_18px]
        "
      />

      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          size-48
          rounded-full
          border-2
          border-border
          bg-primary/20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          right-[30%]
          size-56
          rounded-full
          border-2
          border-border
          bg-accent/15
        "
      />

      {/* Main layout */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[540px]
          max-w-[1200px]
          flex-col
          px-6
          py-8
          sm:min-h-[440px]
          sm:px-10
          sm:py-10
          md:flex-row
          md:items-center
          md:px-12
          lg:px-16
        "
      >
        {/* Illustration */}
        <div
          className="
            relative
            order-1
            mx-auto
            flex
            size-[210px]
            shrink-0
            items-center
            justify-center
            sm:size-[230px]
            md:order-2
            md:mr-auto
            md:ml-0
            md:size-[310px]
            lg:size-[350px]
          "
        >
          {/* Main illustration circle */}
          <div
            aria-hidden="true"
            className={`
              absolute
              inset-0
              rounded-full
              border-2
              border-border
              ${accentClasses[slide.accent]}
              shadow-brutal-lg
            `}
          />

          {/* Inner circle */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-[9%]
              rounded-full
              border-2
              border-border
              bg-white/60
            "
          />

          {/* Image */}
          <div
            className="
              relative
              z-10
              size-[175px]
              sm:size-[195px]
              md:size-[260px]
              lg:size-[295px]
            "
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority
              sizes="295px"
              className="
    object-contain
  "
            />
          </div>

          {/* Decorative square */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[7%]
              right-[3%]
              z-20
              size-8
              rotate-12
              rounded-md
              border-2
              border-border
              bg-white
              shadow-brutal-sm
              sm:size-10
            "
          />

          {/* Decorative dot */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[2%]
              top-[15%]
              z-20
              size-5
              rounded-full
              border-2
              border-border
              bg-accent
              sm:size-7
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            relative
            z-20
            order-2
            mt-5
            text-right
            md:order-1
            md:mt-0
            md:max-w-[52%]
          "
        >
          <HeroContent
            eyebrow={slide.eyebrow}
            title={slide.title}
            description={slide.description}
            cta={slide.cta}
            accent={slide.accent}
          />
        </div>
      </div>
    </article>
  );
}
