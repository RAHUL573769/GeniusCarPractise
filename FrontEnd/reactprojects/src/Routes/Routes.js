import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Pages/layouts/Main";
import Login from "../Pages/Login/Login";
import { SignInMethod } from "firebase/auth";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        )
      },
      { path: "/login", element: <Login> </Login> },
      { path: "/signup", element: <SignUp></SignUp> }
    ]
  }
]);
export default router;
