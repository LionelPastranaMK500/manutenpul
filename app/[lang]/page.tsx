import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import MarqueeBar from "@/components/ui/MarqueeBar";

export default function HomePage() {
  const lang = 'it';

  return (
    <main className="flex-1">
      <Hero lang={lang} />
      <MarqueeBar lang={lang} />
      <ServiceGrid lang={lang} />
      <About lang={lang} />
    </main>
  );
}