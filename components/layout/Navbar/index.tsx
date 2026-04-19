"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { NavItem } from "@/types";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./Navbar.module.css";

interface NavbarProps {
  lang: "it" | "es";
}

export default function Navbar({ lang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={`/${lang}`} className={styles.logo}>
            <div className={styles.logoBox}>MANUTENPUL</div>
          </Link>

          <div className={styles.desktopMenu}>
            {NAV_ITEMS.filter((item) => !item.isButton).map((item: NavItem) => (
              <div key={item.label.it} className="relative group">
                {item.isDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-4">
                    <span className={styles.navLink}>{item.label[lang]}</span>
                    <ChevronDown size={14} className="text-blue-500" />

                    <div className="absolute top-full right-0 mt-0 w-48 bg-white dark:bg-navy-900 rounded-xl shadow-2xl border border-blue-100 dark:border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-50 translate-y-2 group-hover:translate-y-0">
                      {item.subItems?.map(
                        (sub: { slug: string; label: string }) => (
                          <Link
                            key={sub.slug}
                            href={`/${lang}/certification/${sub.slug}`} // CAMBIADO A SINGULAR
                            className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/${lang}${item.href}`}
                    className={styles.navLink}
                  >
                    {item.label[lang]}
                  </Link>
                )}
              </div>
            ))}

            <LanguageSwitcher />

            {NAV_ITEMS.filter((item) => item.isButton).map((item) => (
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
  );
}
