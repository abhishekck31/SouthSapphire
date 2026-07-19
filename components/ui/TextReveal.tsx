"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** Duration per word in seconds */
  wordDuration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  wordDuration = 0.6,
  as: Tag = "span",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block mr-[0.27em] last:mr-0"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{
              duration: wordDuration,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
