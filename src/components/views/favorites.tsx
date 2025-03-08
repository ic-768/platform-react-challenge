import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useFavorites } from "@/context/favorites/use-favorites";

import ImageModal from "../image-modal";

export default function FavoritesView() {
  const { favorites } = useFavorites();

  const { imageId } = useParams();

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/favorites");
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <title>Favorites</title>
      {favorites.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group"
        >
          <Link to={`/favorites/${image.id}`}>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md transition-shadow duration-500 hover:shadow-xl">
              <img
                src={image.url}
                alt={`Cat image ${image.id}`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </Link>
        </motion.div>
      ))}
      <AnimatePresence>
        {imageId && <ImageModal onClose={onClose} imageId={imageId} />}
      </AnimatePresence>
    </div>
  );
}
