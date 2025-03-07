import { ReactNode } from "react";
import { motion } from "framer-motion";

const BackDrop = ({
  children,
  onMouseDown,
}: {
  children: ReactNode;
  onMouseDown?: () => void;
}) => {
  const fadeIn = {
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
  return (
    <motion.div
      className="fixed z-500 flex h-screen w-screen items-center justify-center backdrop-blur-xs backdrop-brightness-50 dark:backdrop-brightness-75"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseDown={onMouseDown}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
