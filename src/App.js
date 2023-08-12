import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootPage from "./pages/RootPage";
import Products, { getAllProductsLoader } from "./pages/Products";
import ProductDetail, { productDetailLoader } from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login, { checkUserLoggedInLoader } from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

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
        loader: checkUserLoggedInLoader,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/Register",
        element: <Register />,
        loader: checkUserLoggedInLoader,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
