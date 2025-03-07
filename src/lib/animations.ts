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
