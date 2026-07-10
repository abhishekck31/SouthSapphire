import { Section } from "@/components/sections/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      {/* Hero Section */}
      <Section className="bg-brand-white">
        <div className="col-span-4 md:col-span-12 flex flex-col items-center justify-center text-center">
          <FadeUp>
            <h1 className="heading-xl text-brand-black mb-6">
              Design System
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-brand-gray-dark max-w-2xl mb-10 mx-auto">
              Testing the typography, colors, and motion with this newly created design system for Next.js App Router.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Documentation</Button>
          </FadeUp>
        </div>
      </Section>

      {/* Feature Section */}
      <Section className="bg-brand-offwhite">
        <div className="col-span-4 md:col-span-6 flex flex-col justify-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl text-brand-black mb-6">
              Off-White Section
            </h2>
            <p className="text-brand-gray-dark text-lg mb-8">
              This section breaks up the pure white layout using our warm off-white color. Notice the high contrast serif headline.
            </p>
            <div>
              <Button variant="link">Learn more</Button>
            </div>
          </FadeUp>
        </div>
        <div className="col-span-4 md:col-span-6 mt-10 md:mt-0 flex items-center justify-center">
          <FadeUp delay={0.1} className="w-full aspect-square bg-brand-gray-light grayscale transition hover:filter-none">
            {/* Placeholder for an image */}
            <div className="w-full h-full flex items-center justify-center text-brand-gray-dark">
              Image Placeholder
            </div>
          </FadeUp>
        </div>
      </Section>
    </main>
  );
}

