import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { getImage } from "@/api/get-image";
import FavoriteButton from "@/components/ui/favorite-button";
import { useFavorites } from "@/context/favorites/use-favorites";

import Modal from "..";
import HasBreedContent from "./has-breed-content";
import NoBreedContent from "./no-breed-content";

interface ImageModalProps {
  imageId: string;
  onClose: () => void;
}

export default function ImageModal({ imageId, onClose }: ImageModalProps) {
  const {
    data: imageData,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId),
    staleTime: Infinity,
  });

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  if (isError) {
    return (
      <Modal onClose={onClose} title="Error">
        <p>Something went wrong ¯\_(ツ)_/¯</p>
      </Modal>
    );
  }

  if (isFetching || !imageData) {
    return (
      <Modal onClose={onClose} title="Loading...">
        <Loader2 />
      </Modal>
    );
  }

  const hasBreed = imageData.breeds && imageData.breeds.length > 0;
  const isFavorited = isFavorite(imageData);

  function handleFavoriteClick() {
    if (!imageData) return;

    if (isFavorited) {
      removeFromFavorites(imageData);
    } else {
      addToFavorites(imageData);
    }
  }
  const content = hasBreed ? (
    <HasBreedContent imageUrl={imageData.url} breed={imageData.breeds![0]} />
  ) : (
    <NoBreedContent imageUrl={imageData.url} />
  );

  return (
    <Modal onClose={onClose} title={imageData.id}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
      <FavoriteButton onClick={handleFavoriteClick} isFavorited={isFavorited} />
    </Modal>
  );
}
