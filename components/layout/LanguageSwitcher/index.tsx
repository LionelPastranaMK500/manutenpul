'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const languages = [
        { code: 'it', label: 'IT' },
        { code: 'es', label: 'ES' }
    ];

    const toggleLanguage = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.push(segments.join('/'));
    };

    return (
        <div className={styles.switcher}>
            {languages.map(lang => (
                <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={`${styles.button} ${pathname.startsWith(`/${lang.code}`) ? styles.active : styles.inactive
                        }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}