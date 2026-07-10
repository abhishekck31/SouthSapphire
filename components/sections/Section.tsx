import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-32 lg:py-40 px-4 md:px-8 w-full", className)}
    >
      <div 
        className={cn(
          "max-w-[1280px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-6 w-full", 
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
