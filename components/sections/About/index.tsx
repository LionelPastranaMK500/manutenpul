"use client"

import { ArrowRight, Award, Clock3, Leaf, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getAboutData } from "@/constants/about"
import TripleCertBadge from "@/components/ui/TripleCertBadge"
import styles from "./About.module.css"

interface AboutProps {
  lang: "it" | "es"
}

export default function About({ lang }: AboutProps) {
  const data = getAboutData(lang)

  const iconMap = {
    clock: <Clock3 size={18} strokeWidth={2} />,
    leaf: <Leaf size={18} strokeWidth={2} />,
    award: <Award size={18} strokeWidth={2} />,
    map: <MapPin size={18} strokeWidth={2} />,
  }

  return (
    <section id="chi-siamo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.accentCorner} />

            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/about-image.jpg"
                loading="eager"
                alt={data.imageAlt || "Chi siamo"}
                width={700}
                height={550}
                className={styles.image}
              />
            </div>

            <div className={styles.badgeWrapper}>
              <TripleCertBadge lang={lang} />
            </div>
          </motion.div>

          <motion.div
            className={styles.contentColumn}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.labelWrapper}>
              <div className={styles.labelLine} />
              <span className={styles.label}>{data.label}</span>
            </div>

            <h2 className={styles.title}>
              {data.title.normal} <span className={styles.titleItalic}>{data.title.highlight}</span> {data.title.end}
            </h2>

            <p className={styles.description}>
              {data.description}
            </p>

            <div className={styles.featuresGrid}>
              {data.features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIconWrapper}>
                    {iconMap[feature.icon as keyof typeof iconMap]}
                  </div>
                  <div className={styles.featureTextContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureSubtitle}>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#servizi" className={styles.linkCta}>
              <span>{data.buttonText}</span>
              <ArrowRight className={styles.linkIcon} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}