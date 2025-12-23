'use client';

import React from 'react';

const NotebookHero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden flex justify-center items-center">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Layout: Mobile = Stacked (Image on top via col-reverse), Desktop = Grid (Text Left, Image Right) */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Text Content (40-45% width on desktop) */}
          <div className="w-full lg:col-span-5 flex flex-col items-start text-left space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-gray-600 uppercase">
                Newly Launched
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Customize Notebooks for Your Business
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-500 max-w-md leading-relaxed">
              Design covers, pages, and branding – built for scale. Trusted by teams, institutions, and growing brands.
            </p>

            {/* CTA Button */}
            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2">
              Start Customizing
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
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* RIGHT COLUMN: Visual (55-60% width on desktop) */}
          {/* Note: In flex-col-reverse, this appears first on mobile */}
          <div className="w-full lg:col-span-7 flex flex-col items-center">

            {/* Main Frame Container */}
            <div className="relative w-full aspect-[4/3] max-w-[600px] rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8 overflow-hidden">

              {/* Technical Grid Background Pattern (CSS Grid Simulation) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              ></div>

              {/* Notebook CSS Composition */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-[-10px]">

                {/* Layer 3: Bottom Stack (Deepest) */}
                <div className="absolute w-[60%] h-[55%] bg-white border border-gray-200 shadow-sm rounded-r-md translate-x-[25px] translate-y-[15px]"></div>

                {/* Layer 2: Middle Stack */}
                <div className="absolute w-[60%] h-[58%] bg-white border border-gray-200 shadow-sm rounded-r-md translate-x-[15px] translate-y-[8px]"></div>

                {/* Layer 1: Main Open Book */}
                <div className="relative w-[65%] h-[65%] flex shadow-xl shadow-slate-200/50">

                  {/* Left Page */}
                  <div className="flex-1 bg-gray-50 border-y border-l border-gray-200 rounded-l-sm relative overflow-hidden">
                    {/* Spine Shadow */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent z-10"></div>
                  </div>

                  {/* Right Page */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-r-sm relative flex items-center justify-center">
                    {/* Spine Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent z-10"></div>

                    {/* Placeholder Content Area */}
                    <div className="text-center px-2 z-20 opacity-40">
                      <img src="/images/notebook2.png" alt="" />
                    </div>

                    {/* Faint Page Lines (Visual Detail) */}
                    <div className="absolute inset-4 border border-dashed border-gray-200 opacity-50 pointer-events-none"></div>
                  </div>

                  {/* Center Spine Binding */}
                  <div className="absolute left-1/2 top-[2%] bottom-[2%] w-[1px] -translate-x-1/2 border-l border-dashed border-gray-300 z-20"></div>

                  {/* Binding Staples/Holes Simulation */}
                  <div className="absolute left-1/2 top-[20%] w-1 h-1 bg-gray-300 rounded-full -translate-x-1/2 z-30"></div>
                  <div className="absolute left-1/2 top-[50%] w-1 h-1 bg-gray-300 rounded-full -translate-x-1/2 z-30"></div>
                  <div className="absolute left-1/2 top-[80%] w-1 h-1 bg-gray-300 rounded-full -translate-x-1/2 z-30"></div>
                </div>

                {/* Caption inside the frame */}
                <div className="absolute bottom-6 md:bottom-8 text-center w-full">
                  <p className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Custom Notebook Preview
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="mt-4 md:mt-6">
              <p className="text-sm md:text-base font-medium text-slate-500 tracking-wide">
                Cover &bull; Pages &bull; Branding &bull; Finish
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NotebookHero;