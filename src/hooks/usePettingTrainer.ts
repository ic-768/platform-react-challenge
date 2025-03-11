import { useRef, useState } from "react";

type Message = {
  text: string;
  x: number;
  y: number;
  id: string;
};

const messages = ["Meow!", "Scritches!", "😻", "Purr!"];

export const usePettingTrainer = () => {
  const [petMessages, setPetMessages] = useState<Message[]>([]);
  const [petCount, setPetCount] = useState(0);
  const [isPetting, setIsPetting] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const difficulty = 40;

  const handleStopPetting = () => {
    setIsPetting(false);
  };

  const handlePetting = (x: number, y: number) => {
    if (!isPetting || !containerRef.current) return;

    const dx = Math.abs(x - lastPosition.x);
    const dy = Math.abs(y - lastPosition.y);
    const distance = dx + dy;

    // Only count as petting if there's significant movement
    if (distance > difficulty) {
      setPetCount((prev) => prev + 1);

      const text = messages[Math.floor(Math.random() * messages.length)];
      const id = `${x}-${y}-${Date.now()}`;

      const newMessage = {
        text,
        x,
        y,
        id,
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
          prev.filter((msg) => msg.id !== newMessage.id),
        );
      }, 2000);
    }

    setLastPosition({ x, y });
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    setIsPetting(true);
    const rect = containerRef.current.getBoundingClientRect();
    setLastPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    setIsPetting(true);
    const rect = containerRef.current.getBoundingClientRect();
    setLastPosition({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    handlePetting(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    handlePetting(x, y);
  };

  return {
    petMessages,
    petCount,
    handleStopPetting,
    handleMouseDown,
    handleTouchStart,
    handleMouseMove,
    handleTouchMove,
    containerRef,
  };
};
