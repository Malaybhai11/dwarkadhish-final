import Image from "next/image";
import { ArrowRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    image: "/made-in-india.png",
    title: "Made in India",
  },
  {
    id: 2,
    image: "/GEM-logo.png",
    title: "Government e-Marketplace (GeM)",
  },
  {
    id: 3,
    image: "/service-photo.png",
    title: "24×7 Customer Service",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">

          {certificates.map((item) => (
            <div
              key={item.id}
              className="
                relative
                bg-white
                rounded-2xl
                border border-blue-100
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                px-6 py-8
                flex flex-col items-center
                text-center
              "
            >
              {/* Blue top accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl" />

              {/* Certificate Image */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-blue-200 my-5" />

              {/* Title */}
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>

      <section className="mb-0 mt-30">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            relative
            bg-white
            rounded-[32px]
            border border-blue-100
            px-10 py-14
            md:px-20 md:py-20
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            text-center
            overflow-hidden
          "
        >
          {/* Subtle blue accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Experience the Standard of
              <span className="block text-blue-600 mt-2">
                True Printing Excellence
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-600">
              Precision-crafted paper products trusted by institutions,
              enterprises, and professionals across India.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <button
                className="
                  inline-flex items-center gap-2
                  px-8 py-3.5
                  rounded-full
                  bg-blue-600
                  text-white font-medium
                  hover:bg-blue-700
                  transition-colors
                "
              >
                Explore Products
                <ArrowRight size={16} />
              </button>

              <button
                className="
                  px-8 py-3.5
                  rounded-full
                  border border-blue-200
                  text-blue-700 font-medium
                  hover:bg-blue-50
                  transition-colors
                "
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Soft background wash (barely visible) */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_0%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />
        </div>
      </div>
    </section>
    </section>
  );
}
