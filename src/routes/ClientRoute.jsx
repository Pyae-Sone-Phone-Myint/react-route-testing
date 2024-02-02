import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import About from "../pages/client/About";
import Home from "../pages/client/Home";

export const ClientRoute = {
  element: <Layout />,
  children: [
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
};
