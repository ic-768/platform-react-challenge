import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getImage } from "@/api/get-image";
import Modal from "@/components/ui/Modal";

import HasBreedContent from "./has-breed-content";
import NoBreedContent from "./no-breed-content";

interface BreedModalProps {
  imageId: string;
}

export default function BreedModal({ imageId }: BreedModalProps) {
  const { data: imageData } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId!),
    staleTime: Infinity,
  });

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/images");
  };

  if (!imageData) return;

  return (
    <Modal onClose={onClose} title={imageData?.id}>
      {imageData.breeds?.[0] ? (
        <HasBreedContent
          imageUrl={imageData.url}
          breed={imageData.breeds?.[0]}
        />
      ) : (
        <NoBreedContent imageUrl={imageData.url} />
      )}
    </Modal>
  );
}
