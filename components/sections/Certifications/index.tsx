"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CERTIFICATIONS_DATA, CERTIFICATIONS_CONTENT } from "@/constants/certifications";
import styles from "./Certifications.module.css";

interface CertificationsProps {
    lang: "it" | "es";
}

export default function Certifications({ lang }: CertificationsProps) {
    const { header } = CERTIFICATIONS_CONTENT;

    return (
        <section id="certificazioni" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.labelWrapper}>
                        <div className={styles.labelLine} />
                        <span className={styles.label}>{header.sub[lang]}</span>
                        <div className={styles.labelLine} />
                    </div>

                    <h2 className={styles.title}>
                        <span className={styles.titleMain}>{header.title[lang]}</span>
                        <span className={styles.titleAccent}>{header.titleAccent[lang]}</span>
                    </h2>

                    <p className={styles.description}>{header.description[lang]}</p>
                </div>

                <div className={styles.grid}>
                    {CERTIFICATIONS_DATA.map((item, index) => (
                        <Link
                            key={item.id}
                            href={`/certifications/${item.slug}`}
                            className={styles.cardLink}
                        >
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.isoNum}>
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <span className={styles.isoTitle}>{item.title[lang]}</span>
                                <span className={styles.isoMeta}>{item.id}</span>

                                <div className={styles.divider} />

                                <h3 className={styles.cardTitle}>{item.subtitle[lang]}</h3>
                                <p className={styles.cardText}>{item.fullDescription[lang]}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}