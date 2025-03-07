import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getImage } from "@/api/get-image";

export default function ImageModal() {
  const { imageId } = useParams();

  const { data } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId!),
    staleTime: Infinity,
  });

  console.log(data);

  return <div>Modal goes here</div>;
}
