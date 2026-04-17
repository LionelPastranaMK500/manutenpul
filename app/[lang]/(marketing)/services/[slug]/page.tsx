"use client"; // Añadimos interactividad del lado del cliente

import React, { use } from "react";
import { SERVICES } from "@/constants/services";
import {
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Home,
  CheckCircle2,
  ArrowLeft,
  Clock,
  Zap,
  ChevronRight,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ICON_MAP: Record<string, React.ElementType> = {
  "pulizia-uffici": Building2,
  "pulizia-industriale": Factory,
  sanificazione: ShieldCheck,
  logistica: Truck,
  "gdo-retail": ShoppingBag,
  condomini: Home,
};

export default function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return null;

  const Icon = ICON_MAP[slug] || Building2;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-20 pb-16 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Decoración de Fondo - Ajustada para dar profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-blue-500/10 via-blue-600/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-3 bg-blue-500/30 rounded-[2.5rem] blur-xl animate-pulse" />
            <div className="relative p-6 bg-blue-600 text-white rounded-[2rem] shadow-[0_15px_40px_rgba(37,99,235,0.4)]">
              <Icon size={54} strokeWidth={1.5} />
            </div>
          </motion.div>

          <div className="flex-1 space-y-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Sparkles size={14} className="text-blue-600 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">
                {service.category}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-[95px] font-black tracking-tighter leading-[0.8] uppercase text-blue-600 dark:text-blue-500"
            >
              {service.title[lang as "it" | "es"]}
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-0">
          <div className="lg:col-span-8 space-y-10">
            <section className="relative pt-4 lg:pt-0">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600 rounded-full origin-top"
              />
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 leading-[1.05] font-black tracking-tight pl-6"
              >
                {service.fullDescription[lang as "it" | "es"]}
              </motion.p>
            </section>

            {/* Grid de Características - Letras Azules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group p-6 bg-white dark:bg-white/3 border-2 border-blue-100 dark:border-blue-900/30 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-md shadow-blue-600/30">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-blue-600 dark:text-blue-300 leading-tight uppercase tracking-tighter">
                        {feature[lang as "it" | "es"]}
                      </h3>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>{lang === "it" ? "Dettagli" : "Detalles"}</span>
                        <ChevronRight size={10} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end"
              >
                <Link
                  href={`/${lang}/services`}
                  className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[9px] bg-blue-600/5 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl transition-all border border-blue-600/20 backdrop-blur-md"
                >
                  <ArrowLeft
                    size={12}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  {lang === "it" ? "Tutti i servizi" : "Todos los servicios"}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-8 bg-blue-600 rounded-[2.5rem] space-y-6 text-white shadow-[0_25px_50px_rgba(37,99,235,0.4)] border border-blue-400 overflow-hidden group/card"
              >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/20 blur-3xl rounded-full group-hover/card:scale-125 transition-transform duration-700" />

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/30 shadow-inner">
                    <MousePointer2
                      size={24}
                      className="text-white animate-bounce"
                    />
                  </div>

                  <h2 className="text-3xl font-black uppercase leading-[0.85] tracking-tighter text-white">
                    {lang === "it" ? "Richiedi un piano" : "Solicita un plan"}
                  </h2>

                  <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/30 backdrop-blur-md">
                    <Clock size={14} className="text-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      Risposta in 60 min
                    </span>
                  </div>
                </div>

                <p className="relative z-10 text-blue-50 font-black text-base leading-snug">
                  {lang === "it"
                    ? "Soprintendenza técnica e preventivo immediato gratuito."
                    : "Supervisión técnica y presupuesto inmediato gratuito."}
                </p>

                <button className="relative z-10 w-full py-5 bg-white text-blue-600 font-black rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn overflow-hidden">
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Zap
                    size={18}
                    className="fill-blue-600 relative z-10 group-hover/btn:scale-110 transition-transform"
                  />
                  <span className="relative z-10">
                    {lang === "it" ? "Inizia Ora" : "Empezar Ahora"}
                  </span>
                </button>

                <div className="relative z-10 flex justify-between items-center opacity-80 pt-1">
                  <div className="text-[8px] font-black tracking-widest bg-white/10 px-2 py-1 rounded">
                    ISO 9001
                  </div>
                  <div className="text-[8px] font-black tracking-widest bg-white/10 px-2 py-1 rounded">
                    ISO 14001
                  </div>
                  <div className="text-[8px] font-black tracking-widest bg-white/10 px-2 py-1 rounded">
                    ISO 45001
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
