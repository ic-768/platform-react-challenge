import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Loader2, PawPrint } from "lucide-react";

import { getBreeds } from "@/api/get-breeds";

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

export default function BreedsView() {
  const { breedId } = useParams();

  const {
    data: breeds,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["breeds"],
    queryFn: getBreeds,
    staleTime: Infinity,
  });

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
            <CardDescription>
              A collection of popular cat breeds from around the world!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.ul
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 20 }}
              className="flex flex-col gap-3"
            >
              {breeds?.map((breed, index) => (
                <li key={index}>
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
                </li>
              ))}
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
