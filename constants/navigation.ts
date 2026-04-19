import { NavItem } from "@/types";

const t = (it: string, es: string) => ({ it, es });

export const NAV_ITEMS: NavItem[] = [
  { label: t("Chi Siamo", "Nosotros"), href: "/about-us" },
  { label: t("Servizi", "Servicios"), href: "/services" },
  { label: t("Sedi", "Sedes"), href: "/locations" },
  {
    href: "#",
    label: { it: "Certificazioni", es: "Certificaciones" },
    isDropdown: true,
    subItems: [
      { slug: "iso-9001", label: "ISO 9001" },
      { slug: "iso-14001", label: "ISO 14001" },
      { slug: "iso-45001", label: "ISO 45001" },
    ],
  },
  {
    label: t("Richiedi Preventivo", "Solicitar Presupuesto"),
    href: "#quote",
    isButton: true,
  },
];
