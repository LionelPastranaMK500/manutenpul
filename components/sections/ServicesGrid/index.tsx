import React from "react";
import Link from "next/link";
import {
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Home,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/constants/services";
import styles from "./ServicesGrid.module.css";

const ICON_MAP: Record<string, React.ElementType> = {
  "pulizia-uffici": Building2,
  "pulizia-industriale": Factory,
  sanificazione: ShieldCheck,
  logistica: Truck,
  "gdo-retail": ShoppingBag,
  condomini: Home,
};

export default function ServicesGrid({ lang }: { lang: "it" | "es" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.labelRow}>
              <div className={styles.labelLine} />
              <span className={styles.label}>
                {lang === "it" ? "Settori di Intervento" : "Sectores de Intervención"}
              </span>
            </div>

            <h2 className={styles.title}>
              {lang === "it" ? "Soluzioni su Misura" : "Soluciones a Medida"}
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.slice(0, 6).map(service => {
            const Icon = ICON_MAP[service.slug] || Building2;

            return (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className={styles.card}
              >
                <div>
                  <div className={styles.iconBox}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  <span className={styles.category}>
                    {service.category}
                  </span>

                  <h3 className={styles.cardTitle}>
                    {service.title[lang]}
                  </h3>
                </div>

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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}