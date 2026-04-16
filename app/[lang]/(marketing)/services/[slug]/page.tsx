import React from "react";
import { SERVICES } from "@/constants/services";
import {
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Home,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  "pulizia-uffici": Building2,
  "pulizia-industriale": Factory,
  sanificazione: ShieldCheck,
  logistica: Truck,
  "gdo-retail": ShoppingBag,
  condomini: Home,
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex flex-col items-center justify-center text-white p-6">
        <h1 className="font-black text-9xl tracking-tighter text-violet-600 mb-4 opacity-20">
          404
        </h1>
        <p className="text-2xl font-bold uppercase tracking-widest">
          Servizio non trovato
        </p>
        <a
          href={`/${lang}`}
          className="mt-8 px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition-colors uppercase font-black text-sm"
        >
          Tornare Home
        </a>
      </div>
    );
  }

  const Icon = ICON_MAP[slug] || Building2;

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 border-b border-white/5 pb-16">
          <div className="p-8 bg-violet-600 rounded-[3rem] shadow-2xl shadow-violet-600/30">
            <Icon size={56} strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-violet-600" />
              <span className="text-violet-500 font-black uppercase tracking-[0.4em] text-xs">
                {service.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              {service.title[lang as "it" | "es"]}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-violet-500 font-black uppercase tracking-widest text-sm italic">
                Descrizione
              </h2>
              <p className="text-2xl md:text-3xl text-slate-300 leading-tight font-medium">
                {service.fullDescription[lang as "it" | "es"]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-8 bg-white/[0.03] border border-white/10 rounded-3xl transition-colors hover:bg-white/[0.06]"
                >
                  <CheckCircle2 className="text-violet-600" size={28} />
                  <span className="text-xl font-bold">
                    {feature[lang as "it" | "es"]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-10 bg-violet-600 rounded-[3rem] space-y-8 sticky top-32 shadow-2xl shadow-violet-600/20">
              <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-white">
                {lang === "it" ? "Preventivo" : "Presupuesto"}
              </h3>
              <p className="text-violet-100 font-medium text-lg leading-relaxed">
                {lang === "it"
                  ? "Ricevi una proposta tecnica entro 60 minuti dalla richiesta."
                  : "Recibe una propuesta técnica en menos de 60 minutos."}
              </p>
              <button className="w-full py-5 bg-white text-violet-600 font-black rounded-2xl hover:bg-violet-50 transition-all uppercase tracking-widest text-sm active:scale-95 shadow-xl">
                {lang === "it" ? "Contattaci" : "Contáctanos"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
