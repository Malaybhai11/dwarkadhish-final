import {
  Navbar,
  NavbarItem,
  NavbarButton,
} from "../components/Landing-page-comp/Navbar";
import ClickSpark from "../components/Landing-page-comp/ClickSpark";
import Hero from "@/components/Landing-page-comp/Hero-page";
import Swiper from "@/components/Landing-page-comp/Swiper";
import ProductSlider from "@/components/Landing-page-comp/Products-swiper";
import ProductSlider2 from "@/components/Landing-page-comp/Product-swiper2";
import Footer from "@/components/Landing-page-comp/Footer";
import BannerSwiper from "@/components/Landing-page-comp/Banner-swiper";
import Sidesection from "@/components/Landing-page-comp/Side-section";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar>
        <NavbarItem label="Home" href="#home" />
        <NavbarItem label="Shop" href="#shop" />
        <NavbarItem label="About" href="/about" />
        <NavbarItem label="" href="#docs" />
        <NavbarButton label="Login" href="/login" variant="simple" />
        <NavbarButton label="Signup" href="/signup" variant="colored" />
      </Navbar>


      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

      {/* HERO */}
      <Hero />

      {/* SWIPER */}
      <section className="w-full bg-white py-24">
        <Swiper />
      </section>

      {/* ✅ PRODUCT SLIDER — IMMEDIATELY AFTER SWIPER */}
      <section className="w-full bg-white py-2">
        <ProductSlider />
      </section>

      {/* SECOND PRODUCT SLIDER */}
      <section className="w-full bg-white py-5">
        <ProductSlider2 />

        {/*------------------------- SECTION 2: Vision Statement with Subtle Glow--------- */}

        <div className="mb-24 text-center relative">
          {/* Paper-depth halo */}
          <div
            className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[60%] h-40
      bg-neutral-200
      blur-[120px]
      opacity-60
      -z-10
    "
          />

          {/* Section label */}
          <h2
            className="
    text-sm uppercase tracking-[0.4em]
    text-neutral-500
    mb-8
  "
          >
            Our Vision
          </h2>

          {/* Manifesto headline */}
          <h1
            className="
      text-5xl md:text-7xl
      font-semibold
      mb-8
      tracking-tight
    "
            style={{
              background: "linear-gradient(to bottom, #0a0a0a, #4a4a4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 1s ease-out",
            }}
          >
            Give More Than Expected.
          </h1>

          {/* Ink divider */}
          <div
            className="
      w-24 h-px
      bg-neutral-300
      mx-auto mb-8
    "
          />

          {/* Supporting copy */}
          <p
            className="
      text-lg
      text-neutral-700
      max-w-2xl mx-auto
      leading-relaxed
      font-light
    "
            style={{ animation: "fadeInUp 1s ease-out 0.15s both" }}
          >
            We are committed to delivering the finest printing solutions —{" "}
            <span className="italic text-neutral-900 font-medium">
              on time, every time
            </span>{" "}
            — backed by quality, precision, and customer-first service.
          </p>
        </div>

        {/*------------------------- SECTION 2: Vision Statement with Subtle Glow--------- */}
      </section>

      {/* BANNER SWIPER */}
      <section className="w-full bg-white py-5">
        <BannerSwiper />
      </section>

      <section>
        <Sidesection />
      </section>

      {/* CLICK EFFECT */}
      

{/* FOOTER */}
      <Footer />
      </ClickSpark>

      
    </div>
  );
}
