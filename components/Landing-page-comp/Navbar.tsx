'use client';

import { useState, useEffect, Children, isValidElement, ReactElement } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

export interface NavbarItemProps {
  label: string;
  href: string;
}
export function NavbarItem(_: NavbarItemProps) { return null; }

export interface NavbarButtonProps {
  label: string;
  href: string;
  variant?: 'simple' | 'colored';
}
export function NavbarButton(_: NavbarButtonProps) { return null; }

NavbarItem.displayName = 'NavbarItem';
NavbarButton.displayName = 'NavbarButton';

export function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const childrenArray = Children.toArray(children);

  const navLinks = childrenArray
    .filter((child): child is ReactElement<NavbarItemProps> =>
      isValidElement(child) && child.props?.label && child.props?.href && child.props?.variant === undefined
    )
    .map((child) => ({ label: child.props.label, href: child.props.href }));

  const navButtons = childrenArray
    .filter((child): child is ReactElement<NavbarButtonProps> =>
      isValidElement(child) && child.props?.label && child.props?.href && child.props?.variant !== undefined
    )
    .map((child) => ({
      label: child.props.label,
      href: child.props.href,
      variant: child.props.variant || 'simple',
    }));

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`
            relative mx-auto
            transition-all duration-300 ease-[cubic-bezier(0.2,0.9,0.2,1)]
            ${isScrolled
              ? 'w-[92%] md:w-[90%] lg:w-[760px] h-16 md:h-[72px] rounded-[24px]'
              : 'w-full h-16 md:h-[84px]'
            }
            ${isScrolled
              ? `
                bg-neutral-200/80 backdrop-blur-xl
                
                shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]
              `
              : 'bg-transparent'
            }
          `}
          style={{
            transform: isScrolled ? 'translateY(16px) scale(1.002)' : 'translateY(0) scale(1)',
          }}
        >
          <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="
                flex items-center gap-3 px-2 py-1 rounded-lg
                transition-all duration-300
                hover:translate-y-[-1px]
                active:scale-95
              "
            >
              <div className="
                w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden
               
               
              ">
                <img src="/main-logo.png" alt="Dwarkadhish Logo" className="w-full h-full object-cover" />
              </div>

              <div className="hidden md:flex flex-col">
                <span className="text-neutral-900 text-2xl font-bold tracking-tight">
                  Dwarkadhish
                </span>
                <span className="text-neutral-700 text-sm tracking-wide">
                  Paper Product
                </span>
              </div>
            </a>

            {/* Center Links */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    px-4 py-2 rounded-lg
                    text-neutral-700 hover:text-neutral-900
                    transition-all duration-300
                    relative group
                    hover:translate-y-[-1px]
                  "
                >
                  {link.label}
                  <span className="
                    absolute bottom-1 left-4 right-4 h-px
                    bg-neutral-900
                    origin-left scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-300
                  " />
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {navButtons.map((btn) =>
                btn.variant === 'simple' ? (
                  /* LOGIN */
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      px-4 py-1.5 rounded-full
                      text-sm font-medium text-neutral-900
                      bg-neutral-200
                      border border-neutral-300
                      transition-all duration-300
                      hover:bg-neutral-300
                      hover:translate-y-[-1px]
                      hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                    "
                  >
                    {btn.label}
                  </a>
                ) : (
                  /* SIGN UP */
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="
                      px-5 py-1.5 rounded-full
                      text-sm font-semibold text-white
                      bg-neutral-900
                      transition-all duration-300
                      hover:bg-black
                      hover:translate-y-[-1px]
                      hover:shadow-[0_12px_28px_rgba(0,0,0,0.45)]
                      active:scale-[0.97]
                    "
                  >
                    {btn.label}
                  </a>
                )
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="
                md:hidden p-2 rounded-lg
                text-neutral-700 hover:text-neutral-900
                hover:bg-neutral-200
                transition-all
              "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className="absolute inset-0 bg-neutral-300/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="relative p-4">
          <div className="
            bg-neutral-200 backdrop-blur-xl
            border border-neutral-300
            rounded-3xl p-6
            shadow-[0_14px_40px_-14px_rgba(0,0,0,0.35)]
          ">
            <div className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    px-4 py-3 rounded-xl
                    text-neutral-800 hover:text-neutral-900
                    hover:bg-neutral-300
                    transition-all
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-neutral-400 pt-4">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-800 hover:bg-neutral-300">
                <Search className="w-5 h-5" />
                Search
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-800 hover:bg-neutral-300">
                <Globe className="w-5 h-5" />
                Language
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
