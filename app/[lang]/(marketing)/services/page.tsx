import React from "react";
import ServicesGrid from "@/components/sections/ServicesGrid";

type Params = Promise<{ lang: string }>;

export default async function ServicesPage(props: { params: Params }) {
  const { lang } = await props.params;

  return (
    <main className="min-h-screen bg-[#0A0F1E] pt-32 pb-20">
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-violet-600 mb-8 rounded-full" />
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            {lang === "it" ? "Servizi" : "Servicios"}
          </h1>
          <p className="text-slate-400 mt-8 max-w-2xl text-xl font-medium">
            {lang === "it"
              ? "Manutenzione e pulizia professionale per l'industria e il terziario."
              : "Mantenimiento y limpieza profesional para la industria y el sector terciario."}
          </p>
        </div>
      </div>

      {/* Componente Grid compartido */}
      <ServicesGrid lang={lang as "it" | "es"} />
    </main>
  );
}
