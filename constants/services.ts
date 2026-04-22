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
    image: "/images/services/servizi-di-pulizia.jpg",
    metadata: {
      title: "Pulizia Uffici",
      description: "Servizi professionali per uffici sempre puliti e igienizzati.",
    },
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
    image: "images/services/pulizia-industriale.jpg",
    metadata: {
      title: "Pulizia Industriale",
      description: "Pulizia professionale di grandi superfici industriali e produttive.",
    },
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
    image: "images/services/sanificazione.jpg",
    metadata: {
      title: "Sanificazione",
      description: "Sanificazione certificata per ambienti sicuri e protetti.",
    },
  },
  {
    slug: "logistica",
    title: { it: "Logistica", es: "Logística" },
    shortDescription: {
      it: "Centri distributivi e magazzini H24.",
      es: "Centros distributivos y almacenes H24.",
    },
    fullDescription: {
      it: "Pulizia magazzini e aree di carico industriali.",
      es: "Limpieza de almacenes y zonas de carga industriales.",
    },
    features: [
      { it: "H24", es: "H24" },
      { it: "Magazzini", es: "Almacenes" },
    ],
    category: "Supply Chain",
    image: "images/services/logistica.jpg",
    metadata: {
      title: "Logistica",
      description: "Pulizia professionale per magazzini e centri logistici operativi H24.",
    },
  },
  {
    slug: "disinfestazioni",
    title: { it: "Disinfestazioni", es: "Control de Plagas" },
    shortDescription: {
      it: "Eliminazione professionale di infestazioni.",
      es: "Eliminación profesional de infestaciones.",
    },
    fullDescription: {
      it: "Interventi certificati contro insetti, roditori e infestazioni.",
      es: "Intervenciones certificadas contra insectos, roedores e infestaciones.",
    },
    features: [
      { it: "Roditori", es: "Roedores" },
      { it: "Insetti", es: "Insectos" },
    ],
    category: "Pest Control",
    image: "images/services/disinfestazioni.jpg",
    metadata: {
      title: "Disinfestazioni",
      description: "Servizi certificati di controllo infestazioni per ambienti sicuri.",
    },
  },
  {
    slug: "condomini",
    title: { it: "Condomini", es: "Condominios" },
    shortDescription: {
      it: "Complessi residenziali e aree comuni.",
      es: "Complejos residenciales y áreas comunes.",
    },
    fullDescription: {
      it: "Manutenzione ordinaria di edifici e aree verdi.",
      es: "Mantenimiento ordinario de edificios y áreas verdes.",
    },
    features: [
      { it: "Giardini", es: "Jardines" },
      { it: "Scale", es: "Escaleras" },
    ],
    category: "Residential",
    image: "images/services/condomini.jpg",
    metadata: {
      title: "Condomini",
      description: "Pulizia e manutenzione di condomini e spazi residenziali comuni.",
    },
  },
];