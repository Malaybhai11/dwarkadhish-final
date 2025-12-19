"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/Hero-images/Customization-Options.jpg",
  "/Hero-images/what-we-make.jpg",
  "/Hero-images/How-we-make.jpg",
  "/Hero-images/delivery-products.jpg",
];

const extendedSlides = [...slides, slides[0]];

export default function HeroSwiper() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      const t1 = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 900);

      const t2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 950);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [index]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden  top-22">
      <div
        className={`flex h-full ${
          isTransitioning
            ? "transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
            : ""
        }`}
        style={{
          transform: `translateX(calc(-${index * 100}% - ${index * 0.5}%))`,
          willChange: "transform",
        }}
      >
        {extendedSlides.map((src, i) => (
          <div key={i} className="relative min-w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{
                transform: `translateX(${index * -2}px)`,
                willChange: "transform",
              }}
            >
              <Image
                src={src}
                alt="Hero image"
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white/80"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setIndex((i) => i + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white/80"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index % slides.length ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
