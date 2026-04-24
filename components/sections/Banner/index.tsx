import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ctaContent } from "@/constants/cta";
import { WHATSAPP_CONFIG } from "@/constants/whatsapp"; 
import styles from "./Banner.module.css";
interface CTAProps {
    lang: "it" | "es";
}

export default function Banner({ lang }: CTAProps) {
    const content = ctaContent;
    const whatsappMessage = WHATSAPP_CONFIG.defaultMessages[lang];
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>
                    <span>{content.titlePart1[lang]}</span>
                    <span className={styles.titleHighlight}>{content.titleHighlight[lang]}</span>
                </h2>

                <p className={styles.description}>
                    {content.description[lang]}
                </p>

                <div className={styles.buttonGroup}>
                    {/* Botón Primario: Scroll al formulario */}
                    <Link href={`/${lang}${content.primaryBtn.href}`} className={styles.primaryBtn}>
                        <span>{content.primaryBtn.label[lang]}</span>
                        <ArrowRight className={styles.primaryIcon} />
                    </Link>

                    {/* Botón Secundario: WhatsApp Inteligente */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>{content.secondaryBtn.label[lang]}</span>
                    </a>
                </div>

            </div>
        </section>
    );
}