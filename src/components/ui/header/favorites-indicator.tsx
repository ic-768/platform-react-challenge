import { Heart } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useFavorites } from "@/context/favorites/use-favorites";

import NumberBubble from "../number-bubble";

interface FavoritesIndicatorProps {
  className?: string;
}

export default function FavoritesIndicator({
  className,
}: FavoritesIndicatorProps) {
  const { favorites } = useFavorites();

  const numToShow = favorites?.length || 0;

  if (favorites === null) return;

  const classes = twMerge(
    "relative flex size-full items-center justify-center",
    className,
  );

  return (
    <div className={classes}>
      <NumberBubble number={numToShow} />
      <Heart size={24} />
    </div>
  );
}
