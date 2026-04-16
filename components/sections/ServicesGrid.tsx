import React from "react";
import Link from "next/link";
import {
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Home,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/constants/services";

const ICON_MAP: Record<string, React.ElementType> = {
  "pulizia-uffici": Building2,
  "pulizia-industriale": Factory,
  sanificazione: ShieldCheck,
  logistica: Truck,
  "gdo-retail": ShoppingBag,
  condomini: Home,
};

export default function ServicesGrid({ lang }: { lang: "it" | "es" }) {
  return (
    <section id="servizi" className="bg-[#0A0F1E] py-24 lg:py-32">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-violet-600 w-12 h-0.5" />
              <span className="font-black text-violet-500 text-xs uppercase tracking-[0.4em]">
                {lang === "it"
                  ? "Settori di Intervento"
                  : "Sectores de Intervención"}
              </span>
            </div>
            <h2 className="font-black text-white text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none">
              {lang === "it" ? "Soluzioni su Misura" : "Soluciones a Medida"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((service) => {
            const Icon = ICON_MAP[service.slug] || Building2;
            return (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className="group relative p-10 min-h-[320px] bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.08] hover:border-violet-500/50 hover:-translate-y-2"
              >
                <div>
                  <div className="mb-8 p-4 bg-violet-600/10 border border-violet-500/20 rounded-2xl text-violet-500 w-fit transform transition-transform group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <span className="block mb-2 font-black text-violet-500 text-[10px] uppercase tracking-widest">
                    {service.category}
                  </span>
                  <h3 className="font-black text-white text-3xl md:text-4xl uppercase tracking-tighter leading-tight mb-4">
                    {service.title[lang]}
                  </h3>
                </div>

                <div>
                  <div className="bg-violet-600 w-12 h-0.75 mb-6 transition-all group-hover:w-full rounded-full" />
                  <div className="flex items-center justify-between">
                    <p className="text-slate-400 text-sm line-clamp-1 max-w-[70%]">
                      {service.shortDescription[lang]}
                    </p>
                    <div className="p-3 bg-white/5 rounded-full text-violet-400 transform transition-all group-hover:bg-violet-600 group-hover:text-white group-hover:rotate-[-45deg]">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
