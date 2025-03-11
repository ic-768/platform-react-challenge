import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cat, Heart } from "lucide-react";

import { fadeIn } from "@/lib/animations";

export default function NoFavorites() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex max-w-md flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-10"
    >
      <div className="rounded-full bg-gray-100 p-4">
        <Cat className="size-12 text-gray-400" />
      </div>
      <h3 className="text-center font-semibold">No favorites yet</h3>
      <p className="text-center text-gray-500">
        When you find cats you love, click the{" "}
        <Heart className="inline size-4 text-pink-500" /> to add them to your
        favorites
      </p>
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Discover Cats
      </Link>
    </motion.div>
  );
}
