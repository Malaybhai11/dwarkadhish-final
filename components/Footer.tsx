"use client";

import Link from "next/link";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-100 text-neutral-800 overflow-hidden">
      {/* Ambient top fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),transparent_40%)]" />

      {/* Subtle liquid glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-neutral-300/20 blur-[120px]" />

      <div className="relative max-w-[1280px] mx-auto px-6 py-20">
        {/* Brand header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <img
            src="/main-logo.png"
            alt="Dwarkadhish Logo"
            className="h-20 w-auto mb-6 opacity-90"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          <h2
            className="text-3xl md:text-4xl font-light tracking-tight"
            style={{
              background:
                "linear-gradient(to bottom, rgb(30,30,30), rgb(140,140,140))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dwarkadhish Paper Product
          </h2>

          <p className="mt-4 text-sm text-neutral-500 max-w-xl leading-relaxed">
            Precision-driven paper and printing solutions trusted by institutions,
            enterprises, and professionals.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 text-sm">
          {/* About */}
          <div className="md:col-span-2">
            <p className="text-neutral-500 leading-relaxed">
              We specialize in premium paper products and institutional printing,
              delivering consistency, quality, and reliability at scale.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-neutral-900 font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              {["New Arrivals", "Gifts & Prasad", "Temple Decor", "Books & Music"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-neutral-500 hover:text-neutral-900 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-neutral-900 font-medium mb-4">Navigate</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-500 hover:text-neutral-900 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-neutral-900 font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-neutral-500 hover:text-neutral-900 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral-900 font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-neutral-500">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 hover:text-neutral-900 transition"
              >
                <FaPhoneAlt /> +91 12345 67890
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 hover:text-neutral-900 transition"
              >
                <FaEnvelope /> info@dwarkadhish.org
              </a>

              {/* Social icons */}
              <div className="mt-4 flex gap-3">
                {[
                  { icon: <FaInstagram />, hover: "hover:bg-neutral-900" },
                  { icon: <FaWhatsapp />, hover: "hover:bg-green-600" },
                  { icon: <BiLogoGmail />, hover: "hover:bg-red-600" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`
                      w-10 h-10 rounded-full
                      bg-white/70 backdrop-blur-md
                      border border-neutral-300
                      flex items-center justify-center
                      text-neutral-700
                      shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                      transition-all duration-300
                      hover:text-white
                      hover:-translate-y-0.5
                      ${s.hover}
                    `}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Dwarkadhish Paper Product. All rights reserved.</p>

          <button
            className="
              mt-4 md:mt-0
              px-6 py-3
              rounded-full
              bg-white/70 backdrop-blur-md
              border border-neutral-300
              text-neutral-700
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              transition-all duration-500
              hover:-translate-y-0.5
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]
            "
          >
            Know Developers
          </button>
        </div>
      </div>
    </footer>
  );
}
