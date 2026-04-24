export interface StatItem {
    value: number;
    suffix?: string;
    label: {
        it: string;
        es: string;
    };
}

export const STATS_DATA: StatItem[] = [
    {
        value: 30,
        label: {
            it: "Anni di Esperienza",
            es: "Años de Experiencia",
        },
    },
    {
        value: 4,
        label: {
            it: "Sedi Operative",
            es: "Sedes Operativas",
        },
    },
    {
        value: 24,
        label: {
            it: "Ore su 24 — 365 Giorni",
            es: "24 Horas — 365 Días",
        },
    },
    {
        value: 60,
        suffix: "min",
        label: {
            it: "Tempo Medio di Intervento",
            es: "Tiempo Medio de Intervención",
        },
    },
];