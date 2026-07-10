import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link"
  pill?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", pill = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium",
          pill ? "rounded-full" : "rounded-[4px]",
          {
            "bg-brand-black text-brand-white hover:bg-black/90 px-6 py-3": variant === "primary",
            "border border-brand-black bg-transparent text-brand-black hover:bg-black/5 px-6 py-3": variant === "secondary",
            "bg-transparent underline-offset-4 hover:underline text-brand-black p-0": variant === "link",
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
