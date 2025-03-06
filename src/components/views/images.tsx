import { useQuery } from "@tanstack/react-query";

import { getImages } from "../../api/get-images";

export default function ImagesView() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  return (
    <>
      <title>Images</title>
      <div className="grid autofill">
        {data.map((image) => (
          <div className="rounded-lg overflow-hidden" key={image.id}>
            <img
              src={image.url}
              alt={`Cat ${image.id}`}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
