"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

interface NavbarProps {
  darkHero?: boolean;
}

export function Navbar({ darkHero = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteBg = isScrolled;
  const textColorClass = darkHero && !isScrolled ? "text-brand-white" : "text-brand-black";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
          isWhiteBg ? "bg-brand-white border-b border-brand-gray-mid" : "bg-transparent",
          textColorClass
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Left: Wordmark */}
          <Link href="/" className="font-serif tracking-widest text-lg md:text-xl uppercase z-50">
            STUDIO/M
          </Link>

          {/* Center/Right: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="font-medium text-sm transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
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
                    : ""
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
