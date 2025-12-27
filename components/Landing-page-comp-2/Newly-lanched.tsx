'use client';

import React from 'react';

const NotebookHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 md:py-20 lg:py-24 overflow-hidden flex justify-center items-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Layout: Mobile = Stacked (Image on top via col-reverse), Desktop = Grid (Text Left, Image Right) */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Text Content (40-45% width on desktop) */}
          <div className="w-full lg:col-span-5 flex flex-col items-start text-left space-y-6 animate-fadeIn">

            {/* Badge with Animation */}
            <div className="inline-flex items-center rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-1.5 shadow-sm hover:shadow-md transition-all hover:scale-105 animate-slideDown">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-blue-700 uppercase">
                Newly Launched
              </span>
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 bg-clip-text text-transparent leading-[1.15]">
              Customize Notebooks for Your Business
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed">
              Design covers, pages, and branding – built for scale. Trusted by teams, institutions, and growing brands worldwide.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Fast Delivery', 'Premium Quality', 'Bulk Orders'].map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-3 h-3 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Start Customizing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1 relative"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* RIGHT COLUMN: Visual (55-60% width on desktop) */}
          {/* Note: In flex-col-reverse, this appears first on mobile */}
          <div className="w-full lg:col-span-7 flex flex-col items-center">

            {/* Dual Image Container - Simplified */}
            <div className="w-full max-w-[650px]">

              {/* Images Grid - Simple Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* First Notebook - Man */}
                <div className="group relative rounded-2xl border-2 border-slate-200 bg-white shadow-xl hover:shadow-2xl p-5 overflow-hidden transition-all duration-500 hover:scale-[1.03]">

                  {/* Technical Grid Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>

                  {/* Notebook Image */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/notebook-man.png"
                      className='w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105'
                      alt="Customizable business notebook"
                    />
                  </div>
                </div>

                {/* Second Notebook - Woman */}
                <div className="group relative rounded-2xl border-2 border-slate-200 bg-white shadow-xl hover:shadow-2xl p-5 overflow-hidden transition-all duration-500 hover:scale-[1.03]">

                  {/* Technical Grid Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>

                  {/* Notebook Image */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/images/notebook-woman.png"
                      className='w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105'
                      alt="Customizable business notebook"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Text with Icons */}
            <div className="mt-8 md:mt-10">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {[
                  { icon: '📘', text: 'Custom Covers' },
                  { icon: '📄', text: 'Pages' },
                  { icon: '✨', text: 'Branding' },
                  { icon: '🎨', text: 'Finish' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-200 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-xs md:text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default NotebookHero;