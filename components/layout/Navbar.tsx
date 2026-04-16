'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/constants/site'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
    lang: 'it' | 'es'
}

export default function Navbar({ lang }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-navy-950/90 backdrop-blur-md shadow-lg py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="mx-auto px-6 lg:px-10 max-w-[1400px]">
                <div className="flex justify-between items-center h-20">
                    <Link href={`/${lang}`} className="group flex items-center gap-3">
                        <div className="flex justify-center items-center bg-accent rounded-lg w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                            // img
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.filter(item => !item.isButton).map((item) => (
                            <Link
                                key={item.href}
                                href={`/${lang}${item.href}`}
                                className="font-medium text-black/80 hover:text-blue-400 text-sm transition-colors"
                            >
                                {item.label[lang]}
                            </Link>
                        ))}

                        <LanguageSwitcher />

                        {NAV_ITEMS.filter(item => item.isButton).map((item) => (
                            <Link
                                key={item.href}
                                href={`/${lang}${item.href}`}
                                className="bg-accent hover:shadow-accent/25 hover:shadow-lg ml-4 px-6 py-2.5 rounded-lg font-semibold text-black text-sm transition-all duration-300 hover:bg-accent-dark"
                            >
                                {item.label[lang]}
                            </Link>
                        ))}
                    </div>

                    <button className="lg:hidden flex justify-center items-center w-10 h-10 text-black/80">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <line x1="4" y1="5" x2="20" y2="5"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="19" x2="20" y2="19"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}