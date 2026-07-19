"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/ui/MobileMenu";

const NAV_LINKS = [
  { label: "Talent", href: "/talent" },
  { label: "For Brands", href: "/for-brands" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

// Pages whose hero section is dark — navbar starts with white text
const DARK_HERO_ROUTES = new Set(["/", "/talent", "/about", "/contact"]);

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const darkHero = DARK_HERO_ROUTES.has(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteBg = isScrolled;
  const textColorClass =
    darkHero && !isScrolled ? "text-brand-white" : "text-brand-black";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
          isWhiteBg
            ? "bg-brand-white border-b border-brand-gray-mid"
            : "bg-transparent",
          textColorClass
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Left: Wordmark */}
          <Link
            href="/"
            className="font-serif tracking-widest text-lg md:text-xl uppercase z-50"
          >
            STUDIO/M
          </Link>

          {/* Center/Right: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative font-medium text-sm transition-opacity hover:opacity-60 py-1"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-current"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: CTA Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button
                variant="primary"
                pill
                className={cn(
                  darkHero && !isScrolled
                    ? "bg-brand-white text-brand-black hover:bg-brand-gray-light"
                    : "bg-brand-black text-brand-white hover:bg-black/90"
                )}
              >
                Start a Project
              </Button>
            </div>

            <button
              className="md:hidden p-2 -mr-2 z-50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
