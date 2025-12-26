"use client";

const PRODUCTS = [
  { name: "Banners", image: "/swiper-images2/banner.png" },
  { name: "Bill-Books", image: "/swiper-images2/bill-books.png" },
  { name: "Bottle-lables", image: "/swiper-images/bottle-label.png" },
  { name: "Business-cards", image: "/swiper-images2/business-card.png" },
  { name: "Calenders", image: "/swiper-images2/calender.png" },
  { name: "Id-Cards", image: "/swiper-images2/id-card.png" },
  { name: "Files", image: "/swiper-images2/lever-arch-file.png" },
  { name: "Notebooks", image: "/swiper-images2/notebook.png" },
  { name: "Paper-bags", image: "/swiper-images2/paper-bag.png" },
  { name: "School-diarys", image: "/swiper-images2/school-diary.png" },
  { name: "Standys", image: "/swiper-images2/standy.png" },
];

export default function ProductStrip() {
  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <div className="flex w-full select-none overflow-hidden marquee-wrapper">
        {/* First Set */}
        <div className="flex shrink-0 items-center justify-around gap-12 pr-12 marquee-content">
          {PRODUCTS.map((item, index) => (
            <div key={index} className="flex flex-col items-center shrink-0 group cursor-pointer">
              {/* CARD — ULTRA SLIM & IMAGE FOCUS */}
              <div
                className="
                  w-64 h-[350px]
                  rounded-[2rem]
                  bg-white
                  relative
                  overflow-hidden
                  transition-all duration-700
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  group-hover:-translate-y-3
                "
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover scale-[2] transition-transform duration-1000 group-hover:scale-[2.2]"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-50 text-gray-400 font-medium">
                    {item.name}
                  </div>
                )}

                {/* Subtle Overlay for better depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-1">
                <p className="text-lg font-bold text-gray-900 tracking-tight">
                  {item.name}
                </p>
                <div className="h-1 w-0 bg-blue-500 mx-auto mt-1 rounded-full transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center justify-around gap-12 pr-12 marquee-content">
          {PRODUCTS.map((item, index) => (
            <div key={`dup-${index}`} className="flex flex-col items-center shrink-0 group cursor-pointer">
              {/* CARD — ULTRA SLIM & IMAGE FOCUS */}
              <div
                className="
                  w-64 h-[350px]
                  rounded-[2rem]
                  bg-white
                  relative
                  overflow-hidden
                  transition-all duration-700
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  group-hover:-translate-y-1
                "
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover scale-[2] transition-transform duration-1000 group-hover:scale-[2.2]"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-50 text-gray-400 font-medium">
                    {item.name}
                  </div>
                )}

                {/* Subtle Overlay for better depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-1">
                <p className="text-lg font-bold text-gray-900 tracking-tight">
                  {item.name}
                </p>
                <div className="h-1 w-0 bg-blue-500 mx-auto mt-1 rounded-full transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .marquee-wrapper {
          touch-action: pan-y;
        }

        .marquee-content {
          width: max-content;
          animation: scroll 20s linear infinite;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

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
