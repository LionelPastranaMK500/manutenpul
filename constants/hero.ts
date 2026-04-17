import { HeroSection } from "@/types";

const t = (it: string, es: string) => ({ it, es });

export const HERO_DATA: HeroSection = {
    title: t(
        "Gestione Integrata del Patrimonio Immobiliare",
        "Gestión Integrada del Patrimonio Inmobiliario"
    ),
    subtitle: t(
        "Intervento garantito in 1 ora, 24 ore su 24.",
        "Intervención garantizada en 1 hora, las 24 horas."
    ),
    primaryCTA: {
        label: t("Richiedi Preventivo", "Solicitar Presupuesto"),
        href: "#quote",
    },
    secondaryCTA: {
        label: t("Scopri i Servizi", "Descubre los Servicios"),
        href: "/services",
    },

    background: {
        type: "image",
        src: "https://fv5-2.files.fm/thumb_show.php?i=4gravb8r3q&view&v=1&PHPSESSID=e8a0c0ad5bd98f7bc6399bc073c108fd427e3c53",
    },

    stats: [
        { value: "35", label: t("Anni di Esperienza", "Años de Experiencia") },
        { value: "5", label: t("Sedi Operative", "Sedes Operativas") },
        { value: "24/7", label: t("365 Giorni", "365 Días") },
        { value: "60 min", label: t("Tempo di intervento", "Tiempo de respuesta") },
    ],
};