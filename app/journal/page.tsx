import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal — STUDIO/M",
  description:
    "Insights, trends, and stories from the influencer marketing world. The STUDIO/M Journal.",
};

const FEATURED = {
  title: "Why Micro-Influencers Are Outperforming Mega Creators in 2025",
  excerpt:
    "The data is clear: engagement quality beats audience quantity every time. Here's what we've learned from 120+ campaigns about where ROI actually comes from.",
  date: "14 July 2025",
  category: "Industry Insights",
  readTime: "6 min read",
  slug: "#",
  bg: "bg-[#0d0d0d]",
};

const ARTICLES = [
  {
    title: "The Brand Brief That Gets Creator Buy-In Every Time",
    excerpt: "How you brief a creator determines everything about the content they make. We share our internal template.",
    date: "2 July 2025",
    category: "Strategy",
    readTime: "4 min read",
    slug: "#",
    bg: "bg-[#0d1117]",
  },
  {
    title: "Samsammer's Road to 1M: What Made It Happen",
    excerpt: "A behind-the-scenes look at the content, community, and consistency that drove one of our creators to a million followers.",
    date: "20 June 2025",
    category: "Creator Stories",
    readTime: "7 min read",
    slug: "#",
    bg: "bg-[#1a1a1a]",
  },
  {
    title: "Instagram vs. YouTube: Which Platform Should Your Brand Prioritise?",
    excerpt: "Aggregated data across 80+ campaigns. The answer depends on your goal — here's how to think about it.",
    date: "5 June 2025",
    category: "Platform Deep Dive",
    readTime: "5 min read",
    slug: "#",
    bg: "bg-[#111520]",
  },
  {
    title: "Contract Clauses Every Creator Should Demand",
    excerpt: "Usage rights, exclusivity windows, kill fees — the fine print that protects your livelihood. A guide for creators negotiating brand deals.",
    date: "18 May 2025",
    category: "For Creators",
    readTime: "8 min read",
    slug: "#",
    bg: "bg-[#1a1510]",
  },
  {
    title: "How We Measure Campaign Success: The STUDIO/M Framework",
    excerpt: "Impressions, CPM, and saved posts tell part of the story. Here's the full picture we present to every brand partner.",
    date: "2 May 2025",
    category: "Agency Insights",
    readTime: "5 min read",
    slug: "#",
    bg: "bg-[#141a14]",
  },
];

export default function JournalPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full bg-brand-white pt-40 pb-16 px-4 md:px-8 border-b border-brand-gray-mid">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <p className="text-brand-gray-dark text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Ideas & Perspectives
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl text-brand-black leading-[1.05]">
              Journal
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full bg-brand-white py-12 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <Link
              href={FEATURED.slug}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-brand-gray-mid rounded-[4px] overflow-hidden hover:border-brand-black transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className={`${FEATURED.bg} aspect-[4/3] md:aspect-auto min-h-[280px]`} />
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-brand-offwhite">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[9px] font-bold tracking-widest uppercase bg-brand-black text-brand-white rounded-full px-3 py-1.5">
                    {FEATURED.category}
                  </span>
                  <span className="text-xs text-brand-gray-dark">{FEATURED.readTime}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-black leading-[1.15] mb-4">
                  {FEATURED.title}
                </h2>
                <p className="text-brand-gray-dark leading-relaxed mb-6">{FEATURED.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-gray-dark">{FEATURED.date}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-black group-hover:opacity-70 transition-opacity">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Article Grid */}
      <section className="w-full bg-brand-white py-6 pb-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article, i) => (
              <FadeUp key={article.title} delay={i * 0.07}>
                <Link
                  href={article.slug}
                  className="group flex flex-col border border-brand-gray-mid rounded-[4px] overflow-hidden hover:border-brand-black transition-colors duration-300"
                >
                  {/* Image placeholder */}
                  <div className={`${article.bg} aspect-video`} />
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 bg-brand-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] font-bold tracking-widest uppercase border border-brand-gray-mid rounded-full px-3 py-1.5 text-brand-gray-dark">
                        {article.category}
                      </span>
                      <span className="text-xs text-brand-gray-dark">{article.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl text-brand-black leading-[1.2] mb-3 group-hover:opacity-70 transition-opacity">
                      {article.title}
                    </h2>
                    <p className="text-brand-gray-dark text-sm leading-relaxed flex-1 mb-5">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-brand-gray-dark">{article.date}</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
