"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { CERTIFICATIONS_DATA } from "@/constants/certifications";
import styles from "./CertificationDetail.module.css";

export default function CertificationPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = use(params);

  const cert = CERTIFICATIONS_DATA.find((c) => c.slug === slug);

  if (!cert) return null;

  const Icon = cert.icon;
  const StatusIcon = cert.statusIcon;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href={`/${lang}`} className={styles.backLink}>
          <ArrowLeft size={18} />
          {lang === "it" ? "Torna indietro" : "Volver"}
        </Link>

        <div className={styles.headerGrid}>
          <div>
            <div className={styles.iconRow}>
              <div className={styles.iconBox}>
                <Icon size={38} />
              </div>

              <div>
                <p className={styles.subtitle}>
                  {cert.subtitle[lang as "it" | "es"]}
                </p>
                <h1 className={styles.title}>
                  {cert.title[lang as "it" | "es"]}
                </h1>
              </div>
            </div>

            <p className={styles.description}>
              {cert.fullDescription[lang as "it" | "es"]}
            </p>

            <div className={styles.featuresList}>
              {cert.features.map((feature, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckCircle2 className="mt-1 text-blue-600" size={20} />
                  <span className={styles.featureText}>
                    {feature[lang as "it" | "es"]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.imageWrapper}
          >
            <div className={styles.imageGlow} />

            <div className={styles.imageCard}>
              <Image
                src={cert.details.image}
                alt={cert.title[lang as "it" | "es"]}
                width={700}
                height={500}
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                {lang === "it" ? "Introduzione" : "Introducción"}
              </h2>
              <p className={styles.paragraph}>
                {cert.details.intro[lang as "it" | "es"]}
              </p>
            </section>

            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                {lang === "it" ? "Benefici" : "Beneficios"}
              </h2>

              <div className={styles.benefitsList}>
                {cert.details.benefits.map((item, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <ChevronRight className="mt-1 text-blue-600" size={18} />
                    <p className={styles.paragraph}>
                      {item[lang as "it" | "es"]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                {lang === "it" ? "Approfondimento" : "Más detalles"}
              </h2>

              <div className="space-y-4">
                {cert.details.extra.map((item, i) => (
                  <p key={i} className={styles.paragraph}>
                    {item[lang as "it" | "es"]}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className={styles.sideCard}>
              <StatusIcon size={42} className="mb-5" />

              <h3 className={styles.sideTitle}>
                {lang === "it"
                  ? "Certificazione Garantita"
                  : "Certificación Garantizada"}
              </h3>

              <p className={styles.sideText}>
                {lang === "it"
                  ? "Manutenpul mantiene elevati standard certificati in tutti i processi aziendali."
                  : "Manutenpul mantiene altos estándares certificados en todos sus procesos."}
              </p>

              <Image
                src={cert.details.mark}
                alt="Certification mark"
                width={180}
                height={80}
                className={styles.markImage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}