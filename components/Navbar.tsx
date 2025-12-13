'use client';

import { useState, useEffect, Children, isValidElement, ReactElement } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { div } from 'framer-motion/client';

export interface NavbarItemProps {
  label: string;
  href: string;
}

export function NavbarItem({ label, href }: NavbarItemProps) {
  return null;
}

export interface NavbarButtonProps {
  label: string;
  href: string;
  variant?: 'simple' | 'colored';
}

export function NavbarButton({ label, href, variant = 'simple' }: NavbarButtonProps) {
  return null;
}

// Add these to be able to identify them robustly
// @ts-ignore
NavbarItem.displayName = "NavbarItem";
// @ts-ignore
NavbarButton.displayName = "NavbarButton";

export function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const childrenArray = Children.toArray(children);

  const navLinks = childrenArray
    .filter((child): child is ReactElement<NavbarItemProps> => {
      if (!isValidElement(child)) return false;
      const type = child.type as any;
      const props = child.props as any;

      // Check for reference, displayName, or function name
      const isIdentifiedAsItem = type === NavbarItem || type.displayName === 'NavbarItem' || type.name === 'NavbarItem';

      // Fallback: If it looks like an item (has label & href) and is NOT a button (no variant)
      const looksLikeItem = props.label !== undefined && props.href !== undefined && props.variant === undefined;

      return isIdentifiedAsItem || looksLikeItem;
    })
    .map((child) => ({
      label: child.props.label,
      href: child.props.href,
    }));

  const navButtons = childrenArray
    .filter((child): child is ReactElement<NavbarButtonProps> => {
      if (!isValidElement(child)) return false;
      const type = child.type as any;
      const props = child.props as any;

      // Check for reference, displayName, or function name
      // Also fallback: if it has a 'variant' prop, assume it's a button
      return type === NavbarButton || type.displayName === 'NavbarButton' || type.name === 'NavbarButton' || props.variant !== undefined;
    })
    .map((child) => ({
      label: child.props.label,
      href: child.props.href,
      variant: child.props.variant || 'simple',
    }));

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        aria-label="Main navigation"
      >
        <div
          className={`
            relative
            mx-auto 
            transition-all duration-300 ease-[cubic-bezier(0.2,0.9,0.2,1)]
            ${isScrolled
              ? 'w-[92%] md:w-[90%] lg:w-[760px] rounded-[24px] h-16 md:h-[72px]'
              : 'w-full h-16 md:h-[84px] rounded-none'
            }
            ${isScrolled
              ? 'bg-white/[0.06]  backdrop-blur-[12px] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]'
              : 'bg-transparent border-0 backdrop-blur-0 shadow-none'
            }
          `}
          style={{
            background: isScrolled
              ? 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.05))'
              : 'transparent',
            transform: isScrolled ? 'translateY(16px) scale(1.002)' : 'translateY(0) scale(1)',
            marginTop: 0,
          }}
        >
          <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex items-center gap-3 group focus:outline-none focus:ring-3 focus:ring-white/12 rounded-lg px-2 py-1 -mx-2 -my-1 transition-all duration-300 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ">
                  <img
                    src="/main-logo.png"
                    alt="Dwarkadhish Logo"
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-white text-5xl md:text-2xl font-bold tracking-tight hidden md:block drop-shadow-lg transition-all ">
                    Dwarkadhish
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 text-3xl md:text-lg font-medium tracking-wide hidden md:block transition-all duration-300 group-hover:from-gray-200 group-hover:via-white group-hover:to-gray-200">
                    Paper Product
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 pl-20 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-white/75 hover:text-white transition-colors relative group focus:outline-none focus:ring-3 focus:ring-white/12 rounded-lg"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop Actions - Right */}
            <div className="hidden md:flex items-center gap-3">
              {navButtons.map((btn) => (
                btn.variant === 'simple' ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      relative px-4 py-1.5 rounded-full
                      text-white text-sm font-medium
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                      hover:bg-white/20
                      hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)]
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-violet-400/60
                      overflow-hidden
                    "
                  >
                    <span className="relative z-10">{btn.label}</span>
                    <span
                      className="
                        absolute inset-0
                        bg-gradient-to-br from-white/40 via-transparent to-transparent
                        opacity-40
                        pointer-events-none
                      "
                    />
                  </a>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      relative px-4 py-1.5 rounded-full
                      text-white text-sm font-medium
                      bg-violet-500/20 backdrop-blur-md
                      border border-violet-400/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                      hover:bg-violet-500/30
                      hover:shadow-[0_8px_30px_rgba(139,92,246,0.45)]
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-violet-400/60
                      overflow-hidden
                    "
                  >
                    <span className="relative z-10">{btn.label}</span>
                    <span
                      className="
                        absolute inset-0
                        bg-gradient-to-br from-white/50 via-transparent to-transparent
                        opacity-50
                        pointer-events-none
                      "
                    />
                  </a>
                )
              ))}
            </div>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus:ring-3 focus:ring-white/12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Mobile Logo - Centered */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2">
              <span className="text-white tracking-tight">Dwarkadhish
                Paper Product</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-300 ease-[cubic-bezier(0.2,0.9,0.2,1)]
          ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }
        `}
        style={{ top: isScrolled ? '92px' : '64px' }}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative p-4">
          <div className="bg-white/[0.06] border border-white/[0.08] rounded-3xl p-6 backdrop-blur-[12px] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-white/75 hover:text-white hover:bg-white/5 rounded-xl transition-all focus:outline-none focus:ring-3 focus:ring-white/12"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
              <button
                className="flex items-center gap-3 px-4 py-3 text-white/75 hover:text-white hover:bg-white/5 rounded-xl transition-all focus:outline-none focus:ring-3 focus:ring-white/12"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
              <button
                className="flex items-center gap-3 px-4 py-3 text-white/75 hover:text-white hover:bg-white/5 rounded-xl transition-all focus:outline-none focus:ring-3 focus:ring-white/12"
              >
                <Globe className="w-5 h-5" />
                <span>Language</span>
              </button>

              {navButtons.map((btn) => (
                btn.variant === 'simple' ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      relative mt-2 flex items-center justify-center
                      px-4 py-3 rounded-2xl
                      text-white font-medium
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                      hover:bg-white/20
                      active:scale-[0.97]
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-violet-400/60
                      overflow-hidden
                    "
                  >
                    <span className="relative z-10">{btn.label}</span>
                    <span className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                  </a>
                ) : (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      relative mt-1 flex items-center justify-center
                      px-4 py-3 rounded-2xl
                      text-white font-medium
                      bg-violet-500/20 backdrop-blur-md
                      border border-violet-400/30
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                      hover:bg-violet-500/30
                      hover:shadow-[0_8px_30px_rgba(139,92,246,0.45)]
                      active:scale-[0.97]
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-violet-400/60
                      overflow-hidden
                    "
                  >
                    <span className="relative z-10">{btn.label}</span>
                    <span className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50 pointer-events-none" />
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}