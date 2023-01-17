export const topHederVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.1,
    },
  },
};
export const navVariants = {
  hidden: {
    opacity: 0,
    background: "rgba(16,24,43,0.8)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    background: "rgba(16,24,43,1)",
    transition: {
      type: "spring",
      stiffness: 20,
      delay: 0.3,
    },
  },
};

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      // when: "beforeChildren",
    },
  },
};
export const textVariants = {
  hidden: {
    opacity: 0,
    y: "-5rem",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// export const fadeIn = (
//   direction: any,
//   type: any,
//   delay: any,
//   duration: any
// ) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: "easeOut",
//     },
//   },
// });

// export const staggerContainer = (
//   staggerChildren?: any,
//   delayChildren?: any
// ) => ({
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// });
