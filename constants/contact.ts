import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const contactContent = {
    sectionTitle: {
        it: "Contatti",
        es: "Contacto",
    },
    titlePart1: {
        it: "Richiedi il tuo ",
        es: "Solicita tu ",
    },
    titleHighlight: {
        it: "preventivo",
        es: "presupuesto",
    },
    titlePart2: {
        it: " gratuito",
        es: " gratuito",
    },
    description: {
        it: "Compila il modulo con i dettagli del tuo immobile: ti risponderemo con un'offerta personalizzata e senza impegno.",
        es: "Completa el formulario con los detalles de tu inmueble: te responderemos con una oferta personalizada sin compromiso.",
    },
    infoList: [
        {
            icon: Phone,
            title: { it: "Telefono", es: "Teléfono" },
            content: "+39 0331 XXX XXX",
            href: "tel:+390331000000",
            color: "blue",
        },
        {
            icon: Mail,
            title: { it: "Email", es: "Email" },
            content: "info@manutenpul.it",
            href: "mailto:info@manutenpul.it",
            color: "blue",
        },
        {
            icon: MapPin,
            title: { it: "Sede Legale", es: "Sede Legal" },
            content: "Via XX Settembre 137-139\n20025 Legnano (MI)",
            color: "blue",
        },
        {
            icon: Clock,
            title: { it: "Emergenze", es: "Emergencias" },
            // Usamos un array para manejar el texto en negrita sin usar dangerouslySetInnerHTML
            content: {
                it: ["Attivi 24 ore su 24, 365 giorni l'anno", "Intervento garantito in 1 ora"],
                es: ["Activos 24 horas, 365 días al año", "Intervención garantizada en 1 hora"],
            },
            color: "emerald",
        },
    ],
    clientPortal: {
        title: { it: "Area Riservata Clienti", es: "Área Reservada Clientes" },
        desc: {
            it: "Accedi al portale per gestire i tuoi contratti, scaricare documenti e verificare gli interventi.",
            es: "Accede al portal para gestionar tus contratos, descargar documentos y verificar intervenciones.",
        },
        linkText: { it: "Accedi ora", es: "Acceder ahora" },
        href: "#",
    },
    form: {
        title: { it: "Richiedi Preventivo GRATUITO", es: "Solicitar Presupuesto GRATUITO" },
        fields: {
            company: { it: "Ragione Sociale *", es: "Razón Social *" },
            name: { it: "Nome Referente *", es: "Nombre Contacto *" },
            phone: { it: "Telefono *", es: "Teléfono *" },
            address: { it: "Indirizzo dell'immobile *", es: "Dirección del inmueble *" },
            city: { it: "Città *", es: "Ciudad *" },
            sqm: { it: "Superficie (mq) *", es: "Superficie (m²) *" },
            propertyType: { it: "Tipologia immobile *", es: "Tipo de inmueble *" },
            serviceType: { it: "Tipo di intervento *", es: "Tipo de intervención *" },
            photos: {
                label: { it: "Foto dell'immobile (opzionale — max 3)", es: "Foto del inmueble (opcional — max 3)" },
                placeholder: { it: "Clicca o trascina fino a 3 foto", es: "Haz clic o arrastra hasta 3 fotos" }
            },
            notes: { it: "Note aggiuntive", es: "Notas adicionales" },
            privacy: {
                text1: { it: "Ho letto e accetto la ", es: "He leído y acepto la " },
                link: { it: "Privacy Policy", es: "Política de Privacidad" },
                text2: { it: ". Acconsento al trattamento dei dati personali ai sensi del GDPR. *", es: ". Consiento el tratamiento de datos según el GDPR. *" }
            },
            submit: { it: "Invia Richiesta", es: "Enviar Solicitud" }
        },
        propertyOptions: [
            { value: "ufficio", label: { it: "Ufficio", es: "Oficina" } },
            { value: "negozio", label: { it: "Negozio / Commerciale", es: "Local / Comercial" } },
            { value: "condominio", label: { it: "Condominio", es: "Comunidad / Condominio" } },
            { value: "altro", label: { it: "Altro", es: "Otro" } },
        ],
        serviceOptions: [
            { value: "pulizia-ordinaria", label: { it: "Pulizia Ordinaria", es: "Limpieza Ordinaria" } },
            { value: "sanificazione", label: { it: "Sanificazione", es: "Desinfección" } },
            { value: "ristrutturazione", label: { it: "Ristrutturazione", es: "Reformas" } },
            { value: "altro", label: { it: "Altro", es: "Otro" } },
        ]
    }
};