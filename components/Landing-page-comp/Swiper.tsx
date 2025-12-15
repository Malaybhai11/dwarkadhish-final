"use client";

const PRODUCTS = [
  { name: "Crayons", color: "bg-yellow-400" },
  { name: "Canvas Board", color: "bg-orange-400" },
  { name: "Brushes", color: "bg-pink-400" },
  { name: "Poster Colours", color: "bg-blue-400" },
  { name: "Writing Pencils", color: "bg-green-400" },
  { name: "Long Book", color: "bg-purple-400" },
  { name: "Notebooks", color: "bg-red-400" },
  { name: "Diaries", color: "bg-indigo-400" },
  { name: "Files", color: "bg-teal-400" },
  { name: "Sketch Pads", color: "bg-amber-400" },
  { name: "Covers", color: "bg-rose-400" },
  { name: "Art Paper", color: "bg-cyan-400" },
];

export default function ProductStrip() {
  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <div className="flex w-full select-none overflow-hidden marquee-wrapper">
        {/* First Set */}
        <div className="flex shrink-0 items-center justify-around gap-12 pr-12 marquee-content">
          {PRODUCTS.map((item, index) => (
            <div key={index} className="flex flex-col items-center shrink-0">
              {/* CARD — SIZE UNCHANGED */}
              <div
                className={`
                  w-40 h-60
                  rounded-xl
                  ${item.color}
                  shadow-md
                  flex items-center justify-center
                `}
              >
                {/* IMAGE GOES HERE */}
                {/* <img src="/product.png" className="w-full h-full object-contain" /> */}
              </div>

              <p className="mt-3 text-sm font-medium text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center justify-around gap-12 pr-12 marquee-content">
          {PRODUCTS.map((item, index) => (
            <div key={`dup-${index}`} className="flex flex-col items-center shrink-0">
              {/* CARD — SIZE UNCHANGED */}
              <div
                className={`
                  w-40 h-60
                  rounded-xl
                  ${item.color}
                  shadow-md
                  flex items-center justify-center
                `}
              >
                {/* IMAGE GOES HERE */}
              </div>

              <p className="mt-3 text-sm font-medium text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee-wrapper {
          /* Ensures the container respects overflow hiding */
          touch-action: pan-y;
        }

        .marquee-content {
          width: max-content; /* Ensure it takes full width of contents */
          animation: scroll 20s linear infinite; /* Slower for smoother effect, adjustable */
          will-change: transform;
        }

        /* Pause on hover */
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        /* Pause on touch */
        .marquee-wrapper:active .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
