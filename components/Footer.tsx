"use client";

import Link from "next/link";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <div className="max-w-[1280px] mx-auto py-12">
                {/* Newsletter / Hero */}
                <div className="relative text-gray-50 p-8 flex flex-col md:items-center md:justify-between gap-6">
                    <div className="text-5xl">
                        DWARKADHISH PAPER PRODUCT
                    </div>

                </div>

                {/* Links & columns */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-6 text-sm">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <img src="/main-logo.jpg" alt="Logo" className="h-8 w-10" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                        </div>
                        <p className="text-gray-600">Serving the community with devotion and care. Visit us for temple timings, events and services.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Products</h4>
                        <ul className="space-y-2">
                            <li><Link href="/products/new-arrivals" className="text-gray-600 hover:text-gray-400">New Arrivals</Link></li>
                            <li><Link href="/products/gifts" className="text-gray-600 hover:text-gray-400">Gifts & Prasad</Link></li>
                            <li><Link href="/products/decor" className="text-gray-600 hover:text-gray-400">Temple Decor</Link></li>
                            <li><Link href="/products/books" className="text-gray-600 hover:text-gray-400">Books & Music</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Navigate</h4>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-gray-600 hover:text-gray-400">Home</Link></li>
                            <li><Link href="/help" className="text-gray-600 hover:text-gray-400">Shop</Link></li>
                            <li><Link href="/shipping" className="text-gray-600 hover:text-gray-400">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-gray-600 hover:text-gray-400">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="text-gray-600 hover:text-gray-400">Privacy Policy</Link></li>
                            <li><Link href="/cookie" className="text-gray-600 hover:text-gray-400">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <div className="flex flex-col gap-3 text-gray-600">
                            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-gray-400"><FaPhoneAlt /> +91 12345 67890</a>
                            <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-gray-400"><FaEnvelope /> info@dwarkadhish.org</a>

                            <div className="mt-4">
                                <h5 className="font-medium mb-2">Follow Us</h5>
                                <div className="flex gap-3">
                                    <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-800 text-white"><FaInstagram /></a>
                                    <a aria-label="WhatsApp" href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 text-white"><FaWhatsapp /></a>
                                    <a aria-label="Gmail" href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 text-white"><BiLogoGmail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
                    <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()}. All rights reserved.</p>
                </div>
                <div className="mt-4 text-sm flex justify-center items-center">
                    <div className="flex gap-4 text-gray-400">
                        <button className="cursor-pointer bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 px-4 py-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-100 transition">
                            Know Devloparers
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}