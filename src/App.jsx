import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as menuLoader } from "./menu/Menu";
import Home from "./ui/Home";
import Menu from "./menu/MenuItem";
import Cart from "./cart/Cart";
import CreateOrder from "./orders/CreateOrder";
import Order from "./orders/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
