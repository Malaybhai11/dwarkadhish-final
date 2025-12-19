"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement,
  ReactElement,
} from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export interface NavbarItemProps {
  label: string;
  href: string;
}
export function NavbarItem(_props: NavbarItemProps) {
  return null;
}

export interface NavbarButtonProps {
  label: string;
  href: string;
  variant?: "simple" | "colored";
}
export function NavbarButton(_props: NavbarButtonProps) {
  return null;
}

// @ts-ignore
NavbarItem.displayName = "NavbarItem";
// @ts-ignore
NavbarButton.displayName = "NavbarButton";

type LinkItem = { label: string; href: string };
type BtnItem = { label: string; href: string; variant: "simple" | "colored" };

export function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const desktopMenuRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuId = "navbar-more-menu";

  const childrenArray = Children.toArray(children);

  const navLinks: LinkItem[] = useMemo(() => {
    return childrenArray
      .filter((child): child is ReactElement<NavbarItemProps> => {
        if (!isValidElement(child)) return false;
        const type = child.type as any;
        const props = child.props as any;

        const isIdentified =
          type === NavbarItem ||
          type.displayName === "NavbarItem" ||
          type.name === "NavbarItem";

        const looksLikeItem =
          props?.label !== undefined &&
          props?.href !== undefined &&
          props?.variant === undefined;

        return isIdentified || looksLikeItem;
      })
      .map((child) => ({ label: child.props.label, href: child.props.href }));
  }, [childrenArray]);

  const navButtons: BtnItem[] = useMemo(() => {
    return childrenArray
      .filter((child): child is ReactElement<NavbarButtonProps> => {
        if (!isValidElement(child)) return false;
        const type = child.type as any;
        const props = child.props as any;

        return (
          type === NavbarButton ||
          type.displayName === "NavbarButton" ||
          type.name === "NavbarButton" ||
          props?.variant !== undefined
        );
      })
      .map((child) => ({
        label: child.props.label,
        href: child.props.href,
        variant: child.props.variant || "simple",
      }));
  }, [childrenArray]);

  const cta = useMemo(() => {
    return (
      navButtons.find((b) => b.variant === "colored") ??
      navButtons[0] ?? {
        label: "Design Your Notebook",
        href: "/custom",
        variant: "colored" as const,
      }
    );
  }, [navButtons]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const TOP_REVEAL_Y = 10;
    const HIDE_AFTER_Y = 90;
    const DELTA = 6;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setIsScrolled(y >= 20);

        const diff = y - lastY;
        const abs = Math.abs(diff);

        if (y <= TOP_REVEAL_Y) {
          setIsHidden(false);
        } else if (abs >= DELTA) {
          if (diff > 0 && y > HIDE_AFTER_Y) {
            setIsHidden(true);
            setOpen(false);
          } else if (diff < 0) {
            setIsHidden(false);
          }
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Single outside-click handler for both desktop and mobile
  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!open) return;

      const target = e.target as Node;
      const button = buttonRef.current;
      const desktopMenu = desktopMenuRef.current;
      const mobilePanel = mobilePanelRef.current;

      // Don't close if clicking the button itself, desktop dropdown, or mobile panel
      if (button && button.contains(target)) return;
      if (desktopMenu && desktopMenu.contains(target)) return;
      if (mobilePanel && mobilePanel.contains(target)) return;

      setOpen(false);
    };

    // Listen to both mouse and touch events for mobile compatibility
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={[
          "fixed left-0 right-0 z-50 flex justify-center",
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isHidden
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100",
          isScrolled ? "top-2 sm:top-3 md:top-4" : "top-0",
        ].join(" ")}
      >
        <div
          className={[
            "relative flex items-center justify-between",
            "px-3 sm:px-4 md:px-6",
            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            isScrolled
              ? "w-[95%] sm:w-[92%] md:w-[80%] lg:w-[62rem] h-14 sm:h-16 rounded-full bg-white/85 backdrop-blur-xl border border-blue-100/70 shadow-lg shadow-blue-500/10"
              : "w-full h-16 sm:h-20 md:h-24 bg-white/60 backdrop-blur-md border-transparent shadow-sm",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2"
          >
            <div
              className={[
                "relative overflow-hidden rounded-lg shadow-sm bg-white border border-gray-100",
                isScrolled
                  ? "w-9 h-9 sm:w-10 sm:h-10"
                  : "w-10 h-10 sm:w-12 sm:h-12",
              ].join(" ")}
            >
              <img
                src="/main-logo2.png"
                alt="Dwarkadhish Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <div
                className={[
                  "font-bold tracking-tight text-gray-900",
                  isScrolled
                    ? "text-base sm:text-lg"
                    : "text-lg sm:text-xl md:text-2xl",
                ].join(" ")}
              >
                Dwarkadhish
              </div>
              <div
                className={[
                  "text-gray-600 font-medium tracking-wide",
                  isScrolled
                    ? "hidden sm:block text-[10px] sm:text-[11px]"
                    : "text-[10px] sm:text-xs md:text-sm",
                ].join(" ")}
              >
                Paper Product
              </div>
            </div>
          </a>

          {/* Right side: CTA + More */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Elite-Tier Navbar CTA with Magnetic Effect */}
            <a
              href={cta.href}
              aria-label={cta.label}
             
              style={{
                transform:
                  "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
              }}
              className="
    group relative inline-flex items-center
    gap-2
    
    /* Ultra-Compact Sizing */
    px-3 py-2 sm:px-4 sm:py-2.5
    rounded-lg sm:rounded-xl
    
    /* Enhanced Premium Gradient with Depth */
    bg-gradient-to-br from-blue-600 via-blue-600 to-blue-800
    text-white
    
    /* Advanced Shadow System - Layered Depth */
    shadow-[0_1px_2px_rgba(37,99,235,0.4),0_4px_8px_rgba(37,99,235,0.25),0_8px_16px_rgba(37,99,235,0.15)]
    
    /* Magnetic Smooth Transitions */
    transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
    
    /* Enhanced Hover with Z-axis Depth */
    hover:shadow-[0_2px_4px_rgba(37,99,235,0.5),0_8px_16px_rgba(37,99,235,0.35),0_16px_32px_rgba(37,99,235,0.25)]
    hover:-translate-y-0.5
    hover:scale-[1.08]
    hover:brightness-110
    
    /* Spring-like Active State */
    active:scale-[0.96]
    active:shadow-[0_1px_3px_rgba(37,99,235,0.4)]
    
    /* Premium Focus State */
    focus:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-blue-400/70
    focus-visible:ring-offset-2
    focus-visible:ring-offset-slate-50
    
    select-none
    overflow-hidden
    
    /* Preserve 3D for layered effects */
    transform-style-3d
    perspective-1000
  "
            >
              {/* Multi-Layer Shimmer Effect - More Sophisticated */}
              <span
                className="
      pointer-events-none absolute inset-0
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-[800ms] ease-out
      skew-x-12
    "
              />

              {/* Secondary Shimmer - Delayed for Depth */}
              <span
                className="
      pointer-events-none absolute inset-0
      bg-gradient-to-r from-transparent via-blue-300/10 to-transparent
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-[1000ms] ease-out delay-75
      skew-x-12
    "
              />

              {/* Top Edge Highlight - Premium Detail */}
              <span
                className="
      pointer-events-none absolute top-0 left-2 right-2 h-px
      bg-gradient-to-r from-transparent via-white/50 to-transparent
      rounded-t-xl
      opacity-60 group-hover:opacity-90 transition-opacity
    "
              />

              {/* Glow Effect - Expands on Hover */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl
      bg-blue-400/0 group-hover:bg-blue-400/10
      blur-xl
      scale-90 group-hover:scale-110
      transition-all duration-500
    "
              />

              {/* Icon with Advanced Pulse & Rotation */}
              <span className="relative flex items-center justify-center w-5 h-5 z-10">
                {/* Expanding Pulse Ring */}
                <span
                  className="
        absolute inset-0 rounded-full 
        bg-white/20 border border-white/30
        opacity-0 
        group-hover:opacity-100 
        group-hover:scale-[1.7]
        transition-all duration-700 ease-out
      "
                />

                {/* Secondary Pulse - Staggered */}
                <span
                  className="
        absolute inset-0 rounded-full 
        bg-white/10
        opacity-0 
        group-hover:opacity-100 
        group-hover:scale-[2]
        transition-all duration-500 ease-out delay-100
      "
                />

                {/* Icon SVG with Spring Rotation */}
                <svg
                  className="
        relative w-5 h-5 
        transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
        group-hover:rotate-[15deg] 
        group-hover:scale-100
        group-active:rotate-0
        group-active:scale-95
        drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
      "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </span>

              {/* Responsive Text with Letter Spacing Animation */}
              <span className="relative hidden sm:inline-block z-10">
                <span
                  className="
        font-bold text-sm 
        tracking-wide group-hover:tracking-wider
        transition-all duration-300
        drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]
      "
                >
                  Customize
                </span>
              </span>

              {/* Mobile: Enhanced Arrow with Bounce */}
              <span
                className="
      sm:hidden relative w-3 h-3 z-10
      transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
      group-hover:translate-x-1
      group-hover:scale-125
      group-active:translate-x-0
      group-active:scale-100
    "
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>

              {/* Ambient Glow - Follows Cursor Position */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96, 165, 250, 0.3) 0%, transparent 70%)",
                }}
              />
            </a>

            {/* -------------------------------------------menu button--------------------------- */}
            {/* More menu button - Enhanced touch target for mobile */}
            {/* Premium Menu Button - Sophisticated & Balanced */}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={menuId}
              className="
    group relative inline-flex items-center
    gap-2
    
    /* Perfect Medium Size */
    h-11 sm:h-[46px]
    px-4 sm:px-5
    
    /* Refined Radius */
    rounded-xl
    
    /* Elevated Ghost State */
    bg-white/95 backdrop-blur-sm
    border border-slate-200/80
    text-slate-700
    
    /* Premium Shadow */
    shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.04)]
    
    /* Buttery Transition */
    transition-all duration-200 ease-out
    
    /* Sophisticated Hover */
    hover:border-slate-300/80
    hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.06)]
    hover:bg-white
    hover:-translate-y-[1px]
    
    /* Refined Active */
    active:scale-[0.98]
    active:translate-y-0
    
    /* Open State Enhancement */
    data-[state=open]:bg-white
    data-[state=open]:border-slate-300
    data-[state=open]:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.06)]
    
    /* Premium Focus */
    focus:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-blue-500/30
    focus-visible:ring-offset-2
    
    select-none
    overflow-hidden
  "
              data-state={open ? "open" : "closed"}
            >
              {/* Subtle Shimmer on Hover */}
              <span
                className="
      pointer-events-none absolute inset-0
      bg-gradient-to-r from-transparent via-slate-100/50 to-transparent
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-700 ease-out
    "
              />

              {/* Text with Premium Weight */}
              <span className="relative hidden sm:inline text-[13px] font-semibold tracking-wide">
                More
              </span>

              {/* Icon Container with Smooth Morph */}
              <span className="relative flex items-center justify-center w-[18px] h-[18px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 ease-out"
                >
                  {open ? (
                    /* X Icon - Clean Cross */
                    <>
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                        className="origin-center"
                      />
                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                        className="origin-center"
                      />
                    </>
                  ) : (
                    /* Menu Icon - Three Lines */
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </span>

              {/* Refined Chevron Indicator */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`
      hidden sm:inline
      transition-transform duration-300 ease-out
      ${open ? "rotate-180" : "rotate-0"}
    `}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>

              {/* Top Edge Highlight */}
              <span
                className="
      pointer-events-none absolute top-0 left-4 right-4 h-px
      bg-gradient-to-r from-transparent via-white to-transparent
      opacity-60
    "
              />
            </button>

            {/* Premium Dropdown - Elevated Design */}
            <div
              ref={desktopMenuRef}
              id={menuId}
              role="menu"
              className={`
    absolute right-4 top-full mt-2
    hidden md:block
    
    /* Smooth Animation */
    transition-all duration-300 ease-out
    origin-top-right
    
    ${
      open
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-[0.97] -translate-y-2 pointer-events-none"
    }
  `}
            >
              {/* Dropdown Container - Premium Card */}
              <div
                className="
    min-w-[240px]
    rounded-2xl
    
    /* Elevated Background */
    bg-white/98 backdrop-blur-xl
    
    /* Refined Border */
    border border-slate-200/80
    
    /* Premium Shadow System */
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08),0_10px_15px_-3px_rgba(0,0,0,0.08),0_20px_25px_-5px_rgba(0,0,0,0.06)]
    
    /* Depth Ring */
    ring-1 ring-slate-900/5
    
    /* Padding for Spacing */
    py-2
    
    overflow-hidden
  "
              >
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="
          group/item
          flex items-center justify-between
          
          /* Perfect Spacing */
          mx-2 px-3 py-2.5
          rounded-lg
          
          /* Typography */
          text-[13px] font-medium text-slate-700
          
          /* Smooth Transitions */
          transition-all duration-200 ease-out
          
          /* Sophisticated Hover */
          hover:bg-slate-50/80
          hover:text-slate-900
          hover:pl-4
          
          /* Active State */
          active:bg-slate-100/80
          active:scale-[0.99]
        "
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>

                    {/* Arrow with Slide Animation */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="
            text-slate-400
            transition-all duration-200 ease-out
            opacity-0 -translate-x-2
            group-hover/item:opacity-100 group-hover/item:translate-x-0
          "
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                ))}

                {/* Bottom Gradient Fade */}
                <div
                  className="
        pointer-events-none absolute bottom-0 left-0 right-0 h-8
        bg-gradient-to-t from-white/60 to-transparent
      "
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay - Enhanced with better touch handling */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden",
          "bg-white/90 backdrop-blur-2xl",
          "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
        style={{ paddingTop: "88px" }}
      >
        <div className="mx-auto max-w-lg px-4 pb-8">
          <div
            ref={mobilePanelRef}
            className="rounded-3xl bg-white/80 backdrop-blur-md border border-blue-100/80 shadow-2xl shadow-blue-500/10 overflow-hidden"
          >
            {/* Links with enhanced touch targets */}
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={[
                  "group flex items-center justify-between",
                  "px-6 py-5",
                  "text-xl font-bold text-gray-900",
                  "border-b border-gray-100",
                  "active:bg-blue-50/50",
                  "transition-all duration-200",
                ].join(" ")}
                onClick={(e) => {
                  // Don't prevent default - allow navigation
                  setOpen(false);
                }}
                style={{
                  transitionDelay: open ? `${idx * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(10px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "350ms",
                }}
              >
                {link.label}
                <span className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center -rotate-45 group-active:rotate-0 transition-transform duration-300 text-blue-700 text-lg font-bold">
                  →
                </span>
              </a>
            ))}

            {/* CTA inside mobile menu */}
            <div className="p-5 bg-gradient-to-br from-blue-50/50 to-white">
              <a
                href={cta.href}
                className={[
                  "block w-full text-center",
                  "py-4 rounded-2xl",
                  "bg-gradient-to-r from-blue-600 to-blue-700",
                  "text-white font-bold text-lg",
                  "shadow-lg shadow-blue-600/20",
                  "active:scale-[0.97]",
                  "transition-transform duration-200",
                  "ring-1 ring-orange-400/20",
                ].join(" ")}
                onClick={(e) => {
                  // Don't prevent default - allow navigation
                  setOpen(false);
                }}
              >
                {cta.label}
              </a>
              <p className="mt-3 text-xs text-gray-600 text-center font-medium">
                Create your custom notebook in under 2 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
