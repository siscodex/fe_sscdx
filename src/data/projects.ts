import type { Project } from "@/types";

/**
 * Casos de referencia. Reemplazar por proyectos reales del portafolio de
 * Siscodex a medida que estén disponibles para publicación pública —
 * mantener la misma forma de datos para no romper `ProjectCard`.
 */
export const projects: Project[] = [
  {
    slug: "plataforma-logistica-cloud",
    title: "Plataforma de logística en tiempo real",
    client: "Operador logístico regional",
    category: "cloud",
    summary:
      "Migración de un sistema monolítico on-premise a una arquitectura de microservicios en la nube, con seguimiento de flotas en tiempo real.",
    metrics: [
      { label: "Reducción de costos de infraestructura", value: "38%" },
      { label: "Tiempo de respuesta de API", value: "<150ms" },
    ],
    technologies: ["AWS", "Kubernetes", "PostgreSQL", "React"],
  },
  {
    slug: "copiloto-interno-ia",
    title: "Copiloto interno con IA generativa",
    client: "Empresa de servicios financieros",
    category: "ia",
    summary:
      "Asistente interno basado en LLMs para consulta de documentación regulatoria, integrado con el stack de mensajería corporativo.",
    metrics: [
      { label: "Reducción en tiempo de búsqueda", value: "70%" },
      { label: "Adopción del equipo en 3 meses", value: "85%" },
    ],
    technologies: ["Claude", "Python", "Vector DB", "AWS Lambda"],
  },
  {
    slug: "app-movil-salud",
    title: "Aplicación móvil de telemedicina",
    client: "Red de clínicas privadas",
    category: "mobile",
    summary:
      "App multiplataforma para agendamiento y consulta remota, con integración a expediente clínico electrónico existente.",
    metrics: [
      { label: "Citas agendadas por la app", value: "+12k/mes" },
      { label: "Calificación en tiendas", value: "4.8/5" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    slug: "portal-b2b-integraciones",
    title: "Portal B2B con integraciones ERP",
    client: "Distribuidora industrial",
    category: "web",
    summary:
      "Portal de autoservicio para clientes mayoristas, con sincronización en tiempo real contra el ERP interno de la compañía.",
    metrics: [
      { label: "Pedidos gestionados sin intervención manual", value: "90%" },
      { label: "Tiempo de onboarding de clientes", value: "-60%" },
    ],
    technologies: ["Astro", "TypeScript", "REST/SOAP", "SQL Server"],
  },
];
