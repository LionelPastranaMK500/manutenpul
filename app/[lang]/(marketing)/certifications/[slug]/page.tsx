"use client";

import React, { use } from "react";
import { CERTIFICATIONS_DATA } from "@/constants/certifications";
import {
  ArrowLeft,
  Clock,
  Zap,
  ChevronRight,
  MousePointer2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = use(params);
  const cert = CERTIFICATIONS_DATA.find((c) => c.slug === slug);

  if (!cert) return null;

  const Icon = cert.icon;
  const StatusIcon = cert.statusIcon;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-32 pb-24 px-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-blue-500/10 via-blue-600/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-4 bg-blue-500/30 rounded-[3rem] blur-2xl animate-pulse" />
            <div className="relative p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl shadow-blue-600/40">
              <Icon size={64} strokeWidth={1.5} />
            </div>
          </motion.div>

          <div className="flex-1 space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-[11px]">
                {cert.subtitle[lang as "it" | "es"]}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.8] uppercase text-blue-600 dark:text-blue-500"
            >
              {cert.title[lang as "it" | "es"]}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                className="absolute -left-6 top-0 bottom-0 w-1.5 bg-blue-600 rounded-full origin-top"
              />
              <motion.p className="text-3xl md:text-5xl text-blue-600 dark:text-blue-400 leading-[1.05] font-black tracking-tight pl-8">
                {cert.fullDescription[lang as "it" | "es"]}
              </motion.p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cert.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group p-8 bg-white dark:bg-white/3 border-2 border-blue-100 dark:border-blue-900/30 rounded-[2.5rem] shadow-xl hover:border-blue-500 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/30">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-blue-600 dark:text-blue-300 leading-tight uppercase tracking-tighter">
                        {feature[lang as "it" | "es"]}
                      </h3>
                      <div className="flex items-center gap-1 text-blue-400 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>DETTAGLI</span>
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
              <Link
                href={`/${lang}/services`}
                className="group flex items-center justify-end gap-2 text-blue-600 font-black uppercase text-[10px] tracking-widest mb-4"
              >
                <ArrowLeft
                  size={12}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                {lang === "it" ? "Tutti i servizi" : "Todos los servicios"}
              </Link>

              <motion.div className="relative p-10 bg-blue-600 rounded-[3.5rem] space-y-8 text-white shadow-2xl border border-blue-400 overflow-hidden group/card">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/20 blur-3xl rounded-full" />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <StatusIcon
                      size={48}
                      className="text-white animate-pulse"
                    />
                    <MousePointer2 size={20} className="text-white/50" />
                  </div>

                  <h2 className="text-4xl font-black uppercase leading-[0.85] tracking-tighter">
                    {lang === "it"
                      ? "Standard di Eccellenza"
                      : "Estándar de Excelencia"}
                  </h2>

                  <div className="flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/30">
                    <Clock size={14} className="text-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      Risposta in 60 min
                    </span>
                  </div>
                </div>

                <button className="relative z-10 w-full py-6 bg-white text-blue-600 font-black rounded-3xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  <Zap size={20} className="fill-blue-600" />
                  <span>{lang === "it" ? "Contattaci" : "Contáctanos"}</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
