import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

export default function Gallery({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}
