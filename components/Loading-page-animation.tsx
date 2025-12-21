"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PaperLoader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDone(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="loader-root"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-[#FAFBFC] to-[#F1F3F5] overflow-hidden"
          exit={{
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        >
          {/* OPTIMIZED PAPER TEXTURE - Single lightweight layer */}
          <div 
            className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#f8fafc_0%,#f1f5f9_50%,#e2e8f0_100%)]"
            style={{ 
              backgroundSize: "200% 100%",
              animation: "grain 3s ease-in-out infinite"
            }}
          />

          {/* MAIN PAPER SHEET - Optimized for mobile */}
          <motion.div
            className="relative w-[90vw] max-w-[420px] h-[65vw] max-h-[280px] bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.1)] rounded-3xl flex flex-col items-center justify-center overflow-hidden border border-white/60 backdrop-blur-[2px]"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* ULTRA LIGHT SCAN EFFECT - GPU accelerated */}
            <motion.div
              className="absolute inset-0"
              animate={{ 
                backgroundPositionX: ["0%", "100%", "100%"]
              }}
              transition={{
                backgroundPositionX: {
                  duration: 2.8,
                  times: [0, 0.85, 1],
                  ease: "easeInOut"
                },
                repeat: Infinity
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                backgroundRepeat: "no-repeat"
              }}
            />

            {/* SUBTLE RULING LINES - Minimal count */}
            <motion.div
              className="absolute inset-x-6 inset-y-12 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-full h-[1px] bg-gradient-to-r from-slate-400/30 to-slate-400/10"
                  style={{ top: `${25 + i * 35}%` }}
                />
              ))}
            </motion.div>

            {/* WATERMARK STRIPE - Single elegant line */}
            <motion.div
              className="absolute left-6 top-1/2 w-[2px] h-20 bg-gradient-to-b from-slate-200/70 via-white/90 to-slate-200/70 rounded-full shadow-sm"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{ transformOrigin: "top" }}
            />

            {/* BRAND TEXT - Mobile-first responsive */}
            <div className="relative z-10 text-center px-6 py-4 flex-1 flex flex-col justify-center">
              {/* MAIN BRAND */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="overflow-hidden mb-3"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-sm leading-tight">
                  DWARKADHISH
                </h1>
              </motion.div>

              {/* TAGLINE - Fixed text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-slate-300" />
                <p className="text-[9px] sm:text-xs md:text-sm tracking-[0.3em] font-medium uppercase text-slate-600">
                  PAPER PRODUCTION
                </p>
                <div className="h-[1px] w-8 bg-slate-300" />
              </motion.div>
            </div>

            {/* SPEC LABEL - Compact */}
            <motion.div
              className="absolute bottom-4 right-4 text-[8px] font-mono text-slate-400 tracking-wider uppercase"
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.4 }}
            >
              SPEC v2.1
            </motion.div>
          </motion.div>

          {/* MOBILE-OPTIMIZED PROGRESS BAR */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1.5 bg-slate-200/80 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-slate-700/90 to-slate-600/90 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>

          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap');
            
            * {
              font-family: 'Inter', sans-serif;
              -webkit-font-smoothing: antialiased;
            }
            
            @keyframes grain {
              0%, 100% { background-position: 0% 0%; }
              50% { background-position: 200% 0%; }
            }
            
            @media (max-width: 640px) {
              h1 { font-size: 2rem !important; letter-spacing: -0.02em !important; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
