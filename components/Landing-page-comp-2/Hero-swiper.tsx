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

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Infinite loop fix
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
    <section className="relative w-full pt-[72px] sm:pt-[88px] bg-white">
      {/* ASPECT RATIO CONTAINER */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-slate-100">
        {/* SLIDER */}
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              : ""
          }`}
          style={{
            transform: `translateX(-${index * 100}%)`,
            willChange: "transform",
          }}
        >
          {extendedSlides.map((src, i) => (
            <div key={i} className="relative min-w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt="Hero banner"
                fill
                priority={i === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => setIndex((i) => i + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow"
        >
          <ChevronRight />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 backdrop-blur px-3 py-1.5 rounded-full">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index % slides.length
                  ? "bg-white scale-110"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
