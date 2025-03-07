import { useQuery } from "@tanstack/react-query";

import { useFavorites } from "@/context/favorites/use-favorites";

export default function FavoritesView() {
  const { fetchFavorites } = useFavorites();

  const { data } = useQuery({
    queryKey: ["favorites"],
    queryFn: fetchFavorites,
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return <title>Favorites</title>;
}
