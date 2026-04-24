import Link from "next/link";
import { privacyContent } from "@/constants/privacy";
import styles from "./PrivacyPolicy.module.css";

interface PrivacyPolicyPageProps {
    params: Promise<{ lang: "it" | "es" }>;
}

export default async function PrivacyPolicyPage({
    params,
}: PrivacyPolicyPageProps) {
    const { lang } = await params;

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <nav className={styles.breadcrumb}>
                    <Link href={`/${lang}`} className={styles.breadcrumbLink}>
                        {privacyContent.breadcrumb.home[lang]}
                    </Link>
                    <span className={styles.separator}> / </span>
                    <span className={styles.current}>{privacyContent.breadcrumb.current[lang]}</span>
                </nav>

                <header className={styles.header}>
                    <h1 className={styles.title}>{privacyContent.pageTitle[lang]}</h1>
                    <p className={styles.intro}>{privacyContent.intro[lang]}</p>
                </header>

                {/* 🚨 NUEVA ARQUITECTURA: Contenedor a dos columnas */}
                <div className={styles.layoutWrapper}>

                    {/* Barra lateral de navegación (Sticky) */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarSticky}>
                            <h3 className={styles.sidebarTitle}>Índice</h3>
                            <nav className={styles.sidebarNav}>
                                {privacyContent.sections.map((section, index) => (
                                    <a
                                        key={`nav-${index}`}
                                        href={`#section-${index}`}
                                        className={styles.sidebarLink}
                                    >
                                        {section.title[lang]}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Contenido sin cajas pesadas */}
                    <div className={styles.content}>
                        {privacyContent.sections.map((section, index) => (
                            <article key={index} id={`section-${index}`} className={styles.legalSection}>
                                <h2 className={styles.sectionTitle}>{section.title[lang]}</h2>
                                <div className={styles.sectionContent}>
                                    {section.content.map((paragraph, i) => (
                                        <p key={i} className={styles.paragraph}>
                                            {paragraph[lang]}
                                        </p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <footer className={styles.footer}>
                    <p>{privacyContent.lastUpdated[lang]}</p>
                </footer>
            </div>
        </section>
    );
}