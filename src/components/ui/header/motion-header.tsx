import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MotionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const visibilityThreshold = 80;
  const initialHeight = 80;
  const [headerHeight, setHeaderHeight] = useState(initialHeight);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight =
        window.scrollY < visibilityThreshold ? initialHeight : 50;
      setHeaderHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibilityThreshold, initialHeight]);

  return (
    <motion.header
      style={{
        height: headerHeight,
      }}
      className="fixed top-0 right-0 left-0 z-50 w-full overflow-hidden border-b border-zinc-400 bg-gradient-to-b from-blue-100/60 to-blue-200/80 px-8 shadow-lg backdrop-blur-sm transition-all duration-500"
    >
      {children}
    </motion.header>
  );
}
