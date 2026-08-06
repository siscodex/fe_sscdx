# CLAUDE.md

Guía de orientación rápida para retomar este proyecto desde cualquier sesión. Para el detalle
profundo (arquitectura, SEO, performance, deployment paso a paso) ver
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — este archivo es el resumen operativo, no lo
duplica.

## Qué es esto

Sitio web corporativo de **Siscodex** (siscodex.com): estudio de ingeniería de software
(desarrollo a medida, cloud, IA). Astro 7 + TypeScript estricto + Tailwind CSS v4, 100% estático,
sin backend todavía. Inspiración visual: Vercel/Linear/Stripe.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build de producción en dist/
npm run preview   # sirve dist/ localmente
npm run check     # solo type-check
```

Si `npm install` falla con un ERESOLVE por `typescript`: `@astrojs/check` todavía no soporta
TypeScript 7.x — mantener `typescript` en `^6.x` en `package.json` (ver historial de este archivo
si vuelve a pasar).

## Mapa del proyecto

```
src/
├── components/
│   ├── ui/        → átomos sin conocimiento de negocio (Button, SectionTitle, TechnologyBadge, StatusPill)
│   ├── sections/   → bloques de página (Hero, ServiceCard, ProjectCard, ContactForm, CTASection...)
│   ├── layout/     → Navbar, Footer (en todas las páginas)
│   └── seo/        → <SEO /> (metadata, OG, JSON-LD)
├── data/           → contenido tipado: services.ts, projects.ts, technologies.ts, navigation.ts
├── layouts/        → BaseLayout (páginas normales), SimpleContentLayout (legal/recursos)
├── pages/          → rutas (file-based routing de Astro)
├── scripts/        → reveal.ts (scroll-reveal con la librería "motion")
├── styles/         → global.css — AQUÍ VIVE TODO EL SISTEMA DE COLOR/TIPOGRAFÍA (@theme de Tailwind v4)
├── types/          → contratos de datos (Service, Project, Technology...)
└── utils/          → seo.ts (título, canonical, OG)
```

**Regla de oro**: nunca hardcodear un color hex dentro de un componente `.astro`. Todo pasa por
los tokens de `src/styles/global.css` (`ink-*`, `brand-*`, `accent-*`). Cambiar la marca completa
es, en teoría, un cambio de un solo archivo — así se hizo el rebrand de cian/violeta a verde (ver
"Historial de decisiones" abajo). Las únicas excepciones legítimas son archivos que Tailwind no
procesa: `public/favicon.svg`, `public/og/default.svg` y el `theme-color` en `BaseLayout.astro` —
si cambia la paleta, esos tres hay que tocarlos a mano.

## Sistema de diseño actual (estado real, agosto 2026)

- **Un solo acento de marca: verde esmeralda.** `brand-500 #10b981` / `brand-400 #34d399` es el
  tono principal (botones, iconos, eyebrows). `accent-*` es una variación tonal (verde azulado)
  usada solo para profundidad en gradientes/blobs de fondo — deliberadamente **no** es un segundo
  color de marca independiente.
- **Fondo: gris carbón, no negro puro.** `ink-950 #1a1b1e` → `ink-50 #f8f8f9`. Se subió a
  propósito desde un casi-negro (`#0b0c0e`) porque se sentía "demasiado técnico/hacker" para
  audiencia no desarrolladora — ver punto 6 de "Historial de decisiones". Si alguien propone
  oscurecer el fondo otra vez, primero confirmar con el cliente: ya se probó y se descartó.
- **Tipografía**: Space Grotesk (display) / Inter (body) / JetBrains Mono (labels/mono), variables
  autohospedadas vía `@fontsource-variable`, sin CDN de Google Fonts.
- **Radios**: `--radius-md: 0.625rem` es el valor por defecto en tarjetas y botones.
- Tailwind v4 usa configuración **CSS-first** (`@theme` en `global.css`) — no existe
  `tailwind.config.ts` a propósito; ver justificación en `docs/ARCHITECTURE.md` §1.3.

### "Por qué Siscodex" (WhyUs.astro)

Es **filas simples de icono + texto en 2 columnas, sin tarjeta ni borde** — no una grilla de
tarjetas. Si alguna vez se ve una versión con `border`/`bg` ahí, es una regresión: se cambió a
propósito para igualar una referencia visual real que compartió el cliente.

## Historial de decisiones (para no repetir trabajo ni confundirse con git blame)

1. **V1 — "Aurora"**: paleta cian (`#3cd3ea`) + violeta (`#8564ef`) sobre negro-azulado, doble
   acento. Fue la primera versión implementada.
2. **V2 — "Canopy" (actual)**: el cliente compartió una captura de referencia con un solo acento
   verde esmeralda sobre fondo carbón neutro. Se migró todo el sistema de tokens de cian/violeta a
   verde/verde-azulado, se neutralizó el tinte azul del fondo, se cambió "Por qué Siscodex" de
   tarjetas a filas simples, y la línea conectora de `ProcessSection` pasó de gris neutro a verde.
   **Esta es la versión que está desplegada hoy.**
3. Se exploraron **7 direcciones visuales** completas (incluyendo Aurora, Canopy, y variantes tipo
   "registro dev-tool", "enterprise/serif", "producto/energía", más una fiel al HTML de Stitch
   original del cliente) en un Artifact de comparación fuera del repo — si el cliente pide "otra
   opción de color", ya existe ese trabajo de exploración, solo falta que Claude lo regenere si no
   se conserva el enlace.
4. El logo real (`public/logo.png`) vino como PNG con mucho padding transparente (707×353, el
   contenido visible ocupaba solo 549×46) — se recortó a 565×62. Si el logo se ve "perdido" o
   minúsculo en algún lugar nuevo donde se use, es casi seguro el mismo problema: medir el
   bounding box de píxeles no transparentes antes de asumir que `h-N` alcanza.
5. El Navbar tenía un bug donde el fondo era transparente hasta hacer scroll (`scrollY > 8`),
   dejando el contenido del Hero visualmente superpuesto con el menú en la carga inicial. Se
   corrigió haciendo el fondo translúcido (`bg-ink-950/75 backdrop-blur-xl`) permanente — el scroll
   ahora solo añade una sombra sutil. Si se reintroduce un navbar "transparente al inicio", revisar
   que el `Hero` tenga suficiente `padding-top` y que el fondo no dependa de JS para aparecer.
6. **V3 — se aclaró el fondo (mismo día que V2)**: con Canopy ya implementado, el cliente vio el
   sitio real y dio feedback de que se sentía "demasiado tech" y podía alejar a compradores no
   técnicos — específicamente el fondo casi negro. Se subió toda la escala `ink` de un casi-negro
   (`ink-950 #0b0c0e`) a un gris carbón real (`ink-950 #1a1b1e`), manteniendo los mismos pasos
   relativos de la escala. Sigue siendo dark mode, solo que se lee como "gris", no "negro". Si se
   toca el fondo de nuevo, este es el motivo — no es un tema de contraste/accesibilidad, es
   percepción de marca ante audiencia no técnica.

## Pendientes conocidos antes de un lanzamiento real

- `public/og/default.svg` es un placeholder generado por código (gradiente + logo + texto).
  Twitter/X no renderiza SVG en `og:image` — sustituir por un PNG/JPG 1200×630 real antes de
  publicar (ver `docs/ARCHITECTURE.md` §5.4).
- `ContactForm.astro` no envía datos a ningún backend todavía — el `TODO` está marcado en su
  `<script>`. `PUBLIC_CONTACT_ENDPOINT` ya existe en `.env.example` para cuando se integre.
- `src/data/projects.ts` tiene 4 casos de referencia de ejemplo (inventados, no reales) — mantener
  la misma forma de datos (`Project` en `src/types/index.ts`) al reemplazarlos.
- No hay tests automatizados (deliberado por ahora — ver justificación y estructura recomendada en
  `docs/ARCHITECTURE.md` §8.3).

## Deployment

GitHub Pages ya configurado (`.github/workflows/deploy.yml`, `public/CNAME` → siscodex.com).
Vercel/Netlify/AWS S3+CloudFront documentados paso a paso en `docs/ARCHITECTURE.md` §7 —
`netlify.toml` ya está en la raíz para Netlify.

## Convenciones de commits / trabajo con el usuario

- El usuario (Fherney) suele pedir cambios visuales mostrando una captura de pantalla como
  referencia — cuando pase, comparar contra el estado real del sitio, no asumir; usar el dev
  server o `curl` al HTML compilado para verificar antes de decir que algo está listo.
- No commitear a git salvo que se pida explícitamente.
- Verificar siempre con `npm run build` (incluye `astro check`) después de tocar componentes o
  `global.css` — este proyecto ya tuvo bugs reales de tipos con la librería `motion` (overloads de
  `animate` con "easing" en vez de "ease") y con IDs `Tag`/props de `Button.astro`.
