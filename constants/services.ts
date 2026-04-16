import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "pulizia-uffici",
    title: { it: "Pulizia Uffici", es: "Limpieza de Oficinas" },
    shortDescription: { it: "Ambienti corporate sempre impeccabili.", es: "Ambientes corporativos siempre impecables." },
    fullDescription: {
      it: "Igienizzazione profonda di postazioni, aree comuni e sistemi HVAC.",
      es: "Higienización profunda de puestos de trabajo, zonas comunes y sistemas HVAC."
    },
    features: [
      { it: "Manutenzione postazioni", es: "Mantenimiento de puestos de trabajo" },
      { it: "Sistemi HVAC", es: "Sistemas HVAC" },
      { it: "Servizi igienici", es: "Servicios higiénicos" }
    ],
    category: 'main',
    icon: "office-icon",
    metadata: {
      title: "Pulizia Uffici Milano | Manutenpul",
      description: "Servizi professionali per ambienti corporate."
    }
  },
  {
    slug: "pulizia-industriale",
    title: { it: "Pulizia Industriale", es: "Limpieza Industrial" },
    shortDescription: { it: "Soluzioni per capannoni e logistica.", es: "Soluciones para naves industriales y logística." },
    fullDescription: {
      it: "Trattamento con macchinari pesanti e spazzatrici professionali.",
      es: "Tratamiento con maquinaria pesada y barredoras profesionales."
    },
    features: [
      { it: "Capannoni industriali", es: "Naves industriales" },
      { it: "Macchine lavasciuga", es: "Máquinas fregadoras" },
      { it: "Logistica", es: "Logística" }
    ],
    category: 'main',
    icon: "factory-icon",
    metadata: {
      title: "Pulizia Industriale Nord Italia | Manutenpul",
      description: "Trattamenti per grandi superfici e reparti logistici."
    }
  },
  {
    slug: "sanificazione",
    title: { it: "Sanificazione", es: "Sanitización / Desinfección" },
    shortDescription: { it: "Eliminazione certificata di virus e batteri.", es: "Eliminación certificada de virus y bacterias." },
    fullDescription: {
      it: "Trattamento profondo con nebulizzatori di perossido d'idrogeno.",
      es: "Tratamiento profundo con nebulizadores de peróxido de hidrógeno."
    },
    features: [
      { it: "Nebulizzatori professionali", es: "Nebulizadores profesionales" },
      { it: "Abbattimento batterico", es: "Reducción de carga bacteriana" },
      { it: "Certificazione intervento", es: "Certificación de intervención" }
    ],
    category: 'sanitization',
    icon: "shield-check",
    metadata: {
      title: "Sanificazione Certificata | Manutenpul",
      description: "Protocolli sanitari per la sicurezza degli ambienti."
    }
  }
];