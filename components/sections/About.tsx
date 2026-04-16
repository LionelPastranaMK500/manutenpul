interface AboutProps {
    lang: 'it' | 'es';
}

export default function About({ lang }: AboutProps) {
    const content = {
        title: {
            it: "Oltre tre decenni di eccellenza nei servizi",
            es: "Más de tres décadas de excelencia en servicios"
        },
        body1: {
            it: "Dal 1990, Manutenpul S.r.l.s. è il punto di riferimento nel Nord Italia per la pulizia professionale, la sanificazione e il Facility Management integrato.",
            es: "Desde 1990, Manutenpul S.r.l.s. es el punto de referencia en el norte de Italia para la limpieza profesional, la desinfección y el Facility Management integrado."
        },
        body2: {
            it: "La nostra forza risiede nella capacità di gestire l'intero ciclo di vita dell'infrastruttura del cliente: dalla pulizia ordinaria alla ristrutturazione chiavi in mano, dal controllo di piaghe alla gestione del verde, fino al servizio di portierato e logistica.",
            es: "Nuestra fuerza reside en la capacidad de gestionar todo el ciclo de vida de la infraestructura del cliente: desde la limpieza ordinaria hasta la reforma llave en mano, desde el control de plagas hasta la gestión de zonas verdes, pasando por el servicio de conserjería y logística."
        },
        footer: {
            it: "Tutto sotto un unico interlocutore, con standard qualitativi certificati a livello internazionale.",
            es: "Todo bajo un único interlocutor, con estándares de calidad certificados a nivel internacional."
        }
    };

    return (
        <section id="chi-siamo" className="bg-zinc-50 dark:bg-navy-950/50 py-24">
            <div className="mx-auto px-6 lg:px-10 max-w-[1400px]">
                <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2">

                    {/* Imagen de Apoyo (Flota de vehículos o equipo) */}
                    <div className="group relative">
                        <div className="absolute -inset-4 bg-accent/20 group-hover:bg-accent/30 blur-2xl rounded-2xl transition-all" />
                        <img
                            src="/team-experience.webp"
                            alt="Manutenpul Experience"
                            className="relative shadow-2xl grayscale-[0.2] hover:grayscale-0 rounded-2xl transition-all duration-700"
                        />
                        {/* Sello de 1990 */}
                        <div className="-right-6 -bottom-6 absolute bg-white dark:bg-navy-900 shadow-xl p-8 border-accent border-b-4 rounded-2xl">
                            <span className="block font-black text-navy-950 dark:text-white text-4xl">1990</span>
                            <span className="font-bold text-accent text-xs uppercase tracking-[.2em]">Established</span>
                        </div>
                    </div>

                    {/* Texto de Contenido */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-accent w-10 h-[1px]"></div>
                            <span className="font-bold text-accent text-sm uppercase tracking-widest">
                                {lang === 'it' ? 'Chi Siamo' : 'Sobre Nosotros'}
                            </span>
                        </div>

                        <h2 className="mb-8 font-bold text-navy-950 dark:text-white text-4xl md:text-5xl leading-[1.1]">
                            {content.title[lang]}
                        </h2>

                        <div className="space-y-6">
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                {content.body1[lang]}
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                                {content.body2[lang]}
                            </p>
                            <div className="bg-accent/5 p-6 border-accent border-l-4 rounded-r-xl">
                                <p className="font-semibold text-navy-950 dark:text-white italic">
                                    "{content.footer[lang]}"
                                </p>
                            </div>
                        </div>

                        {/* Características rápidas (Basadas en los checks del PDF) */}
                        <div className="gap-6 grid grid-cols-2 mt-10">
                            {[
                                { it: "Intervento Rapido", es: "Intervención Rápida" },
                                { it: "Personale Qualificato", es: "Personal Cualificado" },
                                { it: "Eco-Sostenibile", es: "Eco-Sostenible" },
                                { it: "Triple Certificazione", es: "Triple Certificación" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex flex-shrink-0 justify-center items-center bg-accent rounded-full w-5 h-5">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-navy-950 dark:text-white text-sm uppercase tracking-tight">
                                        {item[lang]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}