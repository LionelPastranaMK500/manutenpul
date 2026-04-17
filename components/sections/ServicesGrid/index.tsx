"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/services";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid({ lang }: { lang: "it" | "es" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.labelRow}>
              <div className={styles.labelLine} />
              <span className={styles.label}>
                {lang === "it"
                  ? "Settori di Intervento"
                  : "Sectores de Intervención"}
              </span>
            </div>

            <h2 className={styles.title}>
              {lang === "it"
                ? "Soluzioni su Misura"
                : "Soluciones a Medida"}
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/${lang}/services/${service.slug}`}
                className={styles.card}
              >
                <div
                  className={styles.cardBackground}
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                <div className={styles.overlay} />

                <div className={styles.content}>
                  <span className={styles.category}>
                    {service.category}
                  </span>

                  <h3 className={styles.cardTitle}>
                    {service.title[lang]}
                  </h3>

                  <div>
                    <div className={styles.divider} />

                    <div className={styles.cardFooter}>
                      <p className={styles.description}>
                        {service.shortDescription[lang]}
                      </p>

                      <div className={styles.arrow}>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}