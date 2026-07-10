import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSplit() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[60vh] border-b border-brand-gray-mid">
      
      {/* Left Column: For Talent */}
      <div className="group relative w-full md:w-1/2 min-h-[50vh] overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 cursor-pointer bg-brand-black">
        {/* Scaling Backdrop (Ready for an image URL) */}
        <div className="absolute inset-0 bg-brand-black z-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 bg-cover bg-center"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 text-brand-white">
          <FadeUp>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-white">For Talent</h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-brand-gray-light text-lg max-w-[400px]">
              Full-service management, lucrative brand deals, contract negotiation, and long-term content strategy designed to elevate your personal brand.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="mt-4">
            <Link href="/talent" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity">
              See how we manage creators
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </div>

      {/* Right Column: For Brands */}
      <div className="group relative w-full md:w-1/2 min-h-[50vh] overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 cursor-pointer bg-brand-white border-t md:border-t-0 md:border-l border-brand-gray-mid">
        {/* Scaling Backdrop (Ready for an image URL) */}
        <div className="absolute inset-0 bg-brand-white z-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 bg-cover bg-center"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 text-brand-black">
          <FadeUp>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-black">For Brands</h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-brand-gray-dark text-lg max-w-[400px]">
              Access to vetted top-tier creators, end-to-end campaign management, authentic audience discovery, and transparent ROI reporting.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="mt-4">
            <Link href="/for-brands" className="inline-flex items-center gap-2 font-medium hover:opacity-70 transition-opacity">
              See how we match talent
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </div>

    </section>
  );
}
