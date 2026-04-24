"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "@/constants/testimonials";
import styles from "./Testimonials.module.css";

interface TestimonialsProps {
    lang: "it" | "es";
}

export default function Testimonials({ lang }: TestimonialsProps) {
    const { header, testimonials } = TESTIMONIALS_CONTENT;

    return (
        <section className={styles.section}>
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
                            <span className={styles.accent}>{header.titleAccent[lang]}</span>
                        </h2>

                        <p className={styles.description}>{header.description[lang]}</p>

                        <div className={styles.trustBox}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className={styles.greenStar} fill="currentColor" />
                                ))}
                            </div>

                            <div>
                                <div className={styles.trustScore}>TrustScore 4.5/5</div>
                                <div className={styles.trustText}>{header.trustText[lang]}</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.right}>
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < item.rating ? styles.goldStar : styles.emptyStar}
                                            fill={i < item.rating ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>

                                <p className={styles.quote}>“{item.content[lang]}”</p>

                                <div className={styles.authorBox}>
                                    <div className={styles.avatar}>
                                        {item.author
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>

                                    <div>
                                        <div className={styles.author}>{item.author}</div>
                                        <div className={styles.role}>{item.role[lang]}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}