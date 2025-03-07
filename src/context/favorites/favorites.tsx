import { ReactNode, useEffect, useState } from "react";

import { FavoritesContext } from "./provider";

export interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (string: string) => void;
  removeFromFavorites: (string: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(
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

  const addToFavorites = (string: string) => {
    if (!favorites || favorites.find((s) => s === string)) {
      return; // Item already in favorites
    }
    setFavorites((prevFavorites) =>
      prevFavorites ? [...prevFavorites, string] : [string],
    );
  };

  const removeFromFavorites = (string: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites ? prevFavorites.filter((s) => s !== string) : [],
    );
  };

  const isFavorite = (id: string) => {
    return favorites?.some((i) => i === id) || false;
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
