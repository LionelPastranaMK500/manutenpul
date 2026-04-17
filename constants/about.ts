import { AboutData } from "@/types";

export const aboutContent: Record<string, AboutData> = {
  it: {
    title: "Manutenzione Industriale e Pulizia Professionale",
    description:
      "Con anni di esperienza nel settore, Manutenpul si dedica a fornire soluzioni di manutenzione integrale e pulizia tecnica per industrie e spazi commerciali. Il nostro impegno è garantire l'efficienza e la sicurezza dei vostri impianti attraverso processi certificati e personale altamente qualificato.",
    buttonText: "Scopri di più",
    imageAlt: "Squadra Manutenpul al lavoro",
  },
  es: {
    title: "Mantenimiento Industrial y Limpieza Profesional",
    description:
      "Con años de experiencia en el sector, Manutenpul se dedica a brindar soluciones de mantenimiento integral y limpieza técnica para industrias y espacios comerciales. Nuestro compromiso es garantizar la eficiencia y seguridad de sus instalaciones mediante procesos certificados y personal altamente calificado.",
    buttonText: "Saber más",
    imageAlt: "Equipo de Manutenpul trabajando",
  },
};

export const getAboutData = (lang: string): AboutData => {
  return aboutContent[lang] || aboutContent["it"];
};
