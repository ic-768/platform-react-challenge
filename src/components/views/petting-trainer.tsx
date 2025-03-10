import type React from "react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  text: string;
  x: number;
  y: number;
};

const messages = ["Meow!", "Very nice scritches!", "More please!", "😻"];

export default function PettingTrainer() {
  const [petMessages, setPetMessages] = useState<Message[]>([]);
  const [petCount, setPetCount] = useState(0);
  const [isPetting, setIsPetting] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsPetting(true);
  };

  const handleMouseUp = () => {
    setIsPetting(false);
  };

  // Handle mouse move while petting
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPetting || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = Math.abs(x - lastPosition.x);
    const dy = Math.abs(y - lastPosition.y);

    // dragged distance
    const distance = dx + dy;

    // Only count as petting if there's significant movement
    if (distance > 65) {
      setPetCount((prev) => prev + 1);

      const newMessage = {
        text: messages[Math.floor(Math.random() * messages.length)],
        x,
        y,
      };

      setPetMessages((prev) => {
        // Limit to 5 messages to prevent overcrowding
        const updatedMessages = [...prev, newMessage];
        if (updatedMessages.length > 5) {
          return updatedMessages.slice(updatedMessages.length - 5);
        }
        return updatedMessages;
      });

      // Remove message after animation
      setTimeout(() => {
        setPetMessages((prev) =>
          prev.filter((msg) => `${msg.x}-${msg.y}` !== `${x}-${y}`),
        );
      }, 2000);
    }

    setLastPosition({ x, y });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <title>Petting Trainer</title>
      <div className="text-center">
        <h2 className="font-bold">Pet the Cat</h2>
        <p className="text-gray-600">
          Click and drag to pet the cat. Hone your cat-petting skills! 🥷
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative size-96 cursor-grab overflow-hidden rounded-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          draggable={false}
          src="https://cdn2.thecatapi.com/images/a37.jpg"
          alt="Cat"
        />

        <AnimatePresence>
          {petMessages.map((message) => (
            <motion.span
              key={`${message.x}-${message.y}`}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 1 }}
              draggable={false}
              className="pointer-events-none absolute rounded-lg bg-white/60 p-2 text-red-800"
              style={{
                left: message.x,
                top: message.y,
              }}
            >
              {message.text}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Pet count: {petCount}</p>
      </div>
    </div>
  );
}
