import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts, { loader as getPosts } from "./pages/Posts";
import PostIndividual, {
  loader as getEachPost,
} from "./features/posts/PostIndividual";
import User from "./pages/User";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: getPosts,
        },
        {
          path: "/posts/:id",
          element: <PostIndividual />,
          loader: getEachPost,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
