import { ShieldCheck, Leaf, HardHat } from 'lucide-react';
import styles from './MarqueeBar.module.css';

interface MarqueeBarProps {
    lang: 'it' | 'es';
}

export default function MarqueeBar({ lang }: MarqueeBarProps) {
    const content = {
        intervention: { it: 'INTERVENTO IN 1 ORA', es: 'INTERVENCIÓN EN 1 HORA' },
        active: { it: 'ATTIVO 24/7 — 365 GIORNI', es: 'ACTIVO 24/7 — 365 DÍAS' },
        cities: 'MILANO • MONZA • BERGAMO • COMO • TREVISO • VERONA • VICENZA'
    };

    const MarqueeTrack = () => (
        <div className={styles.track}>
            <span className={styles.item}>
                <ShieldCheck className={styles.iconBlue} />
                ISO 9001:2015
            </span>

            <span className={styles.separator}>◆</span>

            <span className={styles.item}>
                <Leaf className={styles.iconGreen} />
                ISO 14001:2017
            </span>

            <span className={styles.separator}>◆</span>

            <span className={styles.item}>
                <HardHat className={styles.iconBlue} />
                ISO 45001:2018
            </span>

            <span className={styles.separator}>◆</span>

            <span className={styles.item}>{content.intervention[lang]}</span>

            <span className={styles.separator}>◆</span>

            <span className={styles.item}>{content.active[lang]}</span>

            <span className={styles.separator}>◆</span>

            <span className={styles.item}>{content.cities}</span>

            <span className={styles.separator}>◆</span>
        </div>
    );

    return (
        <div className={styles.bar}>
            <div className={styles.marquee}>
                <MarqueeTrack />
                <MarqueeTrack />
            </div>
        </div>
    );
}