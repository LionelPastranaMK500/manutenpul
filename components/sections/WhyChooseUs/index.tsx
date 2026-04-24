"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHY_CHOOSE_US } from "@/constants/why-choose-us";
import styles from "./WhyChooseUs.module.css";

interface WhyChooseUsProps {
    lang: "it" | "es";
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
    const { header, benefits } = WHY_CHOOSE_US;

    return (
        <section className={styles.section}>
            <div className={styles.backgroundPattern}></div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.left}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.labelRow}>
                            <div className={styles.line}></div>
                            <span className={styles.label}>{header.label[lang]}</span>
                        </div>

                        <h2 className={styles.title}>
                            {header.titleStart[lang]}{" "}
                            <span className={styles.accent}>{header.titleAccent[lang]}</span>{" "}
                            {header.titleEnd[lang]}
                        </h2>

                        <p className={styles.description}>{header.description[lang]}</p>

                        <a href="#contatti" className={styles.cta}>
                            <span>{header.cta[lang]}</span>
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    <div className={styles.right}>
                        {benefits.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className={styles.card}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={`${styles.iconBox} ${item.accent === "eco" ? styles.eco : styles.accentBox
                                            }`}
                                    >
                                        <Icon size={20} />
                                    </div>

                                    <div>
                                        <h4 className={styles.cardTitle}>{item.title[lang]}</h4>
                                        <p className={styles.cardText}>{item.description[lang]}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}