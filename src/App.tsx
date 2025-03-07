import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/layout";
import BreedsView from "./components/views/breeds";
import FavoritesView from "./components/views/favorites";
import ImagesView from "./components/views/images";
import ImageModal from "./components/views/images/image-modal";

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
          path: "/",
          element: <ImagesView />,
          children: [
            {
              path: "/image/:imageId",
              element: <ImageModal />,
            },
          ],
        },
        { path: "/breeds", element: <BreedsView /> },
        { path: "/favorites", element: <FavoritesView /> },
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
