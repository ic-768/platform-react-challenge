import { ExternalLink } from "lucide-react";

import Badge from "@/components/ui/badge";
import RatingStars from "@/components/ui/rating-stars";
import { extractBreedDetails } from "@/lib/utils";
import { Breed } from "@/types/Breed";

export default function Details({ breed }: { breed: Breed }) {
  const { characteristics, externalLinks } = extractBreedDetails(breed);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-semibold">About</h3>
        <p className="text-gray-700">{breed.description}</p>
      </div>

      <div>
        <h3 className="font-semibold">Temperament</h3>
        <p className="text-gray-700">{breed.temperament}</p>
      </div>

      <div>
        <h3 className="font-semibold">Characteristics</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {characteristics.map((char) => (
            <div key={char.name} className="flex items-center justify-between">
              <span className="text-sm">{char.name}</span>
              <RatingStars rating={char.value} />
            </div>
          ))}
        </div>
      </div>

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

      <div className="flex flex-wrap gap-2">
        {breed.indoor >= 1 && <Badge>Indoor</Badge>}
        {breed.lap >= 1 && <Badge>Lap Cat</Badge>}
        {breed.hypoallergenic >= 1 && <Badge> Hypoallergenic </Badge>}
        {breed.rare >= 1 && <Badge>Rare</Badge>}
        {breed.natural >= 1 && <Badge>Natural Breed</Badge>}
        {breed.hairless >= 1 && <Badge>Hairless</Badge>}
        {breed.short_legs >= 1 && <Badge>Short Legs</Badge>}
      </div>
    </div>
  );
}
