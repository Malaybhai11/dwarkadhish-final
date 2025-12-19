"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarItem,
  NavbarButton,
} from "@/components/Landing-page-comp/Navbar";
import ClickSpark from "../components/Landing-page-comp/ClickSpark";
import HeroSwiper from "@/components/Landing-page-comp-2/Hero-swiper";
import CustomizeSteps from "@/components/Landing-page-comp-2/Custom-book";
import ShopByBusinessNeeds from "@/components/Landing-page-comp-2/Business-need"
import PopularCategories from "@/components/Landing-page-comp-2/Popular-cat";
import NewlyLanched from "@/components/Landing-page-comp-2/Newly-lanched";
import TrustBadges from "@/components/Landing-page-comp-2/Last-icons";
import Footer from "@/components/Landing-page-comp-2/Footer2";
import CustomerFeedback from "@/components/Landing-page-comp-2/Customer-feedback";
// IMPORT THE NEW LOADER
import BookLoader from "@/components/Loading-page-animation";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [reveal, setReveal] = useState(true);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">

      {/* 1. RENDER LOADER CONDITIONALLY */}
       {loading && (
        <BookLoader 
          onTransitionStart={() => setReveal(true)} // When loader starts exiting, reveal content
          onComplete={() => setLoading(false)}      // When animation is totally done, unmount loader
        />
      )} 

      {/* 2. MAIN CONTENT (Controlled by 'reveal' state) */}
       <div 
        className={`relative z-10 transition-all duration-1000 ease-out`}
        style={{
           transform: reveal ? 'scale(1) translateY(0)' : 'scale(0.98) translateY(20px)',
           opacity: reveal ? 1 : 0
        }}
      > 

      {/* NAVBAR */}
      <Navbar>
        <NavbarButton
          label="Design Your Notebook"
          href="/custom"
          variant="colored"
        />
        <NavbarItem label="Shop" href="/shop" />
        <NavbarItem label="About" href="/about" />
        <NavbarItem label="Login" href="/login" />
      </Navbar>

      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* HERO */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${reveal ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <HeroSwiper />
        </div>

        <CustomizeSteps />

        <section>
          <ShopByBusinessNeeds />
        </section>

        <section>
          <PopularCategories />
        </section>

        <section>
          <NewlyLanched />
        </section>

        <section>
          <CustomerFeedback />
        </section>

        <section>
          <TrustBadges />
        </section>

        <section>
          <Footer />
        </section>

        {/* SECTIONS */}
         <div className={`transition-all duration-1000 delay-500 ease-out ${reveal ? 'opacity-100' : 'opacity-0'}`}>
             
             <section className="w-full bg-white py-20" />
             <section className="w-full bg-white py-0" />
             <section className="w-full bg-white py-2" />
             <section className="w-full bg-white py-5" /> 
          </div> 
      </ClickSpark>
       </div> 
    </div>
  );
}