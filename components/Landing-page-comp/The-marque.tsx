"use client";

import React from "react";
import TrustBadges from "./Last-images";
import {
  Landmark,
  Building2,
  Container,
  ShoppingBag,
  ScrollText,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  { name: "Education", icon: Landmark },
  { name: "Corporate", icon: Building2 },
  { name: "Industrial", icon: Container },
  { name: "Retail", icon: ShoppingBag },
  { name: "Publishing", icon: ScrollText },
  { name: "Enterprise", icon: Globe2 },
];

export default function IndustryTrustBar() {
  return (
    <>
      <section className="w-full bg-white py-12 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Built for Critical Sectors
              </h2>
              <p className="mt-2 lg:mt-3 text-gray-500 text-sm lg:text-lg font-light">
                Paper standards for the world's most demanding industries.
              </p>
            </div>
            
            {/* Decorative Line (PC Only) */}
            <div className="hidden md:block h-px flex-1 bg-gray-100 ml-8 mb-4 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-1 bg-blue-600"></div>
            </div>
          </div>

          {/* THE GRID */}
          {/* Mobile: 3 Cols (Dense) | PC: 6 Cols (Spacious) */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
            {industries.map((item, index) => (
              <div
                key={index}
                className="
                  group relative bg-white overflow-hidden hover:z-10 transition-all duration-300 cursor-pointer
                  
                  /* MOBILE STYLES: Compact, Centered, Small Text */
                  h-28 p-2 flex flex-col items-center justify-center gap-2
                  
                  /* PC STYLES: Taller, Left Aligned, Spaced out */
                  lg:h-52 lg:p-6 lg:block lg:justify-between
                "
              >
                {/* 1. Top Border Accent (Blue) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                
                {/* 2. Top Right Arrow (PC Only) */}
                <div className="hidden lg:block absolute top-4 right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600">
                    <ArrowUpRight size={20} strokeWidth={2} />
                </div>

                {/* 3. The Icon */}
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300 lg:mb-auto lg:pt-2">
                  <item.icon 
                    className="w-7 h-7 lg:w-9 lg:h-9" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* 4. The Text */}
                <div className="lg:absolute lg:bottom-6 lg:left-6">
                  <h3 className="text-[11px] lg:text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-blue-900 transition-colors duration-300 text-center lg:text-left">
                    {item.name}
                  </h3>
                  
                  {/* "View Solutions" Text (PC Only) */}
                  <p className="hidden lg:block text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Solutions
                  </p>
                </div>
                
                {/* Subtle Blue Glow (PC Only) */}
                <div className="hidden lg:block absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />
    </>
  );
}