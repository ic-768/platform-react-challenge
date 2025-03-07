import { ExternalLink } from "lucide-react";

import RatingStars from "@/components/ui/rating-stars";
import { extractBreedDetails } from "@/lib/utils";
import { Breed } from "@/types/Breed";

const HasBreedContent = ({
  breed,
  imageUrl,
}: {
  breed: Breed;
  imageUrl: string;
}) => {
  const { characteristics, externalLinks } = extractBreedDetails(breed);

  return (
    <div className="w-full max-w-3xl overflow-y-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Image */}
        <div className="flex flex-col items-center justify-start">
          <div className="h-64 overflow-hidden rounded-lg md:h-96">
            <img src={imageUrl} alt={breed.name} />
          </div>

          {/* Basic Info */}
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-bold">{breed.name}</h2>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="rounded-full bg-gray-100 px-3 py-1">
                Origin: {breed.origin}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1">
                Life Span: {breed.life_span}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1">
                Weight: {breed.weight.metric}kg
              </span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6">
          {/* Description */}
          <div>
            <h3 className="font-semibold">About</h3>
            <p className="text-gray-700">{breed.description}</p>
          </div>

          {/* Temperament */}
          <div>
            <h3 className="font-semibold">Temperament</h3>
            <p className="text-gray-700">{breed.temperament}</p>
          </div>

          {/* Characteristics */}
          <div>
            <h3 className="font-semibold">Characteristics</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {characteristics.map((char) => (
                <div
                  key={char.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{char.name}</span>
                  <RatingStars rating={char.value} />
                </div>
              ))}
            </div>
          </div>

          {/* External Links */}
          {externalLinks.length && (
            <div>
              <h3 className="font-semibold">Learn More</h3>
              <div className="flex flex-wrap gap-2">
                {externalLinks.map(
                  (link) =>
                    link.url && (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-1 text-sm transition-colors hover:bg-gray-200"
                      >
                        {link.name}
                        <ExternalLink size={14} />
                      </a>
                    ),
                )}
              </div>
            </div>
          )}

          {/* Special Traits */}
          <div className="flex flex-wrap gap-2">
            {breed.indoor >= 1 && (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
                Indoor
              </span>
            )}
            {breed.lap >= 1 && (
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800">
                Lap Cat
              </span>
            )}
            {breed.hypoallergenic >= 1 && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                Hypoallergenic
              </span>
            )}
            {breed.rare >= 1 && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
                Rare
              </span>
            )}
            {breed.natural >= 1 && (
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800">
                Natural Breed
              </span>
            )}
            {breed.hairless >= 1 && (
              <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-800">
                Hairless
              </span>
            )}
            {breed.short_legs >= 1 && (
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-800">
                Short Legs
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasBreedContent;
