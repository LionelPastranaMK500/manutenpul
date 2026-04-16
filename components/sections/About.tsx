import Image from "next/image";
import { getAboutData } from "@/constants/about";

interface AboutProps {
  lang: string;
}

/**
 * Componente About - Rediseño Fiel al Prototipo
 * Basado exactamente en la imagen proporcionada (image_cb4c69.png).
 * Mantiene la autonomía mediante el prop 'lang'.
 */
export default function About({ lang }: AboutProps) {
  const data = getAboutData(lang);

  if (!data) {
    console.warn(`About section data missing for language: ${lang}`);
    return null;
  }

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Columna de Texto (Izquierda) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block text-violet-600 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              {data.title}
            </h2>

            {/* Línea decorativa corta bajo el título */}
            <div className="h-2 w-24 bg-violet-600 rounded-full mb-8" />

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
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

          {/* Columna de Imagen (Derecha) */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Elemento decorativo: Fondo violeta rotado */}
            <div className="absolute -inset-6 bg-violet-50 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 group-hover:scale-105 duration-500" />

            {/* Contenedor de Imagen Principal */}
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/about-manutenpul.jpg"
                alt={data.imageAlt || "Manutenpul Service Team"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Badge Flotante (Inferior Izquierda) */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-5 border border-slate-50 transition-transform hover:scale-105 duration-300 hidden md:flex">
              <div className="flex-shrink-0 w-14 h-14 bg-violet-600 flex items-center justify-center rounded-2xl text-white shadow-lg shadow-violet-200">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="pr-4">
                <p className="text-lg font-black text-slate-900 leading-tight">
                  Qualità Garantita
                </p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Certificazione ISO 9001
                </p>
              </div>
            </div>

            {/* Círculo decorativo de desenfoque */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet-200/40 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
