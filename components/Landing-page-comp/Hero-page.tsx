'use client'

import { motion } from 'framer-motion'

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function HeroPage() {
  return (
    <motion.section
      key="hero" /* replays animation on reload */
      variants={container}
      initial="hidden"
      animate="show"
      className="
        relative w-full top-25
        min-h-[100svh] md:min-h-[75vh]
        bg-cover bg-no-repeat
        bg-[position:center_30%]
        md:bg-center
      "
      style={{ backgroundImage: "url('/hero-image4.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl min-h-[100svh] md:min-h-[75vh] px-5 sm:px-6 flex items-center">
        <div className="max-w-xl text-white">

          {/* Eyebrow */}
          <motion.span
            variants={item}
            className="block mb-3 text-xs sm:text-sm tracking-widest uppercase text-white/65"
          >
            Trusted Paper Manufacturing
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight"
          >
            Paper That
            <br />
            Defines Quality
            <br />
            in Every Page
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={item}
            className="mt-5 h-px w-20 bg-gradient-to-r from-blue-500 to-transparent"
          />

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
          >
            <span className="font-semibold text-white">
              Dwarkadhish Paper Products
            </span>{" "}
            manufactures reliable notebooks, diaries, calendars, and custom paper
            solutions for everyday professional use.
          </motion.p>

        </div>
      </div>
    </motion.section>
  )
}
