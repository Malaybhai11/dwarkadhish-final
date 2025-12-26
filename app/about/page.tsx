"use client";
import { Navbar, NavbarItem, NavbarButton } from "@/components/Landing-page-comp/Navbar";
// import GlareHover from "@/components/GlareHover";
import HeroSwiper from "@/components/About-us-component/About-hero";
import { motion } from "framer-motion";
import Footer2 from "@/components/Landing-page-comp-2/Footer2";
import ClientTrustSection from "@/components/About-us-component/Clients-trust-sec";
import LocationServedSection from "@/components/About-us-component/Services-page";
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
  Shield,
  Camera,
  Fingerprint,
  Server,
  ShieldAlert,
  Award,
  Activity,
} from "lucide-react";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black  overflow-x-hidden">
      <Navbar>
        <NavbarItem label="Home" href="/" />
        <NavbarItem label="Shop" href="/shop" />
        <NavbarButton label="Login" href="/login" variant="simple" />
        <NavbarButton label="Signup" href="/signup" variant="colored" />
      </Navbar>

      <section className="py-3">
        <HeroSwiper />
      </section>

      <section className="relative overflow-hidden bg-white pt-40 pb-32">
        {/* Technical Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Mesh */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"
          />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Floating Energy Spheres */}
          <motion.div
            className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-400/10 blur-[100px] rounded-full"
            animate={{
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-orange-200/5 blur-[120px] rounded-full"
            animate={{
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Meta Pill: Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neutral-900 text-white shadow-2xl shadow-blue-900/10 border border-neutral-800 transition-transform active:scale-95 cursor-default"
            >
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Legacy Partner Since 2014</span>
            </motion.div>

            {/* Split Reveal Headline */}
            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-blue-600 mb-4 tracking-tight">
                  Defining the Standard for
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-neutral-900 leading-[0.85] tracking-tighter uppercase">
                  PRECISION<br />
                  <span className="relative inline-block text-neutral-300">
                    SECURITY
                    <motion.span
                      className="absolute left-0 bottom-2 h-[4px] md:h-[8px] bg-blue-600 z-[-1]"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                      viewport={{ once: true }}
                    />
                  </span>
                  <br />SCALE
                </h1>
              </motion.div>
            </div>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-10 max-w-2xl text-center text-lg md:text-xl text-neutral-500 font-medium leading-relaxed"
            >
              For over a decade, we have operated as the silent engine behind large-scale institutional printing. We don't just print;
              <span className="text-neutral-900"> we engineer secure operational continuity.</span>
            </motion.p>

            {/* Trust Grid: The Legacy Matrix */}
            <div className="mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: ShieldCheck, val: "10+", label: "Years Experience", color: "blue" },
                { icon: Users, val: "15K+", label: "Institutional Clients", color: "orange" },
                { icon: Activity, val: "Zero", label: "Security Breaches", color: "blue" },
                { icon: Globe, val: "28", label: "States Covered", color: "orange" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-[32px] bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <stat.icon className={`w-6 h-6 text-${stat.color}-500 mb-6 group-hover:scale-110 transition-transform`} />
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-neutral-900 tracking-tight mb-1">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------section1-------------------------*/}

      {/* ---------------------------- SECTION 2 ------------------------- */}
      {/* Operational Proof — Premium Bento Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Main Authority Block */}
          <div className="md:col-span-6 md:row-span-2 relative group">
            <div className="absolute -inset-1 rounded-[30px] bg-linear-to-br from-blue-200/40 via-transparent to-orange-200/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />


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
              <div className="mt-6 h-[3px] w-12 rounded-full bg-linear-to-r from-blue-500 to-orange-400 transition-all duration-500 group-hover:w-20" />
            </div>

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
      bg-linear-to-br from-white via-neutral-50 to-neutral-100
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

      <section className="relative py-32 bg-white overflow-hidden">
        {/* Subtle technical grid background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT — CORE NARRATIVE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3 h-3" />
                Enterprise Security Protocol
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.1] mb-8">
                Institutional-Grade <br />
                <span className="text-blue-600">Confidentiality Core</span>
              </h2>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mb-12">
                Our 5,000 sq. ft. high-security facility is engineered for the most sensitive government and enterprise documentation. We operate under a <span className="text-neutral-900 font-semibold underline decoration-blue-500/30">zero-breach mandate</span>.
              </p>

              {/* Data Points Grid */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l-2 border-blue-600 pl-6">
                  <div className="text-3xl font-bold text-neutral-900 leading-none mb-2">5,000+</div>
                  <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Sq. Ft. Secure Zone</div>
                </div>
                <div className="border-l-2 border-blue-200 pl-6">
                  <div className="text-3xl font-bold text-neutral-900 leading-none mb-2">108+</div>
                  <div className="text-sm text-neutral-500 font-medium uppercase tracking-wide">HD Surveillance Points</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold text-sm shadow-xl hover:bg-neutral-800 transition-all"
              >
                Schedule Security Audit
                <Lock className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </motion.div>

            {/* RIGHT — TECH MATRIX */}
            <div className="relative">
              {/* Premium Scanning Animation Line */}
              <motion.div
                className="absolute left-0 right-0 h-[1px] bg-blue-500/20 z-20 pointer-events-none"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

              <div className="relative space-y-4">
                {[
                  {
                    icon: Fingerprint,
                    title: "Biometric Access Control",
                    desc: "Multi-layered biometric authentication for all production zones.",
                    tag: "Access Control"
                  },
                  {
                    icon: Server,
                    title: "Audit-Log Ready",
                    desc: "Every print cycle is logged and traceable back to the source operator.",
                    tag: "Compliance"
                  },
                  {
                    icon: ShieldAlert,
                    title: "Tamper-Proof Logistics",
                    desc: "GPS-enabled, sealed transport for high-stakes documentation.",
                    tag: "Logistics"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                          <span className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">{item.tag}</span>
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ---------------------------- SECTION 3 ------------------------- */}
      {/* ================= WORKFLOW SECTION ================= */}
      {/* ================= WORKFLOW SECTION ================= */}
      <section className="relative py-28 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[420px] bg-blue-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-orange-400/10 blur-[140px]" />
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
            {/* PREMIUM WAVY CONNECTOR LINE (Desktop) */}
            <svg
              className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden md:block overflow-visible"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="premiumFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="15%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="85%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
                <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Ghost Track */}
              <path
                d="M -50,200 C 100,200 150,120 200,120 C 300,120 400,280 500,280 C 600,280 700,120 800,120 C 850,120 900,200 1050,200"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="12 16"
                className="opacity-20"
              />

              {/* Glowing Animated Wave */}
              <motion.path
                d="M -50,200 C 100,200 150,120 200,120 C 300,120 400,280 500,280 C 600,280 700,120 800,120 C 850,120 900,200 1050,200"
                fill="none"
                stroke="url(#premiumFlowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#svg-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />

              {/* Flowing Energy Node */}
              <motion.circle
                r="5"
                fill="#fff"
                filter="url(#svg-glow)"
                style={{ offsetPath: "path('M -50,200 C 100,200 150,120 200,120 C 300,120 400,280 500,280 C 600,280 700,120 800,120 C 850,120 900,200 1050,200')" }}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>

            {/* Mobile Vertical Indicator (Hidden on Desktop) */}
            <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500/0 via-blue-500/20 to-orange-500/0 md:hidden pointer-events-none" />


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
                    className={`w-3 h-3 rounded-full mb-6 ${i % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
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
      <section>
        <ClientTrustSection />
      </section>

      <section>
        <LocationServedSection /> 
      </section>


      

      {/* Footer Location - Simple */}
      <section>
        <Footer2 />
      </section>
      {/* ================= END FOOTER LOCATION ================= */}

    </div>
  );
}
