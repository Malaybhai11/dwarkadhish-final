"use client";

const CATEGORIES = [
  "Notebooks",
  "Diaries",
  "Drawing",
  "Office Use",
  "School",
];

export default function CategoryStrip() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <p className="text-sm text-gray-600 mb-6">
          You might be looking for…
        </p>

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center"
            >
              {/* Circle Icon */}
              <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center">
                {/* ICON / IMAGE GOES HERE */}
                {/* <img src="/icon.png" alt={item} /> */}
              </div>

              {/* Label */}
              <span className="mt-3 text-sm font-medium text-gray-800">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
