import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { Instagram, Youtube } from "lucide-react";

const TALENT = [
  {
    name: "Samsammer",
    category: "Entertainment / Daily Vlogs",
    instagram: "1M+",
    youtube: "1M+",
    imagePlaceholder: "bg-brand-gray-dark",
  },
  {
    name: "Creator Two",
    category: "Lifestyle / Fashion",
    instagram: "850K+",
    youtube: "400K+",
    imagePlaceholder: "bg-brand-gray-mid",
  },
  {
    name: "Creator Three",
    category: "Tech / Reviews",
    instagram: "300K+",
    youtube: "1.2M+",
    imagePlaceholder: "bg-brand-black",
  },
  {
    name: "Creator Four",
    category: "Gaming / Streaming",
    instagram: "2M+",
    youtube: "5M+",
    imagePlaceholder: "bg-brand-gray-dark",
  },
];

export function FeaturedTalent() {
  return (
    <section className="w-full bg-brand-offwhite py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col gap-4">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black">
              The Faces Behind the Numbers
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-brand-gray-dark text-lg md:text-xl max-w-2xl">
              A curated roster of creators our brand partners trust.
            </p>
          </FadeUp>
        </div>

        {/* Carousel / Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {TALENT.map((talent, index) => (
            <div 
              key={talent.name}
              className={`group relative flex-none w-[85vw] sm:w-[60vw] md:w-auto aspect-[3/4] rounded-[4px] overflow-hidden cursor-pointer snap-center transition-transform duration-500 ease-out hover:-translate-y-2 ${talent.imagePlaceholder}`}
            >
              {/* Background Image Wrapper (Placeholder for now) */}
              <div className="absolute inset-0 grayscale transition-all duration-500 ease-out group-hover:grayscale-0 bg-cover bg-center">
                {/* When real images are added, they will go here as background or <img /> */}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-brand-white">
                <p className="text-xs font-semibold tracking-wider uppercase mb-2 opacity-90">
                  {talent.category}
                </p>
                <h3 className="font-serif text-3xl mb-4">
                  {talent.name}
                </h3>
                
                {/* Stats Row */}
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Instagram className="w-4 h-4" />
                    <span>{talent.instagram}</span>
                  </div>
                  <span className="opacity-50">·</span>
                  <div className="flex items-center gap-1.5">
                    <Youtube className="w-4 h-4" />
                    <span>{talent.youtube}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <FadeUp delay={0.2}>
            <Button variant="secondary" pill>
              View Full Roster
            </Button>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
