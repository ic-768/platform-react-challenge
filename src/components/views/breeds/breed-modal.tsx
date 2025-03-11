import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { getBreedImages } from "@/api/get-breed-images";
import Gallery from "@/components/ui/gallery/gallery";
import GalleryItem from "@/components/ui/gallery/gallery-item";
import Modal from "@/components/ui/Modal";

interface BreedModalProps {
  breedId: string;
}
export default function BreedModal({ breedId }: BreedModalProps) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/breeds");
  };

  const {
    data: breedImages = [],
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["breed", "images", breedId],
    queryFn: () => getBreedImages(breedId),
    staleTime: Infinity,
  });

  if (isError) {
    return (
      <Modal onClose={onClose} title="Error">
        <p>Something went wrong ¯\_(ツ)_/¯</p>
      </Modal>
    );
  }

  if (isFetching) {
    return (
      <Modal onClose={onClose} title="Loading...">
        <Loader2 />
      </Modal>
    );
  }

  return (
    <Modal title={breedId} onClose={onClose}>
      <Gallery>
        {breedImages.map((image, index) => (
          <GalleryItem
            link={`/images/${image.id}`}
            key={image.id}
            index={index}
            image={image}
          />
        ))}
      </Gallery>
    </Modal>
  );
}
