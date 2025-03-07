import { createContext } from "react";

import { FavoritesContextType } from "./favorites";

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
  fetchFavorites: () => Promise.resolve([]),
});
