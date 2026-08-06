import type { Advantage, ProcessStep, Service } from "@/types";

export const services: Service[] = [
  {
    index: "01",
    icon: "code-2",
    title: "Desarrollo de software a medida",
    description:
      "Construimos plataformas robustas desde cero, adaptadas exactamente a tus flujos de negocio. Priorizamos código limpio, pruebas automatizadas y arquitecturas resilientes.",
    bullets: ["Aplicaciones web", "Apps móviles (iOS / Android)", "APIs y microservicios"],
    href: "/servicios#desarrollo-a-medida",
  },
  {
    index: "02",
    icon: "cloud-cog",
    title: "Infraestructura y arquitectura cloud",
    description:
      "Diseñamos, implementamos y gestionamos infraestructura segura en la nube. Optimizamos costos sin sacrificar disponibilidad ni rendimiento.",
    bullets: ["Migración a la nube", "Pipelines de DevOps", "Arquitectura serverless"],
    href: "/servicios#cloud",
  },
  {
    index: "03",
    icon: "brain-circuit",
    title: "Inteligencia artificial aplicada",
    description:
      "Integramos IA generativa y modelos de machine learning en productos existentes o nuevos, con foco en casos de uso medibles para el negocio.",
    bullets: ["Automatización con LLMs", "Agentes y copilotos internos", "Analítica predictiva"],
    href: "/servicios#ia",
  },
  {
    index: "04",
    icon: "layers",
    title: "Modernización de plataformas",
    description:
      "Tomamos sistemas legados, los refactorizamos y preparamos para escalar. Resolvemos cuellos de botella técnicos sin detener el negocio.",
    bullets: ["De monolito a microservicios", "Optimización de rendimiento", "Tuning de bases de datos"],
    href: "/servicios#modernizacion",
  },
  {
    index: "05",
    icon: "shield-check",
    title: "Sistemas empresariales",
    description:
      "Desarrollamos sistemas internos, ERPs y herramientas de gestión a medida que se integran con tu operación existente.",
    bullets: ["Integraciones con terceros", "Portales internos", "Automatización de procesos"],
    href: "/servicios#sistemas-empresariales",
  },
  {
    index: "06",
    icon: "users-round",
    title: "Staff augmentation",
    description:
      "Integramos ingenieros senior directamente en tu equipo, con la misma exigencia técnica que aplicamos en nuestros propios proyectos.",
    bullets: ["Equipos dedicados", "Onboarding rápido", "Reportes de avance semanales"],
    href: "/servicios#staff-augmentation",
  },
];

export const advantages: Advantage[] = [
  {
    icon: "handshake",
    title: "Trato directo",
    description: "Hablas directamente con quienes construyen tu software, sin intermediarios que diluyan el mensaje.",
  },
  {
    icon: "cloud",
    title: "Infraestructura cloud",
    description: "Especialistas en la nube: arquitecturas eficientes, seguras y optimizadas para alto rendimiento.",
  },
  {
    icon: "trending-up",
    title: "Escalabilidad real",
    description: "Aplicaciones listas para crecer con tu negocio, diseñadas desde el día uno para manejar volumen.",
  },
  {
    icon: "badge-check",
    title: "Seniority",
    description: "Ingenieros senior en cada línea de código: calidad, mantenibilidad y buenas prácticas por defecto.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Análisis profundo de requerimientos técnicos y objetivos de negocio antes de escribir una línea de código.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description: "Diseño de sistemas escalables y selección del stack tecnológico óptimo para tu contexto y presupuesto.",
  },
  {
    number: "03",
    title: "Desarrollo iterativo",
    description: "Construcción ágil con entregas continuas, revisiones de código y pruebas automatizadas en cada sprint.",
  },
  {
    number: "04",
    title: "Despliegue y monitoreo",
    description: "Lanzamiento seguro sobre infraestructura automatizada, con observabilidad desde el primer día.",
  },
];
