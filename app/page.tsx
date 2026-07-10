import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      
      {/* Testing Section */}
      <div className="bg-brand-white min-h-screen flex flex-col items-center justify-center p-8 text-center">
         <h2 className="heading-xl text-brand-black mb-6">White Section Below</h2>
         <p className="text-brand-gray-dark max-w-2xl text-lg">
           This section is just to test the scroll behavior of the transparent-to-white navbar transitioning over this white background.
         </p>
      </div>
    </main>
  );
}

