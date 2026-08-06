/** Nombre de icono de la colección Lucide (sin prefijo), p.ej. "cloud" o "shield-check". */
export type IconName = string;

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  index: string;
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
  href: string;
}

export interface Advantage {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export type ProjectCategory = "web" | "cloud" | "ia" | "mobile";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  image?: string;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "cloud"
  | "data-ia"
  | "devops";

export interface Technology {
  name: string;
  icon: IconName;
  category: TechCategory;
}

export interface Resource {
  title: string;
  description: string;
  icon: IconName;
  href: string;
  tag: string;
}

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}
