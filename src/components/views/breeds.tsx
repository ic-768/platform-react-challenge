import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Loader2, PawPrint } from "lucide-react";

import { useBreedFilter } from "@/hooks/useBreedFilter";

import BreedModal from "../breed-modal";
import Badge from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ErrorBanner from "../ui/error-banner";
import { Input } from "../ui/input";

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
        <Card className="max-w-3xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2">
              <PawPrint className="size-6" />
              <CardTitle className="text-3xl">Cat Breeds</CardTitle>
            </div>
            <CardDescription>Cat breeds from around the world!</CardDescription>
            <Input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="e.g. Cyprus"
            />
          </CardHeader>
          <CardContent>
            <motion.ul layout className="flex flex-col gap-3">
              <AnimatePresence initial={false}>
                {filteredBreeds.map((breed) => (
                  <motion.li
                    layoutId={breed.id}
                    key={breed.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/breeds/${breed.id}`}
                      className="block rounded-lg border p-4 transition-colors hover:bg-neutral-100/80"
                    >
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="font-medium">{breed.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {breed.description}
                        </p>
                        <Badge>{breed.origin}</Badge>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </CardContent>
        </Card>
      </div>
      <AnimatePresence>
        {breedId && <BreedModal breedId={breedId} />}
      </AnimatePresence>
    </>
  );
}
