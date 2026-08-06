export const SITE_NAME = "Siscodex";
export const SITE_URL = "https://siscodex.com";
/**
 * Placeholder generado por código. Sustituir por un PNG/JPG de 1200x630
 * diseñado por el equipo de marca antes del lanzamiento: Twitter/X no
 * renderiza og:image en SVG, solo lo aceptan LinkedIn/Slack.
 */
export const DEFAULT_OG_IMAGE = "/og/default.svg";

/** Sufija el nombre de marca de forma consistente en todos los <title>. */
export function pageTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
}

/** Construye una URL absoluta y canónica a partir de una ruta relativa ("/servicios"). */
export function canonicalUrl(path: string): string {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  return `${SITE_URL}${normalized}`;
}
