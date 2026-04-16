import { SERVICES } from "@/constants/services"
import Link from "next/link"

interface ServicesGridProps {
    lang: 'it' | 'es'
}

export default function ServicesGrid({ lang }: ServicesGridProps) {
    const mainServices = SERVICES.filter(
        s => s.category === 'main' || s.category === 'sanitization'
    )

    return (
        <section id="servizi" className="bg-white dark:bg-navy-950 py-24">
            <div className="mx-auto px-6 lg:px-10 max-w-[1400px]">
                <div className="mb-16">
                    <h2 className="mb-3 font-semibold text-accent text-sm uppercase tracking-widest">
                        {lang === 'it' ? 'Nostri Servizi' : 'Nuestros Servicios'}
                    </h2>
                    <h3 className="font-bold text-navy-950 dark:text-white text-4xl md:text-5xl tracking-tight">
                        {lang === 'it'
                            ? 'Soluzioni complete per ogni esigenza'
                            : 'Soluciones completas para cada necesidad'}
                    </h3>
                </div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {mainServices.map((service) => (
                        <div
                            key={service.slug}
                            className="group bg-zinc-50 hover:bg-white dark:bg-white/5 dark:hover:bg-accent hover:shadow-2xl p-8 border border-zinc-100 dark:border-white/5 rounded-2xl transition-all hover:-translate-y-2 duration-500"
                        >
                            <div className="flex justify-center items-center bg-accent/10 group-hover:bg-white/20 mb-6 rounded-xl w-14 h-14">
                                <div className="bg-accent group-hover:bg-white rounded-sm w-6 h-6" />
                            </div>

                            <h4 className="mb-4 font-bold text-navy-950 dark:text-white group-hover:text-white text-2xl">
                                {service.title[lang]}
                            </h4>

                            <p className="mb-8 text-zinc-600 dark:text-zinc-400 group-hover:text-white/80 leading-relaxed">
                                {service.shortDescription[lang]}
                            </p>

                            <Link
                                href={`/${lang}/services/${service.slug}`}
                                className="inline-flex items-center gap-2 font-bold text-accent group-hover:text-white transition-colors"
                            >
                                {lang === 'it' ? 'Scopri di più' : 'Saber más'}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}