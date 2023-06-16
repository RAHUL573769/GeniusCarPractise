import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Pages/layouts/Main";
import Login from "../Pages/Login/Login";
import { SignInMethod } from "firebase/auth";
import SignUp from "../Pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/login", element: <Login> </Login> },
      { path: "/signup", element: <SignUp></SignUp> }
    ]
  }
]);
export default router;
