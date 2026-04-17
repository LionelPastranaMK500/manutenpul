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
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={styles.icon}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0ZM9 18.75V12m.75 0v-.75a2.25 2.25 0 1 1 4.5 0v.75m0 0V18.75"
                    />
                </svg>
            </div>

            <div>
                <h4 className={styles.title}>Triple Cert.</h4>

                <p className={styles.subtitle}>
                    ISO 9001 - 14001 - 45001
                </p>

                <p className={styles.year}>
                    {text[lang]}
                </p>
            </div>
        </div>
    );
}