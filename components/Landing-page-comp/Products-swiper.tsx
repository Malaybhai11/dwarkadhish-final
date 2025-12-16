"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// 1. Dummy Data
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

export default function ProductSlider(){
  // We clone the first 4 items to create an infinite loop illusion
  // So the array becomes [1,2,3,4,5,6,7,8, 1,2,3,4]
  const [extendedProducts] = useState([...products, ...products.slice(0, 4)]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Touch state for swiping
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Update cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) setCardsToShow(1);      // Mobile: 1 card
      else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet: 2 cards
      else setCardsToShow(4);                               // Desktop: 4 cards
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // --- Navigation Logic ---

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return;
    
    setCurrentIndex((prev) => {
      // If we are at the end of the real list, we move into the "cloned" items
      return prev + 1;
    });
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) return;

    setCurrentIndex((prev) => {
      if (prev === 0) return products.length - 1; 
      return prev - 1;
    });
  }, [isTransitioning]);

  // --- Infinite Loop Magic ---
  // When the transition ends, if we are in the "cloned" zone, reset to index 0 instantly
  const handleTransitionEnd = () => {
    if (currentIndex >= products.length) {
      setIsTransitioning(false); // Turn off animation
      setCurrentIndex(0);        // Jump to real 0
      // Force a reflow/repaint so the browser accepts the jump, then turn anim back on
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  // --- Auto Play (3 Seconds) ---
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // --- Swipe Logic (Mobile Best) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovered(true); // Pause auto-slide while touching
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      if (currentIndex === 0) {
        // Optional: Handle pulling at start, but for now simple prev
        prevSlide();
      } else {
        prevSlide();
      }
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };
return (
  <section className="w-full bg-white py-10">
    <div className="max-w-7xl mx-auto px-4">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
          Our Products
        </h2>
       
      </div>

      {/* Main Slider Area */}
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white border border-gray-100 shadow-xl rounded-full p-3 text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white border border-gray-100 shadow-xl rounded-full p-3 text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full pb-8">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: isTransitioning
                ? "transform 500ms ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="bg-white rounded-xl border border-gray-100 p-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group/card">
                  
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      draggable={false}
                    />

                    {product.badge && (
                      <span
                        className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 text-white rounded shadow-sm ${
                          product.badge === "SOLD OUT"
                            ? "bg-rose-500"
                            : "bg-emerald-500"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <button className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-lg translate-y-10 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      <ShoppingCart size={16} />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-grow">
                    <p className="text-xs font-medium text-gray-400 mb-1 tracking-wide">
                      {product.category}
                    </p>

                    <h3 className="text-sm font-bold text-gray-800 leading-tight mb-2 line-clamp-2 min-h-[2.5em]">
                      {product.title}
                    </h3>

                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-3 h-3 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[10px] text-gray-400 ml-1">(12)</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
                      <span className="text-lg font-extrabold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {products.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
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