import { SERVICES } from "@/constants/services";
import Link from "next/link";

interface ServicesGridProps {
    lang: 'it' | 'es';
}

export default function ServicesGrid({ lang }: ServicesGridProps) {
    const displayServices = SERVICES.filter(s => s.category === 'main' || s.category === 'sanitization').slice(0, 6);

    return (
        <section id="servizi" className="bg-navy-950 py-20">
            <div className="mx-auto px-6 lg:px-10 max-w-[1400px]">

                <div className="flex justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-accent w-8 h-[1px]"></div>
                            <span className="font-bold text-accent text-xs uppercase tracking-[.3em]">
                                {lang === 'it' ? 'Settori di Intervento' : 'Sectores de Intervención'}
                            </span>
                        </div>
                        <h2 className="font-bold text-white text-4xl md:text-5xl tracking-tight">
                            {lang === 'it' ? 'Soluzioni su Misura' : 'Soluciones a Medida'}
                        </h2>
                    </div>
                </div>

                <div className="gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {displayServices.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/${lang}/services/${service.slug}`}
                            className="group relative bg-zinc-900 aspect-[4/3] overflow-hidden"
                        >
                            <div className="z-0 absolute inset-0">
                                <div className="bg-zinc-800 w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                //IMG SERVICES
                            </div>

                            <div className="z-10 absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="z-20 absolute inset-0 flex flex-col justify-end p-10">
                                <span className="block opacity-0 group-hover:opacity-100 mb-2 font-bold text-accent text-xs uppercase tracking-widest transition-all translate-y-4 group-hover:translate-y-0 duration-500 transform">
                                    {service.category}
                                </span>
                                <h3 className="mb-4 font-bold text-white text-2xl uppercase tracking-tighter">
                                    {service.title[lang]}
                                </h3>
                                <div className="bg-accent w-0 group-hover:w-full h-[2px] transition-all duration-500" />

                                <p className="opacity-0 group-hover:opacity-100 mt-4 text-white/60 text-sm line-clamp-2 transition-all translate-y-8 group-hover:translate-y-0 duration-500 delay-100 transform">
                                    {service.shortDescription[lang]}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}