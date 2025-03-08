import { ReactNode, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { GetImageResult } from "@/api/get-image";

import { FavoritesContext } from "./provider";

export interface FavoritesContextType {
  favorites: GetImageResult[];
  addToFavorites: (image: GetImageResult) => void;
  removeFromFavorites: (image: GetImageResult) => void;
  isFavorite: (image: GetImageResult) => boolean;
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const [favorites, setFavorites] = useState<GetImageResult[]>(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites") as string)
      : [],
  );

  // Load favorites from localStorage after mounting
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    console.log(savedFavorites);
    setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
  }, []);

  // Update localStorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (image: GetImageResult) => {
    if (!favorites || favorites.find((s) => s.id === image.id)) {
      return; // Item already in favorites
    }
    queryClient.invalidateQueries({ queryKey: ["favorites"] });
    setFavorites((prevFavorites) =>
      prevFavorites ? [...prevFavorites, image] : [image],
    );
  };

  const removeFromFavorites = (image: GetImageResult) => {
    queryClient.invalidateQueries({ queryKey: ["favorites"] });
    setFavorites((prevFavorites) =>
      prevFavorites ? prevFavorites.filter((s) => s.id !== image.id) : [],
    );
  };

  const isFavorite = (image: GetImageResult) => {
    return favorites?.some((i) => i.id === image.id) || false;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
