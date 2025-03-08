import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

import { getImages } from "@/api/get-images";
import ImageModal from "@/components/image-modal";

import Error from "./error";
import Loading from "./loading";
import RefreshButton from "./refresh-button";

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
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const onClose = () => {
    navigate("/images");
  };

  return (
    <div className="flex flex-col gap-8">
      <RefreshButton refetch={refetch} isFetching={isFetching} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/images/${image.id}`}>
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
      </div>
      <AnimatePresence>
        {imageId && <ImageModal onClose={onClose} imageId={imageId} />}
      </AnimatePresence>
    </div>
  );
}
