import { Link } from "react-router-dom";

import Badge from "@/components/ui/badge";
import { Breed } from "@/types/Breed";

export default function BasicInfo({ breed }: { breed: Breed }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <Link to={`/breeds/${breed.id}`}>
        <h2 className="font-bold">{breed.name}</h2>
      </Link>
      <div className="flex flex-wrap justify-center gap-2">
        <Badge>Origin: {breed.origin}</Badge>
        <Badge>Life Span: {breed.life_span} yrs</Badge>
        <Badge>Weight: {breed.weight.metric}kg</Badge>
      </div>
    </div>
  );
}
