"use client";

import { motion } from "framer-motion";
import { AREAS_CONTENT } from "@/constants/areas";
import styles from "./Areas.module.css";

interface AreasProps {
    lang: "it" | "es";
}

export default function Areas({ lang }: AreasProps) {
    const { header, areas } = AREAS_CONTENT;

    return (
        <section id="aree" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.labelWrapper}>
                        <div className={styles.line} />
                        <span className={styles.label}>{header.sub[lang]}</span>
                        <div className={styles.line} />
                    </div>

                    <h2 className={styles.title}>
                        {header.title.start[lang]}{" "}
                        <span className={styles.accent}>{header.title.accent[lang]}</span>{" "}
                        {header.title.end[lang]}
                    </h2>
                </div>

                <div className={styles.grid}>
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={area.image}
                                alt={area.region[lang]}
                                className={styles.image}
                            />

                            <div className={styles.overlay}></div>

                            <div className={styles.content}>
                                <div className={styles.region}>{area.region[lang]}</div>
                                <h3 className={styles.cities}>{area.cities[lang]}</h3>
                                <p className={styles.description}>{area.description[lang]}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}