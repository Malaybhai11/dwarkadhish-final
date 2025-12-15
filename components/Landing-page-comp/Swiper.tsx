"use client";

/**
 * Premium Product Carousel Component - God Level Edition
 * 
 * A luxury product showcase carousel that displays exactly 5 products in a curved, overlapping fan arrangement.
 * Features glassmorphism design matching the website's aesthetic with enhanced depth,
 * premium animations, and cinematic transitions.
 * 
 * KEY FEATURES:
 * - All 5 products visible simultaneously in a fan-shaped arc
 * - Auto-rotates infinitely every 3.5 seconds (configurable)
 * - Cinematic spring-based animations via Framer Motion
 * - 3D depth simulation using rotateY, scale, and z-index
 * - Premium glassmorphism matching website design system
 * - Enhanced visual effects with subtle glows and overlays
 * - Product information: Image, Name, Description (3-4 lines), and Price
 * 
 * INDEX CALCULATION:
 * Each slide calculates its position relative to the activeIndex:
 * - offset = slideIndex - activeIndex (with wrapping for infinite loop)
 * - offset 0 → center (dominant)
 * - offset ±1 → left/right (secondary, scale 0.88, opacity 0.75)
 * - offset ±2 → farLeft/farRight (tertiary, scale 0.74, opacity 0.5)
 * 
 * VARIANT MAPPING LOGIC:
 * The getSlidePosition() function maps each slide's offset to a Framer Motion variant:
 * - center: x=0, scale=1, opacity=1, zIndex=50
 * - left/right: x=±220px, scale=0.88, opacity=0.75, zIndex=30
 * - farLeft/farRight: x=±380px, scale=0.74, opacity=0.5, zIndex=10
 * 
 * All variants include rotateY for 3D depth, rotateZ for curvature, and blur filters
 * to enhance the depth perception. Spring physics ensure smooth, cinematic transitions.
 */

import React, { useState, useEffect } from "react";
import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";

/* --- Type Definitions --- */
export interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface SwiperProps {
  products?: Product[];
  autoRotateInterval?: number;
}

/* --- Default Product Data (Placeholder - easily replaceable) --- */
const DEFAULT_PRODUCTS: Product[] = [
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    name: "Premium Notebooks",
    description: "High-quality notebooks with premium paper. Perfect for students and professionals. Available in multiple sizes and designs.",
    price: "₹299 - ₹899",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    name: "Custom Diaries",
    description: "Personalized diaries with custom covers. Premium binding and quality pages. Ideal for daily journaling and note-taking.",
    price: "₹499 - ₹1,299",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    name: "Writing Materials",
    description: "Complete range of pens, pencils, and markers. Smooth writing experience with durable construction. Perfect for offices and schools.",
    price: "₹199 - ₹599",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    name: "File Folders",
    description: "Organize documents with our premium file folders. Strong construction and multiple color options. Essential for office organization.",
    price: "₹149 - ₹399",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    name: "Paper Products",
    description: "High-grade printing papers and stationery items. Excellent quality for all printing needs. Trusted by institutions nationwide.",
    price: "₹249 - ₹799",
  },
];

/* --- Enhanced Framer Motion Variants for Fan-Shaped Product Carousel (Optimized) --- */
const slideVariants: Variants = {
  center: {
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    rotateZ: 0,
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
  left: {
    x: -240,
    y: 40,
    scale: 0.88,
    rotateY: 20,
    rotateZ: -3.5,
    opacity: 0.8,
    filter: "blur(1px)",
    zIndex: 30,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
  right: {
    x: 240,
    y: 40,
    scale: 0.88,
    rotateY: -20,
    rotateZ: 3.5,
    opacity: 0.8,
    filter: "blur(1px)",
    zIndex: 30,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
  farLeft: {
    x: -400,
    y: 80,
    scale: 0.74,
    rotateY: 32,
    rotateZ: -6,
    opacity: 0.6,
    filter: "blur(2px)",
    zIndex: 10,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
  farRight: {
    x: 400,
    y: 80,
    scale: 0.74,
    rotateY: -32,
    rotateZ: 6,
    opacity: 0.6,
    filter: "blur(2px)",
    zIndex: 10,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
};

/* --- Position Calculation Logic --- */
/**
 * Calculates the relative position of a slide based on its index and the active index.
 * 
 * The carousel has exactly 5 slides (indices 0-4). We use modulo arithmetic to create
 * an infinite loop. For each slide, we calculate its offset from the active slide:
 * 
 * - offset = 0: center position
 * - offset = 1 or -1: left/right positions (immediate neighbors)
 * - offset = 2 or -2: farLeft/farRight positions (outermost slides)
 * 
 * We handle wrapping: if activeIndex is 0 and slideIndex is 4, the offset is -1 (right neighbor).
 * Similarly, if activeIndex is 4 and slideIndex is 0, the offset is 1 (left neighbor).
 */
const getSlidePosition = (
  slideIndex: number,
  activeIndex: number,
  totalSlides: number
): "center" | "left" | "right" | "farLeft" | "farRight" => {
  // Calculate offset with wrapping
  let offset = slideIndex - activeIndex;
  
  // Handle wrapping: normalize offset to range [-2, 2]
  if (offset > totalSlides / 2) {
    offset -= totalSlides;
  } else if (offset < -totalSlides / 2) {
    offset += totalSlides;
  }

  // Map offset to variant name
  if (offset === 0) return "center";
  if (offset === 1 || offset === -1) {
    return offset === 1 ? "left" : "right";
  }
  return offset === 2 ? "farLeft" : "farRight";
};

/* --- Individual Product Slide Component with Enhanced Effects --- */
interface SlideProps {
  product: Product;
  index: number;
  position: "center" | "left" | "right" | "farLeft" | "farRight";
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ product, index, position, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return; // Only track mouse on active slide for performance
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), {
    stiffness: 200,
    damping: 25,
  });

  return (
    <motion.div
      className="absolute w-[420px] h-[560px] cursor-pointer"
      variants={slideVariants}
      animate={position}
      initial={false}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
    >
      {/* Enhanced Glass Card with Premium Effects */}
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden group"
        style={{
          rotateX: isActive && isHovered ? rotateX : 0,
          rotateY: isActive && isHovered ? rotateYSpring : 0,
        }}
      >
        {/* Main Glass Container - Enhanced Design */}
        <div className="relative w-full h-full backdrop-blur-md bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-white/25 rounded-3xl shadow-[0_25px_80px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col overflow-hidden">
          {/* Image Container - Medium Section (Main Focus) */}
          <div className="relative w-full h-[380px] overflow-hidden flex-shrink-0 rounded-t-3xl">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              draggable={false}
              loading="lazy"
              style={{
                willChange: "transform",
              }}
              animate={{
                scale: isActive && isHovered ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            
            {/* Subtle gradient overlay at bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            
            {/* Premium shine effect on active card */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* Product Information Section - Properly Sized Bottom Section */}
          <div className="relative bg-gradient-to-b from-slate-900/98 to-slate-900/95 backdrop-blur-sm px-6 pt-5 pb-6 flex flex-col gap-3 flex-1">
            {/* Product Name */}
            <h3 className="text-xl font-semibold text-white leading-tight">
              {product.name}
            </h3>

            {/* Product Description - Readable Size */}
            <p
              className="text-slate-300 text-sm leading-relaxed flex-1"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {product.description}
            </p>

            {/* Price Section - Prominent with proper spacing */}
            <div className="flex items-center justify-between pt-4 pb-1 border-t border-white/15">
              <span className="text-xs uppercase tracking-wider text-white/70 font-medium">Price</span>
              <span className="text-2xl font-bold text-white">
                {product.price}
              </span>
            </div>
          </div>

          {/* Enhanced Border with glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/25 pointer-events-none" />
          {isActive && (
            <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
          )}
          
          {/* Center Slide Special Glow - Optimized */}
          {isActive && (
            <motion.div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-white/8 via-transparent to-transparent blur-xl opacity-40 pointer-events-none"
              style={{ willChange: "opacity" }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* --- Main Swiper Component --- */
export default function Swiper({
  products = DEFAULT_PRODUCTS,
  autoRotateInterval = 3500,
}: SwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = products.length;

  // Ensure exactly 5 products
  if (totalSlides !== 5) {
    console.warn(
      `Swiper requires exactly 5 products, but received ${totalSlides}. Using first 5 products.`
    );
  }

  const displayProducts = products.slice(0, 5);

  // Auto-rotation logic - Optimized for performance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayProducts.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, displayProducts.length]);

  return (
    <section className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden pb-20">
      {/* Carousel Container with Enhanced 3D Perspective */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {displayProducts.map((product, index) => {
          const position = getSlidePosition(index, activeIndex, displayProducts.length);
          const isActive = position === "center";
          
          return (
            <Slide
              key={index}
              product={product}
              index={index}
              position={position}
              isActive={isActive}
            />
          );
        })}
      </div>

      {/* Premium Indicator Dots - Enhanced Design */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
        {displayProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="group relative"
            aria-label={`Go to product ${index + 1}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white w-12 shadow-[0_0_16px_rgba(255,255,255,0.6)]"
                  : "bg-white/40 w-2 hover:bg-white/60 hover:w-8"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {/* Enhanced glow effect for active dot */}
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full blur-lg opacity-60"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
