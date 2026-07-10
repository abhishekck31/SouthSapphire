import { Hero } from "@/components/sections/Hero";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { ServicesSplit } from "@/components/sections/ServicesSplit";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <TrustedBrands />
      <ServicesSplit />
    </main>
  );
}

