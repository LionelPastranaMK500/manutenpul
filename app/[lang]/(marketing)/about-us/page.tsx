import React from "react";
import ServicesGrid from "@/components/sections/ServicesGrid";

interface ServicesPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-[#0A0F1E] pt-20">
      <div className="py-12">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            {lang === "it" ? "I Nostri Servizi" : "Nuestros Servicios"}
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            {lang === "it"
              ? "Soluzioni professionali di manutenzione e pulizia per ogni settore industriale e civile."
              : "Soluciones profesionales de mantenimiento y limpieza para cada sector industrial y civil."}
          </p>
        </div>

        {/* Reutilizamos el componente Grid para mantener consistencia */}
        <ServicesGrid lang={lang as "it" | "es"} />
      </div>
    </main>
  );
}
