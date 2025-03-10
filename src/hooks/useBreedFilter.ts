import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getBreeds } from "@/api/get-breeds";

export const useBreedFilter = () => {
  const [filter, setFilter] = useState("");

  const {
    data: breeds = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["breeds"],
    queryFn: getBreeds,
    staleTime: Infinity,
  });

  const filteredBreeds = breeds.filter((b) =>
    b.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return { isFetching, isError, filter, setFilter, filteredBreeds };
};
