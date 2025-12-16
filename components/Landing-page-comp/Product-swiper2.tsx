"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

/* ---------------- DATA ---------------- */
const products = [
  {
    id: 1,
    category: "Navneet Youva",
    title: "Spiral Long Book | A4 Size | Unruled | 200 Pages",
    price: "₹ 243.00",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
  {
    id: 2,
    category: "Navneet Youva",
    title: "Spiral Long Book | Concept Car Edition | Single Line",
    price: "₹ 243.00",
    image: "https://images.unsplash.com/photo-1598620617377-3bfb505b4384?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
  {
    id: 3,
    category: "YOUVA",
    title: "Soft Bound Long Book | Rainbow Pack of 2",
    price: "₹ 194.00",
    image: "https://images.unsplash.com/photo-1531346878377-a51e195e8e9a?auto=format&fit=crop&q=80&w=400&h=500",
    badge: "SOLD OUT",
  },
  {
    id: 4,
    category: "YOUVA",
    title: "Unruled Trendy Series Long Book | Pack of 2",
    price: "₹ 126.00",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
  {
    id: 5,
    category: "Classmate",
    title: "Physics Practical Record | Hard Bound",
    price: "₹ 150.00",
    image: "https://images.unsplash.com/photo-1586075010923-2dd45eeed875?auto=format&fit=crop&q=80&w=400&h=500",
    badge: "NEW",
  },
  {
    id: 6,
    category: "Papergrid",
    title: "Notebook - 400 Pages | Single Line | Red",
    price: "₹ 310.00",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
  {
    id: 7,
    category: "Sundaram",
    title: "Drawing Book A3 Size | 50 Pages",
    price: "₹ 85.00",
    image: "https://images.unsplash.com/photo-1629196911514-cfd8d628b485?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
  {
    id: 8,
    category: "Luxor",
    title: "5 Subject Spiral Notebook | B5 Size",
    price: "₹ 450.00",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400&h=500",
    badge: null,
  },
];

export default function ProductSlider2() {
  /* ---------------- STATE ---------------- */
  const extendedProducts = [...products, ...products.slice(0, 4)];

  const [cardsToShow, setCardsToShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(products.length); // IMPORTANT
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  /* ---------------- RESPONSIVE ---------------- */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------------- RIGHT DIRECTION LOGIC ---------------- */
  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1); // 👉 RIGHT
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  /* ---------------- INFINITE LOOP ---------------- */
  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(products.length);
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  };

  /* ---------------- AUTOPLAY ---------------- */
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  /* ---------------- TOUCH ---------------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!touchStart || !touchEnd) return;

    const dist = touchStart - touchEnd;
    if (dist > 50) prevSlide();
    if (dist < -50) nextSlide();

    setTouchStart(0);
    setTouchEnd(0);
  };

  /* ---------------- UI ---------------- */
  return (
  /* FULL-WIDTH WHITE BACKGROUND */
  <section className="w-full bg-white py-10">
    {/* CONSTRAINED CONTENT */}
    <div className="w-full max-w-7xl mx-auto px-4">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white shadow-xl rounded-full p-3 hidden md:flex opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white shadow-xl rounded-full p-3 hidden md:flex opacity-0 group-hover:opacity-100"
        >
          <ChevronRight />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full pb-8">
          <div
            className="flex"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
              transition: isTransitioning ? "transform 600ms ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="bg-white rounded-xl border p-3 hover:shadow-2xl transition-all">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      draggable={false}
                    />
                    <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow">
                      <ShoppingCart size={16} />
                    </button>
                  </div>

                  <p className="text-xs text-gray-400">{product.category}</p>
                  <h3 className="text-sm font-bold mb-2 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-extrabold">
                      {product.price}
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center space-x-2 md:hidden">
          {products.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full ${
                currentIndex % products.length === idx
                  ? "w-6 bg-black"
                  : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
  
);
}