'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, GraduationCap } from 'lucide-react';

// =============================================================================
// 1. CONFIGURATION ZONE
// =============================================================================

const CLIENTS = {
  private: [
    { name: 'Tech Corp', url: '/Clients/Private-sector/1.jpeg' },
    { name: 'Innovate', url: '/Clients/Private-sector/2.jpeg' },
    { name: 'Future Systems', url: '/Clients/Private-sector/3.jpeg' },
    { name: 'Alpha', url: '/Clients/Private-sector/4.jpeg' },
    { name: 'Beta Inc', url: '/Clients/Private-sector/5.jpeg' },
    { name: 'Gamma', url: '/Clients/Private-sector/6.jpeg' },
    { name: 'Delta', url: '/Clients/Private-sector/7.jpeg' },
  ],
  government: [
    { name: 'City Council', url: '/Clients/Goverment-sector/2.jpeg' },
    { name: 'Public Works', url: '/Clients/Goverment-sector/3.png' },
    { name: 'Transport', url: '/Clients/Goverment-sector/4.jpeg' },
    { name: 'Health', url: '/Clients/Goverment-sector/5.jpeg' },
    { name: '--', url: '/Clients/Goverment-sector/6.jpeg' },
    { name: '--', url: '/Clients/Goverment-sector/7.jpeg' },
    { name: '--', url: '/Clients/Goverment-sector/8.jpeg' },
    { name: '--', url: '/Clients/Goverment-sector/9.jpeg' },
    { name: '--', url: '/Clients/Goverment-sector/10.webp' },
    { name: '--', url: '/Clients/Goverment-sector/11.webp' },
  ],
  education: [
    { name: '--', url: 'Clients/edu/1.jpg' },
    { name: '--', url: 'Clients/edu/2.jpg' },
    { name: '--', url: 'Clients/edu/3.jpg' },
    { name: '--', url: 'Clients/edu/4.jpg' },
    { name: '--', url: 'Clients/edu/5.jpg' },
    { name: '--', url: 'Clients/edu/6.jpg' },
    { name: 'Health', url: '/Clients/Goverment-sector/5.jpeg' },
  ]
};

// =============================================================================
// 2. REUSABLE SUB-COMPONENTS
// =============================================================================

const LogoItem = ({ item, type }: { item: any; type: string }) => {
  const Icon = type === 'private' ? Building2 : type === 'government' ? Landmark : GraduationCap;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex items-center justify-center mx-12 min-w-[150px] md:min-w-[220px]"
    >
      <div className="relative flex items-center justify-center h-16 w-full px-6 transition-all duration-500 rounded-3xl group-hover:bg-white/60 group-hover:shadow-[0_20px_50px_rgba(8,112,184,0.05)] group-hover:backdrop-blur-md group-hover:border group-hover:border-blue-100/50">
        {/* Subtle hover background accent */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/30 rounded-3xl transition-all duration-700" />

        {/* Logo Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {item.url && item.url !== '' ? (
            <img
              src={item.url}
              alt={item.name}
              className="h-16 md:h-22 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-slate-400 group-hover:text-blue-600 transition-colors">
              <Icon size={52} strokeWidth={1} />
              <span className="text-[11px] uppercase tracking-[0.15em] font-semibold">{item.name}</span>
            </div>
          )}
        </div>

        {/* Modern Corner Accents on hover */}
        <div className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500 rounded-tl-sm" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500 rounded-br-sm" />
      </div>
    </motion.div>
  );
};

const InfiniteMarquee = ({ items, direction = 'left', speed = 50, type }: { items: any[]; direction?: 'left' | 'right'; speed?: number; type: string }) => {
  return (
    <div className="relative flex w-full overflow-hidden select-none mask-fade-edges py-16">
      <div
        className={`flex min-w-full shrink-0 items-center justify-around animate-marquee hover:[animation-play-state:paused]`}
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s`
        }}
      >
        {items.map((item, idx) => (
          <LogoItem key={`a-${idx}`} item={item} type={type} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around animate-marquee hover:[animation-play-state:paused]`}
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s`
        }}
      >
        {items.map((item, idx) => (
          <LogoItem key={`b-${idx}`} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// 3. MAIN COMPONENT
// =============================================================================

export default function TrustSection() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

        {/* Soft Ambient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-50 border border-slate-200/60 mb-8 shadow-xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.25em]">
              Strategic Collaboration
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-10"
          >
            Trusted by the world's <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-[200%_auto] animate-gradient">
              innovation leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We empower organizations across sectors to achieve unprecedented security
            and scale through our network of elite technology and government partners.
          </motion.p>
        </div>

        {/* --- SCROLLING ROWS --- */}
        <div className="flex flex-col gap-12 relative z-10 max-w-[1500px] mx-auto">

          {/* Row 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-6 px-6">
              <h2 className="text-[18px] font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Enterprise Sector</h2>
              <div className="h-px flex-1 bg-linear-to-r from-slate-200 to-transparent opacity-60" />
            </div>
            <InfiniteMarquee items={CLIENTS.private} speed={55} type="private" />
          </div>

          {/* Row 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-6 px-6 flex-row-reverse">
              <h2 className="text-[18px] font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap text-right">Public Governance</h2>
              <div className="h-px flex-1 bg-linear-to-l from-slate-200 to-transparent opacity-60" />
            </div>
            <InfiniteMarquee items={CLIENTS.government} direction="right" speed={65} type="government" />
          </div>

          {/* Row 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-6 px-6">
              <h2 className="text-[18px] font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Academic Institutions</h2>
              <div className="h-px flex-1 bg-linear-to-r from-slate-200 to-transparent opacity-60" />
            </div>
            <InfiniteMarquee items={CLIENTS.education} speed={60} type="education" />
          </div>

        </div>
      </div>
    </section>
  );
}
