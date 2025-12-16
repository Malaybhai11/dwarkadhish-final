"use client";
import React from "react";
import TrustBadges from "./Last-images";

import { useEffect, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Factory,
  Building2,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

/* ---------------------------------------
   DATA
--------------------------------------- */
const industries = [
  { name: "Education", icon: <GraduationCap size={18} /> },
  { name: "Corporate Offices", icon: <Briefcase size={18} /> },
  { name: "Manufacturing", icon: <Factory size={18} /> },
  { name: "Retail", icon: <ShoppingBag size={18} /> },
  { name: "Publishers", icon: <BookOpen size={18} /> },
  { name: "Enterprises", icon: <Building2 size={18} /> },
];

/* ---------------------------------------
   COMPONENT
--------------------------------------- */
export default function IndustryTrustBar() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let offset = 0;
    let rafId: number;

    const speed = 0.7; // lower = smoother, mobile-friendly

    const animate = () => {
      offset -= speed;
      marquee.style.transform = `translateX(${offset}px)`;

      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-white px-6 py-14">

        {/* Ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.9),transparent)] pointer-events-none" />

        {/* Glass base */}
        <div className="absolute inset-0 backdrop-blur-[28px] bg-white/70 border border-white/60 shadow-[0_40px_120px_rgba(0,0,0,0.08)] pointer-events-none" />

        {/* Inner highlight */}
        <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] pointer-events-none" />

        {/* Label */}
        <div className="relative z-10 text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">
            Trusted Across Industries
          </p>
        </div>

        {/* Marquee */}
        <div className="relative z-10 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center gap-10 whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-4 px-6 py-4 rounded-full backdrop-blur-[20px] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                {/* Sheen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Icon */}
                <div className="relative p-2.5 rounded-full backdrop-blur-[14px] bg-white border border-white/80  text-neutral-700 group-hover:scale-110 transition-transform duration-500">
                  {industry.icon}
                </div>

                {/* Text */}
                <span className="text-sm font-medium tracking-wide text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 " />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 " />
      </div>

      <section>
        <TrustBadges />
      </section>

      
    </section>

  
  );
}
