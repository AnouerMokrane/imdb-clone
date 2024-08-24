import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
