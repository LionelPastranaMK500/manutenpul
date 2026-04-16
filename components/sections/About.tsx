import React from "react";
import { getAboutData } from "@/constants/about";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  const data = getAboutData(lang);

  if (!data) {
    console.warn(`About section data missing for language: ${lang}`);
    return null;
  }

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Centrado para compensar la falta de imagen lateral de momento */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Columna de Texto */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
            <span className="inline-block text-violet-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              {data.title}
            </h2>

            <div className="h-2 w-24 bg-violet-600 rounded-full mb-8" />

            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              {data.description}
            </p>

            <button className="group flex items-center gap-3 px-10 py-5 bg-violet-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-violet-700 hover:shadow-2xl hover:shadow-violet-200 active:scale-95">
              <span className="text-lg">{data.buttonText}</span>
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Sección de imagen comentada para evitar errores de carga */}
          {/* <div className="w-full lg:w-2/5 relative group">
            <div className="absolute -inset-6 bg-violet-50 rounded-[3rem] -rotate-3 transition-transform" />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-100">
              <div className="flex items-center justify-center h-full text-slate-400 font-bold">
                IMG_PLACEHOLDER
              </div>
            </div>
          </div> 
          */}
        </div>
      </div>
    </section>
  );
}
