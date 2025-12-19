'use client';

import { motion } from 'framer-motion';
import { Upload, Printer, Truck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Content',
    description: 'Upload your cover or choose our premium templates. Add text and images in our drag-and-drop editor.',
    highlight: 'Instant Preview Available',
  },
  {
    number: '02',
    icon: Printer,
    title: 'Precision Printing',
    description: 'We print on archival-grade paper using high-definition offset technology for crisp text and vibrant colors.',
    highlight: 'Quality Check Included',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Express Delivery',
    description: 'Your custom book is securely packaged in a protective sleeve and shipped directly to your doorstep.',
    highlight: 'Tracked & Insured',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HowItWorksPremium() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-blue-900 uppercase">Seamless Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            From your screen <br/> to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">bookshelf.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We've refined the publishing process into three simple, premium steps. 
            No technical skills required.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0 transform translate-y-4" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* Subtle Background Number */}
                  <span className="absolute -top-6 -right-6 text-[180px] font-bold text-slate-50 select-none transition-colors group-hover:text-blue-50/50">
                    {step.number}
                  </span>

                  {/* Icon Container with Glassmorphism */}
                  <div className="relative w-16 h-16 mb-8 mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute inset-0 backdrop-blur-xl rounded-2xl border border-blue-100/50" />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <step.icon className="w-8 h-8 text-blue-600 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    {/* Glowing Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/40 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm lg:text-base">
                      {step.description}
                    </p>
                    
                    {/* Premium Feature Tag */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-900/80 bg-blue-50 w-fit px-3 py-1.5 rounded-lg border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      {step.highlight}
                    </div>
                  </div>

                  {/* Hover Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="/custom"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-2xl overflow-hidden transition-transform active:scale-95 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Start Designing Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-500">
            No credit card required for design phase
          </p>
        </motion.div>
      </div>
    </section>
  );
}