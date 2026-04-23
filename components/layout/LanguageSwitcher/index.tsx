'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const languages = [
        { code: 'it', label: 'IT' },
        { code: 'es', label: 'ES' }
    ];

    const getNewPath = (newLocale: string) => {
        if (!pathname) return `/${newLocale}`;
        const segments = pathname.split('/');
        segments[1] = newLocale;
        return segments.join('/');
    };

    const handleLanguageChange = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    };

    return (
        <div className={styles.switcher}>
            {languages.map(lang => {
                const isActive = pathname?.split('/')[1] === lang.code;

                return (
                    <Link
                        key={lang.code}
                        href={getNewPath(lang.code)}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`${styles.button} ${isActive ? styles.active : styles.inactive}`}
                    >
                        {lang.label}
                    </Link>
                );
            })}
        </div>
    );
}