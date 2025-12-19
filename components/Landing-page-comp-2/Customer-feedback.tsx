'use client';

import React from 'react';

// Mock Data with more detail
const testimonials = [
  {
    id: 1,
    quote: "The paper quality for our annual reports was flawless. We usually struggle with ink bleed on bulk orders, but this stock was perfect.",
    name: "Vikram Malhotra",
    role: "Supply Chain Lead",
    company: "Apex Logistics",
    verified: true,
    logo: (
      <svg className="h-6 text-slate-400 opacity-80" viewBox="0 0 120 40" fill="currentColor">
        <path d="M20 20L10 35H30L20 20Z" />
        <text x="35" y="28" fontFamily="sans-serif" fontSize="18" fontWeight="bold">APEX</text>
      </svg>
    )
  },
  {
    id: 2,
    quote: "We needed 500 custom notebooks for our tech conference. The team matched our brand Pantone colors exactly. Delivery was two days early.",
    name: "Aditi Rao",
    role: "Marketing Director",
    company: "Nexus Tech",
    verified: true,
    logo: (
      <svg className="h-6 text-slate-400 opacity-80" viewBox="0 0 120 40" fill="currentColor">
        <circle cx="15" cy="20" r="10" />
        <text x="35" y="28" fontFamily="sans-serif" fontSize="18" fontWeight="bold">NEXUS</text>
      </svg>
    )
  },
  {
    id: 3,
    quote: "A reliable partner for school stationery. The customization options for the covers allowed us to create a unique identity for our students.",
    name: "Dr. S. Mehta",
    role: "Principal",
    company: "GreenValley High",
    verified: true,
    logo: (
      <svg className="h-6 text-slate-400 opacity-80" viewBox="0 0 140 40" fill="currentColor">
        <rect x="5" y="10" width="20" height="20" rx="4" />
        <text x="35" y="28" fontFamily="sans-serif" fontSize="18" fontWeight="bold">VALLEY</text>
      </svg>
    )
  },
];

const VerifiedBadge = () => (
  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 w-fit mb-3">
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span>VERIFIED CLIENT</span>
  </div>
);

const PremiumFeedback = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      
      {/* Background Decor: Subtle gradient blur to make it feel 'alive' */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-100/50 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Header: More authoritative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Trusted by growing businesses.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We focus on consistency and print quality, so our partners can focus on their operations.
            </p>
          </div>
          
          {/* Statistical Social Proof */}
          <div className="hidden md:block text-right">
            <p className="text-3xl font-bold text-slate-900">500+</p>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Corporate Partners</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-50 transition-colors pointer-events-none" />

              {/* Card Header: Logo & Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="grayscale opacity-70 transition-opacity group-hover:grayscale-0 group-hover:opacity-100">
                  {item.logo}
                </div>
                {item.verified && <VerifiedBadge />}
              </div>

              {/* Quote Area */}
              <div className="relative mb-8 flex-grow">
                {/* Large Background Quote Icon */}
                <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif leading-none select-none -z-10">
                  &ldquo;
                </span>
                <p className="relative text-[1.05rem] leading-relaxed text-slate-700 font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Footer: User Details */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm shadow-inner">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.role}, {item.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeedback;