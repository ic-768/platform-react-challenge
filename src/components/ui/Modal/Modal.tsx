import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { twJoin } from "tailwind-merge";

import { dropInVariant } from "@/lib/animations";

import BackDrop from "./Backdrop";
interface ModalProps {
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}
/**
 * Generic modal component
 */
const Modal = ({
  onClose,
  children,
  title = "",
  className = "",
}: ModalProps) => {
  const classes = twJoin(
    "relative flex min-h-[80%] max-h-[90%] min-w-[18rem] flex-col overflow-y-auto rounded-xl bg-white pt-0 text-black shadow-xl",
    className,
  );

  return createPortal(
    <BackDrop onMouseDown={onClose}>
      <motion.div
        className={classes}
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-40 flex w-full bg-white pt-6 backdrop-blur-xs dark:bg-zinc-950">
          <h5 className="px-6 font-semibold capitalize"> {title} </h5>
          <button onClick={onClose}>
            <X className="size-5" />
          </button>
        </div>
        <div className="flex grow flex-col content-center items-center p-6">
          {children}
        </div>
      </motion.div>
    </BackDrop>,
    document.body,
  );
};

export default Modal;
