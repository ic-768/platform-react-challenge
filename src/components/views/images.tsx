import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

import { getImages } from "@/api/get-images";
import ImageModal from "@/components/image-modal";
import RefreshButton from "@/components/ui/refresh-button";

import ErrorBanner from "../ui/error-banner";
import Gallery from "../ui/gallery/gallery";
import GalleryItem from "../ui/gallery/gallery-item";

export default function ImagesView() {
  const {
    data = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
    staleTime: Infinity,
  });

  const { imageId } = useParams();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="text-primary size-12 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorBanner>Failed to load cat images. Please try again.</ErrorBanner>
    );
  }

  const onClose = () => {
    navigate("/images");
  };

  return (
    <div className="flex flex-col gap-8">
      <RefreshButton
        content="New cats"
        refetch={refetch}
        isFetching={isFetching}
      />
      <Gallery>
        {data.map((image, index) => (
          <GalleryItem
            link={`/images/${image.id}`}
            key={image.id}
            image={image}
            index={index}
          />
        ))}
      </Gallery>
      <AnimatePresence>
        {imageId && <ImageModal onClose={onClose} imageId={imageId} />}
      </AnimatePresence>
    </div>
  );
}
