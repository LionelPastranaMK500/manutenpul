import { ShieldCheck, Leaf, HardHat } from "lucide-react";
import styles from "./MarqueeBar.module.css";

interface MarqueeBarProps {
    lang: "it" | "es";
}

export default function MarqueeBar({ lang }: MarqueeBarProps) {
    const content = {
        intervention: { it: "INTERVENTO IN 1 ORA", es: "INTERVENCIÓN EN 1 HORA" },
        active: { it: "ATTIVO 24/7 — 365 GIORNI", es: "ACTIVO 24/7 — 365 DÍAS" },
        cities: "MILANO • MONZA • BERGAMO • COMO • TREVISO • VERONA • VICENZA",
    };

    const items = [
        { icon: <ShieldCheck className={styles.iconBlue} />, text: "ISO 9001:2015" },
        { icon: <Leaf className={styles.iconGreen} />, text: "ISO 14001:2017" },
        { icon: <HardHat className={styles.iconBlue} />, text: "ISO 45001:2018" },
        { text: content.intervention[lang] },
        { text: content.active[lang] },
        { text: content.cities },
    ];

    return (
        <div className={styles.bar}>
            <div className={styles.marquee}>
                {[...Array(2)].map((_, i) => (
                    <div key={i} className={styles.track}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.item}>
                                {item.icon}
                                <span>{item.text}</span>
                                <span className={styles.separator}>◆</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}