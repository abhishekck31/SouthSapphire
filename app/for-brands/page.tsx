import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight, TrendingUp, Users, Target, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "For Brands — STUDIO/M",
  description:
    "Partner with STUDIO/M to run authentic influencer campaigns. Access vetted creators, end-to-end management, and transparent ROI reporting.",
};

const STATS = [
  { target: 50, suffix: "M+", label: "Combined Creator Reach" },
  { target: 120, suffix: "+", label: "Brand Campaigns Delivered" },
  { target: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { target: 30, suffix: "+", label: "Creators Under Management" },
];

const SERVICES = [
  {
    icon: Target,
    title: "Campaign Strategy",
    description:
      "We translate your brand objectives into creator briefs — from awareness plays to conversion-focused activations. Every campaign starts with a clear goal.",
  },
  {
    icon: Users,
    title: "Creator Matching",
    description:
      "No spray-and-pray. We match your brand with creators whose audience demographics, values, and content style genuinely align with yours.",
  },
  {
    icon: TrendingUp,
    title: "End-to-End Execution",
    description:
      "Contract negotiation, content review, publishing schedules, and compliance checks — we handle every operational detail so you don't have to.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Real data. Reach, impressions, engagement, sentiment, and conversion attribution — delivered in clean, shareable reports after every campaign.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn your brand, audience, and campaign goals. No forms. Just a conversation.",
  },
  {
    step: "02",
    title: "Creator Selection",
    description: "We shortlist 3–5 creators from our roster who are the right fit. You approve.",
  },
  {
    step: "03",
    title: "Campaign Execution",
    description: "We manage briefs, reviews, publishing timelines, and creator communication end-to-end.",
  },
  {
    step: "04",
    title: "Reporting & Insights",
    description: "Post-campaign analytics with actionable learnings to improve your next activation.",
  },
];

export default function ForBrandsPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full bg-brand-white pt-40 pb-24 px-4 md:px-8 border-b border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              For Brands
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl max-w-4xl leading-[1.05] text-brand-black">
              Built for Brands That Mean Business.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-brand-gray-dark text-lg md:text-xl mt-6 max-w-xl">
              We connect you with the right creators, manage every detail, and prove the impact with data you can trust.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-8 flex gap-4 flex-wrap">
            <Link href="/contact">
              <Button variant="primary" pill>
                Start a Campaign
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" pill>
                See Our Work
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-brand-black py-16 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <AnimatedCounter 
                  target={stat.target} 
                  suffix={stat.suffix} 
                  className="font-serif text-4xl md:text-5xl text-brand-white" 
                />
                <span className="text-xs font-semibold tracking-[0.15em] text-brand-gray-dark uppercase">
                  {stat.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-brand-offwhite py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              What We Do
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-16">
              Full-Service, Start to Finish
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeUp key={service.title} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 p-8 bg-brand-white border border-brand-gray-mid rounded-[4px] hover:border-brand-black transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-black" strokeWidth={1.5} />
                    <h3 className="font-serif text-2xl text-brand-black">{service.title}</h3>
                    <p className="text-brand-gray-dark leading-relaxed">{service.description}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-brand-white py-24 md:py-32 px-4 md:px-8 border-t border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              How It Works
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-16">
              From Brief to Results
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {PROCESS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <span className="font-serif text-5xl text-brand-gray-mid">{step.step}</span>
                  <h3 className="font-serif text-xl text-brand-black">{step.title}</h3>
                  <p className="text-brand-gray-dark text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-brand-black py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <FadeUp>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white">
                Ready to reach your audience?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-brand-gray-dark text-lg mt-3 max-w-md">
                Let&apos;s build a campaign that actually moves the needle.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="inline-flex items-center gap-2 font-medium text-brand-white hover:opacity-70 transition-opacity group">
              Start a Conversation
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
