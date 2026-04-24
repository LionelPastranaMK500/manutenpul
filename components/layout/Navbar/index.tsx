"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { NavItem } from "@/types";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./Navbar.module.css";

interface NavbarProps {
  lang: "it" | "es";
}

export default function Navbar({ lang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const normalizedPath =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  const isHome = normalizedPath === `/${lang}`;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (isHome) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const applySolidStyle = !isHome || isScrolled;

  return (
    <nav
      className={`${styles.navbar}
      ${applySolidStyle ? styles.scrolled : styles.transparent}
      ${showNavbar ? styles.show : styles.hide}`}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={`/${lang}`} className={styles.logo}>
            <div className={styles.logoBox}>
              <img src="/images/Logo_Manu.svg" alt="Manutenpul Logo" />
            </div>

            <div className={styles.logoText}>
              <span>MANUTENPUL</span>
              <span>Facility Management</span>
            </div>
          </Link>

          <div className={styles.desktopMenu}>
            {NAV_ITEMS.filter((item) => !item.isButton).map((item: NavItem) => (
              <div key={item.label.it} className={styles.dropdown}>
                {item.isDropdown ? (
                  <div className={styles.dropdownTrigger}>
                    <span className={styles.navLink}>{item.label[lang]}</span>
                    <ChevronDown size={14} className={styles.dropdownIcon} />

                    <div className={styles.dropdownMenu}>
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/${lang}/certification/${sub.slug}`}
                          className={styles.dropdownItem}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={`/${lang}${item.href}`} className={styles.navLink}>
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

          <button
            className={styles.mobileButton}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className={styles.mobileMenu}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label.it}
                href={`/${lang}${item.href}`}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label[lang]}
              </Link>
            ))}

            <div className={styles.mobileLang}>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}