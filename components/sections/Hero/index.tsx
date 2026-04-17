import { Mouse } from "lucide-react";
import { HERO_DATA } from "@/constants/hero";
import styles from "./Hero.module.css";

interface HeroProps {
    lang: "it" | "es";
}

export default function Hero({ lang }: HeroProps) {
    const { subtitle, primaryCTA, secondaryCTA, background } = HERO_DATA;

    const titleParts = {
        it: {
            pre: "Gestione Integrata",
            italic: "del tuo",
            post: "Patrimonio Immobiliare",
        },
        es: {
            pre: "Gestión Integrada",
            italic: "de tu",
            post: "Patrimonio Inmobiliario",
        },
    };

    const { pre, italic, post } = titleParts[lang];

    return (
        <section
            id="hero"
            className="relative flex items-center bg-primary/100 h-screen min-h-[700px] overflow-hidden text-white"
        >
            <div className="absolute inset-0">
                {background.type === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="opacity-40 w-full h-full object-cover scale-105"
                    >
                        <source src={background.src} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={background.src}
                        alt="Manutenpul Facility Management"
                        className="opacity-40 w-full h-full object-cover scale-105"
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-sky-950/55 to-sky-950/10" />
            <div className={styles.gridPattern} />

            <div className="z-10 relative mx-auto px-6 lg:px-10 w-full max-w-[1400px]">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-primary w-12 h-px" />

                        <span className="font-semibold text-primary text-sm uppercase tracking-[.2em]">
                            {lang === "it"
                                ? "Dal 1990 — Lombardia & Veneto"
                                : "Desde 1990 — Lombardía y Véneto"}
                        </span>
                    </div>

                    <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                        {pre}
                        <span className="ml-2 font-serif font-normal text-primary italic">
                            {italic}
                        </span>
                        <br />
                        {post}
                    </h1>

                    <p className="mb-10 max-w-xl font-light text-white/70 text-lg md:text-xl leading-relaxed">
                        {subtitle[lang].split("1 ora").map((text, i, arr) => (
                            <span key={i}>
                                {text}
                                {i < arr.length - 1 && (
                                    <strong className="font-medium text-primary">1 ora</strong>
                                )}
                            </span>
                        ))}
                    </p>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <a
                            href={primaryCTA.href}
                            className="inline-flex justify-center items-center bg-primary hover:bg-primary-hover px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
                        >
                            {primaryCTA.label[lang]}
                        </a>

                        <a
                            href={secondaryCTA.href}
                            className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/10 rounded-lg font-medium text-white transition-all"
                        >
                            {secondaryCTA.label[lang]}
                        </a>
                    </div>
                </div>
            </div>

            <div className="bottom-8 left-1/2 z-20 absolute flex flex-col items-center gap-2 -translate-x-1/2">
                <span className="text-[10px] text-white/40 uppercase tracking-[.3em]">
                    {lang === "it" ? "Scroll" : "Bajar"}
                </span>

                <div className="relative">
                    <Mouse className="w-6 h-6 text-white/50" />
                    <span className={styles.wheel}></span>
                </div>
            </div>
        </section>
    );
}