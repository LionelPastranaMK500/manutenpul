import { AboutData } from "@/types";

export const aboutContent: Record<string, AboutData> = {
  it: {
    label: "Chi Siamo",
    title: {
      normal: "Oltre tre decenni di",
      highlight: "eccellenza",
      end: "nei servizi",
    },
    description:
      "Con anni di esperienza nel settore, Manutenpul si dedica a fornire soluzioni di manutenzione integrale e pulizia tecnica per industrie e spazi commerciali. Il nostro impegno è garantire l'efficienza e la sicurezza dei vostri impianti attraverso processi certificati e personale altamente qualificato.",
    buttonText: "Esplora i nostri servizi",
    imageAlt: "Squadra Manutenpul al lavoro",
    features: [
      {
        title: "Intervento Rapido",
        text: "Garantito entro 1 ora",
        icon: "clock",
      },
      {
        title: "Eco-Sostenibile",
        text: "Detergenti ECOLABEL",
        icon: "leaf",
      },
      {
        title: "Qualità Certificata",
        text: "Standard ISO internazionali",
        icon: "award",
      },
      {
        title: "Copertura Locale",
        text: "Lombardia & Veneto",
        icon: "map",
      },
    ],
  },

  es: {
    label: "Sobre Nosotros",
    title: {
      normal: "Más de tres décadas de",
      highlight: "excelencia",
      end: "en servicios",
    },
    description:
      "Con años de experiencia en el sector, Manutenpul se dedica a brindar soluciones de mantenimiento integral y limpieza técnica para industrias y espacios comerciales. Nuestro compromiso es garantizar la eficiencia y seguridad de sus instalaciones mediante procesos certificados y personal altamente calificado.",
    buttonText: "Saber más",
    imageAlt: "Equipo de Manutenpul trabajando",
    features: [
      {
        title: "Intervención Rápida",
        text: "Garantizado en 1 hora",
        icon: "clock",
      },
      {
        title: "Eco-Sostenible",
        text: "Productos ECOLABEL",
        icon: "leaf",
      },
      {
        title: "Calidad Certificada",
        text: "Normas ISO internacionales",
        icon: "award",
      },
      {
        title: "Cobertura Local",
        text: "Lombardía y Véneto",
        icon: "map",
      },
    ],
  },
};

export const getAboutData = (lang: string): AboutData => {
  return aboutContent[lang] || aboutContent.it;
};