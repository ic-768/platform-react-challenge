import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface BreedFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}
export default function BreedFilter({ filter, setFilter }: BreedFilterProps) {
  return (
    <div className="relative">
      <Search className="text-muted-foreground absolute inset-y-0 left-3 my-auto size-4" />
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search breeds e.g. Cyprus"
        className="pl-10"
      />
    </div>
  );
}
