import { NavItem } from "@/types";

const t = (it: string, es: string) => ({ it, es });

export const NAV_ITEMS: NavItem[] = [
    { label: t("Chi Siamo", "Nosotros"), href: "/about-us" },
    { label: t("Servizi", "Servicios"), href: "/services" },
    { label: t("Sedi", "Sedes"), href: "/locations" },
    { label: t("Certificazioni", "Certificaciones"), href: "/certifications" },
    { label: t("Richiedi Preventivo", "Solicitar Presupuesto"), href: "#quote", isButton: true }
];