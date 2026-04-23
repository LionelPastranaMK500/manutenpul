import { AboutData, RegionCode } from "@/types";

export const aboutContent: Record<RegionCode, Record<"it" | "es", AboutData>> = {
  IT: {
    it: {
      label: "Chi Siamo",
      title: {
        normal: "Oltre tre decenni di",
        highlight: "eccellenza",
        end: "nei servizi",
      },
      description: "Dal 1990, Manutenpul S.r.l.s. è il punto di riferimento nel Nord Italia per la pulizia professionale, la sanificazione e il Facility Management integrato. Operiamo con sedi strategiche a Legnano, Cesano Boscone, Peschiera Borromeo e Monza, garantendo copertura capillare su tutta la Lombardia e il Veneto.",
      buttonText: "Esplora i nostri servizi",
      imageAlt: "Squadra Manutenpul al lavoro",
      features: [
        { title: "Intervento Rapido", text: "Garantito entro 1 ora", icon: "clock" },
        { title: "Eco-Sostenibile", text: "Detergenti ECOLABEL", icon: "leaf" },
        { title: "Qualità Certificata", text: "Standard ISO internazionali", icon: "award" },
        { title: "Copertura Locale", text: "Lombardia & Veneto", icon: "map" },
      ],
    },

    es: {
      label: "Sobre Nosotros",
      title: {
        normal: "Más de tres décadas de",
        highlight: "excelencia",
        end: "en servicios",
      },
      description: "Desde 1990, Manutenpul es un referente en el norte de Italia para la gestión profesional de limpieza, higiene y instalaciones integradas. Tenemos la sede de la estrategia en Lejano, Cesano Boscone, Pesiera Borromeo y Monza, garantizando el alcance de la operación en Lombardía y en toda Venecia.",
      buttonText: "Saber más",
      imageAlt: "Equipo Manutenpul en Italia",
      features: [
        { title: "Intervención Rápida", text: "Garantizado en 1 hora", icon: "clock" },
        { title: "Eco-Sostenible", text: "Productos ECOLABEL", icon: "leaf" },
        { title: "Calidad Certificada", text: "Normas ISO internacionales", icon: "award" },
        { title: "Cobertura Local", text: "Lombardía y Véneto", icon: "map" },
      ],
    },
  },

  PE: {
    it: {
      label: "Chi Siamo",
      title: {
        normal: "Oltre tre decenni di",
        highlight: "eccellenza",
        end: "nei servizi",
      },
      description: "Contenuto Perú in italiano",
      buttonText: "Esplora i nostri servizi",
      imageAlt: "Squadra Manutenpul in Perù",
      features: [
        { title: "Intervento Rapido", text: "Garantito entro 1 ora", icon: "clock" },
        { title: "Eco-Sostenibile", text: "Prodotti certificati", icon: "leaf" },
        { title: "Qualità Certificata", text: "Standard internazionali", icon: "award" },
        { title: "Copertura Locale", text: "Lima e Callao", icon: "map" },
      ],
    },

    es: {
      label: "Sobre Nosotros",
      title: {
        normal: "Más de tres décadas de",
        highlight: "excelencia",
        end: "en servicios",
      },
      description: "Contenido Perú en español",
      buttonText: "Saber más",
      imageAlt: "Equipo Manutenpul en Perú",
      features: [
        { title: "Intervención Rápida", text: "Garantizado en 1 hora", icon: "clock" },
        { title: "Eco-Sostenible", text: "Productos certificados", icon: "leaf" },
        { title: "Calidad Certificada", text: "Normas internacionales", icon: "award" },
        { title: "Cobertura Local", text: "Lima y Callao", icon: "map" },
      ],
    },
  },

  ES: {
    it: {} as AboutData,
    es: {} as AboutData,
  },
};

export const getAboutData = (region: RegionCode, lang: "it" | "es"): AboutData => {
  return aboutContent[region]?.[lang] || aboutContent.IT.it;
};