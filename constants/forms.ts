import { I18nText } from "@/types";

export const PROPERTY_TYPES: { value: string; label: I18nText }[] = [
    { value: "office", label: { it: "Ufficio / Azienda", es: "Oficina / Empresa" } },
    { value: "industrial", label: { it: "Capannone / Logistica", es: "Nave / Logística" } },
    { value: "condo", label: { it: "Condominio / Civile", es: "Comunidad / Residencial" } },
    { value: "medical", label: { it: "Studio Medico / Sanitario", es: "Consultorio / Sanitario" } }
];

export const INTERVENTION_TYPES: { value: string; label: I18nText }[] = [
    { value: "ordinary", label: { it: "Ordinaria (Ricorrente)", es: "Ordinaria (Recurrente)" } },
    { value: "extraordinary", label: { it: "Straordinaria (Una tantum)", es: "Extraordinaria (Puntual)" } },
    { value: "emergency", label: { it: "Emergenza H24", es: "Emergencia 24h" } }
];