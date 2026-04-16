import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "pulizia-uffici",
    title: { it: "Pulizia Uffici", es: "Limpieza de Oficinas" },
    shortDescription: {
      it: "Ambienti corporate sempre impeccabili.",
      es: "Ambientes corporativos siempre impecables.",
    },
    fullDescription: {
      it: "Igienizzazione profonda di postazioni e aree comuni.",
      es: "Higienización profunda de puestos y áreas comunes.",
    },
    features: [
      { it: "Postazioni", es: "Puestos" },
      { it: "Aree Comuni", es: "Áreas Comunes" },
    ],
    category: "Corporate",
    metadata: { title: "Uffici", description: "Professionalità." },
  },
  {
    slug: "pulizia-industriale",
    title: { it: "Pulizia Industriale", es: "Limpieza Industrial" },
    shortDescription: {
      it: "Soluzioni per capannoni e logistica.",
      es: "Soluciones para naves y logística.",
    },
    fullDescription: {
      it: "Trattamento con macchinari pesanti.",
      es: "Tratamiento con maquinaria pesada.",
    },
    features: [
      { it: "Capannoni", es: "Naves" },
      { it: "Linee Produttive", es: "Líneas de Producción" },
    ],
    category: "Industrial",
    metadata: { title: "Industria", description: "Grandi superfici." },
  },
  {
    slug: "sanificazione",
    title: { it: "Sanificazione", es: "Sanitización" },
    shortDescription: {
      it: "Eliminazione certificata di virus e batteri.",
      es: "Eliminación certificada de virus y bacterias.",
    },
    fullDescription: {
      it: "Protocolli medici di nebulizzazione.",
      es: "Protocolos médicos de nebulización.",
    },
    features: [
      { it: "Nebulizzazione", es: "Nebulización" },
      { it: "Certificazione", es: "Certificación" },
    ],
    category: "Medical",
    metadata: { title: "Sanità", description: "Sicurezza." },
  },
  {
    slug: "logistica",
    title: { it: "Logistica", es: "Logística" },
    shortDescription: {
      it: "Centri distributivi e magazzini H24.",
      es: "Centros distributivos y almacenes H24.",
    },
    fullDescription: {
      it: "Pulizia magazzini e aree carico.",
      es: "Limpieza almacenes y zonas de carga.",
    },
    features: [
      { it: "H24", es: "H24" },
      { it: "Magazzini", es: "Almacenes" },
    ],
    category: "Supply Chain",
    metadata: { title: "Logistica", description: "H24." },
  },
  {
    slug: "gdo-retail",
    title: { it: "GDO / Retail", es: "GDO / Retail" },
    shortDescription: {
      it: "Supermercati e centri commerciali.",
      es: "Supermercados y centros comerciales.",
    },
    fullDescription: {
      it: "Superfici commerciali ad alto traffico.",
      es: "Superficies comerciales de alto tráfico.",
    },
    features: [
      { it: "Retail", es: "Retail" },
      { it: "GDO", es: "GDO" },
    ],
    category: "Commercial",
    metadata: { title: "Retail", description: "Shopping." },
  },
  {
    slug: "condomini",
    title: { it: "Condomini", es: "Condominios" },
    shortDescription: {
      it: "Complessi residenziali e aree comuni.",
      es: "Complejos residenciales y áreas comunes.",
    },
    fullDescription: {
      it: "Manutenzione ordinaria di stabili.",
      es: "Mantenimiento ordinario de edificios.",
    },
    features: [
      { it: "Giardini", es: "Jardines" },
      { it: "Scale", es: "Escaleras" },
    ],
    category: "Residential",
    metadata: { title: "Condomini", description: "Abitazioni." },
  },
];
