'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
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
        relative w-full top-19
        min-h-[100svh] md:min-h-[75vh]
        bg-cover bg-no-repeat
        bg-[position:center_30%]
        md:bg-center
      "
      style={{ backgroundImage: "url('/hero-image4.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[90svh] flex items-center">
        <div className="max-w-2xl text-white text-center sm:text-left">
          
          {/* Trust badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-semibold">
              Gives more than expected
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
          >
            Custom Books,
            <br />
            Printed & Delivered to You
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base lg:text-lg text-white/85 max-w-xl mb-7"
          >
            Upload your design or choose a template. We print premium-quality
            custom books and deliver them anywhere in India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* Primary CTA */}
            <a
              href="/custom"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-xl
                bg-blue-600 hover:bg-blue-700
                text-sm sm:text-base font-semibold
                transition-colors
              "
            >
              Create Custom Book
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/samples"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-xl
                border border-white/30
                text-sm sm:text-base font-medium
                hover:bg-white/10
                transition-colors
              "
            >
              View Samples
            </a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
