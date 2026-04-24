import Link from "next/link";
import { MapPin } from "lucide-react";
import { footerContent } from "@/constants/footer";
import styles from "./Footer.module.css";

interface FooterProps {
    lang: "it" | "es";
}

export default function Footer({ lang }: FooterProps) {
    const content = footerContent;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.companyColumn}>
                        <img
                            src={content.company.logo}
                            alt="Manutenpul Logo"
                            className={styles.logo}
                        />

                        <p className={styles.description}>
                            {content.company.description[lang]}
                        </p>

                        <div className={styles.socialGroup}>
                            {content.company.socials.map((social, idx) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialBtn}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>
                            {content.columns[0].title[lang]}
                        </h4>

                        <ul className={styles.linkList}>
                            {content.columns[0].links.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/${lang}${link.href}`}
                                        className={styles.linkItem}
                                    >
                                        {link.label[lang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>
                            {content.columns[1].title[lang]}
                        </h4>

                        <ul className={styles.linkList}>
                            {content.columns[1].links.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/${lang}${link.href}`}
                                        className={styles.linkItem}
                                    >
                                        {link.label[lang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {content.columns[1].subColumn && (
                            <>
                                <h4 className={styles.columnTitleSub}>
                                    {content.columns[1].subColumn.title[lang]}
                                </h4>

                                <ul className={styles.linkList}>
                                    {content.columns[1].subColumn.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={`/${lang}${link.href}`}
                                                className={styles.linkItem}
                                            >
                                                {link.label[lang]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    <div>
                        <h4 className={styles.columnTitle}>
                            {content.locations.title[lang]}
                        </h4>

                        <ul className={styles.locationList}>
                            {content.locations.items.map((location, idx) => (
                                <li key={idx} className={styles.locationItem}>
                                    <MapPin className={styles.locationIcon} />
                                    <span className={styles.locationText}>{location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        {content.bottom.copyright[lang]}
                    </p>

                    <div className={styles.legalGroup}>
                        {content.bottom.legalLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={`/${lang}${link.href}`}
                                className={styles.legalLink}
                            >
                                {link.label[lang]}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}