export function DemoContent() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
            Dwarkadhish Paper Product
          </h1>

          <p className="text-xl md:text-2xl text-white/65 mb-10 max-w-2xl mx-auto">
            Dwarkadhish Enterprise presents a premium range of paper products designed for quality and sustainability.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/10 rounded-full text-white/60">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-8 px-1 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto text-center text-white/60">

        </div>
      </footer>
    </div>
  );
}
