import type { Resource, Technology } from "@/types";

export const technologies: Technology[] = [
  { name: "TypeScript", icon: "file-code-2", category: "frontend" },
  { name: "React", icon: "atom", category: "frontend" },
  { name: "Astro", icon: "rocket", category: "frontend" },
  { name: "Next.js", icon: "layers", category: "frontend" },
  { name: "Node.js", icon: "server", category: "backend" },
  { name: "Python", icon: "terminal", category: "backend" },
  { name: "PostgreSQL", icon: "database", category: "backend" },
  { name: "GraphQL", icon: "share-2", category: "backend" },
  { name: "AWS", icon: "cloud", category: "cloud" },
  { name: "Docker", icon: "container", category: "devops" },
  { name: "Kubernetes", icon: "network", category: "devops" },
  { name: "GitHub Actions", icon: "workflow", category: "devops" },
  { name: "Claude / LLMs", icon: "brain-circuit", category: "data-ia" },
  { name: "Vector DB", icon: "database-zap", category: "data-ia" },
  { name: "Terraform", icon: "box", category: "devops" },
  { name: "Redis", icon: "zap", category: "backend" },
];

export const resources: Resource[] = [
  {
    title: "Guía de onboarding para clientes",
    description: "Cómo trabajamos, canales de comunicación y qué esperar en las primeras semanas del proyecto.",
    icon: "book-open",
    href: "/recursos/onboarding",
    tag: "Guía",
  },
  {
    title: "Documentación de API y entregables",
    description: "Acceso a la documentación técnica de proyectos activos para equipos de clientes.",
    icon: "file-text",
    href: "/recursos/documentacion",
    tag: "Documentación",
  },
  {
    title: "SLA y soporte post-lanzamiento",
    description: "Niveles de servicio, tiempos de respuesta y canales de soporte una vez el proyecto está en producción.",
    icon: "life-buoy",
    href: "/recursos/soporte",
    tag: "Soporte",
  },
  {
    title: "Buenas prácticas de seguridad",
    description: "Lineamientos que seguimos en cada proyecto: gestión de secretos, revisión de código y auditorías.",
    icon: "shield-check",
    href: "/recursos/seguridad",
    tag: "Seguridad",
  },
];
