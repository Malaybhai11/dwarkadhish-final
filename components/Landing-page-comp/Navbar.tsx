'use client';

import { useState, useEffect, Children, isValidElement, ReactElement } from 'react';
import { Menu, X } from 'lucide-react';

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
      setIsScrolled(window.scrollY >= 20);
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
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'top-4' : 'top-0'
          }`}
        aria-label="Main navigation"
      >
        <div
          className={`
            relative flex items-center justify-between
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isScrolled
              ? 'w-[90%] md:w-[70%] lg:w-[60rem] h-14 md:h-16 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5'
              : 'w-full h-20 md:h-24 bg-transparent border-transparent'
            }
            px-4 md:px-8
          `}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className={`
                relative overflow-hidden rounded-lg transition-all duration-500 shadow-sm
                ${isScrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'}
              `}>
                <img
                  src="/main-logo2.png"
                  alt="Dwarkadhish Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className={`
                  font-bold tracking-tight text-black transition-all duration-500
                  ${isScrolled ? 'text-lg' : 'text-xl md:text-2xl'}
                `}>
                  Dwarkadhish
                </span>
                <span className={`
                  text-gray-500 font-medium tracking-wide transition-all duration-500 origin-left
                  ${isScrolled ? 'hidden opacity-0 scale-90' : 'text-xs md:text-sm block opacity-100 scale-100'}
                `}>
                  Paper Product
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className={`
            hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2
            transition-all duration-500
          `}>
            <div className={`
               flex items-center gap-1 p-1 rounded-full transition-all duration-500
               ${isScrolled ? 'bg-transparent' : 'bg-transparent'}
             `}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    relative px-4 py-2 rounded-full text-sm font-medium text-gray-700
                    hover:text-black transition-colors duration-200
                    group overflow-hidden
                  "
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-black/5 scale-0 group-hover:scale-100 rounded-full transition-transform duration-200 origin-center" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Right */}
          <div className="hidden md:flex items-center gap-3">
            {navButtons.map((btn) => (
              btn.variant === 'simple' ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={`
                    px-5 py-2 text-sm font-medium text-black rounded-full backdrop-blur-sm transition-all shadow-sm hover:shadow
                    ${isScrolled ? 'bg-white/50 hover:bg-white/80 border border-black/5' : 'bg-white/40 hover:bg-white/60 border border-white/20'}
                  `}
                >
                  {btn.label}
                </a>
              ) : (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="
                    px-5 py-2 text-sm font-medium text-white
                    bg-black hover:bg-black/80
                    rounded-full transition-all
                    shadow-md hover:shadow-lg hover:-translate-y-0.5
                  "
                >
                  {btn.label}
                </a>
              )
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors focus:outline-none"
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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden bg-white/80 backdrop-blur-2xl
          transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1)
          ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}
        style={{ top: '0', paddingTop: '100px' }}
      >
        <div className="container mx-auto px-6 pb-8 flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between text-2xl font-medium text-black/80 hover:text-black py-4 border-b border-black/5"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '300ms'
              }}
            >
              {link.label}
              <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                →
              </span>
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-8">
            {navButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`
                  w-full py-4 rounded-2xl text-center font-medium text-lg transition-transform active:scale-[0.98]
                  ${btn.variant === 'colored'
                    ? 'bg-black text-white shadow-xl shadow-black/10'
                    : 'bg-white text-black border border-black/10 shadow-sm'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}