import { I18nText } from "@/types";

interface MarqueeBarProps {
    lang: 'it' | 'es';
}

export default function MarqueeBar({ lang }: MarqueeBarProps) {
    const content = {
        intervention: { it: "INTERVENTO IN 1 ORA", es: "INTERVENCIÓN EN 1 HORA" },
        active: { it: "ATTIVO 24/7 — 365 GIORNI", es: "ACTIVO 24/7 — 365 DÍAS" },
        cities: "MILANO • MONZA • BERGAMO • COMO • TREVISO • VERONA • VICENZA"
    };

    const MarqueeTrack = () => (
        <div className="flex items-center gap-12 px-6">
            <span className="flex items-center gap-3 font-medium text-black/30 text-sm tracking-wider">
                <IconShield /> ISO 9001:2015
            </span>
            <span className="text-black/20">◆</span>
            <span className="flex items-center gap-3 font-medium text-black/30 text-sm tracking-wider">
                <IconLeaf /> ISO 14001:2017
            </span>
            <span className="text-black/20">◆</span>
            <span className="flex items-center gap-3 font-medium text-black/30 text-sm tracking-wider">
                <IconHat /> ISO 45001:2018
            </span>
            <span className="text-black/20">◆</span>
            <span className="font-medium text-black/30 text-sm uppercase tracking-wider">
                {content.intervention[lang]}
            </span>
            <span className="text-black/20">◆</span>
            <span className="font-medium text-black/30 text-sm uppercase tracking-wider">
                {content.active[lang]}
            </span>
            <span className="text-black/20">◆</span>
            <span className="font-medium text-black/30 text-sm uppercase tracking-wider">
                {content.cities}
            </span>
            <span className="text-black/20">◆</span>
        </div>
    );

    return (
        <div className="z-20 relative bg-navy-950 py-5 border-black/15 border-t border-b overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
                <MarqueeTrack />
                <MarqueeTrack />
            </div>
        </div>
    );
}

const IconShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/50">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconLeaf = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500/50">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

const IconHat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500/50">
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M14 6a6 6 0 0 1 6 6v3" />
        <path d="M4 15v-3a6 6 0 0 1 6-6" />
        <rect x="2" y="15" width="20" height="4" rx="1" />
    </svg>
);