import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { AnimatePresence } from "motion/react";

import { getImages } from "@/api/get-images";
import RefreshButton from "@/components/ui/refresh-button";

import ImageModal from "../Modal/image-modal";
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
      <div className="text-center">
        <h2 className="text-xl font-bold">Random Images</h2>
        <p className="text-gray-600">
          Explore the magical world of internet feline images!
        </p>
      </div>
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
