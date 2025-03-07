import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { getImage } from "@/api/get-image";
import FavoriteButton from "@/components/ui/favorite-button";
import Modal from "@/components/ui/Modal";
import { useFavorites } from "@/context/favorites/use-favorites";

import HasBreedContent from "./has-breed-content";
import NoBreedContent from "./no-breed-content";

interface BreedModalProps {
  imageId: string;
}

export default function BreedModal({ imageId }: BreedModalProps) {
  const { data: imageData, isFetching } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId),
    staleTime: Infinity,
  });

  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const onClose = () => {
    navigate("/images");
  };

  if (isFetching || !imageData) {
    return (
      <Modal onClose={onClose} title="Loading...">
        <Loader2 />
      </Modal>
    );
  }

  const hasBreed = imageData.breeds && imageData.breeds.length > 0;
  const isFavorited = isFavorite(imageData.id);

  function handleFavoriteClick() {
    if (!imageData) return;

    if (isFavorited) {
      removeFromFavorites(imageData.id);
    } else {
      addToFavorites(imageData.id);
    }
  }
  const content = hasBreed ? (
    <HasBreedContent imageUrl={imageData.url} breed={imageData.breeds![0]} />
  ) : (
    <NoBreedContent imageUrl={imageData.url} />
  );

  return (
    <Modal onClose={onClose} title={imageData.id}>
      {content}
      <FavoriteButton onClick={handleFavoriteClick} isFavorited={isFavorited} />
    </Modal>
  );
}
