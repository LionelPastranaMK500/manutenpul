"use client";

import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import MarqueeBar from "@/components/ui/MarqueeBar";
import Certifications from "@/components/sections/Certifications";

export default function HomePage() {
  const lang = "it";

  return (
    <main className="flex-1">
      <Hero lang={lang} />
      <ServiceGrid lang={lang} />
      <About lang={lang} />
      <MarqueeBar lang={lang} />
      <Certifications lang={lang} />
    </main>
  );
}
