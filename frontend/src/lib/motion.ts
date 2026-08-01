/**
 * Framer Motion Animation Presets for I. Lawrence Practice (ILP)
 */

export const EASE_ILP = [0.16, 1, 0.3, 1] as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: EASE_ILP } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: EASE_ILP } },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_ILP } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: EASE_ILP } },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_ILP } },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const cardHover = {
  rest: { y: 0, transition: { duration: 0.2, ease: EASE_ILP } },
  hover: { y: -4, transition: { duration: 0.2, ease: EASE_ILP } },
};

export const modalSlideIn = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: EASE_ILP } },
  exit: { opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.2, ease: EASE_ILP } },
};
