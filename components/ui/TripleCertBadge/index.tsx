import { Award } from "lucide-react";
import styles from "./TripleCertBadge.module.css";

interface TripleCertBadgeProps {
    lang: "it" | "es";
}

export default function TripleCertBadge({ lang }: TripleCertBadgeProps) {
    const text = {
        it: "dal 2001",
        es: "desde 2001",
    };

    return (
        <div className={styles.badge}>
            <div className={styles.iconWrapper}>
                <Award className={styles.icon} strokeWidth={2.5} />
            </div>

            <div className={styles.textContent}>
                <h4 className={styles.title}>Triple Cert.</h4>
                <p className={styles.subtitle}>
                    ISO 9001 - 14001 - 45001
                </p>
                <p className={styles.year}>
                    — {text[lang]}
                </p>
            </div>
        </div>
    );
}