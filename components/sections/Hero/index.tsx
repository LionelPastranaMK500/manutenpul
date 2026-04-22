"use client";

import { Mouse } from "lucide-react";
import { motion } from "framer-motion";
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
        <section className="relative flex items-center bg-primary/100 h-screen min-h-[700px] overflow-hidden text-white">

            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {background.type === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="opacity-40 w-full h-full object-cover"
                    >
                        <source src={background.src} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={background.src}
                        alt="Hero Background"
                        className="opacity-40 w-full h-full object-cover"
                    />
                )}
            </motion.div>

            <div className="absolute inset-0 bg-black/55" />
            <div className={styles.gridPattern} />

            <div className="z-10 relative mx-auto px-6 lg:px-10 w-full max-w-[1400px]">
                <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
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
                        {subtitle[lang]}
                    </p>

                    <motion.div
                        className="flex sm:flex-row flex-col gap-4"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <a
                            href={primaryCTA.href}
                            className="inline-flex justify-center items-center bg-primary hover:bg-primary-hover px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
                        >
                            {primaryCTA.label[lang]} <span className="ml-2 font-serif font-semibold italic"> GRATUITO</span>
                        </a>

                        <a
                            href={secondaryCTA.href}
                            className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/10 rounded-lg font-medium text-white transition-all"
                        >
                            {secondaryCTA.label[lang]}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="bottom-8 left-1/2 z-20 absolute flex flex-col items-center gap-2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
            >
                <span className="text-[10px] text-white/40 uppercase tracking-[.3em]">
                    {lang === "it" ? "Scroll" : "Bajar"}
                </span>

                <div className="relative">
                    <Mouse className="w-6 h-6 text-white/50" />
                    <span className={styles.wheel}></span>
                </div>
            </motion.div>
        </section>
    );
}