import { ShieldCheck, Award, Leaf, HeartPulse, LucideIcon } from "lucide-react";
import { Certification } from "@/types";

export interface CertificationItem {
  slug: string;
  id: string;
  icon: LucideIcon;
  statusIcon: LucideIcon;
  title: { it: string; es: string };
  subtitle: { it: string; es: string };
  fullDescription: { it: string; es: string };
  features: { it: string; es: string }[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    slug: "iso-9001",
    id: "9001",
    icon: Award,
    statusIcon: ShieldCheck,
    title: { it: "ISO 9001:2015", es: "ISO 9001:2015" },
    subtitle: { it: "Gestione della Qualità", es: "Gestión de la Calidad" },
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
  },
  {
    slug: "iso-14001",
    id: "14001",
    icon: Leaf,
    statusIcon: ShieldCheck,
    title: { it: "ISO 14001:2015", es: "ISO 14001:2015" },
    subtitle: { it: "Gestione Ambientale", es: "Gestión Ambiental" },
    fullDescription: {
      it: "Impegno concreto verso la sostenibilità. Utilizziamo prodotti a basso impatto e tecnologie green.",
      es: "Compromiso concreto hacia la sostenibilidad. Utilizamos productos de bajo impacto y tecnologías verdes.",
    },
    features: [
      {
        it: "Riduzione dell'impronta di carbonio",
        es: "Reducción de la huella de carbono",
      },
      {
        it: "Gestione rifiuti ecosostenibile",
        es: "Gestión de residuos ecosostenible",
      },
      {
        it: "Uso efficiente delle risorse",
        es: "Uso eficiente de los recursos",
      },
    ],
  },
  {
    slug: "iso-45001",
    id: "45001",
    icon: HeartPulse,
    statusIcon: ShieldCheck,
    title: { it: "ISO 45001:2018", es: "ISO 45001:2018" },
    subtitle: { it: "Sicurezza sul Lavoro", es: "Seguridad Laboral" },
    fullDescription: {
      it: "La sicurezza dei nostri collaboratori e dei vostri spazi è la prioridad assoluta.",
      es: "La seguridad de nuestros colaboradores y de sus espacios es la prioridad absoluta.",
    },
    features: [
      {
        it: "Prevenzione dei rischi lavorativi",
        es: "Prevención de riesgos laborales",
      },
      { it: "Ambienti di lavoro sicuri", es: "Ambientes de trabajo seguros" },
      {
        it: "Formazione costante del personale",
        es: "Formación constante del personal",
      },
    ],
  },
];

export const CERTIFICATIONS_CONTENT = {
  header: {
    sub: { it: "Eccellenza Garantita", es: "Excelencia Garantizada" },
    title: { 
      it: "Tripla Certificazione", 
      es: "Triple Certificación" 
    },
    titleAccent: { 
      it: "Internazionale", 
      es: "Internacional" 
    },
    description: {
      it: "Manutenpul opera secondo i più alti standard internazionali, garantendo processi certificati e sostenibili.",
      es: "Manutenpul opera bajo los más altos estándares internacionales, garantizando procesos certificados y sostenibles.",
    },
  },
  footer: {
    title: {
      it: "Triple Certificazione Integrata",
      es: "Triple Certificación Integrada",
    },
    description: {
      it: "Siamo tra le poche realtà del settore a mantenere il rinnovo ininterrotto dal 2001.",
      es: "Somos de las pocas empresas del sector en mantener la renovación ininterrumpida desde 2001.",
    },
    cta: { it: "Scarica Certificati", es: "Descargar Certificados" },
  },
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001",
    version: "2015",
    description: { it: "Gestione della Qualità", es: "Gestión de Calidad" },
    yearStarted: 2001,
  },
  {
    id: "iso-14001",
    name: "ISO 14001",
    version: "2017",
    description: { it: "Gestione Ambientale", es: "Gestión Ambiental" },
    yearStarted: 2001,
  },
  {
    id: "iso-45001",
    name: "ISO 45001",
    version: "2018",
    description: {
      it: "Salute e Sicurezza sul Lavoro",
      es: "Salud y Seguridad en el Trabajo",
    },
    yearStarted: 2001,
  },
];
