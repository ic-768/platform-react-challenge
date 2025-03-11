import { AnimatePresence, motion } from "framer-motion";

import { usePettingTrainer } from "@/hooks/usePettingTrainer";
import { fadeIn } from "@/lib/animations";

export default function PettingTrainer() {
  const {
    petMessages,
    petCount,
    handleStopPetting,
    handleMouseDown,
    handleTouchStart,
    handleMouseMove,
    handleTouchMove,
    containerRef,
  } = usePettingTrainer();

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center gap-4"
    >
      <div className="text-center">
        <h2 className="text-xl font-bold">Pet the Cat</h2>
        <p className="text-gray-600">
          Click/touch and drag to pet the cat. Hone your cat-petting skills! 🥷
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-64 w-full max-w-md cursor-grab touch-none overflow-hidden rounded-lg md:h-96"
        onMouseDown={handleMouseDown}
        onMouseUp={handleStopPetting}
        onMouseLeave={handleStopPetting}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleStopPetting}
        onTouchCancel={handleStopPetting}
        onTouchMove={handleTouchMove}
      >
        <img
          draggable={false}
          className="size-full object-cover"
          src="https://cdn2.thecatapi.com/images/a37.jpg"
          alt="Cat"
        />

        <AnimatePresence>
          {petMessages.map(({ id, x, y, text }) => (
            <motion.span
              key={id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 1 }}
              draggable={false}
              className="pointer-events-none absolute rounded-lg bg-white/60 p-2 text-sm text-red-800 md:text-base"
              style={{
                left: x,
                top: y,
              }}
            >
              {text}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Pet count: {petCount}</p>
      </div>
    </motion.div>
  );
}
