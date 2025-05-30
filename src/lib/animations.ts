export const dropInVariant = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      stiffness: 2000,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export const favoriteVariants = {
  favorited: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      stiffness: 2000,
    },
  },
  exit: {
    opacity: 0,
  },
};
