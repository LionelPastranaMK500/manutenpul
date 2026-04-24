import { Zap, Timer, Puzzle, Lock, LucideIcon } from "lucide-react";

interface BenefitItem {
    icon: LucideIcon;
    title: { it: string; es: string };
    description: { it: string; es: string };
    accent: "accent" | "eco";
}

export const WHY_CHOOSE_US = {
    header: {
        label: {
            it: "Perché Manutenpul",
            es: "Por qué Manutenpul",
        },
        titleStart: {
            it: "Un partner che",
            es: "Un socio que",
        },
        titleAccent: {
            it: "elimina",
            es: "elimina",
        },
        titleEnd: {
            it: "la complessità",
            es: "la complejidad",
        },
        description: {
            it: "Sostituisci decine di fornitori disomogenei con un unico interlocutore qualificato. Riduci i costi di gestione, elimini la burocrazia e alzi lo standard qualitativo di ogni servizio.",
            es: "Sustituye decenas de proveedores por un único interlocutor cualificado. Reduce costes, elimina burocracia y eleva la calidad de cada servicio.",
        },
        cta: {
            it: "Inizia Ora",
            es: "Empezar Ahora",
        },
    },

    benefits: [
        {
            icon: Zap,
            accent: "accent",
            title: {
                it: "Disponibilità H24 / 365",
                es: "Disponibilidad 24/7 / 365",
            },
            description: {
                it: "Squadre di reperibilità attive giorno e notte, festivi inclusi. Nessuna interruzione di servizio.",
                es: "Equipos activos día y noche, incluidos festivos. Sin interrupciones.",
            },
        },
        {
            icon: Timer,
            accent: "accent",
            title: {
                it: "Intervento in 60 Minuti",
                es: "Intervención en 60 Minutos",
            },
            description: {
                it: "Veicoli pre-attrezzati e sistema di dispatch disciplinato per raggiungere qualsiasi sede entro un'ora.",
                es: "Vehículos preparados y sistema logístico para llegar en una hora.",
            },
        },
        {
            icon: Puzzle,
            accent: "eco",
            title: {
                it: "Servizio Integrato Total",
                es: "Servicio Integrado Total",
            },
            description: {
                it: "Dalla pulizia alla ristrutturazione: un solo contratto, un solo referente.",
                es: "Desde limpieza hasta reformas: un solo contrato, un solo responsable.",
            },
        },
        {
            icon: Lock,
            accent: "eco",
            title: {
                it: "Area Riservata Clienti",
                es: "Área Reservada Clientes",
            },
            description: {
                it: "Portale dedicato per verificare interventi e certificazioni.",
                es: "Portal dedicado para verificar intervenciones y certificaciones.",
            },
        },
    ] as BenefitItem[],
};