import { Breed } from "@/types/Breed";

export default function BasicInfo({ breed }: { breed: Breed }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h2 className="font-bold">{breed.name}</h2>
      <div className="flex flex-wrap justify-center gap-2 text-sm">
        <span className="rounded-full bg-gray-100 px-3 py-1">
          Origin: {breed.origin}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1">
          Life Span: {breed.life_span} yrs
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1">
          Weight: {breed.weight.metric}kg
        </span>
      </div>
    </div>
  );
}
