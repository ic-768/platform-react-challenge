import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Image } from "@/types/Image";

interface GalleryItemProps {
  image: Image;
  index: number;
  link: string;
}

export default function GalleryItem({ image, index, link }: GalleryItemProps) {
  return (
    <motion.div
      key={image.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      layoutId={image.id}
      exit={{ opacity: 0 }}
      className="group"
    >
      <Link to={link}>
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
  );
}
