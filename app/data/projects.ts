export interface ProjectScreen {
  mobile: string;
  desktop: string;
}

export interface LocalizedText {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: string;
  href: string;
  github?: string;
  screens: ProjectScreen[];
  // Longer pitch used by the home page's Projects section.
  description: LocalizedText;
  // Short line used by the /services "Work Delivered" carousel — the
  // client's problem-before-the-site framing for landing pages, or a
  // one-line "what it does" for in-house/demo apps.
  note: LocalizedText;
}

// Single source of truth for the real, shipped projects: facts (name, live
// URL, screenshots) and their copy (description/note). Reused by the home
// page's Projects section and the /services "Work Delivered" carousel —
// each only picks its own ordering on top of this.
export const projects: Project[] = [
  {
    id: "thermoreleaf",
    title: "ThermoReleaf",
    href: "https://thermoreleaf.com.ar/",
    screens: [
      {
        mobile: "/projects/thermoreleaf/mobile1.png",
        desktop: "/projects/thermoreleaf/desktop1.png",
      },
      {
        mobile: "/projects/thermoreleaf/mobile2.png",
        desktop: "/projects/thermoreleaf/desktop2.png",
      },
      {
        mobile: "/projects/thermoreleaf/mobile3.png",
        desktop: "/projects/thermoreleaf/desktop3.png",
      },
    ],
    description: {
      en: "Responsive landing page for a biotech startup, emphasizing clean design and effective messaging.",
      es: "Página de destino responsiva para una startup de biotecnología, enfatizando diseño limpio y mensajería efectiva.",
    },
    note: {
      en: "No previous online presence. Needed a site that builds trust from the first second.",
      es: "No tenía presencia online anterior. Necesitaba un sitio que genere confianza desde el primer segundo.",
    },
  },
  {
    id: "kreart",
    title: "Kreart",
    href: "https://kreart-dpm.com/",
    screens: [
      {
        mobile: "/projects/kreart/mobile1.png",
        desktop: "/projects/kreart/desktop1.png",
      },
      {
        mobile: "/projects/kreart/mobile2.png",
        desktop: "/projects/kreart/desktop2.png",
      },
      {
        mobile: "/projects/kreart/mobile3.png",
        desktop: "/projects/kreart/desktop3.png",
      },
    ],
    description: {
      en: "Multi-page landing page for a furniture company, featuring section-based navigation and visual storytelling.",
      es: "Página de destino multipágina para una empresa de muebles, con navegación por secciones y narrativa visual.",
    },
    note: {
      en: "Was showing a custom furniture catalog only through WhatsApp and Instagram. Needed a site for being easily located.",
      es: "Mostraba su catálogo de muebles a medida solo por WhatsApp e Instagram. Necesitaba un sitio propio para ser encontrado fácilmente.",
    },
  },
  {
    id: "herald",
    title: "Herald",
    href: "https://herald.gabriellopez.com.ar/",
    screens: [
      {
        mobile: "/projects/herald/mobile2.png",
        desktop: "/projects/herald/desktop1.png",
      },
      {
        mobile: "/projects/herald/mobile3.png",
        desktop: "/projects/herald/desktop2.png",
      },
      {
        mobile: "/projects/herald/mobile1.png",
        desktop: "/projects/herald/desktop3.png",
      },
    ],
    description: {
      en: "AI-assisted support helpdesk with two-way email ticketing, role-based authentication, and automated triage: inbound emails are classified and resolved by LLM agents against a knowledge base, with a workspace for replies, ticket assignment, and AI-polished drafts. Questions about how it works? Email support@inbox.gabriellopez.com.ar and an AI agent will answer.",
      es: "Mesa de ayuda de soporte asistida por IA con tickets por correo bidireccional, autenticación por roles y triaje automatizado: los correos entrantes se clasifican y resuelven mediante agentes con LLM contra una base de conocimiento, con un espacio de trabajo para respuestas, asignación de tickets y redacción pulida por IA. ¿Preguntas sobre cómo funciona? Escribí a support@inbox.gabriellopez.com.ar y un agente de IA responderá.",
    },
    note: {
      en: "A support helpdesk that reads incoming emails, classifies them and drafts replies with AI — built to show how ticketing can run itself.",
      es: "Una mesa de ayuda que lee los correos entrantes, los clasifica y redacta respuestas con IA — pensada para mostrar cómo puede automatizarse la atención al cliente.",
    },
  },
  {
    id: "critter",
    title: "Critter",
    href: "https://critter.gabriellopez.com.ar/",
    github: "https://github.com/gabolope/issue-tracker",
    screens: [
      {
        mobile: "/projects/critter/mobile1.png",
        desktop: "/projects/critter/desktop1.png",
      },
      {
        mobile: "/projects/critter/mobile2.png",
        desktop: "/projects/critter/desktop2.png",
      },
      {
        mobile: "/projects/critter/mobile3.png",
        desktop: "/projects/critter/desktop3.png",
      },
    ],
    description: {
      en: "A comprehensive issue tracking system featuring user authentication, advanced filtering, pagination, task assignment, and an analytics dashboard with charts, demonstrating full-stack capabilities.",
      es: "Aplicación completa de seguimiento de problemas que incluye autentificación de usuario, filtrado, paginación, agregado de problemas, y un dashboard con gráficos, demostrando habilidades full-stack.",
    },
    note: {
      en: "A full issue tracker with logins, filters and an analytics dashboard — built to demonstrate end-to-end product development.",
      es: "Un sistema de seguimiento de problemas con usuarios, filtros y un dashboard de métricas — pensado para demostrar desarrollo de producto de punta a punta.",
    },
  },
  {
    id: "songmanager",
    title: "Song Manager",
    href: "https://songmanager.gabriellopez.com.ar/",
    screens: [
      {
        mobile: "/projects/songmanager/mobile1.png",
        desktop: "/projects/songmanager/desktop1.png",
      },
      {
        mobile: "/projects/songmanager/mobile2.png",
        desktop: "/projects/songmanager/desktop2.png",
      },
    ],
    description: {
      en: "Music repertoire management system. Featuring role-based authentication for conductor/musician, real-time sync between the conductor and musicians during live performance, setlist building with lyrics and chords in ChordPro format, and a credential-free demo mode with sample content to explore the app.",
      es: "Sistema de gestión de repertorio musical. Autenticación basada en roles director/músico, sincronización en tiempo real entre el director y los músicos durante el vivo, armado de listas de canciones con letra y acordes en formato ChordPro, y un modo demo sin credenciales con contenido de muestra para explorar la app.",
    },
    note: {
      en: "A live repertoire tool for bands: conductor and musicians stay synced on stage, with setlists, lyrics and chords ready to follow.",
      es: "Una herramienta de repertorio para bandas en vivo: director y músicos sincronizados en el escenario, con listas de canciones, letras y acordes a mano.",
    },
  },
];

export const getProject = (id: string): Project => {
  const project = projects.find((p) => p.id === id);
  if (!project) {
    throw new Error(`Unknown project id: "${id}"`);
  }
  return project;
};

// All five projects live on the domain the URL itself points to, so the
// display domain is derived instead of duplicated as separate data.
export const getProjectDomain = (href: string) => new URL(href).host;
