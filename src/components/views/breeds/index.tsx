import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Loader2, PawPrint } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorBanner from "@/components/ui/error-banner";
import { useBreedFilter } from "@/hooks/useBreedFilter";

import BreedFilter from "./breed-filter";
import BreedList from "./breed-list";
import BreedModal from "./breed-modal";

export default function BreedsView() {
  const { breedId } = useParams();
  const { isFetching, isError, filter, setFilter, filteredBreeds } =
    useBreedFilter();

  if (isFetching) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="text-primary size-12 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return <ErrorBanner>Failed to load breeds. Please try again.</ErrorBanner>;
  }

  return (
    <>
      <title>Breeds</title>
      <div className="flex flex-col items-center">
        <Card className="max-w-3xl min-w-2xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2">
              <PawPrint className="size-6" />
              <CardTitle className="text-3xl">Cat Breeds</CardTitle>
            </div>
            <CardDescription>Cat breeds from around the world!</CardDescription>
            <BreedFilter filter={filter} setFilter={setFilter} />
          </CardHeader>
          <CardContent>
            <BreedList filter={filter} breeds={filteredBreeds} />
          </CardContent>
        </Card>
      </div>
      <AnimatePresence>
        {breedId && <BreedModal breedId={breedId} />}
      </AnimatePresence>
    </>
  );
}
