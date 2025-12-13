"use client";
import React, { useEffect, useRef } from "react";
import {
  Printer,
  Shield,
  Clock,
  Heart,
  DollarSign,
  CheckCircle2,
  GraduationCap,
  Hospital,
  BriefcaseBusiness,
  Landmark,
  Factory,
  Building2,
  ArrowRight,
  Quote,
} from "lucide-react";

import { Star } from "lucide-react";
import GlareHover from "./GlareHover";
import Swiper from "../components/Swiper";

/* --- Type Definitions --- */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

interface USP {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Statistic {
  number: string;
  label: string;
}

interface Testimonial {
  text: string;
}

/* --- Reusable Components --- */
const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
  style,
}) => (
  <div
    className={`
      relative overflow-hidden
      backdrop-blur-[24px] bg-gradient-to-br from-white/8 via-white/3 to-transparent
      border border-t-white/15 border-l-white/10 border-b-black/20 border-r-black/20
      rounded-3xl shadow-2xl 
      transition-all duration-500 ease-out group
      ${
        hoverEffect
          ? "hover:scale-[1.02] hover:shadow-white/10 hover:border-white/20"
          : ""
      }
      ${className}
    `}
    style={style}
  >
    {/* Internal Shine Effect on Hover */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

/* --- Premium USP Page Component --- */
export default function USPPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth marquee animation
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      let position = 0;
      const speed = 0.5;

      const animate = () => {
        position -= speed;
        if (Math.abs(position) >= marquee.scrollWidth / 2) {
          position = 0;
        }
        marquee.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  const usps: USP[] = [
    {
      icon: <Printer size={32} />,
      title: "Advanced Printing Technology",
      description:
        "State-of-the-art digital and offset machines for flawless output.",
    },
    {
      icon: <Shield size={32} />,
      title: "Rigorous Quality Control",
      description: "Every project passes through multi-stage precision checks.",
    },
    {
      icon: <Clock size={32} />,
      title: "Time-Bound & Reliable Delivery",
      description:
        "Your deadlines are non-negotiable. We deliver — every time.",
    },
    {
      icon: <Heart size={32} />,
      title: "Customer-First Approach",
      description:
        "We build trust through clarity, communication, and dedication.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Premium Yet Cost-Effective",
      description: "High-grade printing and finishing at optimal pricing.",
    },
  ];

  const standoutPoints = [
    "Secure printing for institutions",
    "High-volume production capability",
    "Superior finishing & detailing",
    "Trusted by government & enterprise clients",
    "End-to-end solutions from design to dispatch",
    "Decade-long proven reliability",
  ];

  const industries = [
    { name: "Education", icon: <GraduationCap size={20} /> },
    { name: "Healthcare", icon: <Hospital size={20} /> },
    { name: "Corporates", icon: <BriefcaseBusiness size={20} /> },
    { name: "Government", icon: <Landmark size={20} /> },
    { name: "Manufacturing", icon: <Factory size={20} /> },
    { name: "Private Sector", icon: <Building2 size={20} /> },
  ];

  const stats: Statistic[] = [
    { number: "10+", label: "Years Expertise" },
    { number: "15k+", label: "Satisfied Clients" },
    { number: "10+", label: "Indian States" },
    { number: "100%", label: "Trusted by Top Institutions" },
  ];

  const testimonials: Testimonial[] = [
    { text: "Exceptional precision and quality — unmatched." },
    { text: "Consistent, reliable, and professional printing services." },
    {
      text: "Our long-term trusted partner for all institutional printing needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* 1. Intro Section */}
      <div className="flex justify-center mb-32">
        <GlassCard className="p-12 md:p-16 max-w-4xl text-center border-t-white/20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-bold flex items-center justify-center gap-2">
            <Star size={12} className="fill-white/70" /> Who We Are{" "}
            <Star size={12} className="fill-white/70" />
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
            Dwarkadhish Paper Products is a trusted printing enterprise with
            over{" "}
            <span className="text-white font-medium border-b border-white/50">
              10+ years
            </span>{" "}
            of expertise. We deliver premium, reliable, and sustainable paper
            solutions to institutions, corporates, and government organisations.
          </p>
        </GlassCard>
      </div>

      {/* Swiper Section - Properly Centered and Contained */}
      <div className="relative w-full mb-30 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Premium Heading Section */}
          <div className="text-center relative mb-12">
            {/* Subtle glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-white/5 blur-[60px] -z-10"></div>

            {/* Small uppercase label */}
            <h2 className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-6">
              Product Showcase
            </h2>

            {/* Large gradient heading */}
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-2xl">
              Our Products
            </h1>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto opacity-50"></div>
          </div>

          {/* Swiper Carousel */}
          <Swiper />
        </div>
      </div>

      {/* Cinematic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Soft radial glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[600px] bg-white/3 blur-[100px] rounded-full" />

        {/* Cinematic light streaks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32">
        {/* PRODUCT SHOWCASE SECTION - Placed after "Give More Than Expected" */}
        <div className="mb-0"></div>

        {/* SECTION 1: Premium Header Block */}
        <section className="mb-28 text-center relative">
          {/* Soft spotlight from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 blur-[100px] -z-10" />

          {/* Large glowing heading */}
          <h1
            className="text-6xl md:text-8xl font-light mb-6 tracking-tight"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #a0a0a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(255,255,255,0.3)",
              animation: "fadeInUp 1s ease-out",
            }}
          >
            Why Clients Trust Us
          </h1>

          {/* Very thin glass horizontal line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />

          {/* Minimal subtitle */}
          <p
            className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
            style={{ animation: "fadeInUp 1s ease-out 0.2s both" }}
          >
            Precision. Consistency. Excellence. Our value speaks for itself.
          </p>
        </section>

        {/* SECTION 2: Signature USP Showcase - Enhanced Asymmetric Grid Layout */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 auto-rows-auto">
            {/* Large featured card - Advanced Printing Technology with visual showcase */}
            <div
              className="
       relative group overflow-hidden
        backdrop-blur-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent
        border border-white/20
        rounded-[2rem] p-8 md:p-12
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.35)]
        transition-all duration-700 ease-out
        hover:scale-[1.015] hover:-translate-y-3
        cursor-default
        md:col-span-6 md:row-span-2
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s both`,
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              {/* Light reflection effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Premium icon container */}
              <div className="relative mb-8 inline-flex">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 text-white/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  {usps[0].icon}
                </div>
                {/* Icon glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              {/* Bold heading with gradient on hover */}
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text group-hover:text-transparent">
                {usps[0].title}
              </h3>

              {/* Enhanced description */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-xl mb-8 group-hover:text-slate-200 transition-colors duration-500">
                {usps[0].description}
              </p>

              {/* Visual Showcase - Printing Technology Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Digital Printing */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 group/item hover:bg-white/10 transition-all duration-500">
                  {/* Animated dot pattern */}
                  <div className="absolute inset-0 opacity-20 group-hover/item:opacity-40 transition-opacity duration-500">
                    <div className="grid grid-cols-8 gap-1 h-full p-2">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-cyan-400 rounded-full"
                          style={{
                            animation: `pulse 2s ease-in-out ${
                              i * 0.1
                            }s infinite`,
                            opacity: Math.random() * 0.5 + 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 font-semibold text-sm">
                        Digital Printing
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      High-speed precision with vibrant color accuracy
                    </p>
                  </div>
                </div>

                {/* Offset Printing */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 group/item hover:bg-white/10 transition-all duration-500">
                  {/* Animated wave pattern */}
                  <div className="absolute inset-0 opacity-20 group-hover/item:opacity-40 transition-opacity duration-500 overflow-hidden rounded-xl">
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full"
                          style={{
                            top: `${i * 20}%`,
                            animation: `slideRight 3s ease-in-out ${
                              i * 0.5
                            }s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 font-semibold text-sm">
                        Offset Printing
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Large-volume excellence with consistent quality
                    </p>
                  </div>
                </div>

                {/* Quality Control */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 group/item hover:bg-white/10 transition-all duration-500">
                  {/* Scanning lines effect */}
                  <div className="absolute inset-0 opacity-20 group-hover/item:opacity-40 transition-opacity duration-500 overflow-hidden rounded-xl">
                    <div
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                      style={{
                        animation: `scanLine 2s ease-in-out infinite`,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 font-semibold text-sm">
                        Quality Control
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Rigorous inspection ensures zero-defect output
                    </p>
                  </div>
                </div>

                {/* Color Matching */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 group/item hover:bg-white/10 transition-all duration-500">
                  {/* Color spectrum effect */}
                  <div className="absolute inset-0 opacity-20 group-hover/item:opacity-40 transition-opacity duration-500 overflow-hidden rounded-xl">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 to-purple-500/20"
                      style={{
                        animation: `shimmer 3s ease-in-out infinite`,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 font-semibold text-sm">
                        Color Matching
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Pantone-perfect accuracy for brand consistency
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Specs Bar */}
              <div className="mt-6 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>600+ DPI Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span>CMYK + Spot Colors</span>
                </div>
              </div>

              {/* Floating shadow glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 -z-10 transition-opacity duration-700" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-[2rem] opacity-50" />
            </div>

            {/* Top-right card */}
            <div
              className="
        relative group overflow-hidden
        backdrop-blur-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent
        border border-white/20
        rounded-[2rem] p-8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.35)]
        transition-all duration-700 ease-out
        hover:scale-[1.02] hover:-translate-y-3
        cursor-default
        md:col-span-4
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both`,
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative mb-6 inline-flex">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 text-white/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  {usps[1].icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-white/90">
                {usps[1].title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                {usps[1].description}
              </p>

              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 -z-10 transition-opacity duration-700" />
            </div>

            {/* Bottom-right card */}
            <div
              className="
        relative group overflow-hidden
        backdrop-blur-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent
        border border-white/20
        rounded-[2rem] p-8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.35)]
        transition-all duration-700 ease-out
        hover:scale-[1.02] hover:-translate-y-3
        cursor-default
        md:col-span-4
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both`,
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative mb-6 inline-flex">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 text-white/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  {usps[2].icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-white/90">
                {usps[2].title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                {usps[2].description}
              </p>

              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 -z-10 transition-opacity duration-700" />
            </div>

            {/* Bottom-left medium card */}
            <div
              className="
        relative group overflow-hidden
        backdrop-blur-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent
        border border-white/20
        rounded-[2rem] p-8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.35)]
        transition-all duration-700 ease-out
        hover:scale-[1.02] hover:-translate-y-3
        cursor-default
        md:col-span-5
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both`,
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative mb-6 inline-flex">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 text-white/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  {usps[3].icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-white/90">
                {usps[3].title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                {usps[3].description}
              </p>

              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 -z-10 transition-opacity duration-700" />
            </div>

            {/* Bottom-right medium card */}
            <div
              className="
        relative group overflow-hidden
        backdrop-blur-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent
        border border-white/20
        rounded-[2rem] p-8
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.35)]
        transition-all duration-700 ease-out
        hover:scale-[1.02] hover:-translate-y-3
        cursor-default
        md:col-span-5
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both`,
              }}
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative mb-6 inline-flex">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 text-white/90 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  {usps[4].icon}
                </div>
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-white/90">
                {usps[4].title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                {usps[4].description}
              </p>

              <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 -z-10 transition-opacity duration-700" />
            </div>
          </div>
        </section>

        <style>{`
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  @keyframes slideRight {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  
  @keyframes scanLine {
    0% { top: 0; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

        <div className="mb-24 text-center relative">
          {/* Subtle glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-white/5 blur-[60px] -z-10"></div>

          <h2 className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-8">
            Our Vision
          </h2>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-2xl">
            Give More Than Expected.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8 opacity-50"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            We are committed to delivering the finest printing solutions —{" "}
            <span className="italic text-white">on time, every time</span> —
            backed by quality, precision, and customer-first service.
          </p>
        </div>

        {/* SECTION 3: Immersive "Why We Stand Out" Section */}
        <section className="mb-40">
          <div
            className="
            relative
            backdrop-blur-[40px] bg-gradient-to-br from-white/8 via-white/4 to-white/2
            border border-white/15
            rounded-[40px] p-12 md:p-16
            shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
            overflow-hidden
          "
          >
            {/* Blurred background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 blur-2xl opacity-50" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  What Sets Us Apart
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-white/50 to-transparent" />
              </div>

              {/* Right Bullet List */}
              <div className="space-y-6">
                {standoutPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="mt-1 p-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-300 text-lg font-light group-hover:text-white transition-colors flex-1">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Animated Industry Trust Bar */}
        <section className="mb-40">
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-6">
            <div
              ref={marqueeRef}
              className="flex items-center gap-12 whitespace-nowrap"
              style={{ willChange: "transform" }}
            >
              {/* Duplicate for seamless loop */}
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/10 border border-white/10">
                    {industry.icon}
                  </div>
                  <span className="text-sm font-medium tracking-wide">
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Ultra-Premium Statistic Blocks */}
        <section className="mb-40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  relative group
                  backdrop-blur-[28px] bg-gradient-to-br from-white/8 via-white/4 to-transparent
                  border border-white/15
                  rounded-3xl p-8 text-center
                  shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
                  transition-all duration-700
                  hover:scale-105 hover:-translate-y-1
                  cursor-default
                "
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Slow pulsing background light */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000 animate-pulse" />

                {/* Oversized glowing numbers */}
                <div
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff, #c0c0c0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 40px rgba(255,255,255,0.2)",
                  }}
                >
                  {stat.number}
                </div>

                {/* Silver gradient typography */}
                <div className="text-xs uppercase tracking-widest text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Testimonial Showcase */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  relative group
                  backdrop-blur-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent
                  border border-white/15
                  rounded-3xl p-10
                  shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
                  transition-all duration-700
                  hover:scale-[1.02] hover:-translate-y-2
                  cursor-default
                "
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Soft vignette background */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, transparent, transparent, rgba(255,255,255,0.05))",
                  }}
                />

                {/* Minimal quotation marks */}
                <div className="mb-6 text-white/20">
                  <Quote size={32} className="rotate-180" />
                </div>

                {/* Testimonial text */}
                <p className="text-slate-300 text-lg leading-relaxed font-light italic group-hover:text-white transition-colors relative z-10">
                  {testimonial.text}
                </p>

                {/* Thin glowing borders on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: Premium CTA Footer */}
        <section className="mb-20">
          <div
            className="
            relative
            backdrop-blur-[40px] bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80
            border border-white/15
            rounded-[40px] p-16 md:p-20
            shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
            text-center
            overflow-hidden
          "
          >
            {/* Soft blue-black blur background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-900/30 to-slate-950/20 blur-2xl" />

            <div className="relative z-10">
              {/* Heading with silver glow */}
              <h2
                className="text-4xl md:text-5xl font-light mb-8 leading-tight"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #a0a0a0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Experience The Standard Of True Printing Excellence
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <button
                  className="
                  group relative
                  px-10 py-4
                  backdrop-blur-[20px] bg-gradient-to-br from-white/15 via-white/10 to-white/5
                  border border-white/20
                  rounded-full
                  text-white font-semibold
                  hover:bg-white/20 hover:border-white/30
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-1
                  flex items-center gap-2
                "
                >
                  Explore Products
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  {/* Glowing edges */}
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 blur-xl transition-all duration-500" />
                </button>

                <button
                  className="
                  px-10 py-4
                  backdrop-blur-[20px] bg-white/5
                  border border-white/20
                  rounded-full
                  text-white font-semibold
                  hover:bg-white/10 hover:border-white/30
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-1
                "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
