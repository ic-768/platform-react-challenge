import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import ImageModal from "@/components/image-modal";
import Gallery from "@/components/ui/gallery/gallery";
import GalleryItem from "@/components/ui/gallery/gallery-item";
import { useFavorites } from "@/context/favorites/use-favorites";

import NoFavorites from "./no-favorites";

export default function FavoritesView() {
  const { favorites, hasFavorites } = useFavorites();
  const { imageId } = useParams();
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/favorites");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h2 className="text-xl font-bold">Your Favorites</h2>
        <p className="text-gray-600">All of your favorite cats in one place!</p>
      </div>
      <title>Favorites</title>
      {hasFavorites ? (
        <Gallery>
          {favorites.map((image, index) => (
            <GalleryItem
              link={`/favorites/${image.id}`}
              key={image.id}
              image={image}
              index={index}
            />
          ))}
          <AnimatePresence>
            {imageId && <ImageModal onClose={onClose} imageId={imageId} />}
          </AnimatePresence>
        </Gallery>
      ) : (
        <NoFavorites />
      )}
    </div>
  );
}
