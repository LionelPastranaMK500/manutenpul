import { CERTIFICATIONS, CERTIFICATIONS_CONTENT } from "@/constants/certifications";
import styles from "./Certifications.module.css";

interface CertificationsProps {
    lang: "it" | "es";
}

export default function Certifications({ lang }: CertificationsProps) {
    const { header, footer } = CERTIFICATIONS_CONTENT;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subTitle}>
                        {header.sub[lang]}
                    </span>

                    <h2 className={styles.title}>
                        {header.title[lang]}
                    </h2>

                    <p className={styles.description}>
                        {header.description[lang]}
                    </p>
                </div>

                <div className={styles.grid}>
                    {CERTIFICATIONS.map(cert => (
                        <div key={cert.id} className={`group ${styles.card}`}>
                            <div className={styles.iconCircle}>
                                <span className={styles.iconText}>ISO</span>
                            </div>

                            <h3 className={styles.cardTitle}>
                                {cert.name}
                            </h3>

                            <p className={styles.version}>
                                {lang === "it" ? "Edizione" : "Edición"} {cert.version}
                            </p>

                            <div className={styles.divider} />

                            <p className={styles.cardDescription}>
                                {cert.description[lang]}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h4 className={styles.footerTitle}>
                            {footer.title[lang]}
                        </h4>

                        <p className={styles.footerDescription}>
                            {footer.description[lang]}
                        </p>
                    </div>

                    <button className={styles.button}>
                        {footer.cta[lang]}
                    </button>
                </div>
            </div>
        </section>
    );
}