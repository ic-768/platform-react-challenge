import { useParams } from "react-router-dom";
import { Loader2, PawPrint } from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorBanner from "@/components/ui/error-banner";
import { useBreedFilter } from "@/hooks/useBreedFilter";
import { fadeIn } from "@/lib/animations";

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
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <CardTitle className="flex items-center gap-2 text-3xl">
            <PawPrint className="size-6" />
            Cat Breeds
          </CardTitle>
          <CardDescription>Cat breeds from around the world!</CardDescription>
        </div>
        <Card className="max-w-3xl min-w-2/3 xl:min-w-1/3">
          <CardHeader className="text-center">
            <BreedFilter filter={filter} setFilter={setFilter} />
          </CardHeader>
          <CardContent>{listContent}</CardContent>
        </Card>
      </motion.div>
      <AnimatePresence>
        {breedId && <BreedModal breedId={breedId} />}
      </AnimatePresence>
    </>
  );
}
