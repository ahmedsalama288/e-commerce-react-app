import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootPage from "./pages/RootPage";
import Products, { getAllProductsLoader } from "./pages/Products";
import ProductDetail, { productDetailLoader } from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootPage />,
    loader: getAllProductsLoader,
    children: [
      {
        index: true,

        element: <Home />,
      },

      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <ProductDetail />,
            loader: productDetailLoader,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
