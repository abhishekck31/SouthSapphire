import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen bg-brand-black text-brand-white pt-20 overflow-hidden">
      {/* Background (Placeholder for future duotone image) */}
      <div className="absolute inset-0 bg-brand-black z-0 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center max-w-[1280px] w-full mx-auto px-4 md:px-8 py-20 text-center">
        
        <FadeUp delay={0.1}>
          <p className="text-brand-gray-mid text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-8">
            BENGALURU · INFLUENCER MANAGEMENT & BRAND PARTNERSHIPS
          </p>
        </FadeUp>

        <FadeUp delay={0.2} className="max-w-5xl">
          <h1 className="heading-xl font-serif leading-[1.1] mb-8">
            We connect the internet&apos;s most trusted voices with the world&apos;s boldest brands.
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-brand-gray-light text-lg md:text-xl max-w-[600px] mx-auto mb-12">
            Representing top-tier creators, building brand-creator partnerships, and providing full-service management.
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Button variant="white" pill className="w-full sm:w-auto">
            Explore Our Talent
          </Button>
          <Button variant="outline-white" pill className="w-full sm:w-auto">
            For Brands
          </Button>
        </FadeUp>
      </div>

      {/* Marquee Strip at Bottom */}
      <div className="relative z-10 w-full mt-auto border-t border-brand-white/10 bg-brand-black py-4">
        <Marquee speed={25} className="text-sm md:text-base font-medium tracking-wide text-brand-gray-mid uppercase">
          <span className="mx-4 text-brand-white">50M+</span> Combined Reach 
          <span className="mx-4 text-brand-white">·</span> 
          <span className="mx-4 text-brand-white">120+</span> Brand Campaigns 
          <span className="mx-4 text-brand-white">·</span> 
          <span className="mx-4 text-brand-white">30+</span> Creators Managed
          <span className="mx-4 text-brand-white">·</span>
        </Marquee>
      </div>
    </section>
  );
}
