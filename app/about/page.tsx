import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — STUDIO/M",
  description:
    "STUDIO/M is Bengaluru's premier influencer management and brand partnership agency. Learn our story, values, and the team behind the work.",
};

const VALUES = [
  {
    number: "01",
    title: "Authenticity",
    description:
      "We only sign creators who genuinely connect with their audience. No bought followers. No fake engagement. Real people, real communities.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Every match is intentional. We take the time to understand a brand's DNA before we recommend a single creator — because a wrong fit costs everyone.",
  },
  {
    number: "03",
    title: "Impact",
    description:
      "We measure success in outcomes, not vanity metrics. Revenue generated, audiences reached, communities built — that's what we report back.",
  },
];

const TEAM = [
  {
    name: "Mehak Sharma",
    role: "Founder & Managing Director",
    bio: "Former brand strategist turned agency founder. Mehak spent 8 years at top consumer brands before starting STUDIO/M with a vision to make influencer marketing more honest.",
    bg: "bg-[#1a1a1a]",
  },
  {
    name: "Arjun Nair",
    role: "Head of Talent",
    bio: "Ex-creator turned talent manager. Arjun understands the creator side deeply — he's the first call our roster makes.",
    bg: "bg-[#111827]",
  },
  {
    name: "Divya Krishnan",
    role: "Head of Brand Partnerships",
    bio: "15 years in media buying and campaign management. Divya brings rigour and a network that opens doors at India's fastest-growing brands.",
    bg: "bg-[#1a1520]",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero — Dark Manifesto */}
      <section className="w-full bg-brand-black text-brand-white pt-40 pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Who We Are
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl max-w-4xl leading-[1.05]">
              We Believe Influence Should Be Earned.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="w-full bg-brand-offwhite py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text side */}
          <div className="flex flex-col gap-6">
            <FadeUp>
              <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase">
                Our Story
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black">
                Started with a belief. Built on results.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-brand-gray-dark leading-relaxed text-lg">
                STUDIO/M was founded in Bengaluru in 2021, during a moment when the influencer industry was growing fast — but often carelessly. Creators were being undersold. Brands were being misled by inflated numbers.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-brand-gray-dark leading-relaxed text-lg">
                We built STUDIO/M to fix that. A boutique agency with a strict roster, transparent pricing, and a commitment to campaigns that actually perform. No gimmicks. Just great matches, executed well.
              </p>
            </FadeUp>
          </div>

          {/* Visual side — stat blocks */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "2021", l: "Founded" },
                { v: "30+", l: "Creators Managed" },
                { v: "120+", l: "Campaigns Delivered" },
                { v: "50M+", l: "Combined Creator Reach" },
              ].map((item) => (
                <div
                  key={item.l}
                  className="bg-brand-white border border-brand-gray-mid rounded-[4px] p-8 flex flex-col gap-2"
                >
                  <span className="font-serif text-4xl text-brand-black">{item.v}</span>
                  <span className="text-xs font-semibold tracking-[0.15em] text-brand-gray-dark uppercase">
                    {item.l}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-brand-white py-24 md:py-32 px-4 md:px-8 border-t border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Our Principles
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-16">
              What We Stand For
            </h2>
          </FadeUp>
          <div className="flex flex-col divide-y divide-brand-gray-mid">
            {VALUES.map((val, i) => (
              <FadeUp key={val.number} delay={i * 0.1}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-12 items-start">
                  <span className="font-serif text-4xl text-brand-gray-mid">{val.number}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-black">{val.title}</h3>
                  <p className="text-brand-gray-dark leading-relaxed">{val.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full bg-brand-black py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              The People
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-14">
              The Team
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="flex flex-col">
                  <div className={`${member.bg} aspect-[3/4] rounded-[4px] mb-6`} />
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-gray-dark mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-serif text-2xl text-brand-white mb-3">{member.name}</h3>
                  <p className="text-brand-gray-dark text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-brand-offwhite py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">
              Let&apos;s build something together.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-brand-gray-dark text-lg mb-8">
              Whether you&apos;re a brand or a creator, we&apos;d love to learn about you.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact">
              <Button variant="primary" pill>
                Get in Touch
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
