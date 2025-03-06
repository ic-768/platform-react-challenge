import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { getImages } from "@/api/get-images";

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
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="flex flex-col gap-8">
      <RefreshButton refetch={refetch} isFetching={isFetching} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/image/${image.id}`}>
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={image.url}
                  alt={`Cat image ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
