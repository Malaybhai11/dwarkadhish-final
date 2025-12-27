"use client";

import React, { useState, useMemo, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Gift,
  Briefcase,
  Heart,
  Smartphone,
  Trophy,
  Check,
  ArrowRight,
  CreditCard,
  Tag,
  ShieldCheck,
} from "lucide-react";

/* =======================
   TYPES
======================= */

interface CategoryData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image?: string;
  imagePlaceholderText: string;
  bullets: string[];
  ctaLabel: string;
  meta: string;
}

/* =======================
   DATA
======================= */

const CATEGORIES: CategoryData[] = [
  {
    id: "corporate-gifting",
    title: "Customized Notebooks",
    subtitle: "Design • Print • Dilivery",
    icon: Gift,
    image: "/images/customize-notebook.png",
    imagePlaceholderText: "CATEGORY VISUAL GOES HERE",
    bullets: [
      "Bulk orders with custom branding",
      "Curated premium selection",
      "Pan-India delivery support",
    ],
    ctaLabel: "Start Customizing",
    meta: "HR teams • Enterprises • MOQ 50+ • Fast delivery",
  },
  {
    id: "office-essentials",
    title: "Office Filing Products",
    subtitle: "Lever Arch Files • Folders",
    icon: Briefcase,
    image: "/images/lever-arch-file.png",
    imagePlaceholderText: "OFFICE VISUAL GOES HERE",
    bullets: [
      "Durable & long-lasting",
      "Neat print finish",
      "Ideal for office use",
    ],
    ctaLabel: "View Product",
    meta: "Startups • Offices • Schools",
  },
  {
    id: "wellness-hampers",
    title: "Bill Book",
    subtitle: "Accounting • Billing Use",
    icon: Heart,
    image: "/images/bill book.png",
    imagePlaceholderText: "WELLNESS VISUAL GOES HERE",
    bullets: [
      "Clear and well-ruled pages",
      "Strong binding for daily use",
      "Suitable for shops & offices",
    ],
    ctaLabel: "View Product",
    meta: "Festive gifting • HR rewards",
  },
  {
    id: "tech-accessories",
    title: "Marketing & Display Prints",
    subtitle: "Banners • Posters • Standees",
    icon: Smartphone,
    image: "/images/banner.png",
    imagePlaceholderText: "TECH VISUAL GOES HERE",
    bullets: [
      "Sharp, vibrant prints",
      "High visibility output",
      "Fast production & delivery",
    ],
    ctaLabel: "View Product",
    meta: "IT firms • Welcome kits",
  },
  {
    id: "awards-recognition",
    title: "School & Institutional Products",
    subtitle: "School Diaries • Registers",
    icon: Trophy,
    image: "/images/school-diary.png",
    imagePlaceholderText: "AWARDS VISUAL GOES HERE",
    bullets: [
      "Strong binding",
      "Daily academic use",
      "Trusted by schools",
    ],
    ctaLabel: "View Product",
    meta: "Events • Annual meets",
  },
];

/* =======================
   MOBILE TAB
======================= */

const MobileTab = ({
  category,
  active,
  onClick,
}: {
  category: CategoryData;
  active: boolean;
  onClick: () => void;
}) => {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all
        ${
          active
            ? "bg-[#0B5ED7] text-white shadow-lg shadow-blue-500/30"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        }`}
    >
      <Icon size={16} />
      {category.title}
    </button>
  );
};

/* =======================
   DESKTOP NAV ITEM
======================= */

const DesktopNavItem = ({
  category,
  active,
  onClick,
  onKeyDown,
}: {
  category: CategoryData;
  active: boolean;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
}) => {
  const Icon = category.icon;

  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`relative flex items-center gap-3 p-4 rounded-xl w-full text-left transition-all duration-200
        ${
          active
            ? "bg-white shadow-[0_8px_24px_rgba(11,94,215,0.12)] ring-1 ring-blue-100 scale-[1.02]"
            : "hover:bg-blue-50/50 hover:shadow-sm"
        }`}
    >
      {active && (
        <motion.span
          layoutId="activeIndicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1.5 bg-[#0B5ED7] rounded-r-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors
          ${
            active
              ? "bg-blue-50 text-[#0B5ED7]"
              : "bg-slate-100 text-slate-400"
          }`}
      >
        <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      </div>

      <div className="flex-1">
        <div className={`font-semibold text-sm ${active ? "text-slate-900" : "text-slate-700"}`}>
          {category.title}
        </div>
        <div className="text-xs text-slate-500 mt-0.5">{category.subtitle}</div>
      </div>
    </button>
  );
};

/* =======================
   MAIN COMPONENT
======================= */

export default function PopularCategories() {
  const [selectedId, setSelectedId] = useState(CATEGORIES[0].id);
  const active = useMemo(
    () => CATEGORIES.find((c) => c.id === selectedId)!,
    [selectedId]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown" && index < CATEGORIES.length - 1) {
      setSelectedId(CATEGORIES[index + 1].id);
    } else if (e.key === "ArrowUp" && index > 0) {
      setSelectedId(CATEGORIES[index - 1].id);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 md:mb-12 uppercase tracking-tight text-slate-900">
          Popular Categories
        </h2>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(21,101,192,0.08)] overflow-hidden">
          
          {/* MOBILE TABS - Horizontal Scroll */}
          <div className="md:hidden flex gap-3 overflow-x-auto px-4 py-4 border-b border-slate-100 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <MobileTab
                key={cat.id}
                category={cat}
                active={selectedId === cat.id}
                onClick={() => setSelectedId(cat.id)}
              />
            ))}
          </div>

          {/* DESKTOP & CONTENT LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* LEFT SIDEBAR - Desktop Only */}
            <div
              role="tablist"
              className="hidden md:flex md:col-span-4 lg:col-span-3 flex-col gap-6 p-6 bg-slate-50/50 border-r border-slate-100"
            >
              {CATEGORIES.map((cat, i) => (
                <DesktopNavItem
                  key={cat.id}
                  category={cat}
                  active={selectedId === cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </div>

            {/* RIGHT PANEL - Content */}
            <div className="md:col-span-8 lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-6 md:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    
                    {/* IMAGE — DOMINANT */}
                    <div className="lg:col-span-7 xl:col-span-8">
                      <div className="w-full h-[280px] sm:h-[360px] lg:h-[480px] xl:h-[540px] rounded-2xl overflow-hidden shadow-lg relative bg-gradient-to-br from-slate-50 to-slate-100">
                        {active.image ? (
                          <Image
                            src={active.image}
                            alt={active.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                            priority={active.id === "corporate-gifting"}
                          />
                        ) : (
                          <div className="w-full h-full border-2 border-dashed border-slate-200 flex items-center justify-center group">
                            <span className="text-slate-400 font-bold text-xs md:text-sm tracking-widest uppercase group-hover:scale-105 transition-transform">
                              {active.imagePlaceholderText}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* TEXT — COMPACT & PROFESSIONAL */}
                    <div className="lg:col-span-5 xl:col-span-4 space-y-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                          {active.title}
                        </h3>
                        <p className="text-sm text-slate-500">{active.subtitle}</p>
                      </div>

                      <ul className="space-y-3">
                        {active.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-700">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B5ED7] flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="inline-flex items-center gap-2 bg-[#0B5ED7] hover:bg-[#0A52B8] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 w-full sm:w-auto justify-center">
                        {active.ctaLabel}
                        <ArrowRight size={16} />
                      </button>

                      <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                        {active.meta}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 md:mt-10 text-xs text-slate-600">
          <Trust icon={CreditCard} text="Secure Payments" />
          <Trust icon={Tag} text="Bulk Discounts" />
          <Trust icon={ShieldCheck} text="Trusted by Businesses" />
        </div>
      </div>
    </section>
  );
}

/* =======================
   TRUST BADGE
======================= */

const Trust = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex items-center gap-2 group">
    <Icon size={16} className="text-[#0B5ED7] group-hover:scale-110 transition-transform" />
    <span className="font-semibold">{text}</span>
  </div>
);
