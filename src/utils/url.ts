/**
 * Antepone el `base` configurado en astro.config.mjs a una ruta interna
 * raíz-relativa ("/contacto" -> "/fe_sscdx/contacto" bajo ese base).
 * Deja intactas las rutas externas (http(s):, mailto:, protocolo-relativas
 * "//") y cualquier valor que no empiece con "/".
 */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
