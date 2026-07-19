"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  // Outer glow — slow, large
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  // Inner dot — snappy, small
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 35 });

  const isVisible = useRef(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      isVisible.current = true;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer glow blob */}
      <motion.div
        className="fixed pointer-events-none z-[9990] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9991] rounded-full bg-brand-black mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 12,
          height: 12,
        }}
      />
    </>
  );
}
