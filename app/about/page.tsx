"use client";
import { Navbar, NavbarItem, NavbarButton } from "@/components/Navbar";
import GlareHover from "@/components/GlareHover";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Printer,
  Truck,
  MapPin,
  Users,
  Building2,
  Lock,
  FileText,
  Globe,
  CheckCircle2,
} from "lucide-react";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar>
        <NavbarItem label="Home" href="/" />
        <NavbarItem label="Shop" href="/shop" />
        <NavbarItem label="About" href="/about-us" />
        <NavbarButton label="Login" href="/login" variant="simple" />
        <NavbarButton label="Signup" href="/signup" variant="colored" />
      </Navbar>

      <section className="relative overflow-hidden bg-neutral-50 pt-32 pb-24">
        {/* Animated background halos */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-[140px]"
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/3 w-[600px] h-[300px] bg-orange-400/10 blur-[140px]"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Meta pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-white border border-neutral-200
                     text-neutral-600 text-xs font-semibold tracking-widest uppercase
                     shadow-sm hover:shadow-md transition"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            EST. 2014 • JAMNAGAR, GUJARAT
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-10 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight
                     text-neutral-900 leading-[0.95]"
          >
            PRECISION
            <br />
            <span className="relative inline-block group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-orange-400/40 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <span className="relative text-neutral-400">SECURITY</span>
            </span>
            <br />
            SCALE
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-3xl mx-auto text-lg md:text-xl
                     text-neutral-600 leading-relaxed"
          >
            Built over a decade of disciplined execution, trusted by
            institutions where{" "}
            <span className="relative font-semibold text-neutral-900">
              accuracy is non-negotiable
            </span>
            .
          </motion.p>

          {/* Proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4
                     text-sm text-neutral-600 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              15,000+ Clients Served
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Government & Enterprise Trusted
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Pan-India Operations
            </span>
          </motion.div>
        </div>
      </section>
      {/* ----------------------------section1-------------------------*/}

   {/* ---------------------------- SECTION 2 ------------------------- */}
{/* Operational Proof — Premium Bento Grid */}
<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(180px,auto)]">

    {/* Main Authority Block */}
    <div className="md:col-span-6 md:row-span-2 relative group">
      <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-br from-blue-200/40 via-transparent to-orange-200/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
      
      <GlareHover
        width="100%"
        height="100%"
        borderRadius="28px"
        glareColor="#2563eb"
        glareOpacity={0.12}
        borderColor="rgba(0,0,0,0.06)"
        background="radial-gradient(circle at center, #ffffff 0%, #f8fafc 70%, #eef2ff 100%)"
      >
        <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">
          <span className="text-[6rem] md:text-[7rem] font-black text-neutral-900 tracking-tighter leading-none">
            10<span className="text-4xl align-top text-neutral-500">+</span>
          </span>

          <p className="text-xl md:text-2xl font-semibold text-neutral-800 mt-4">
            Years of Operational Excellence
          </p>

          <p className="text-sm text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed">
            Trusted by government bodies and enterprise institutions for
            accuracy-critical, large-scale printing.
          </p>

          {/* Accent line */}
          <div className="mt-6 h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 transition-all duration-500 group-hover:w-20" />
        </div>
      </GlareHover>
    </div>

    {/* Capability — End to End */}
    <div className="
      md:col-span-3
      relative group
      rounded-[24px]
      border border-neutral-200
      bg-white
      p-8
      flex flex-col justify-between
      shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      transition-all duration-500
      hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    ">
      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6
        group-hover:scale-110 transition-transform">
        <Printer className="w-6 h-6 text-blue-600" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-1">
          End-to-End
        </h3>
        <p className="text-sm text-neutral-500">
          Design → Print → Secure Dispatch
        </p>
      </div>

      <div className="mt-6 h-[2px] w-10 bg-blue-500/40 rounded-full group-hover:w-16 transition-all" />
    </div>

    {/* Capability — Diverse Sectors */}
    <div className="
      md:col-span-3
      relative group
      rounded-[24px]
      border border-neutral-200
      bg-white
      p-8
      flex flex-col justify-between
      shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      transition-all duration-500
      hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    ">
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6
        group-hover:scale-110 transition-transform">
        <Users className="w-6 h-6 text-orange-500" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-1">
          Diverse
        </h3>
        <p className="text-sm text-neutral-500">
          Education, Government, Corporate, Healthcare
        </p>
      </div>

      <div className="mt-6 h-[2px] w-10 bg-orange-500/40 rounded-full group-hover:w-16 transition-all" />
    </div>

    {/* Strategic Narrative */}
    <div className="
      md:col-span-6
      relative
      rounded-[24px]
      border border-neutral-200
      bg-gradient-to-br from-white via-neutral-50 to-neutral-100
      p-10
      flex items-center
      shadow-[0_10px_40px_rgba(0,0,0,0.06)]
    ">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[24px] " />

      <p className="pl-6 text-lg text-neutral-600 leading-relaxed text-balance">
        Dwarkadhish Paper Products operates beyond traditional printing.
        We function as a long-term operational partner for institutions
        where <span className="font-semibold text-neutral-900">precision, confidentiality, and scale</span> are non-negotiable.
      </p>
    </div>

  </div>
</section>

{/* ---------------------------- SECTION 2 ------------------------- */}
{/* ---------------------------- SECTION 3 ------------------------- */}
      {/* Secure Printing - Split Screen Creative */}
      <section className="relative py-28 bg-white border-y border-neutral-200 overflow-hidden">

  {/* Technical grid backdrop */}
 

  <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT — SECURITY PIPELINE */}
    <div className="relative order-2 md:order-1">

      {/* Vertical signal spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="relative space-y-6">

        {/* ACCESS */}
        <div className="group ml-auto max-w-md">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-200
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]">

            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Access Granted
              </div>
              <p className="text-neutral-900 font-medium">
                Fingerprint-based biometric entry
              </p>
            </div>
          </div>
        </div>

        {/* SURVEILLANCE */}
        <div className="group max-w-md">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-200
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]">

            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Surveillance
              </div>
              <p className="text-neutral-900 font-medium">
                24/7 CCTV in Production, QC & Dispatch
              </p>
            </div>
          </div>
        </div>

        {/* ZERO LEAKAGE */}
        <div className="group ml-auto max-w-md">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-200
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]">

            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Zero Leakage
              </div>
              <p className="text-neutral-900 font-medium">
                100,000+ exam papers printed securely
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT — AUTHORITY PANEL */}
    <div className="order-1 md:order-2">

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
        bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-6">
        Security Infrastructure
      </div>

      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 mb-6">
        Fortress-Level <br /> Confidentiality
      </h2>

      <p className="text-neutral-600 text-xl leading-relaxed max-w-xl">
        We operate a{" "}
        <span className="font-semibold text-neutral-900">
          5,000 sq ft high-security facility
        </span>{" "}
        purpose-built for high-stakes documentation. When data integrity is
        mission-critical, institutions rely on us.
      </p>

      {/* Trust indicators */}
      <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-neutral-600">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          Government Trusted
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          Zero Breach Record
        </span>
      </div>
    </div>

  </div>
</section>
{/* ---------------------------- SECTION 3 ------------------------- */}
{/* ================= WORKFLOW SECTION ================= */}
{/* ================= WORKFLOW SECTION ================= */}
<section className="relative py-28 bg-white overflow-hidden">
  {/* Ambient background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[420px] bg-blue-500/5 blur-[140px]" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-orange-400/5 blur-[140px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="mb-20">
      <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
        Our Process
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900">
        A Controlled, Audited Workflow
      </h2>
      <p className="mt-4 max-w-xl text-neutral-600">
        From consultation to secure dispatch — every step is structured,
        monitored, and optimized for accuracy.
      </p>
    </div>

    {/* Workflow canvas */}
    <div className="relative">
      {/* SVG CONNECTOR LINE */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 z-0 pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 H1200"
          stroke="url(#workflowGradient)"
          strokeWidth="3"
          strokeDasharray="14 18"
          className="animate-flow"
        />
        <defs>
          <linearGradient id="workflowGradient" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* STEPS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-10">
        {[
          { step: "01", title: "Consult", desc: "Requirements & timeline" },
          { step: "02", title: "Plan", desc: "Resources & security prep" },
          { step: "03", title: "Print", desc: "High-speed production" },
          { step: "04", title: "Verify", desc: "Quality assurance check" },
          { step: "05", title: "Dispatch", desc: "Secure logistics" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              relative group
              rounded-2xl bg-white
              border border-neutral-200
              p-10
              shadow-[0_14px_40px_rgba(0,0,0,0.08)]
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.15)]
            "
          >
            {/* Step number */}
            <div className="absolute -top-8 left-8 text-7xl font-black text-neutral-200 group-hover:text-blue-500/30 transition-colors">
              {item.step}
            </div>

            {/* Accent node */}
            <div
              className={`w-3 h-3 rounded-full mb-6 ${
                i % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
              }`}
            />

            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.desc}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-orange-400/0 group-hover:from-blue-500/6 group-hover:to-orange-400/6 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* ================= END WORKFLOW SECTION ================= */}

{/* ================= END WORKFLOW SECTION ================= */}


      {/* Capabilities - Asymmetric Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Variable Data - Featured with Glare */}
          <GlareHover
            width="100%"
            height="400px" // Fixed height for visual consistency
            borderRadius="24px"
            glareColor="#ffffff"
            glareOpacity={0.1}
            background="#0f172a" // Slate-900
            borderColor="rgba(255,255,255,0.05)"
          >
            <div className="h-full p-10 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <FileText className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                Variable Data Printing
              </h3>
              <p className="text-slate-400 relative z-10">
                Personalization at industrial scale. Unique barcodes,
                addressing, and data points per sheet for direct mail and
                records.
              </p>
            </div>
          </GlareHover>

          {/* Industrial Scale - Standard Card */}
          <div className="h-[400px] rounded-[24px] bg-slate-900/20 border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Building2 className="w-32 h-32" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
              Industrial Scale
            </h3>
            <p className="text-slate-400 relative z-10">
              Equipped for massive tenders. Consistent quality across millions
              of impressions for Education Boards and Government.
            </p>
          </div>
        </div>
      </section>

      {/* Clients - Minimalist Cloud */}
      <section className="py-24 border-t border-white/5 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-medium text-white mb-12">
            Trusted Infrastructure Partners
          </h2>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-xl md:text-2xl font-bold text-slate-600 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text representations as requested for clean look, could be logos */}
            {[
              "Indian Army",
              "Indian Navy",
              "DRDO",
              "LIC",
              "Indian Air Force",
              "ESIC",
              "Kendriya Vidyalaya",
              "Gujarat Govt",
            ].map((client, i) => (
              <span
                key={i}
                className="cursor-default hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>

          <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-sm">
              Registered on GeM (Government e-Marketplace)
            </span>
          </div>
        </div>
      </section>

      {/* Footer Location - Simple */}
      <section className="py-12 bg-slate-950 border-t border-white/10 flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto text-sm text-slate-500">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <MapPin className="w-4 h-4" />
          <span>Jamnagar, Gujarat</span>
        </div>

        <div className="flex gap-8">
          <span>Nepal</span>
          <span>Bhutan</span>
          <span>Pan-India</span>
        </div>
      </section>
    </div>
  );
}
