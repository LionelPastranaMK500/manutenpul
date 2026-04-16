import { HeroSection, Stat, Certification, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
    { label: { it: "Chi Siamo", es: "Nosotros" }, href: "/about-us" },
    { label: { it: "Servizi", es: "Servicios" }, href: "/services" },
    { label: { it: "Sedi", es: "Sedes" }, href: "/locations" },
    { label: { it: "Certificazioni", es: "Certificaciones" }, href: "/certifications" },
    { label: { it: "Richiedi Preventivo", es: "Solicitar Presupuesto" }, href: "#quote", isButton: true }
];

export const HERO_DATA: HeroSection = {
    title: {
        it: "Gestione Integrata del Patrimonio Immobiliare",
        es: "Gestión Integrada del Patrimonio Inmobiliario"
    },
    subtitle: {
        it: "Intervento garantito in 1 ora, 24 ore su 24.",
        es: "Intervención garantizada en 1 hora, las 24 horas."
    },
    primaryCTA: { label: { it: "Richiedi Preventivo", es: "Solicitar Presupuesto" }, href: "#quote" },
    secondaryCTA: { label: { it: "Scopri i Servizi", es: "Descubre los Servicios" }, href: "/services" },
    stats: [
        { value: "35", label: { it: "Anni di Esperienza", es: "Años de Experiencia" } },
        { value: "5", label: { it: "Sedi Operative", es: "Sedes Operativas" } },
        { value: "24/7", label: { it: "365 Giorni", es: "365 Días" } },
        { value: "60 min", label: { it: "Tempo di intervento", es: "Tiempo de respuesta" } }
    ]
};

export const CERTIFICATIONS: Certification[] = [
    {
        id: "iso-9001",
        name: "ISO 9001",
        version: "2015",
        description: { it: "Gestione della Qualità", es: "Gestión de Calidad" },
        yearStarted: 2001
    },
    {
        id: "iso-14001",
        name: "ISO 14001",
        version: "2017",
        description: { it: "Gestione Ambientale", es: "Gestión Ambiental" },
        yearStarted: 2001
    },
    {
        id: "iso-45001",
        name: "ISO 45001",
        version: "2018",
        description: { it: "Salute e Sicurezza sul Lavoro", es: "Salud y Seguridad en el Trabajo" },
        yearStarted: 2001
    }
];