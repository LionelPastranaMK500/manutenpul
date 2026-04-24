"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS_DATA } from "@/constants/stats";
import styles from "./Stats.module.css";

interface StatsProps {
    lang: "it" | "es";
}

function AnimatedCounter({
    value,
    suffix,
}: {
    value: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 1800;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <div ref={ref} className={styles.value}>
            {count}
            {suffix && <span className={styles.suffix}>{suffix}</span>}
        </div>
    );
}

export default function Stats({ lang }: StatsProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {STATS_DATA.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <div className={styles.label}>{stat.label[lang]}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}