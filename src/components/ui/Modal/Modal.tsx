import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion } from "motion/react";
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
    "relative max-h-[80vh] max-w-4/5 flex flex-col overflow-y-auto rounded-xl bg-white pt-0 text-black shadow-xl min-h-96 min-w-3/5 items-center",
    className,
  );

  return createPortal(
    <BackDrop onMouseDown={onClose}>
      <motion.div
        layout
        className={classes}
        variants={dropInVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-40 flex w-full bg-white px-4 pt-6 backdrop-blur-xs dark:bg-zinc-950">
          <h5 className="px-6 font-semibold capitalize"> {title} </h5>
          <button
            className="ml-auto cursor-pointer duration-200 hover:scale-120"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="flex grow flex-col content-center items-center justify-center p-6">
          {children}
        </div>
      </motion.div>
    </BackDrop>,
    document.body,
  );
};

export default Modal;
