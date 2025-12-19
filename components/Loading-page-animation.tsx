"use client";

import { useEffect, useState } from "react";

export default function BookLoader({ onTransitionStart, onComplete }) {
  const [stage, setStage] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // --- TIMELINE MASTER ---
    // 0.5s: Pages Slide In
    // 1.5s: Cover Wraps
    // 2.2s: Gold Stamp & Shimmer
    // 3.8s: START EXIT (Trigger Parent Content)
    // 4.8s: UNMOUNT

    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2200);

    // Trigger the exit animation and tell Parent to show content
    const timerExit = setTimeout(() => {
      setExiting(true);
      if (onTransitionStart) onTransitionStart();
    }, 3800);

    // Tell Parent to remove this component entirely
    const timerRemove = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerExit);
      clearTimeout(timerRemove);
    };
  }, [onTransitionStart, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] transition-all duration-1000 ease-out"
      style={{
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "auto",
        transform: exiting ? "scale(1.1)" : "scale(1)", // Subtle zoom out on exit
      }}
    >
      {/* AMBIENT STUDIO PARTICLES */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      {/* 3D BOOK STAGE */}
      <div className="perspective-stage">
        <div className={`book-construct ${stage >= 1 ? "active" : ""}`}>
          {/* SHADOW */}
          <div className="shadow-blur"></div>

          {/* PAGES STACK */}
          <div className="pages-group">
            <div className="page-sheet s1"></div>
            <div className="page-sheet s2"></div>
            <div className="page-sheet s3"></div>
          </div>

          {/* COVER SYSTEM */}
          <div className="cover-system">
            <div className="cover-spine"></div>
            <div className="cover-back"></div>
            <div className="cover-front">
              <div className={`gold-stamp-container ${stage >= 3 ? "stamped" : ""}`}>
                <div className="logo-ring">DW</div>
                <h1 className="brand-text">DWARKADHISH</h1>
                <div className="gold-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ELEGANT LOADING TEXT */}
      <div
        className={`mt-20 text-center transition-all duration-700 ${
          stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p className="text-[10px] font-bold tracking-[0.5em] text-gray-400 uppercase animate-pulse">
          Crafting Excellence
        </p>
      </div>

      <style jsx>{`
        /* --- 3D STAGE --- */
        .perspective-stage {
          perspective: 1500px;
          width: 300px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .book-construct {
          position: relative;
          width: 200px;
          height: 280px;
          transform-style: preserve-3d;
          transform: rotateX(30deg) rotateY(-30deg) translateZ(-100px);
          transition: transform 2.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .book-construct.active {
          transform: rotateX(10deg) rotateY(-15deg) translateZ(0);
          animation: hover-book 4s ease-in-out infinite 2.5s;
        }

        /* --- PAGES (Core) --- */
        .pages-group {
          position: absolute;
          right: 2px;
          top: 4px;
          width: 190px;
          height: 272px;
          transform-style: preserve-3d;
        }

        .page-sheet {
          position: absolute;
          inset: 0;
          background: #fff;
          border-left: 1px solid #eee;
          box-shadow: 1px 0 2px rgba(0, 0, 0, 0.05);
          transform-origin: left;
        }
        .s1 {
          transform: translateZ(-2px);
          transition: transform 0.6s 0.1s;
        }
        .s2 {
          transform: translateZ(-4px);
          transition: transform 0.6s 0.2s;
        }
        .s3 {
          transform: translateZ(-6px);
          transition: transform 0.6s 0.3s;
        }

        /* Initial state: Pages exploded out */
        .book-construct:not(.active) .s1 {
          transform: translateZ(-50px) translateX(50px);
          opacity: 0;
        }
        .book-construct:not(.active) .s2 {
          transform: translateZ(-100px) translateX(80px);
          opacity: 0;
        }
        .book-construct:not(.active) .s3 {
          transform: translateZ(-150px) translateX(110px);
          opacity: 0;
        }

        /* --- COVER --- */
        .cover-system {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        .cover-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #1e3a8a; /* Royal Blue */
          transform: translateZ(-8px);
          border-radius: 2px 6px 6px 2px;
          box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.2);
        }

        .cover-spine {
          position: absolute;
          left: 0;
          width: 12px;
          height: 100%;
          background: #172554;
          transform: rotateY(90deg) translateX(-6px) translateZ(-6px);
        }

        .cover-front {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1e3a8a, #172554);
          transform-origin: left;
          transform: rotateY(-140deg); /* Start open */
          transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s; /* Wrap delay */
          border-radius: 2px 6px 6px 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden; /* Hide back when open */
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .active .cover-front {
          transform: rotateY(0deg); /* Snap shut */
        }

        /* --- GOLD BRANDING --- */
        .gold-stamp-container {
          text-align: center;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s ease-out;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        .stamped {
          opacity: 1;
          transform: scale(1);
        }

        .logo-ring {
          width: 50px;
          height: 50px;
          border: 2px solid #d4af37; /* Metallic Gold */
          border-radius: 50%;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          font-weight: 700;
          font-family: serif;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
        }

        .brand-text {
          font-family: serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: transparent;
          background: linear-gradient(
            to right,
            #bf953f,
            #fcf6ba,
            #b38728,
            #fbf5b7,
            #aa771c
          );
          -webkit-background-clip: text;
          background-clip: text;
          position: relative;
          z-index: 2;
        }

        /* Moving Light Reflection */
        .gold-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: skewX(-25deg);
          z-index: 3;
          animation: shimmer-move 2s infinite 3s; /* Starts after stamp */
        }

        /* --- SHADOW --- */
        .shadow-blur {
          position: absolute;
          width: 180px;
          height: 20px;
          background: black;
          opacity: 0;
          bottom: -40px;
          left: 10px;
          border-radius: 50%;
          filter: blur(15px);
          transition: opacity 1s 1s, transform 1s 1s;
          transform: scale(0.5);
        }
        .active .shadow-blur {
          opacity: 0.2;
          transform: scale(1);
        }

        /* --- KEYFRAMES --- */
        @keyframes hover-book {
          0%,
          100% {
            transform: rotateX(10deg) rotateY(-15deg) translateY(0);
          }
          50% {
            transform: rotateX(12deg) rotateY(-12deg) translateY(-8px);
          }
        }

        @keyframes shimmer-move {
          0% {
            left: -150%;
          }
          100% {
            left: 200%;
          }
        }

        /* --- PARTICLES --- */
        .particle {
          position: absolute;
          background: #000;
          border-radius: 50%;
        }
        .p1 {
          width: 2px;
          height: 2px;
          top: 20%;
          left: 30%;
          animation: float 10s infinite;
          opacity: 0.1;
        }
        .p2 {
          width: 4px;
          height: 4px;
          top: 60%;
          left: 70%;
          animation: float 15s infinite reverse;
          opacity: 0.05;
        }
        .p3 {
          width: 1px;
          height: 1px;
          top: 40%;
          left: 50%;
          animation: float 20s infinite;
          opacity: 0.1;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}