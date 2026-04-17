'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navigation'
import LanguageSwitcher from '../LanguageSwitcher'
import styles from './Navbar.module.css'

interface NavbarProps {
    lang: 'it' | 'es'
}

export default function Navbar({ lang }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Link href={`/${lang}`} className={styles.logo}>
                        <div className={styles.logoBox}>
                            img
                        </div>
                    </Link>

                    <div className={styles.desktopMenu}>
                        {NAV_ITEMS.filter(item => !item.isButton).map(item => (
                            <Link
                                key={item.href}
                                href={`/${lang}${item.href}`}
                                className={styles.navLink}
                            >
                                {item.label[lang]}
                            </Link>
                        ))}

                        <LanguageSwitcher />

                        {NAV_ITEMS.filter(item => item.isButton).map(item => (
                            <Link
                                key={item.href}
                                href={`/${lang}${item.href}`}
                                className={styles.cta}
                            >
                                {item.label[lang]}
                            </Link>
                        ))}
                    </div>

                    <button className={styles.mobileButton}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    )
}