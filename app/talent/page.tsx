import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Our Talent — STUDIO/M",
  description:
    "Meet the curated roster of creators managed by STUDIO/M. Top-tier influencers across entertainment, lifestyle, tech, gaming and more.",
};

const TALENT = [
  {
    name: "Samsammer",
    category: "Entertainment / Daily Vlogs",
    instagram: "1M+",
    youtube: "1M+",
    bio: "Capturing everyday moments with unfiltered authenticity — Samsammer's vlogs feel like hanging out with your best friend.",
    bg: "bg-brand-gray-dark",
  },
  {
    name: "Priya Arora",
    category: "Lifestyle / Fashion",
    instagram: "850K+",
    youtube: "400K+",
    bio: "Redefining South-Asian contemporary fashion, Priya blends cultural heritage with modern aesthetics that resonate globally.",
    bg: "bg-[#2a2a2a]",
  },
  {
    name: "TechWithRaj",
    category: "Tech / Reviews",
    instagram: "300K+",
    youtube: "1.2M+",
    bio: "Breaking down complex technology into digestible, entertaining content trusted by over a million subscribers.",
    bg: "bg-[#1a1a2e]",
  },
  {
    name: "GameVault",
    category: "Gaming / Streaming",
    instagram: "2M+",
    youtube: "5M+",
    bio: "India's most-watched gaming creator — competitive play meets community-building at the highest level.",
    bg: "bg-[#0d0d0d]",
  },
  {
    name: "Kavya Travels",
    category: "Travel / Adventure",
    instagram: "600K+",
    youtube: "320K+",
    bio: "Solo traveller exploring offbeat destinations across India and South-East Asia with story-driven, cinematic content.",
    bg: "bg-[#1e2d20]",
  },
  {
    name: "FitByNikita",
    category: "Fitness / Wellness",
    instagram: "1.5M+",
    youtube: "700K+",
    bio: "Making fitness approachable and sustainable for millions — workout guides, nutrition tips, and mindset coaching.",
    bg: "bg-[#2d1e1e]",
  },
];

const FILTERS = ["All", "Entertainment", "Lifestyle", "Tech", "Gaming", "Travel", "Fitness"];

export default function TalentPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full bg-brand-black text-brand-white pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Our Roster
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[1.05]">
              The Creators Behind the Culture
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-brand-gray-dark text-lg md:text-xl mt-6 max-w-xl">
              30+ managed creators. Millions of loyal followers. Every one of them handpicked.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="w-full bg-brand-black border-t border-brand-white/10 sticky top-20 z-30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors whitespace-nowrap ${
                f === "All"
                  ? "bg-brand-white text-brand-black"
                  : "border border-brand-white/20 text-brand-gray-dark hover:border-brand-white hover:text-brand-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Talent Grid */}
      <section className="w-full bg-brand-black py-12 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TALENT.map((talent, i) => (
            <FadeUp key={talent.name} delay={i * 0.07}>
              <TiltCard
                className={`group relative aspect-[3/4] rounded-[4px] overflow-hidden cursor-pointer ${talent.bg}`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-brand-white">
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-brand-gray-mid">
                    {talent.category}
                  </p>
                  <h2 className="font-serif text-3xl mb-3">{talent.name}</h2>
                  <p className="text-brand-gray-dark text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {talent.bio}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <FaInstagram className="w-4 h-4" />
                      <span>{talent.instagram}</span>
                    </div>
                    <span className="opacity-40">·</span>
                    <div className="flex items-center gap-1.5">
                      <FaYoutube className="w-4 h-4" />
                      <span>{talent.youtube}</span>
                    </div>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-semibold tracking-widest uppercase border border-brand-white/40 rounded-full px-3 py-1.5">
                    View Profile
                  </span>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-brand-offwhite py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <FadeUp>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black">
                Are you a creator?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-brand-gray-dark text-lg mt-3 max-w-md">
                We&apos;re always looking for exceptional voices. If you think you have what it takes, we&apos;d love to hear from you.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Button variant="primary" pill>
              Apply to Join the Roster
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
