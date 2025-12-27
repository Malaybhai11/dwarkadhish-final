'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, Globe, Navigation, Target, Activity } from 'lucide-react';

// --- Data Configuration ---
const LOCATIONS = [
    "Gujarat", "Delhi", "Maharashtra",
    "Kolkata", "Karnataka", "Haryana",
    "Kerala", "Madhya Pradesh", "Rajasthan",
    "Jharkhand", "Chhattisgarh", "J & K"
];

const INTERNATIONAL_LOCATIONS = [
    "Nepal", "Bhutan"
];

export default function LocationsServedSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Scroll Animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const mapScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.9]);
    const mapOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const mapBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);
    const backgroundTextY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-white py-40 md:py-64 overflow-hidden"
        >
            {/* --- CINEMATIC BACKGROUND LAYER --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Parallax Large Text */}
                <motion.div
                    style={{ y: backgroundTextY }}
                    className="absolute top-1/4 left-0 w-full text-center select-none"
                >
                    <span className="text-[24vw] font-[1000] text-slate-100 uppercase leading-none tracking-[-0.08em] opacity-80">
                        NATIONWIDE
                    </span>
                </motion.div>

                {/* Sophisticated Grid */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-size-[64px_64px]"
                />

                {/* Ambient Light Pulses */}
                <div className="absolute top-0 left-1/4 w-[1100px] h-[1100px] bg-blue-50/50 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[900px] h-[900px] bg-indigo-50/50 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container relative mx-auto px-6 z-10">

                {/* --- DYNAMIC HEADER SECTION --- */}
                <div className="flex flex-col items-center text-center mb-36 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-950 text-white mb-12 shadow-2xl shadow-blue-900/20">
                            <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em]">Live Logistics Network</span>
                        </div>

                        <h2 className="text-7xl md:text-[10.5rem] font-[1000] text-slate-950 tracking-tighter leading-[0.75] mb-16 uppercase">
                            DOMINATING THE <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-indigo-600 to-blue-700 bg-size-[200%_auto] animate-[gradient_10s_ease_infinite]">
                                SUBCONTINENT
                            </span>
                        </h2>

                        <p className="text-2xl md:text-4xl text-slate-400 font-bold leading-tight max-w-5xl mx-auto">
                            Engineering the most secure documented future, delivering
                            precision paper solutions across every critical hub in the region.
                        </p>
                    </motion.div>
                </div>

                {/* --- INTERACTIVE MAP ENVIRONMENT --- */}
                <div className="relative flex flex-col items-center group">

                    {/* Map Interaction Glow */}
                    <div className="absolute inset-0 bg-blue-400/5 blur-[120px] scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* The Main Map Hero */}
                    <motion.div
                        style={{ scale: mapScale, opacity: mapOpacity, filter: mapBlur }}
                        className="relative w-full max-w-6xl aspect-16/10 flex items-center justify-center mb-32 z-10 perspective-1000"
                    >
                        <Image
                            src="/About-us-img/India-services.jpg"
                            alt="India Subcontinent Map"
                            width={1600}
                            height={1000}
                            quality={100}
                            priority
                            className="object-contain w-full h-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] filter grayscale-[0.4] group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-[1.03] transition-all duration-1000 ease-out transform-gpu"
                        />
                    </motion.div>

                    {/* --- THE 3D TILT LEGEND MATRIX --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.2 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        ref={cardRef}
                        className="w-full max-w-5xl relative group/matrix"
                    >
                        {/* Internal Glow Effect */}
                        <div className="absolute -inset-4 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover/matrix:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[5rem] blur-2xl" />

                        {/* Glass Body */}
                        <div className="relative border border-slate-200/50 bg-white/70 backdrop-blur-3xl p-14 md:p-24 rounded-[4.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] overflow-hidden transform-gpu">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-20">

                                {/* Global Stats */}
                                <div className="md:col-span-1 flex flex-col justify-center space-y-14">
                                    <div className="space-y-4">
                                        <div className="text-7xl font-[1000] text-slate-950 leading-none">28+</div>
                                        <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] leading-none">Hubs Operational</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-7xl font-[1000] text-blue-600 leading-none">02</div>
                                        <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] leading-none">Neighbor Borders</div>
                                    </div>
                                </div>

                                {/* Network Hubs */}
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-5 mb-12">
                                        <div className="w-10 h-10 rounded-2xl bg-blue-50/80 flex items-center justify-center shadow-sm">
                                            <MapPin className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <h3 className="text-[14px] font-[1000] text-slate-950 uppercase tracking-[0.4em]">
                                            Strategic Hubs
                                        </h3>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-y-6 gap-x-14">
                                        {LOCATIONS.map((loc, idx) => (
                                            <motion.li
                                                key={loc}
                                                initial={{ opacity: 0, x: -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 + idx * 0.05 }}
                                                className="flex items-center group/item cursor-default"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-all duration-300 mr-5" />
                                                <span className="text-sm font-black text-slate-500 group-hover/item:text-slate-950 transition-colors tracking-tight">{loc}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cross-Border Reach */}
                                <div className="md:col-span-1 border-l border-slate-100 pl-12 md:pl-20">
                                    <div className="flex items-center gap-5 mb-12">
                                        <div className="w-10 h-10 rounded-2xl bg-indigo-50/80 flex items-center justify-center shadow-sm">
                                            <Globe className="text-indigo-600 w-5 h-5" />
                                        </div>
                                        <h3 className="text-[14px] font-[1000] text-slate-950 uppercase tracking-[0.4em]">
                                            International
                                        </h3>
                                    </div>
                                    <ul className="space-y-6">
                                        {INTERNATIONAL_LOCATIONS.map((loc, idx) => (
                                            <motion.li
                                                key={loc}
                                                initial={{ opacity: 0, x: 15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
                                                className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100/60 group/globe hover:bg-slate-100 transition-colors cursor-default"
                                            >
                                                <div className="p-3 rounded-2xl bg-white shadow-xs group-hover/globe:rotate-15 transition-transform">
                                                    <Target className="w-5 h-5 text-indigo-500" />
                                                </div>
                                                <span className="text-[13px] font-black text-slate-900 uppercase tracking-widest">{loc}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    );
}

function PulseNode({ delay = 0 }: { delay?: number }) {
    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                animate={{ scale: [1, 2.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
                className="absolute w-14 h-14 rounded-full bg-blue-500/20"
            />
            <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
                className="relative w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,1)] border-2 border-white/90"
            />
        </div>
    );
}
