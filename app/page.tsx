import { Navbar, NavbarItem, NavbarButton } from "../components/Landing-page-comp/Navbar";
import ClickSpark from "../components/Landing-page-comp/ClickSpark";
import Hero from "@/components/Landing-page-comp/Hero-page";
import Swiper from "@/components/Landing-page-comp/Swiper";
import LokingFor from "@/components/Landing-page-comp/LookingFor";
import ProductSlider from "@/components/Landing-page-comp/Products-swiper";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      <Navbar>
        <NavbarItem label="Home" href="#home" />
        <NavbarItem label="Shop" href="#shop" />
        <NavbarItem label="About" href="/about" />
        <NavbarItem label="" href="#docs" />
        <NavbarButton label="Login" href="/login" variant="simple" />
        <NavbarButton label="Signup" href="/signup" variant="colored" />
      </Navbar>

      {/* HERO */}
      <Hero />

      {/* SWIPER — DIRECTLY AFTER HERO */}
      <section className="w-full bg-white py-32">
        <Swiper />
      </section>

      <section>
        <ProductSlider />
      </section>
      <section>
        <ProductSlider />
      </section>

      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
    </div>
  );
}
