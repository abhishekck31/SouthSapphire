import { FadeUp } from "@/components/ui/FadeUp";

const BRANDS = ["LUMIÈRE", "VANGUARD", "NEXUS", "AURA", "VERTEX", "ZENITH"];

export function TrustedBrands() {
  return (
    <section className="w-full bg-brand-white min-h-[120px] py-8 flex flex-col justify-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <FadeUp>
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brand-gray-dark uppercase mb-6 text-center">
            Trusted by brands across industries
          </p>
        </FadeUp>
        
        <div className="flex flex-wrap justify-center gap-8 md:justify-between items-center w-full">
          {BRANDS.map((brand, i) => (
            <FadeUp key={brand} delay={0.1 + (i * 0.05)}>
              {/* Placeholders for logos, styled as text for now */}
              <div 
                className="font-sans text-lg md:text-xl font-bold opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 text-brand-black cursor-pointer uppercase tracking-wider"
              >
                {brand}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
