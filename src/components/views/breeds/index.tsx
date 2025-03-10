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

  const listContent = filteredBreeds.length ? (
    <BreedList filter={filter} breeds={filteredBreeds} />
  ) : (
    <p className="text-muted-foreground text-center">No breeds found</p>
  );

  return (
    <>
      <title>Breeds</title>
      <div className="flex flex-col items-center">
        <Card className="max-w-3xl min-w-2/3 xl:min-w-1/3">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2">
              <PawPrint className="size-6" />
              <CardTitle className="text-3xl">Cat Breeds</CardTitle>
            </div>
            <CardDescription>Cat breeds from around the world!</CardDescription>
            <BreedFilter filter={filter} setFilter={setFilter} />
          </CardHeader>
          <CardContent>{listContent}</CardContent>
        </Card>
      </div>
      <AnimatePresence>
        {breedId && <BreedModal breedId={breedId} />}
      </AnimatePresence>
    </>
  );
}
