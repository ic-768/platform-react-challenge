import { use } from "react";

import { FavoritesContextType } from "./favorites";
import { FavoritesContext } from "./provider";

export const useFavorites = (): FavoritesContextType => {
  const context = use(FavoritesContext);

  return context;
};
