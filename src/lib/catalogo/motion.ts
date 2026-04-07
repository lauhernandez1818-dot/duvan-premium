/**
 * Constantes de animación: menos es más, una curva premium y duraciones cortas.
 */

export const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
export const tFast = 0.22;
export const tNormal = 0.28;
export const tStagger = 0.04;

export const pageEnter = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.28, ease: easeOut },
};

export const itemStagger = (i: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: tStagger * i, duration: tNormal, ease: easeOut },
});

export const lightboxOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: tFast, ease: easeOut },
};

export const lightboxCard = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.26, ease: easeOut },
};
