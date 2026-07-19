"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

import { MagneticButton } from "@/components/ui/MagneticButton";

const FOOTER_LINKS = [
  { label: "Talent", href: "/talent" },
  { label: "For Brands", href: "/for-brands" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-black text-brand-white border-t border-brand-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Column 1: Brand */}
          <motion.div
            className="flex flex-col gap-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Link
              href="/"
              className="font-serif tracking-widest text-xl uppercase inline-block hover:opacity-70 transition-opacity"
            >
              STUDIO/M
            </Link>
            <p className="text-brand-gray-dark text-sm max-w-[280px] leading-relaxed">
              Bengaluru&apos;s premier influencer management and brand partnership agency.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <MagneticButton key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center p-2 text-brand-gray-dark hover:text-brand-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-gray-dark uppercase mb-2">
              Navigation
            </p>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-brand-gray-light hover:text-brand-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-gray-dark uppercase mb-2">
              Get in Touch
            </p>
            <a
              href="mailto:hello@studiom.in"
              className="text-sm text-brand-gray-light hover:text-brand-white transition-colors"
            >
              hello@studiom.in
            </a>
            <a
              href="tel:+918000000000"
              className="text-sm text-brand-gray-light hover:text-brand-white transition-colors"
            >
              +91 80 0000 0000
            </a>
            <p className="text-sm text-brand-gray-dark mt-2">
              Bengaluru, Karnataka<br />India — 560001
            </p>
          </motion.div>

        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-brand-gray-dark">
            &copy; {year} STUDIO/M. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-brand-gray-dark hover:text-brand-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-brand-gray-dark hover:text-brand-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
