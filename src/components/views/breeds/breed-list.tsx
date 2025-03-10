import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Badge from "@/components/ui/badge";
import { Breed } from "@/types/Breed";

interface BreedListProps {
  breeds: Breed[];
  filter: string;
}
export default function BreedList({ breeds, filter }: BreedListProps) {
  const getHighlightedText = (text: string) => {
    if (!filter) return text;

    // Add a literal backslash before each special character (to avoid issues, e.g. $& is the  matched char)
    const escapedFilter = filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedFilter})`, "gi");
    return text.split(regex).map((part, index) => {
      return part.toLowerCase() === filter.toLowerCase() ? (
        <span className="relative" key={index}>
          <motion.span
            layout
            className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-300"
          />
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <motion.ul className="flex flex-col gap-3">
      <AnimatePresence mode="sync" initial={false}>
        {breeds.map((breed) => (
          <motion.li
            layout
            key={breed.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link
              to={`/breeds/${breed.id}`}
              className="block rounded-lg border p-4 transition-colors hover:bg-neutral-100/80"
            >
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-medium">
                  {getHighlightedText(breed.name)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {breed.description}
                </p>
                <Badge>{breed.origin}</Badge>
              </div>
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
