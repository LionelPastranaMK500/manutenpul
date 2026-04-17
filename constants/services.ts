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
      it: "Igienizzazione profonda di postazioni, aree comuni e sistemi HVAC.",
      es: "Higienización profunda de puestos de trabajo, zonas comunes y sistemas HVAC.",
    },
    features: [
      { it: "Postazioni", es: "Puestos" },
      { it: "Aree Comuni", es: "Áreas Comunes" },
    ],
    category: "Corporate",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
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
      it: "Trattamento con macchinari pesanti e spazzatrici professionali.",
      es: "Tratamiento con maquinaria pesada y barredoras profesionales.",
    },
    features: [
      { it: "Capannoni", es: "Naves" },
      { it: "Linee Produttive", es: "Líneas de Producción" },
    ],
    category: "Industrial",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
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
      it: "Protocolli medici di nebulizzazione perossido.",
      es: "Protocolos médicos de nebulización peróxido.",
    },
    features: [
      { it: "Nebulizzazione", es: "Nebulización" },
      { it: "Certificazione", es: "Certificación" },
    ],
    category: "Medical",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
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
      it: "Pulizia magazzini y áreas de carga industriales.",
      es: "Limpieza almacenes y zonas de carga industriales.",
    },
    features: [
      { it: "H24", es: "H24" },
      { it: "Magazzini", es: "Almacenes" },
    ],
    category: "Supply Chain",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
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
      it: "Superficies comerciales de alto tráfico.",
      es: "Superficies comerciales de alto tráfico.",
    },
    features: [
      { it: "Retail", es: "Retail" },
      { it: "GDO", es: "GDO" },
    ],
    category: "Commercial",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
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
      it: "Mantenimiento ordinario de edificios y áreas verdes.",
      es: "Mantenimiento ordinario de edificios y áreas verdes.",
    },
    features: [
      { it: "Giardini", es: "Jardines" },
      { it: "Scale", es: "Escaleras" },
    ],
    category: "Residential",
    image: "https://placehold.co/600x400/FFFFFF/FFFFFF",
    metadata: { title: "Condomini", description: "Abitaciones." },
  },
];