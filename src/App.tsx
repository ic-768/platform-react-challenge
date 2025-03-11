import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/layout";
import { FavoritesProvider } from "./context/favorites/favorites";

const BreedsView = lazy(() => import("./components/views/breeds"));
const FavoritesView = lazy(() => import("./components/views/favorites"));
const ImagesView = lazy(() => import("./components/views/images"));
const PettingTrainer = lazy(() => import("./components/views/petting-trainer"));

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>Error element goes here</div>,
      children: [
        {
          path: "/images/:imageId?",
          element: <ImagesView />,
        },
        {
          path: "/breeds/:breedId?",
          element: <BreedsView />,
        },
        {
          path: "/favorites/:imageId?",
          element: <FavoritesView />,
        },
        {
          path: "petting-trainer",
          element: <PettingTrainer />,
        },
        {
          path: "",
          element: <Navigate to="/images" />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
