import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useFavorites } from "@/context/favorites/use-favorites";

import ImageModal from "../image-modal";
import Gallery from "../ui/gallery/gallery";
import GalleryItem from "../ui/gallery/gallery-item";

export default function FavoritesView() {
  const { favorites } = useFavorites();
  const { imageId } = useParams();
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/favorites");
  };

  return (
    <>
      <title>Favorites</title>
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
    </>
  );
}
