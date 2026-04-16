import Hero from "@/components/sections/Hero";

export default function HomePage() {
  const lang = 'it';

  return (
    <main className="flex-1">
      <Hero lang={lang} />
      
      {/* <ServiceGrid lang={lang} /> */}
      {/* <About lang={lang} /> */}
    </main>
  );
}