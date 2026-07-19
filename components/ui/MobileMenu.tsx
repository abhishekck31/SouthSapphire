"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3, ease: EASE }
    },
    open: {
      opacity: 1,
      transition: { duration: 0.4, ease: EASE }
    }
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 as const } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3, ease: EASE } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-brand-black text-brand-white"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex items-center justify-between px-4 md:px-8 h-20 border-b border-brand-white/10">
            <Link href="/" className="font-serif tracking-widest text-lg uppercase" onClick={onClose}>
              STUDIO/M
            </Link>
            <button onClick={onClose} aria-label="Close menu" className="p-2 -mr-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          <motion.div 
            className="flex-1 flex flex-col items-center justify-center gap-6 p-4"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {links.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-brand-white text-brand-black rounded-full px-8 py-4 font-medium transition-colors hover:bg-brand-gray-light"
                onClick={onClose}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
