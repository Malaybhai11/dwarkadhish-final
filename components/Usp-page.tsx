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
  Link,
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 relative overflow-hidden">
      <div className="flex justify-center mb-32">
        <GlassCard
          className="
    p-12 md:p-16 max-w-4xl text-center
    bg-white/80
    backdrop-blur-xl
    border border-neutral-200
    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
  "
        >
          <h2
            className="
      text-xs uppercase tracking-[0.3em]
      text-neutral-600
      mb-6 font-semibold
      flex items-center justify-center gap-2
    "
          >
            <Star size={12} className="fill-neutral-500" />
            Who We Are
            <Star size={12} className="fill-neutral-500" />
          </h2>

          <p
            className="
      text-xl md:text-2xl
      text-neutral-900
      leading-relaxed
      font-light
    "
          >
            Dwarkadhish Paper Products is a trusted printing enterprise with
            over{" "}
            <span
              className="
        font-medium
        border-b border-neutral-400
      "
            >
              10+ years
            </span>{" "}
            of expertise. We deliver premium, reliable, and sustainable paper
            solutions to institutions, corporates, and government organisations.
          </p>
        </GlassCard>
      </div>

      {/* Swiper Section - Properly Centered and Contained */}
      {/* Swiper Section - Properly Centered and Contained */}
      <div className="relative w-full mb-30 overflow-x-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Premium Heading Section */}
          <div className="text-center relative mb-12">
            {/* Very subtle paper-depth halo (not glow) */}
            <div
              className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-3/4 h-24
        bg-neutral-200
        blur-[90px]
        opacity-40
        -z-10
      "
            />

            {/* Small uppercase label */}
            <h2
              className="
        text-sm uppercase tracking-[0.4em]
        text-neutral-500
        mb-6
      "
            >
              Product Showcase
            </h2>

            {/* Strong black headline */}
            <h1
              className="
        text-5xl md:text-7xl
        font-semibold mb-6 tracking-tight
        bg-gradient-to-b
        from-neutral-950 via-neutral-800 to-neutral-600
        bg-clip-text text-transparent
      "
            >
              Our Products
            </h1>

            {/* Editorial divider */}
            <div
              className="
        w-24 h-px
        bg-neutral-300
        mx-auto
      "
            />
          </div>

          {/* Swiper Carousel */}
          <Swiper />
        </div>
      </div>

      {/* SECTION 1: Premium Header Block */}
      <section className="mb-28 text-center relative">
        {/* Soft paper-depth halo (NOT glow) */}
        <div
          className="
    absolute top-0 left-1/2
    -translate-x-1/2
    w-96 h-96
    bg-neutral-200
    blur-[120px]
    opacity-60
    -z-10
  "
        />

        {/* Editorial headline */}
        <h1
          className="
      text-6xl md:text-8xl
      font-light mb-6 tracking-tight
    "
          style={{
            background: "linear-gradient(to bottom, #0a0a0a, #4a4a4a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Why Clients Trust Us
        </h1>

        {/* Ink divider */}
        <div
          className="
    w-32 h-px
    bg-neutral-300
    mx-auto mb-8
  "
        />

        {/* Subtitle */}
        <p
          className="
      text-xl md:text-2xl
      text-neutral-700
      font-light
      max-w-3xl mx-auto
      leading-relaxed
    "
          style={{ animation: "fadeInUp 1s ease-out 0.2s both" }}
        >
          Precision. Consistency. Excellence. Our value speaks for itself.
        </p>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32">
        {/* PRODUCT SHOWCASE SECTION - Placed after "Give More Than Expected" */}
        <div className="mb-0"></div>

        {/*----------------------------section2--grid----------------------------*/}

        {/* SECTION 2: Signature USP Showcase - Enhanced Asymmetric Grid Layout */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 auto-rows-auto">
            {/* LARGE FEATURED CARD */}
            <div
              className="
        relative group overflow-hidden
        bg-white/85 backdrop-blur-[28px]
        border border-neutral-300
        rounded-[2rem] p-8 md:p-12
        shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]
        transition-all duration-700 ease-out
        hover:-translate-y-2 hover:scale-[1.015]
        md:col-span-6 md:row-span-2
      "
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both`,
              }}
            >
              {/* soft paper reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* ICON */}
              <div className="relative mb-8 inline-flex">
                <div
                  className="
          p-4 rounded-2xl
          bg-neutral-100
          border border-neutral-300
          text-neutral-900
          shadow-[0_4px_14px_rgba(0,0,0,0.12)]
          transition-all duration-500
          group-hover:scale-110 group-hover:rotate-3
        "
                >
                  {usps[0].icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-neutral-900">
                {usps[0].title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                {usps[0].description}
              </p>

              {/* SUB GRID */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Digital Printing",
                    color: "cyan",
                    desc: "High-speed precision with vibrant accuracy",
                  },
                  {
                    title: "Offset Printing",
                    color: "purple",
                    desc: "Large-volume excellence with consistency",
                  },
                  {
                    title: "Quality Control",
                    color: "green",
                    desc: "Zero-defect inspection process",
                  },
                  {
                    title: "Color Matching",
                    color: "orange",
                    desc: "Pantone-perfect brand accuracy",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
              relative rounded-xl p-5
              bg-neutral-50
              border border-neutral-200
              transition-all duration-500
              hover:bg-white hover:shadow-md
            "
                  >
                    <div className="font-semibold text-sm text-neutral-900 mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* TECH BAR */}
              <div className="mt-6 flex items-center gap-6 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span>600+ DPI Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>CMYK + Spot Colors</span>
                </div>
              </div>
            </div>

            {/* OTHER CARDS (REUSED STYLE) */}
            {[1, 2, 3, 4].map((i, idx) => (
              <div
                key={i}
                className={`
          relative group overflow-hidden
          bg-white/85 backdrop-blur-[24px]
          border border-neutral-300
          rounded-[2rem] p-8
          shadow-[0_10px_32px_rgba(0,0,0,0.12)]
          hover:shadow-[0_22px_60px_rgba(0,0,0,0.18)]
          transition-all duration-700 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          md:col-span-${i >= 3 ? 5 : 4}
        `}
                style={{
                  animation: `fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) ${
                    0.1 * idx
                  }s both`,
                }}
              >
                <div className="mb-6">
                  <div
                    className="
            p-3 rounded-xl
            bg-neutral-100
            border border-neutral-300
            text-neutral-900
            inline-flex
          "
                  >
                    {usps[i].icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900">
                  {usps[i].title}
                </h3>

                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  {usps[i].description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/*----------------------------section2--grid----------------------------*/}
        {/*------------------------- SECTION 2: Vision Statement with Subtle Glow--------- */}

        <div className="mb-24 text-center relative">
          {/* Paper-depth halo */}
          <div
            className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[60%] h-40
      bg-neutral-200
      blur-[120px]
      opacity-60
      -z-10
    "
          />

          {/* Section label */}
          <h2
            className="
    text-sm uppercase tracking-[0.4em]
    text-neutral-500
    mb-8
  "
          >
            Our Vision
          </h2>

          {/* Manifesto headline */}
          <h1
            className="
      text-5xl md:text-7xl
      font-semibold
      mb-8
      tracking-tight
    "
            style={{
              background: "linear-gradient(to bottom, #0a0a0a, #4a4a4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 1s ease-out",
            }}
          >
            Give More Than Expected.
          </h1>

          {/* Ink divider */}
          <div
            className="
      w-24 h-px
      bg-neutral-300
      mx-auto mb-8
    "
          />

          {/* Supporting copy */}
          <p
            className="
      text-lg
      text-neutral-700
      max-w-2xl mx-auto
      leading-relaxed
      font-light
    "
            style={{ animation: "fadeInUp 1s ease-out 0.15s both" }}
          >
            We are committed to delivering the finest printing solutions —{" "}
            <span className="italic text-neutral-900 font-medium">
              on time, every time
            </span>{" "}
            — backed by quality, precision, and customer-first service.
          </p>
        </div>

        {/*------------------------- SECTION 2: Vision Statement with Subtle Glow--------- */}

        {/*------------------------- SECTION 3------------------------------ */}

        {/* SECTION 3: Immersive "Why We Stand Out" Section */}
        <section className="mb-40">
          <div
            className="
      relative
      bg-white
      border border-neutral-200
      rounded-[40px]
      p-12 md:p-16
      shadow-[0_30px_80px_rgba(0,0,0,0.08)]
      overflow-hidden
    "
          >
            {/* Paper-depth halo */}
            <div
              className="
        absolute inset-0
        bg-gradient-to-br from-neutral-100 via-transparent to-neutral-100
        opacity-60
        blur-2xl
        pointer-events-none
      "
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Title */}
              <div>
                <h2
                  className="
            text-4xl md:text-5xl
            font-light
            text-neutral-900
            mb-8
            leading-tight
          "
                  style={{ animation: "fadeInUp 0.8s ease-out" }}
                >
                  What Sets Us Apart
                </h2>

                <div className="w-20 h-px bg-neutral-300" />
              </div>

              {/* Right Bullet List */}
              <div className="space-y-6">
                {standoutPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="
                mt-1
                p-1.5
                rounded-full
                bg-neutral-100
                border border-neutral-300
                text-neutral-700
                group-hover:bg-neutral-900
                group-hover:text-white
                group-hover:scale-110
                transition-all duration-300
              "
                    >
                      <CheckCircle2 size={16} />
                    </div>

                    {/* Text */}
                    <span
                      className="
                text-neutral-700
                text-lg
                font-light
                group-hover:text-neutral-900
                transition-colors
                flex-1
              "
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

         {/*------------------------- SECTION 3------------------------------ */}

          {/*------------------------- SECTION 4------------------------------ */}

        {/* SECTION 4: Animated Industry Trust Bar */}
       <section className="mb-40">
  <div
    className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-white
      px-6 py-14
    "
  >
    {/* Ambient light field */}
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.9),transparent)]
        pointer-events-none
      "
    />

    {/* Liquid glass base */}
    <div
      className="
        absolute inset-0
        backdrop-blur-[28px]
        bg-white/70
        border border-white/60
        shadow-[0_40px_120px_rgba(0,0,0,0.08)]
        pointer-events-none
      "
    />

    {/* Inner highlight */}
    <div
      className="
        absolute inset-0
        rounded-[32px]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
        pointer-events-none
      "
    />

    {/* Section label */}
    <div className="relative z-10 text-center mb-12">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
        Trusted Across Industries
      </p>
    </div>

    {/* Marquee */}
    <div className="relative z-10">
      <div
        ref={marqueeRef}
        className="
          flex items-center gap-16
          whitespace-nowrap
        "
        style={{ willChange: "transform" }}
      >
        {[...industries, ...industries].map((industry, index) => (
          <div
            key={index}
            className="
              group
              relative
              flex items-center gap-4
              px-6 py-4
              rounded-full
              backdrop-blur-[20px]
              bg-white/60
              border border-white/70
              shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >
            {/* Optical sheen */}
            <div
              className="
                absolute inset-0
                rounded-full
                bg-gradient-to-br
                from-white/80 via-transparent to-transparent
                opacity-60
                pointer-events-none
              "
            />

            {/* Icon glass bubble */}
            <div
              className="
                relative
                p-2.5
                rounded-full
                backdrop-blur-[14px]
                bg-white/70
                border border-white/80
                shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                text-neutral-700
                group-hover:scale-110
                transition-transform duration-500
              "
            >
              {industry.icon}
            </div>

            {/* Label */}
            <span className="
              text-sm font-medium tracking-wide
              text-neutral-700
              group-hover:text-neutral-900
              transition-colors
            ">
              {industry.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Edge optical fade */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/90 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/90 to-transparent" />
  </div>
</section>


         {/*------------------------- SECTION 4------------------------------ */}


         {/*------------------------- SECTION 5------------------------------ */}

       {/* SECTION 5: Ultra-Premium Statistic Blocks — Apple Liquid Glass */}
<section className="mb-40">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="
          group relative
          rounded-[28px]
          p-8 text-center
          bg-white/70
          backdrop-blur-[28px]
          border border-white/70
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-2
          hover:shadow-[0_45px_120px_rgba(0,0,0,0.12)]
        "
        style={{
          animation: `fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) ${
            index * 0.12
          }s both`,
        }}
      >
        {/* Liquid light layer */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Inner glass highlight */}
        <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] pointer-events-none" />

        {/* Floating ambient glow */}
        <div className="absolute -inset-6 bg-gradient-to-br from-neutral-200/40 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

        {/* Content */}
        <div className="relative z-10">
          {/* Number */}
          <div
            className="
              text-5xl md:text-6xl font-semibold mb-3
              tracking-tight
            "
            style={{
              background:
                "linear-gradient(to bottom, rgb(20,20,20), rgb(120,120,120))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {stat.number}
          </div>

          {/* Divider */}
          <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          {/* Label */}
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 font-medium">
            {stat.label}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


         {/*------------------------- SECTION 5------------------------------ */}

         {/*------------------------- SECTION 6------------------------------ */}

     {/* SECTION 6: Testimonial Showcase — Minimal Liquid Glass */}
<section className="mb-40">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="
          group relative
          rounded-[24px]
          bg-white/75
          backdrop-blur-[24px]
          border border-white/70
          p-8
          shadow-[0_24px_64px_rgba(0,0,0,0.08)]
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-2
          hover:shadow-[0_36px_96px_rgba(0,0,0,0.12)]
        "
        style={{
          animation: `fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) ${
            index * 0.12
          }s both`,
        }}
      >
        {/* Inner glass highlight */}
        <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] pointer-events-none" />

        {/* Soft ambient glow */}
        <div className="absolute -inset-6 bg-neutral-200/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

        {/* Content */}
        <div className="relative z-10">
          {/* Quote icon */}
          <div className="mb-5 text-neutral-300">
            <Quote size={28} />
          </div>

          {/* Testimonial text */}
          <p className="text-neutral-700 text-base leading-relaxed font-light italic">
            {testimonial.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


                 {/*------------------------- SECTION 6------------------------------ */}


                  {/*------------------------- SECTION 7------------------------------ */}

{/* SECTION 7: Shock-Level Premium CTA */}
<section className="mb-24">
  <div className="relative max-w-6xl mx-auto px-6">
    <div
      className="
        relative
        rounded-[48px]
        bg-white
        overflow-hidden
        px-12 py-20 md:px-20
        text-center
      "
    >
      {/* Ambient light field */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.95),transparent)]" />

      {/* Liquid glass body */}
      <div
        className="
          absolute inset-0
          backdrop-blur-[40px]
          bg-white/80
          border border-white/70
          shadow-[0_60px_160px_rgba(0,0,0,0.12)]
        "
      />

      {/* Inner optical highlight */}
      <div className="absolute inset-0 rounded-[48px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] pointer-events-none" />

      {/* Floating halo */}
      <div className="absolute -inset-20 bg-neutral-200/40 blur-[120px] opacity-60 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Micro label */}
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6">
          Ready When You Are
        </p>

        {/* Headline */}
        <h2
          className="
            text-4xl md:text-6xl
            font-light
            leading-tight
            tracking-tight
            mb-10
          "
          style={{
            background:
              "linear-gradient(to bottom, rgb(20,20,20), rgb(130,130,130))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Experience the Standard of  
          <br className="hidden md:block" />
          True Printing Excellence
        </h2>

        {/* Divider */}
        <div className="mx-auto mb-12 h-px w-24 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Primary */}
          <button
            className="
              group relative
              px-10 py-4
              rounded-full
              bg-neutral-900
              text-white font-medium
              shadow-[0_16px_40px_rgba(0,0,0,0.25)]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1
              hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]
              flex items-center gap-3
            "
          >
            <Link href="/shop">
              Explore Products
            </Link>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          {/* Secondary */}
          <button
            className="
              px-10 py-4
              rounded-full
              bg-white/70
              backdrop-blur-[16px]
              border border-neutral-300
              text-neutral-900 font-medium
              shadow-[0_12px_32px_rgba(0,0,0,0.08)]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1
              hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)]
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


         {/*------------------------- SECTION 7------------------------------ */}


      </div>
    </div>
  );
}
