import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Our Work — STUDIO/M",
  description:
    "Case studies and campaign highlights from STUDIO/M. Real results from real creator-brand partnerships.",
};

const CASES = [
  {
    brand: "AURA Beverages",
    creator: "FitByNikita",
    type: "Product Launch",
    result: "4.2M impressions in 7 days",
    tag: "Fitness",
    aspect: "aspect-[4/5]",
    bg: "bg-[#1a1a1a]",
  },
  {
    brand: "VANGUARD Tech",
    creator: "TechWithRaj",
    type: "Awareness Campaign",
    result: "3.8M views · 12% engagement rate",
    tag: "Technology",
    aspect: "aspect-square",
    bg: "bg-[#0d1117]",
  },
  {
    brand: "LUMIÈRE Skincare",
    creator: "Priya Arora",
    type: "Brand Partnership",
    result: "2.1M reach · 22K link clicks",
    tag: "Lifestyle",
    aspect: "aspect-[4/5]",
    bg: "bg-[#1f1a2e]",
  },
  {
    brand: "NEXUS Gaming",
    creator: "GameVault",
    type: "Live Integration",
    result: "9.4M live views across 3 streams",
    tag: "Gaming",
    aspect: "aspect-square",
    bg: "bg-[#0d1f0d]",
  },
  {
    brand: "ZENITH Hotels",
    creator: "Kavya Travels",
    type: "Destination Campaign",
    result: "1.7M saves · 14K DM inquiries",
    tag: "Travel",
    aspect: "aspect-[4/5]",
    bg: "bg-[#1a1510]",
  },
  {
    brand: "VERTEX Apparel",
    creator: "Samsammer",
    type: "Merch Collaboration",
    result: "Sold out in 48 hours · ₹1.2Cr revenue",
    tag: "Entertainment",
    aspect: "aspect-square",
    bg: "bg-[#191919]",
  },
];

export default function WorkPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full bg-brand-white pt-40 pb-16 px-4 md:px-8 border-b border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <FadeUp>
              <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Selected Work
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-5xl md:text-7xl text-brand-black leading-[1.05]">
                Our Work
              </h1>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-brand-gray-dark text-lg max-w-sm pb-2">
              A curated selection of campaigns that delivered real, measurable impact for our brand partners.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="w-full bg-brand-white py-12 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {CASES.map((c, i) => (
            <FadeUp key={c.brand} delay={i * 0.07} className="break-inside-avoid">
              <div className={`group relative ${c.aspect} rounded-[4px] overflow-hidden cursor-pointer ${c.bg}`}>
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="text-[9px] font-bold tracking-widest uppercase bg-brand-white/10 backdrop-blur-sm text-brand-white border border-brand-white/20 rounded-full px-3 py-1.5">
                    {c.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-brand-white">
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-gray-mid mb-1">
                    {c.type}
                  </p>
                  <h2 className="font-serif text-2xl mb-1">{c.brand}</h2>
                  <p className="text-brand-gray-dark text-sm mb-3">
                    with {c.creator}
                  </p>
                  <div className="h-px w-full bg-brand-white/10 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {c.result}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="w-full bg-brand-black py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <FadeUp>
            <blockquote className="font-serif text-3xl md:text-5xl text-brand-white max-w-4xl mx-auto leading-[1.2]">
              &ldquo;Every number here represents a real conversation between a creator and their community — on behalf of a brand they believe in.&rdquo;
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-brand-gray-dark mt-6 text-sm tracking-widest uppercase">
              — STUDIO/M, Bengaluru
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
