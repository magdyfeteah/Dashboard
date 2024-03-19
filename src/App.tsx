import "./Styles/global.scss";
import Home from "./Pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Products from "./Pages/Products/Products";
import Layout from "./Pages/Layout/Layout";
import User from "./Pages/User/User";
import Product from "./Pages/Product/Product";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "users", element: <Users />, children:[
          {path :"id"  ,element:<User />}
        ]},
        { path: "products", element: <Products /> },
        { path: "/users/:id", element: <User /> },
        { path: "/products/:id", element: <Product /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
