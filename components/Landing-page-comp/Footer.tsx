'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      <style jsx>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translateX(0%) translateY(0%);
          }
          50% {
            transform: translateX(-25%) translateY(10%);
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translateX(-25%) translateY(0%);
          }
          50% {
            transform: translateX(-50%) translateY(-10%);
          }
        }

        @keyframes wave3 {
          0%, 100% {
            transform: translateX(-50%) translateY(0%);
          }
          50% {
            transform: translateX(-75%) translateY(15%);
          }
        }

        @keyframes wave4 {
          0%, 100% {
            transform: translateX(-75%) translateY(0%);
          }
          50% {
            transform: translateX(-100%) translateY(-15%);
          }
        }

        .wave-layer-1 {
          animation: wave1 15s ease-in-out infinite;
        }

        .wave-layer-2 {
          animation: wave2 12s ease-in-out infinite;
        }

        .wave-layer-3 {
          animation: wave3 18s ease-in-out infinite;
        }

        .wave-layer-4 {
          animation: wave4 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Wave Layers - BLUE GRADIENT THEME */}
      <div className="relative h-60 md:h-80 overflow-hidden">
        {/* Wave Layer 1 - Lightest Blue */}
        <div className="wave-layer-1 absolute inset-0 opacity-30">
          <svg
            className="absolute bottom-0 left-0 w-[300%] h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#93c5fd"
              d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave Layer 2 - Light Blue */}
        <div className="wave-layer-2 absolute inset-0 opacity-40">
          <svg
            className="absolute bottom-0 left-0 w-[300%] h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#60a5fa"
              d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,224C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave Layer 3 - Medium Blue */}
        <div className="wave-layer-3 absolute inset-0 opacity-50">
          <svg
            className="absolute bottom-0 left-0 w-[300%] h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#3b82f6"
              d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,181.3C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave Layer 4 - Dark Blue */}
        <div className="wave-layer-4 absolute inset-0 opacity-70">
          <svg
            className="absolute bottom-0 left-0 w-[300%] h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#2563eb"
              d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Footer Content - Blue Theme */}
      <div className="relative bg-gradient-to-b from-blue-800 to-blue-900 text-white px-8 md:px-16 py-12 -mt-1">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/main-logo2.png"
                  alt="Dwarkadhish Logo"
                  className="w-20 h-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold leading-tight">Dwarkadhish</h3>
                  <p className="text-base text-blue-200">Paper Product</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-blue-100">
                Premium paper products & institutional printing solutions across India.
              </p>
              <div className="flex items-start gap-2 text-sm text-blue-200 pt-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Jamnagar, Gujarat, India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg ">
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/about" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg ">
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    Shop
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </nav>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4 text-white">Our Products</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    Bill Books
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    School Books
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    Paper Bags
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    Note Books
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg">
                  <span className="relative">
                    Transfer Files
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link href="/shop" className="group relative flex items-center gap-2 text-base text-blue-100 hover:text-white transition-all duration-300 hover:translate-x-2 px-2 py-1 rounded-lg ">
                  <span className="relative">
                    I&apos;D Cards
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4 text-white">Stay Connected</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+911234567890" 
                  className="flex items-center gap-3 text-base text-blue-100 hover:text-white transition-all duration-300 group px-2 py-2 rounded-lg"
                >
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Phone size={18} className="group-hover:animate-pulse" />
                  </div>
                  <span className="relative">
                    +91 9981543499
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a 
                  href="mailto:dwarkadhishpaperproducts@gmail.com" 
                  className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-all duration-300 group px-2 py-2 rounded-lg"
                >
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl flex-shrink-0">
                    <Mail size={18} className="group-hover:animate-pulse" />
                  </div>
                  <span className="relative whitespace-nowrap">
                    dwarkadhishpaperproducts@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                
                <div className="pt-4">
                  <p className="text-sm text-blue-200 mb-3 font-semibold">Follow Us</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://wa.me/919981543499" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={24} />
                    </a>
                    <a 
                      href="https://www.instagram.com/dwarkadhish_paper_products?igsh=MW45cWFicTdlZGJjZw==" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a 
                      href="mailto:dwarkadhishpaperproducts@gmail.com" 
                      className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                      aria-label="Gmail"
                    >
                      <BiLogoGmail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-blue-600" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-200">
              <p>© 2025 Dwarkadhish Paper Product. All rights reserved.</p>
            </div>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold hover:scale-105">
              Know Developer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;