"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/banners/banner-1.png",
  "/banners/banner-2.jpg",
  "/banners/banner-3.jpg",
];

const fadeVariants = {
  initial: { opacity: 0, scale: 1.02 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function BannerSwiper() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % banners.length);
  const prev = () => setIndex((i) => (i - 1 + banners.length) % banners.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-10 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative aspect-[3.5/1] md:aspect-[4/1] rounded-lg overflow-hidden bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={banners[index]}
                alt="Banner"
                fill
                priority
                className="object-cover bg-white"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
