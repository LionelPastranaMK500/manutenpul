import React from "react";
import Image from "next/image";
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
  const displayServices = SERVICES.slice(0, 6);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-slate-900/20 rounded-3xl overflow-hidden border border-white/5">
          {displayServices.map((service) => {
            const Icon = ICON_MAP[service.slug] || Building2;
            return (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className="group relative aspect-4/3 flex flex-col justify-end overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={`/images/services/${service.slug}.jpg`}
                    alt={service.title[lang]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-[0.35] group-hover:brightness-[0.5]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradiente optimizado para Tailwind 4 */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 p-10 h-full flex flex-col justify-end items-start w-full">
                  <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-2xl text-violet-500 transform transition-all group-hover:bg-violet-600 group-hover:text-white">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="block opacity-0 group-hover:opacity-100 mb-2 font-black text-violet-500 text-[10px] uppercase tracking-widest transition-all translate-y-4 group-hover:translate-y-0">
                    {service.category}
                  </span>
                  <h3 className="font-black text-white text-2xl md:text-4xl uppercase tracking-tighter leading-tight mb-4 group-hover:text-violet-400">
                    {service.title[lang]}
                  </h3>
                  <div className="bg-violet-600 w-12 group-hover:w-full h-0.75 transition-all duration-700 rounded-full" />
                  <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all">
                    <p className="mt-6 text-slate-300 text-base line-clamp-2">
                      {service.shortDescription[lang]}
                    </p>
                    <div className="mt-4 flex items-center text-violet-400 font-bold text-sm">
                      {lang === "it" ? "Dettagli" : "Detalles"}{" "}
                      <ArrowRight size={16} className="ml-2" />
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
