import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Recursos", href: "/recursos" },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Empresa",
    links: [
      { label: "Servicios", href: "/servicios" },
      { label: "Soluciones", href: "/soluciones" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Ingeniería",
    links: [
      { label: "Stack tecnológico", href: "/tecnologia" },
      { label: "Recursos y documentación", href: "/recursos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidad", href: "/legal/privacidad" },
      { label: "Términos de servicio", href: "/legal/terminos" },
    ],
  },
];
