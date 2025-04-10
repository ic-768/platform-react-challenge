import { ReactNode } from "react";
import { motion } from "motion/react";

import { fadeIn } from "@/lib/animations";

const BackDrop = ({
  children,
  onMouseDown,
}: {
  children: ReactNode;
  onMouseDown?: () => void;
}) => {
  return (
    <motion.div
      className="fixed z-500 flex h-screen w-screen items-center justify-center backdrop-blur-xs backdrop-brightness-50 dark:backdrop-brightness-75"
      variants={fadeIn}
      animate="visible"
      exit="exit"
      onMouseDown={onMouseDown}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
