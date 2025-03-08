import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/layout";
import BreedsView from "./components/views/breeds";
import FavoritesView from "./components/views/favorites";
import ImagesView from "./components/views/images";
import { FavoritesProvider } from "./context/favorites/favorites";

function App() {
  const queryClient = new QueryClient();

  // Router configuration
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
        { path: "/favorites/:imageId?", element: <FavoritesView /> },
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
