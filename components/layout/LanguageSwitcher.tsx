'use client';

import { usePathname, useRouter } from 'next/navigation';

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
        <div className="flex gap-2 font-medium text-sm">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={`hover:text-blue-600 transition-colors ${pathname.startsWith(`/${lang.code}`) ? 'text-blue-700 font-bold' : 'text-zinc-500'
                        }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}