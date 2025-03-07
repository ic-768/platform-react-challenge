import { Breed } from "@/types/Breed";

import BasicInfo from "./basic-info";
import Details from "./details";

const HasBreedContent = ({
  breed,
  imageUrl,
}: {
  breed: Breed;
  imageUrl: string;
}) => (
  <div className="w-full max-w-3xl overflow-y-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col items-center justify-start">
        <div className="h-64 overflow-hidden rounded-lg md:h-96">
          <img src={imageUrl} alt={breed.name} />
        </div>
        <BasicInfo breed={breed} />
      </div>
      <Details breed={breed} />
    </div>
  </div>
);

export default HasBreedContent;
