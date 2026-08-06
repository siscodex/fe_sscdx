import { animate, inView } from "motion";

/**
 * Microinteracción global de scroll-reveal para cualquier elemento marcado
 * con `data-reveal`. Se usa la librería vanilla "motion" (sucesora de
 * Motion One / Framer Motion sin dependencia de React) para mantener el
 * bundle de JS mínimo — ver justificación en docs/ARCHITECTURE.md.
 */
export function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

  targets.forEach((target, index) => {
    target.style.opacity = "0";

    inView(
      target,
      () => {
        animate(
          target,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.5, delay: Math.min(index * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] },
        );
      },
      { margin: "-10% 0px -10% 0px" },
    );
  });
}
