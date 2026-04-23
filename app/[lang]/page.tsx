import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import MarqueeBar from "@/components/ui/MarqueeBar";
import Certifications from "@/components/sections/Certifications";
import Newsletter from "@/components/sections/Newsletter";

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
      <ServiceGrid lang={lang as "it" | "es"} />
      <About lang={lang as "it" | "es"} region={region} />
      <MarqueeBar lang={lang as "it" | "es"} />
      <Certifications lang={lang as "it" | "es"} />
      <Newsletter lang={lang as "it" | "es"} />
    </main>
  );
}