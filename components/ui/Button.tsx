"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link" | "white" | "outline-white" | "outline" | "ghost"
  size?: "sm" | "default" | "lg" | "icon"
  pill?: boolean
}

type MotionButtonProps = HTMLMotionProps<"button"> & ButtonProps;

const Button = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ className, variant = "primary", size = "default", pill = false, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium",
          pill ? "rounded-full" : "rounded-[4px]",
          {
            "bg-brand-black text-brand-white hover:bg-black/90 px-6 py-3": variant === "primary",
            "border border-brand-black bg-transparent text-brand-black hover:bg-black/5 px-6 py-3": variant === "secondary" || variant === "outline",
            "bg-brand-white text-brand-black hover:bg-brand-white/90 px-6 py-3": variant === "white",
            "border border-brand-white bg-transparent text-brand-white hover:bg-brand-white/10 px-6 py-3": variant === "outline-white",
            "bg-transparent underline-offset-4 hover:underline text-brand-black p-0": variant === "link",
            "hover:bg-brand-gray-light text-brand-black px-6 py-3": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
