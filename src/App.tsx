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
          path: "/breeds",
          element: <BreedsView />,
        },
        { path: "/favorites", element: <FavoritesView /> },
        {
          path: "",
          element: <Navigate to="/images" />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
