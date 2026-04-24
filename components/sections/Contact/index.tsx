"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Lock, ExternalLink, Camera } from "lucide-react";
import { contactContent } from "@/constants/contact";
import styles from "./Contact.module.css";

interface ContactProps {
    lang: "it" | "es";
}

export default function Contact({ lang }: ContactProps) {
    const content = contactContent;
    const [selectedFiles, setSelectedFiles] = useState<number>(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles(e.target.files.length);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulario enviado");
    };

    return (
        <section id="contatti" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.infoColumn}>
                        <div className={styles.subtitleBox}>
                            <div className={styles.subtitleLine}></div>
                            <span className={styles.subtitleText}>
                                {content.sectionTitle[lang]}
                            </span>
                        </div>

                        <h2 className={styles.title}>
                            <span>{content.titlePart1[lang]} </span>
                            <span className={styles.titleHighlight}>
                                {content.titleHighlight[lang]}
                            </span>
                            <span> {content.titlePart2[lang]}</span>
                        </h2>

                        <p className={styles.description}>{content.description[lang]}</p>

                        <div>
                            {content.infoList.map((item, idx) => {
                                const Icon = item.icon;
                                const isEmerald = item.color === "emerald";

                                return (
                                    <div key={idx} className={styles.contactItem}>
                                        <div
                                            className={
                                                isEmerald ? styles.iconBoxEmerald : styles.iconBoxBlue
                                            }
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className={styles.itemTitle}>{item.title[lang]}</div>

                                            {typeof item.content === "string" ? (
                                                item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className={`${styles.itemText} hover:text-blue-600 transition-colors`}
                                                    >
                                                        {item.content}
                                                    </a>
                                                ) : (
                                                    <p className={`${styles.itemText} whitespace-pre-line`}>
                                                        {item.content}
                                                    </p>
                                                )
                                            ) : (
                                                <p className={styles.itemText}>
                                                    {item.content[lang][0]}
                                                    <br />
                                                    <strong className="text-slate-900">
                                                        {item.content[lang][1]}
                                                    </strong>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-slate-50 mt-10 p-5 border border-slate-200 rounded-xl">
                            <div className="flex items-center gap-3 mb-2">
                                <Lock className="w-4 h-4 text-blue-600" />
                                <span className="font-bold text-slate-900 text-sm">
                                    {content.clientPortal.title[lang]}
                                </span>
                            </div>

                            <p className="mb-3 text-slate-500 text-xs">
                                {content.clientPortal.desc[lang]}
                            </p>

                            <Link
                                href={content.clientPortal.href}
                                className="inline-flex items-center gap-1.5 font-semibold text-blue-600 text-sm hover:underline"
                            >
                                {content.clientPortal.linkText[lang]}
                                <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <form onSubmit={handleSubmit} className={styles.formWrapper}>
                            <h3 className={styles.formTitle}>{content.form.title[lang]}</h3>

                            <div className="gap-5 grid md:grid-cols-2">
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.company[lang]}
                                    </label>
                                    <input type="text" required className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.name[lang]}
                                    </label>
                                    <input type="text" required className={styles.input} />
                                </div>
                            </div>

                            <div className="gap-5 grid md:grid-cols-2">
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email *</label>
                                    <input type="email" required className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.phone[lang]}
                                    </label>
                                    <input type="tel" required className={styles.input} />
                                </div>
                            </div>

                            <div className="gap-5 grid md:grid-cols-3">
                                <div className={`${styles.inputGroup} md:col-span-2`}>
                                    <label className={styles.label}>
                                        {content.form.fields.address[lang]}
                                    </label>
                                    <input type="text" required className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.city[lang]}
                                    </label>
                                    <input type="text" required className={styles.input} />
                                </div>
                            </div>

                            <div className="gap-5 grid md:grid-cols-2">
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.sqm[lang]}
                                    </label>
                                    <input type="number" min="1" required className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {content.form.fields.propertyType[lang]}
                                    </label>
                                    <select required className={styles.input}>
                                        <option value="">
                                            {lang === "it" ? "Seleziona..." : "Selecciona..."}
                                        </option>
                                        {content.form.propertyOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label[lang]}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    {content.form.fields.serviceType[lang]}
                                </label>
                                <select required className={styles.input}>
                                    <option value="">
                                        {lang === "it" ? "Seleziona..." : "Selecciona..."}
                                    </option>
                                    {content.form.serviceOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label[lang]}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    {content.form.fields.photos.label[lang]}
                                </label>

                                <label className={styles.uploadZone}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    <Camera className="mx-auto mb-2 w-8 h-8 text-slate-300" />
                                    <p className="text-slate-500 text-sm">
                                        {selectedFiles > 0
                                            ? `${selectedFiles} archivo(s) seleccionado(s)`
                                            : content.form.fields.photos.placeholder[lang]}
                                    </p>
                                    <p className="mt-1 text-slate-400 text-xs">
                                        JPG, PNG — max 5MB
                                    </p>
                                </label>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    {content.form.fields.notes[lang]}
                                </label>
                                <textarea
                                    rows={3}
                                    className={`${styles.input} resize-none`}
                                ></textarea>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-1 border-slate-300 rounded focus:ring-blue-600 w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-slate-500 text-xs leading-relaxed">
                                        {content.form.fields.privacy.text1[lang]}{" "}
                                        <Link
                                            href={`/${lang}/privacy`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {content.form.fields.privacy.link[lang]}
                                        </Link>{" "}
                                        {content.form.fields.privacy.text2[lang]}
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <span>{content.form.fields.submit[lang]}</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}