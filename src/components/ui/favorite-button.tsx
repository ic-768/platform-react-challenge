import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  onClick: () => void;
  isFavorited: boolean;
}
export default function FavoriteButton({
  onClick,
  isFavorited,
}: FavoriteButtonProps) {
  const iconProps = isFavorited ? { fill: "red", stroke: "red" } : undefined;

  return (
    <button
      className="sticky bottom-16 flex size-14 cursor-pointer items-center justify-center self-end rounded-full bg-red-100 outline outline-red-500/60 transition-colors hover:bg-red-200"
      onClick={onClick}
    >
      <Heart size={32} {...iconProps} />
    </button>
  );
}
