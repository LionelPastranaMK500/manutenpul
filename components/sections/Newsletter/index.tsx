"use client";

import { motion } from "framer-motion";
import { NEWSLETTER_CONTENT } from "@/constants/newsletter";
import styles from "./Newsletter.module.css";

interface NewsletterProps {
    lang: "it" | "es";
}

export default function Newsletter({ lang }: NewsletterProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.wrapper}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.img
                        src="/images/newsletter-left.svg"
                        alt=""
                        className={styles.leftImage}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 0.15, x: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            x: { delay: 0.3, duration: 0.8 },
                            opacity: { delay: 0.3, duration: 0.8 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                    />

                    <motion.img
                        src="/images/newsletter-right.svg"
                        alt=""
                        className={styles.rightImage}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 0.15, x: 0 }}
                        animate={{ y: [-10, 5, -10] }}
                        transition={{
                            x: { delay: 0.3, duration: 0.8 },
                            opacity: { delay: 0.3, duration: 0.8 },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                    />

                    <div className={styles.content}>
                        <motion.h2
                            className={styles.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {NEWSLETTER_CONTENT.title[lang]}
                        </motion.h2>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {NEWSLETTER_CONTENT.subtitle[lang]}
                        </motion.p>

                        <motion.form
                            className={styles.form}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder={NEWSLETTER_CONTENT.placeholder[lang]}
                                    className={styles.input}
                                    required
                                />
                                <button type="submit" className={styles.button}>
                                    {NEWSLETTER_CONTENT.button[lang]}
                                </button>
                            </div>

                            <div className={styles.checkboxWrapper}>
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className={styles.checkbox}
                                    required
                                />
                                <label htmlFor="privacy" className={styles.label}>
                                    {NEWSLETTER_CONTENT.privacy[lang]}
                                </label>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}