import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Heart, Loader2 } from "lucide-react";

import { getImage } from "@/api/get-image";
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
    queryFn: () => getImage(imageId!),
    staleTime: Infinity,
  });

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/images");
  };

  let content = <Loader2 />;

  if (!isFetching && imageData) {
    if (imageData.breeds?.[0]) {
      content = (
        <HasBreedContent imageUrl={imageData.url} breed={imageData.breeds[0]} />
      );
    } else {
      content = <NoBreedContent imageUrl={imageData.url} />;
    }
  }

  const { addToFavorites, isFavorite } = useFavorites();
  const isFavorited = imageData?.id !== undefined && isFavorite(imageData.id);
  const iconProps = isFavorited ? { fill: "red", stroke: "red" } : undefined;

  return (
    <Modal onClose={onClose} title={imageData?.id}>
      {content}
      <button onClick={() => imageData && addToFavorites(imageData.id)}>
        <Heart size={24} {...iconProps} />
      </button>
    </Modal>
  );
}
