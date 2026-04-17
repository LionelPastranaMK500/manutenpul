import { Certification } from "@/types";

export const CERTIFICATIONS_CONTENT = {
    header: {
        sub: { it: "Eccellenza Garantita", es: "Excelencia Garantizada" },
        title: { it: "Qualità, Sicurezza e Ambiente", es: "Calidad, Seguridad y Ambiente" },
        description: {
            it: "Manutenpul opera secondo i più alti standard internazionali, garantendo processi certificati e sostenibili.",
            es: "Manutenpul opera bajo los más altos estándares internacionales, garantizando procesos certificados y sostenibles."
        }
    },
    footer: {
        title: { it: "Triple Certificazione Integrata", es: "Triple Certificación Integrada" },
        description: {
            it: "Siamo tra le poche realtà del settore a mantenere il rinnovo ininterrotto dal 2001.",
            es: "Somos de las pocas empresas del sector en mantener la renovación ininterrumpida desde 2001."
        },
        cta: { it: "Scarica Certificati", es: "Descargar Certificados" }
    }
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