"use client"; // Añadimos interactividad para las animaciones

import { use } from "react";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, ShieldCheck } from "lucide-react";

/**
 * REDISEÑO DE LISTA DE SERVICIOS:
 * - Fondo Navy 950 / Slate 50 con gradientes de luz.
 * - Título masivo (text-[100px]) en Azul Vibrante.
 * - Animaciones de entrada para el encabezado y el grid.
 * - Consistencia total con la paleta Navy/Blue.
 */

interface ServicesPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = use(params);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-950 pt-24 pb-24 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Decoración de Fondo (Efectos de Luz Manutenpul) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-blue-500/10 via-blue-600/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section Masivo */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/5 dark:bg-blue-500/5 rounded-full border border-blue-600/10"
          >
            <Sparkles size={14} className="text-blue-600 animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">
              {lang === "it" ? "Eccellenza Operativa" : "Excelencia Operativa"}
            </span>
          </motion.div>

          <div className="space-y-4 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.8] uppercase text-blue-600 dark:text-blue-500"
            >
              {lang === "it" ? "I Nostri Servizi" : "Nuestros Servicios"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-blue-800/70 dark:text-blue-300/60 font-bold max-w-3xl mx-auto leading-tight"
            >
              {lang === "it"
                ? "Soluzioni professionali di manutenzione e pulizia per ogni settore industriale e civile."
                : "Soluciones profesionales de mantenimiento y limpieza para cada sector industrial y civil."}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <ArrowDown
              className="text-blue-600 animate-bounce"
              size={32}
              strokeWidth={3}
            />
          </motion.div>
        </div>

        {/* Sección de Grid con estilo integrado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Reutilizamos el componente Grid para mantener consistencia funcional */}
          <ServicesGrid lang={lang as "it" | "es"} />
        </motion.div>

        {/* Footer de sección para generar confianza inmediata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-blue-600/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60"
        >
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-blue-600" size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 dark:text-blue-200">
              Certificazioni ISO 9001 • 14001 • 45001
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-blue-600/30" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 dark:text-blue-200">
              {lang === "it"
                ? "Operativi in tutta Italia"
                : "Operativos en toda Italia"}
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
