"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, BadgeDollarSign, Handshake } from 'lucide-react';

// --- Sub-Components ---

const Badge = ({ text }: { text: string }) => (
    <div className="absolute top-3 left-3 z-10 bg-[#1565C0] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm tracking-wide uppercase">
        {text}
    </div>
);

const ActionButton = ({ text, className }: { text: string, className?: string }) => (
    <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all w-fit ${className}`}
    >
        {text}
        <ChevronRight size={14} />
    </motion.button>
);

const ImagePlaceholder = ({ className, text = "YOUR IMAGE HERE" }: { className?: string, text?: string }) => (
    <div className={`w-full bg-[#f8faff] border-2 border-dashed border-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden group ${className}`}>
        <span className="text-blue-200 font-bold text-[10px] uppercase tracking-widest group-hover:text-blue-300 transition-colors pointer-events-none select-none text-center px-2">
            {text}
        </span>
    </div>
);

// --- Main Component ---

export default function BusinessNeeds() {
    return (
        <section className="w-full bg-white py-10 px-4 md:px-6 lg:px-8 overflow-hidden font-sans">

            {/* Container */}
            <div className="w-full max-w-[1440px] mx-auto">

                {/* Header */}
                <div className="mb-10 pl-2">
                    <h2 className="text-2xl md:text-5xl font-extrabold text-[#1565C0] tracking-tight mb-3 uppercase">
                        Shop by Business Needs
                    </h2>
                    <div className="h-1.5 w-32 bg-[#1565C0] rounded-full mb-2 opacity-80" />
                    <p className="text-slate-500 text-lg font-medium max-w-2xl">
                        Tailored solutions for every stage. Explore our premium packages.
                    </p>
                </div>

                {/* Grid Layout - 12 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-15 gap-2 w-full items-stretch">

                    {/* COL 1: Startups & Growth (Span 4) */}
                    <div className="lg:col-span-5 bg-white rounded-[16px] p-4 shadow-xl shadow-blue-900/5 border border-white h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative w-full mb-6">
                            <Badge text="BULK SAVINGS" />
                            <ImagePlaceholder className="aspect-16/10 w-full" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Startups & Growth</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">Scalable solutions, fast quotes, flexible plans.</p>
                        <div className="mt-auto">
                            <ActionButton text="Explore Options" />
                        </div>
                    </div>

                    {/* COL 2: Corporate Packs (Span 2) */}
                    <div className="lg:col-span-3 bg-white rounded-[16px] p-2 shadow-xl shadow-blue-900/5 border border-white h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative w-full mb-4 grow">
                            <Badge text="24H DISPATCH" />
                            <ImagePlaceholder className="aspect-[3/4] w-full h-full" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Corporate Packs</h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed mb-6">Complete office essentials, branded kits, premium quality</p>
                        <div className="mt-auto">
                            <ActionButton text="View Packs" />
                        </div>
                    </div>

                    {/* COL 3: Events & Merch Vertical (Span 2) */}
                    <div className="lg:col-span-3 bg-white rounded-[16px] p-2 shadow-xl shadow-blue-900/5 border border-white h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative w-full grow mb-4 flex flex-col">
                            <Badge text="BULK SAVINGS" />
                            <ImagePlaceholder className="grow w-full min-h-[350px]" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">Events & Merch</h3>
                        <p className="text-slate-500 text-[11px] leading-relaxed mb-4">Custom branding, promotional materials, large quantities</p>
                        <div className="mt-auto w-full">
                            <ActionButton text="Get Quote" className="w-full" />
                        </div>
                    </div>


                    {/* COL 4: Stacked Right (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-4 h-full">

                        {/* Top Card */}
                        <div className="bg-white rounded-[32px] p-3 shadow-xl shadow-blue-900/5 border border-white flex gap-4 items-center flex-1 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-58 h-40 flex-shrink-0">
                                <Badge text="24H DISPATCH" />
                                <ImagePlaceholder className="w-full h-full !rounded-2xl" />
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Events & Merch</h3>
                                <p className="text-slate-500 text-[11px] mb-3 leading-tight">Custom branding materials.</p>
                                <ActionButton text="Get Quote" />
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="bg-white rounded-[32px] p-3 shadow-xl shadow-blue-900/5 border border-white flex gap-3 items-center flex-1 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-58 h-40 flex-shrink-0">
                                <Badge text="BEST SELLER" />
                                <ImagePlaceholder className="w-full h-full !rounded-2xl" />
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Employee Gifting</h3>
                                <p className="text-slate-500 text-[11px] mb-3 leading-tight">Welcome kits, premium boxes.</p>
                                <ActionButton text="Order Now" />
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-row justify-between items-center gap-1 mt-auto px-1">
                            <TrustItem icon={<ShieldCheck size={18} />} text="SECURE PAYMENTS" />
                            <TrustItem icon={<BadgeDollarSign size={18} />} text="MONEY-BACK GUARANTEE" />
                            <TrustItem icon={<Handshake size={18} />} text="TRUSTED B2B PARTNER" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

const TrustItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 flex-shrink-0 bg-[#eff6ff] text-[#1565C0] rounded-full flex items-center justify-center transition-all group-hover:bg-[#1565C0] group-hover:text-white">
            {icon}
        </div>
        <span className="text-[9px] md:text-[8px] font-bold text-slate-500 leading-tight uppercase max-w-[70px]">
            {text}
        </span>
    </div>
);