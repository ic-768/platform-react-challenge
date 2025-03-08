import { Heart } from "lucide-react";

import { useFavorites } from "@/context/favorites/use-favorites";

import NumberBubble from "../number-bubble";

export default function FavoritesIndicator() {
  const { favorites } = useFavorites();

  const numToShow = favorites?.length || 0;

  if (favorites === null) return;

  return (
    <div className="relative flex size-auto size-full items-center justify-center">
      <NumberBubble number={numToShow} />
      <Heart size={24} />
    </div>
  );
}
