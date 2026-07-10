"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 20 }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden flex w-full", className)}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div className="flex shrink-0 min-w-full items-center justify-around px-4 gap-8">
          {children}
        </div>
        <div className="flex shrink-0 min-w-full items-center justify-around px-4 gap-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
