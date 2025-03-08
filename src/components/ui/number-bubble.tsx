import { motion } from "framer-motion";

export default function NumberBubble({ number }: { number: number }) {
  return (
    <motion.span
      className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={number}
      >
        {number}
      </motion.span>
    </motion.span>
  );
}
