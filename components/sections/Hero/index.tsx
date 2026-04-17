import { Mouse } from "lucide-react";
import { HERO_DATA } from "@/constants/hero";
import styles from "./Hero.module.css";

interface HeroProps {
    lang: "it" | "es";
}

export default function Hero({ lang }: HeroProps) {
    const { subtitle, primaryCTA, secondaryCTA } = HERO_DATA;

    const titleParts = {
        it: { pre: "Gestione Integrata", italic: "del tuo", post: "Patrimonio Immobiliare" },
        es: { pre: "Gestión Integrada", italic: "de tu", post: "Patrimonio Inmobiliario" }
    };

    const { pre, italic, post } = titleParts[lang];

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.background}>
                <img
                    src="/building-night.webp"
                    alt="Manutenpul Facility Management"
                    className={styles.image}
                />
            </div>

            <div className={styles.overlay} />
            <div className={styles.gridPattern} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.topLine}>
                        <div className={styles.line}></div>
                        <span className={styles.location}>
                            {lang === "it"
                                ? "Dal 1990 — Lombardia & Veneto"
                                : "Desde 1990 — Lombardía y Véneto"}
                        </span>
                    </div>

                    <h1 className={styles.title}>
                        {pre}
                        <span className={styles.italic}> {italic}</span>
                        <br />
                        {post}
                    </h1>

                    <p className={styles.subtitle}>
                        {subtitle[lang].split("1 ora").map((text, i, arr) => (
                            <span key={i}>
                                {text}
                                {i < arr.length - 1 && (
                                    <strong className={styles.highlight}>1 ora</strong>
                                )}
                            </span>
                        ))}
                    </p>

                    <div className={styles.actions}>
                        <a href={primaryCTA.href} className={styles.primaryBtn}>
                            {primaryCTA.label[lang]}
                        </a>

                        <a href={secondaryCTA.href} className={styles.secondaryBtn}>
                            {secondaryCTA.label[lang]}
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.scroll}>
                <span className={styles.scrollText}>
                    {lang === "it" ? "Scroll" : "Bajar"}
                </span>

                <div className={styles.mouseWrapper}>
                    <Mouse className={styles.scrollIcon} />
                    <span className={styles.wheel}></span>
                </div>
            </div>
        </section>
    );
}