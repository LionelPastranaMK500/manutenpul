import { HERO_DATA } from "@/constants/site";

interface HeroProps {
    lang: 'it' | 'es';
}

export default function Hero({ lang }: HeroProps) {
    const { title, subtitle, primaryCTA, secondaryCTA } = HERO_DATA;

    const titleParts = {
        it: { pre: "Gestione Integrata", italic: "del tuo", post: "Patrimonio Immobiliare" },
        es: { pre: "Gestión Integrada", italic: "de tu", post: "Patrimonio Inmobiliario" }
    };

    const { pre, italic, post } = titleParts[lang];

    return (
        <section id="hero" className="relative flex items-center bg-navy-950 h-screen min-h-[700px] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/building-night.webp"
                    alt="Manutenpul Facility Management"
                    className="opacity-60 w-full h-full object-cover scale-105"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/40" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="z-10 relative mx-auto px-6 lg:px-10 w-full max-w-[1400px]">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8 animate-fade-in">
                        <div className="bg-accent w-12 h-[1px]"></div>
                        <span className="font-semibold text-accent text-sm uppercase tracking-[.2em]">
                            {lang === 'it' ? 'Dal 1990 — Lombardia & Veneto' : 'Desde 1990 — Lombardía y Véneto'}
                        </span>
                    </div>

                    <h1 className="mb-6 font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                        {pre}
                        <span className="block sm:inline sm:ml-3 font-serif font-normal text-accent italic">
                            {" "}{italic}
                        </span>
                        <br />
                        {post}
                    </h1>

                    <p className="mb-10 max-w-xl font-light text-white/70 text-lg md:text-xl leading-relaxed">
                        {subtitle[lang].split('1 ora').map((text, i, arr) => (
                            <span key={i}>
                                {text}
                                {i < arr.length - 1 && <strong className="font-medium text-white">1 ora</strong>}
                            </span>
                        ))}
                    </p>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <a href={primaryCTA.href} className="group inline-flex justify-center items-center gap-2 bg-accent px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-accent-dark">
                            {primaryCTA.label[lang]}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a href={secondaryCTA.href} className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/10 rounded-lg font-medium text-white transition-all duration-300">
                            {secondaryCTA.label[lang]}
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom-8 left-1/2 absolute flex flex-col items-center gap-2 text-white/40 -translate-x-1/2">
                <span className="text-[10px] uppercase tracking-[.3em]">{lang === 'it' ? 'Scroll' : 'Bajar'}</span>
                <div className="relative bg-white/20 w-[1px] h-8 overflow-hidden">
                    <div className="top-0 left-0 absolute bg-white/60 w-full h-1/2 animate-bounce-slokw"></div>
                </div>
            </div>
        </section>
    );
}