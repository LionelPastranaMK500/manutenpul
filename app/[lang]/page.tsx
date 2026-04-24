import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import MarqueeBar from "@/components/ui/MarqueeBar";
import Certifications from "@/components/sections/Certifications";
import Newsletter from "@/components/sections/Newsletter";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Areas from "@/components/sections/Areas";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Banner from "@/components/sections/Banner";

import { cookies } from "next/headers";
import { RegionCode } from "@/types";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const cookieStore = await cookies();
  const region = (cookieStore.get("REGION")?.value) as RegionCode;
  console.log(region);
  return (
    <main className="flex-1">
      <Hero lang={lang as "it" | "es"} />
      {/* <MarqueeBar lang={lang as "it" | "es"} /> */}
      <ServiceGrid lang={lang as "it" | "es"} />
      <About lang={lang as "it" | "es"} region={region} />
      <Stats lang={lang as "it" | "es"} />
      <MarqueeBar lang={lang as "it" | "es"} />
      <Newsletter lang={lang as "it" | "es"} />
      <Certifications lang={lang as "it" | "es"} />
      {/* <Newsletter lang={lang as "it" | "es"} /> */}
      <WhyChooseUs lang={lang as "it" | "es"} />
      <Areas lang={lang as "it" | "es"} />
      <Testimonials lang={lang as "it" | "es"} />
      <Contact lang={lang as "it" | "es"} />
      <Banner lang={lang as "it" | "es"} />
    </main>
  );
}