import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getImage } from "@/api/get-image";
import Modal from "@/components/ui/Modal";

export default function ImageModal({ imageId }: { imageId: string }) {
  console.log(imageId);
  const { data } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getImage(imageId!),
    staleTime: Infinity,
  });

  console.log(data);

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/images");
  };

  return (
    <Modal onClose={onClose} title={data?.breeds?.[0].name}>
      <div>lskadfjaslkf jsldkfjas lfkjfsdlkfjdsal kfalsk</div>
    </Modal>
  );
}
