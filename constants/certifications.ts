import { ShieldCheck, Award, Leaf, HeartPulse } from "lucide-react";
import { Certification } from "@/types";

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    slug: "iso-9001",
    id: "9001",
    icon: Award,
    statusIcon: ShieldCheck,

    title: {
      it: "ISO 9001:2015",
      es: "ISO 9001:2015",
    },

    subtitle: {
      it: "Gestione della Qualità",
      es: "Gestión de la Calidad",
    },

    fullDescription: {
      it: "Il pilastro della nostra operatività. Garantiamo processi ottimizzati per la massima soddisfazione del cliente.",
      es: "El pilar de nuestra operatividad. Garantizamos procesos optimizados para la máxima satisfacción del cliente.",
    },

    features: [
      {
        it: "Monitoraggio continuo dei processi",
        es: "Monitoreo continuo de procesos",
      },
      {
        it: "Efficienza operativa garantita",
        es: "Eficiencia operativa garantizada",
      },
      {
        it: "Focus sulla soddisfazione cliente",
        es: "Enfoque en la satisfacción del cliente",
      },
    ],

    details: {
      intro: {
        it: "Noi di Manutenpul abbiamo scelto standard di qualità elevati per garantire professionalità, affidabilità e processi certificati in ogni servizio offerto.",
        es: "En Manutenpul hemos elegido altos estándares de calidad para garantizar profesionalidad, fiabilidad y procesos certificados en cada servicio ofrecido.",
      },

      benefits: [
        {
          it: "Maggiore efficacia ed efficienza dei processi interni",
          es: "Mayor eficacia y eficiencia en los procesos internos",
        },
        {
          it: "Miglioramento della soddisfazione del cliente",
          es: "Mejora de la satisfacción del cliente",
        },
        {
          it: "Riduzione di costi e sprechi",
          es: "Reducción de costos y desperdicios",
        },
      ],

      extra: [
        {
          it: "La certificazione ISO 9001 garantisce trasparenza organizzativa e miglioramento continuo delle prestazioni.",
          es: "La certificación ISO 9001 garantiza transparencia organizativa y mejora continua del rendimiento.",
        },
        {
          it: "Questo standard è spesso richiesto anche nelle gare pubbliche.",
          es: "Este estándar también suele ser requerido en licitaciones públicas.",
        },
      ],

      image: "/images/certifications/MANUTENPUL-ISO9001.webp",
      mark: "/images/certifications/TRANS-CER.webp",
    },
  },

  {
    slug: "iso-14001",
    id: "14001",
    icon: Leaf,
    statusIcon: ShieldCheck,

    title: {
      it: "ISO 14001:2015",
      es: "ISO 14001:2015",
    },

    subtitle: {
      it: "Gestione Ambientale",
      es: "Gestión Ambiental",
    },

    fullDescription: {
      it: "Impegno concreto verso la sostenibilità. Utilizziamo prodotti a basso impatto e tecnologie green.",
      es: "Compromiso concreto con la sostenibilidad. Utilizamos productos de bajo impacto y tecnologías ecológicas.",
    },

    features: [
      {
        it: "Riduzione dell'impronta ambientale",
        es: "Reducción de la huella ambiental",
      },
      {
        it: "Gestione sostenibile dei rifiuti",
        es: "Gestión sostenible de residuos",
      },
      {
        it: "Uso efficiente delle risorse",
        es: "Uso eficiente de los recursos",
      },
    ],

    details: {
      intro: {
        it: "La certificazione ISO 14001 conferma il nostro impegno nel ridurre l’impatto ambientale delle attività operative.",
        es: "La certificación ISO 14001 confirma nuestro compromiso de reducir el impacto ambiental de las actividades operativas.",
      },

      benefits: [
        {
          it: "Riduzione dei consumi e degli sprechi",
          es: "Reducción del consumo y desperdicio",
        },
        {
          it: "Migliore gestione delle risorse ambientali",
          es: "Mejor gestión de los recursos ambientales",
        },
        {
          it: "Conformità alle normative ambientali",
          es: "Cumplimiento de normativas ambientales",
        },
      ],

      extra: [
        {
          it: "Adottiamo procedure ecosostenibili per garantire servizi efficienti e responsabili.",
          es: "Adoptamos procedimientos sostenibles para garantizar servicios eficientes y responsables.",
        },
        {
          it: "L'obiettivo è migliorare continuamente le performance ambientali.",
          es: "El objetivo es mejorar continuamente el desempeño ambiental.",
        },
      ],

      image: "/images/certifications/MANUTENPUL-ISO14001.webp",
      mark: "/images/certifications/TRANS-CER.webp",
    },
  },

  {
    slug: "iso-45001",
    id: "45001",
    icon: HeartPulse,
    statusIcon: ShieldCheck,

    title: {
      it: "ISO 45001:2018",
      es: "ISO 45001:2018",
    },

    subtitle: {
      it: "Sicurezza sul Lavoro",
      es: "Seguridad Laboral",
    },

    fullDescription: {
      it: "La sicurezza dei nostri collaboratori e dei vostri spazi è la priorità assoluta.",
      es: "La seguridad de nuestros colaboradores y de sus espacios es la prioridad absoluta.",
    },

    features: [
      {
        it: "Prevenzione dei rischi lavorativi",
        es: "Prevención de riesgos laborales",
      },
      {
        it: "Ambienti di lavoro sicuri",
        es: "Ambientes de trabajo seguros",
      },
      {
        it: "Formazione continua del personale",
        es: "Capacitación continua del personal",
      },
    ],

    details: {
      intro: {
        it: "La certificazione ISO 45001 garantisce un sistema di gestione della salute e sicurezza volto a prevenire rischi e incidenti.",
        es: "La certificación ISO 45001 garantiza un sistema de gestión de salud y seguridad orientado a prevenir riesgos y accidentes.",
      },

      benefits: [
        {
          it: "Maggiore tutela dei lavoratori",
          es: "Mayor protección de los trabajadores",
        },
        {
          it: "Riduzione degli incidenti sul lavoro",
          es: "Reducción de accidentes laborales",
        },
        {
          it: "Miglioramento continuo della sicurezza",
          es: "Mejora continua de la seguridad",
        },
      ],

      extra: [
        {
          it: "Investiamo costantemente nella formazione e nella prevenzione per garantire ambienti sicuri.",
          es: "Invertimos constantemente en formación y prevención para garantizar entornos seguros.",
        },
        {
          it: "La sicurezza operativa è parte integrante della nostra qualità.",
          es: "La seguridad operativa es parte integral de nuestra calidad.",
        },
      ],

      image: "/images/certifications/MANUTENPUL-ISO45001.webp",
      mark: "/images/certifications/TRANS-CER.webp",
    },
  },
];

export const CERTIFICATIONS_CONTENT = {
  header: {
    sub: {
      it: "Eccellenza Garantita",
      es: "Excelencia Garantizada",
    },
    title: {
      it: "Tripla Certificazione",
      es: "Triple Certificación",
    },
    titleAccent: {
      it: "Internazionale",
      es: "Internacional",
    },
    description: {
      it: "Manutenpul opera secondo i più alti standard internazionali, garantendo processi certificati e sostenibili.",
      es: "Manutenpul opera bajo los más altos estándares internacionales, garantizando procesos certificados y sostenibles.",
    },
  },

  footer: {
    title: {
      it: "Tripla Certificazione Integrata",
      es: "Triple Certificación Integrada",
    },
    description: {
      it: "Siamo tra le poche realtà del settore a mantenere il rinnovo ininterrotto dal 2001.",
      es: "Somos de las pocas empresas del sector en mantener la renovación ininterrumpida desde 2001.",
    },
    cta: {
      it: "Scarica Certificati",
      es: "Descargar Certificados",
    },
  },
};